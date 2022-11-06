import EthersUtil from "../../utils/ethers.utils";
import { ShortcutTypes } from "../types/short-cuts.types";
import zeroXApiService, { SwapQuoteParams } from "./zeroX.api.service";
import Web3 from "web3";
import localStorageService from "./local-storage.service";
import { ethers } from "ethers";

type TransactionTypes = ShortcutTypes | "APPROVE";

class TxBuilderService {
  constructor() {}
  async buildTx(web3: Web3, type: TransactionTypes | TransactionTypes, paramsDto: any) {
    const from = localStorageService.get('account') || '';
    switch (type) {
      case "SEND": {
        const data = EthersUtil.encodeFunctionData("transfer", this.toParams(type, paramsDto));
        return {
          data,
          // to: paramsDto.token,
          to: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
          from,
        };
      }
      case "BUY": {
        const params: SwapQuoteParams = {
          sellToken: paramsDto.sellToken,
          buyToken: paramsDto.buyToken,
          sellAmount: paramsDto.sellAmount,
          takerAddress: paramsDto.takerAddress,
        };
        return await (await zeroXApiService.getSwapQuote(params)).data;
      }
      case "APPROVE": {
        const data = EthersUtil.encodeFunctionData("approve", this.toParams(type, paramsDto));
        return {
          data,
          to: paramsDto.contractAddress,
          from
        };
      }
      default:
        throw new Error("");
    }
  }
  private toParams(type: TransactionTypes, paramsDto: any) {
    switch (type) {
      case "SEND":
        // return [paramsDto.recipientAddress, paramsDto.amount];
        return ["0xB2324554De0EA36fff2FF270b21eA1A503eCe751", ethers.utils.parseUnits('0.01', 18)];
      case "APPROVE":
        return [paramsDto.spender, paramsDto.amount];
      default:
        throw new Error("");
    }
  }
}

export default new TxBuilderService();
