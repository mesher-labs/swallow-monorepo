/* eslint-disable new-cap */
import { ethers } from "ethers";
import { provider, wallet } from "./provider";
import { contracts as mumbai } from "../deployments/mumbai.json";
import { Shortcuts } from "../typechain";

let contracts: any;

switch (process.env.NETWORK) {
  case "mumbai":
    contracts = mumbai;
    break;
  default:
    throw new Error("set NETWORK ENV");
}

const {
  Shortcuts: { abi, address },
} = contracts;

const contract = new ethers.Contract(address, abi, provider) as Shortcuts;
const connectedContract = contract.connect(wallet);
export default connectedContract;
