const hre = require("hardhat");

async function main() {
  
  // Deploy SafeMath first


  const safeMath = await hre.ethers.deployContract("SafeMath");
  await safeMath.waitForDeployment();


  const ephKeys = await hre.ethers.deployContract("EphemeralKeys");
  await ephKeys.waitForDeployment();

  //deploying keys contract

  console.log(`SafeMath deployed at: ${safeMath.target}`);
  console.log(`ephKeyss deployed at: ${ephKeys.target}`);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
