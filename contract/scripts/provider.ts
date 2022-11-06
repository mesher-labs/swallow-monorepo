import { ethers } from "ethers";

const chainId = process.env.CHAIN_ID;
const deployer = process.env.DEPLOYER_ACCOUNT;
const privateKey = process.env.DEPLOYER_PRIVATE_KEY;
const rpcUrl = process.env.RPC_URL;

if (!deployer || !privateKey || !rpcUrl) throw new Error("asdf");

let provider: ethers.providers.JsonRpcProvider;
if (process.env.NETWORK === "hardhat") {
  provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
} else {
  if (!chainId) throw new Error("asdf");

  provider = new ethers.providers.JsonRpcProvider({
    url: rpcUrl,
  });
}

const wallet = new ethers.Wallet(privateKey, provider);
export { provider, wallet };
