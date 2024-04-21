import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GumballModule = buildModule("GumballModule", (m) => {
  const gumball = m.contract("Gumball");

  return { gumball };
});

export default GumballModule;
