const hre = require("hardhat");

async function main() {
  const EthmsTemplates = await hre.ethers.getContractFactory("EthmsTemplates");
  
  const ethmsTemplatesTx = await ChibiClub.deploy();

  await chibi.deployed();

  console.log("ChibiClub deployed to:", chibi.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
