import EthersUtil from "../../utils/ethers.utils";
import { ShortcutTypes } from "../types/short-cuts.types";
import zeroXApiService, { SwapQuoteParams } from "./zeroX.api.service";

class EncoderService {
  constructor() {}
  async encode(type: ShortcutTypes, paramsDto: any) {
    switch (type) {
      case "SEND":
        return EthersUtil.encodeFunctionData("transfer", this.toParams(type, paramsDto));
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

export default new EncoderService();
