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

const SEND = {
  shortcutType: ShortcutType.SEND,
  endpoint: NULL_STRING,
  contractAddr: NULL_ADDRESS,
  isReady: true,
};
const BUY = {
  shortcutType: ShortcutType.BUY,
  endpoint: "https://mumbai.api.0x.org/swap/v1/quote",
  contractAddr: NULL_ADDRESS,
  isReady: true,
};
const AAVE = {
  shortcutType: ShortcutType.AAVE_CURRENT_APY,
  endpoint: "https://api.thegraph.com/subgraphs/name/messari/aave-v2-polygon-extended",
  contractAddr: NULL_ADDRESS,
  isReady: true,
};
const MULTI_SEND = {
  shortcutType: ShortcutType.MULTI_SEND,
  endpoint: NULL_STRING,
  contractAddr: NULL_ADDRESS,
  isReady: false,
};
const TOKEN_BALANCE = {
  shortcutType: ShortcutType.TOKEN_BALANCE,
  endpoint: NULL_STRING,
  contractAddr: NULL_ADDRESS,
  isReady: false,
};

const main = async (DUMMY: any) => {
  const gas = await connectedContract.estimateGas.addShortcut(
    DUMMY.shortcutType,
    DUMMY.endpoint,
    DUMMY.contractAddr,
    DUMMY.isReady,
  );
  const result = await connectedContract.addShortcut(
    DUMMY.shortcutType,
    DUMMY.endpoint,
    DUMMY.contractAddr,
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

// main(TOKEN_BALANCE);
// view();
