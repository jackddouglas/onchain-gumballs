import { abi, address } from "@/config";
import { useReadContract, useWriteContract } from "wagmi";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useState } from "react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";

const formSchema = z.object({
  addgumball: z.coerce.number().gte(0, "Must add positive gumballs."),
});

export default function Gumball() {
  const { writeContract } = useWriteContract();
  const [newGumballs, setNewGumballs] = useState(0);

  async function getGumball() {
    writeContract({
      address,
      abi,
      functionName: 'getGumballs',
      args: []
    });
  }

  function viewGumballs() {
    const { data } = useReadContract({
      abi,
      address,
      functionName: 'getNumGumballs',
    });

    return data;
  }

  function addGumballs(gumball: number) {
    writeContract({
      address,
      abi,
      functionName: "addFreshGumballs",
      args: [BigInt(gumball)],
    });
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      addgumball: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setNewGumballs(values.addgumball);
    addGumballs(values.addgumball);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gumballs</CardTitle>
        <CardDescription>Total Gumballs: {viewGumballs()?.toString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="p-2" onClick={() => getGumball()}>Get a gumball</Button>
      </CardContent>
      <CardFooter>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField control={form.control} name="addgumball" render={({ field }) => (
              <FormItem>
                <FormLabel>Add Gumballs</FormLabel>
                <FormControl>
                  <Input placeholder="Number of gumballs to add" {...field} />
                </FormControl>
                <FormDescription>Add more gumballs</FormDescription>
              </FormItem>
            )}
            />
            <Button type="submit">Add Gumballs</Button>
          </form>
        </FormProvider>
      </CardFooter>
    </Card>
  );
}
