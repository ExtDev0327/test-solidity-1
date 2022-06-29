import { expect } from "chai";
import { ethers } from "hardhat";

describe("AContract Mint", function () {
  let aContract: any;
  beforeEach(async function () {
    const AContract = await ethers.getContractFactory("AContract");
    aContract = await AContract.deploy("TestNFTA", "TNA");
    await aContract.deployed();
  });

  it("Should user own a A's token", async function () {
    const [user] = await ethers.getSigners();
    await aContract.mint(user.address, 1, "", {
      value: ethers.utils.parseEther("0.01"),
    });
    expect(await aContract.ownerOf(1)).to.equal(user.address);
  });

  it("Should fail when ether is not enough", async function () {
    const [user] = await ethers.getSigners();
    await expect(
      aContract.mint(user.address, 1, "", {
        value: ethers.utils.parseEther("0.005"),
      })
    ).to.be.revertedWith("Not enough fund");
  });
});
