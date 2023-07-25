const hre = require("hardhat");

async function main() {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  // //TRANSFER FUNDS
  // const TransferFunds = await hre.ethers.getContractFactory("TransferFunds");
  // const transferFunds = await TransferFunds.deploy();

  // await transferFunds.deployed();

  //0x273859b5201A5f0F8390C144f6dc80E9Dc555319
  
  console.log(` deployed contract Address ${transactions.address}`);
  // console.log(` deployed contract Address ${transferFunds.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
