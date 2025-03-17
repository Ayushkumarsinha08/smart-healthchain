const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying smart contract...");

  // Get the contract factory
  const Medical = await ethers.getContractFactory("MedicalRecords");

  // Deploy the contract
  const medical = await Medical.deploy(); 

  // Wait for the deployment transaction to be confirmed
  await medical.waitForDeployment(); 

  console.log(`MedicalRecords deployed at address: ${await medical.getAddress()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
