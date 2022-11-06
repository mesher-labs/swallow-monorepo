import connectedContract from "./contract";
import { ethers } from "ethers";

const index = "1";
const isReady = false;

const main = async () => {
  const gas = await connectedContract.estimateGas.setIsReady(index, isReady);

  const result = await connectedContract.setIsReady(index, isReady, { gasLimit: gas });

  console.log(result);
};

const view = async () => {
  // const result = await connectedContract.getAllShortcuts();
  const result = await connectedContract.getShortcutByIndex(1);
  console.log(result);
};

main();
// view();
