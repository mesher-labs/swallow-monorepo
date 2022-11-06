import connectedContract from "./contract";
import { ethers } from "ethers";

enum ShortcutType {
  SEND = "SEND",
  BUY = "BUY",
  AAVE_CURRENT_APY = "AAVE_CURRENT_APY",
  MULTI_SEND = "MULTI_SEND",
  TOKEN_BALANCE = "TOKEN_BALANCE",
}

const NULL_STRING = "NULL";
const NULL_ADDRESS = ethers.constants.AddressZero;

const DUMMY = {
  shortcutType: ShortcutType.BUY,
  endpoint: "https://mumbai.api.0x.org/",
  contractAddr: NULL_ADDRESS,
  userParams: [
    { name: "buyToken", value: NULL_STRING },
    { name: "sellToken", value: NULL_STRING },
  ],
  isReady: true,
};

const main = async () => {
  const gas = await connectedContract.estimateGas.addShortcut(
    DUMMY.shortcutType,
    DUMMY.endpoint,
    DUMMY.contractAddr,
    DUMMY.userParams,
    DUMMY.isReady,
  );

  const result = await connectedContract.addShortcut(
    DUMMY.shortcutType,
    DUMMY.endpoint,
    DUMMY.contractAddr,
    DUMMY.userParams,
    DUMMY.isReady,
    { gasLimit: gas },
  );

  console.log(result);
};

const view = async () => {
  // const result = await connectedContract.getAllShortcuts();
  const result = await connectedContract.getShortcutByIndex(1);
  console.log(result);
};

main();
// view();
