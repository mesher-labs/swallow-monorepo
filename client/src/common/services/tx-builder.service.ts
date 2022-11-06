import EthersUtil from "../../utils/ethers.utils";
import { ShortcutTypes } from "../types/short-cuts.types";
import zeroXApiService, { SwapQuoteParams } from "./zeroX.api.service";
import Web3 from "web3";

type TransactionTypes = ShortcutTypes | 'APPROVE';

class TxBuilderService {
  constructor() {}
  async buildTx(web3: Web3, type: TransactionTypes | TransactionTypes, paramsDto: any) {
    switch (type) {
      case "SEND": {
        const gasPrice = +(await web3.eth.getGasPrice()) * 1.2;
        const data = EthersUtil.encodeFunctionData("transfer", this.toParams(type, paramsDto));
        return {
          gasPrice,
          data,
          to: paramsDto.contractAddress,
        };
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
      case 'APPROVE': {
        const gasPrice = +(await web3.eth.getGasPrice()) * 1.2;
        const data = EthersUtil.encodeFunctionData('approve', this.toParams(type, paramsDto));
        return {
          gasPrice,
          data,
          to: paramsDto.contractAddress
        }
      }
    }
  }
  private toParams(type: TransactionTypes, paramsDto: any) {
    switch (type) {
      case "SEND":
        return [paramsDto.recipient, paramsDto.amount];
      case 'APPROVE':
        return [paramsDto.spender, paramsDto.amount];
      default:
        throw new Error("");
    }
  }
}

export default new TxBuilderService();
