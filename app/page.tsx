"use client"

import { useAccount } from "wagmi";
import Gumball from "../components/gumball";
import Wallet from "../components/wallet";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <>
      <Wallet isConnected={isConnected} />
      {isConnected ? (
        <Gumball />
      ) : (
        <h1>Please connect your wallet first.</h1>
      )}
    </>
  );
}
