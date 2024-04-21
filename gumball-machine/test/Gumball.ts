import { expect } from "chai";
import { ethers } from "hardhat";

describe("Gumball contract", function() {
  it("Deployment should assign the total supply of tokens to the owner)", async function() {
    const [owner] = await ethers.getSigners();

    const gumballContract = await ethers.deployContract("Gumball");

    await gumballContract.getGumballs();
    expect(await gumballContract.getNumGumballs()).to.equal(49);

    await gumballContract.addFreshGumballs(10);
    expect(await gumballContract.getNumGumballs()).to.equal(59);
  });
});
