import EthersUtil from "../../utils/ethers.utils";
import { ShortcutTypes } from "../types/short-cuts.types";
import zeroXApiService, { SwapQuoteParams } from "./zeroX.api.service";
import Web3 from 'web3';

class TxBuilderService {
  constructor() {}
  async encode(web3: Web3, type: ShortcutTypes, paramsDto: any) {
    switch (type) {
      case "SEND": {
        const gasPrice = +(await web3.eth.getGasPrice()) * 1.2;
        const data = EthersUtil.encodeFunctionData("transfer", this.toParams(type, paramsDto));
        return {
          gasPrice,
          data,
          to: paramsDto.contractAddress,
        }
      }
      case "BUY": {
        const params: SwapQuoteParams = {
          sellToken: paramsDto.sellToken,
          buyToken: paramsDto.buyToken,
          sellAmount: paramsDto.sellAmount,
          takerAddress: paramsDto.takerAddress,
        };
        return zeroXApiService.getSwapQuote(params);
      }
    }
  }
  private toParams(type: ShortcutTypes, paramsDto: any) {
    switch (type) {
      case "SEND":
        return [paramsDto.recipient, paramsDto.amount];
      default:
        throw new Error("");
    }
  }
}

export default new TxBuilderService();
