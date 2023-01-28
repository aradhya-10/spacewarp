require("hardhat-deploy")
require("hardhat-deploy-ethers")

const wallet = new ethers.Wallet(network.config.accounts[0], ethers.provider)

async function main() {
	console.log("Wallet Ethereum Address: ", wallet.address)
	// const chainId = network.config.chainId

	const PPV =  await ethers.getContractFactory('PPV', wallet);
	const ppv = await PPV.deploy();
	await ppv.deployed();
	console.log("PPV deployed to: ", ppv.address);
}

//Deployed at 0x87Db8A224FC602cb6D8Cf165871CFE6505a12ef4
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
