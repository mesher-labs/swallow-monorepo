import EthersUtil from "../../utils/ethers.utils";
import { ShortcutTypes } from "../types/short-cuts.types";
import zeroXApiService, { SwapQuoteParams } from "./zeroX.api.service";
import Web3 from "web3";
import localStorageService from "./local-storage.service";
import { ethers } from "ethers";
import { TokenService } from "./tokens.service";

type TransactionTypes = ShortcutTypes | "APPROVE" | "ALLOWANCE" | "BALANCE_OF";

class TxBuilderService {
  constructor() {}
  async buildTx(web3: Web3, type: TransactionTypes | TransactionTypes, paramsDto: any) {
    const from = localStorageService.get("account") || "";
    switch (type) {
      case "SEND": {
        if (paramsDto.token === "MATIC") {
          return {
            from,
            to: paramsDto.recipientAddress,
            value: ethers.utils.parseEther(paramsDto.amount),
          };
        } else {
          const data = EthersUtil.encodeFunctionData("transfer", this.toParams(type, paramsDto));
          return {
            data,
            to: TokenService.findAddressBySymbol(paramsDto.token),
            from,
          };
        }
      }
      case "BUY": {
        const params: SwapQuoteParams = {
          sellToken: paramsDto.sellToken,
          buyToken: paramsDto.buyToken,
          buyAmount: paramsDto.buyAmount,
          takerAddress: paramsDto.takerAddress,
        };
        return await (
          await zeroXApiService.getSwapQuote(params)
        ).data;
      }
      case "APPROVE": {
        const data = EthersUtil.encodeFunctionData("approve", this.toParams(type, paramsDto));
        return {
          data,
          to: TokenService.findAddressBySymbol(paramsDto.token),
          from,
        };
      }
      case "ALLOWANCE": {
        const data = EthersUtil.encodeFunctionData("allowance", this.toParams(type, paramsDto));
        return {
          data,
          to: TokenService.findAddressBySymbol(paramsDto.token),
          from,
        };
      }
      case "BALANCE_OF": {
        const data = EthersUtil.encodeFunctionData("balanceOf", this.toParams(type, paramsDto));
        return {
          data,
          to: TokenService.findAddressBySymbol(paramsDto.token, "mainnet"),
        };
      }
      default:
        throw new Error("");
    }
  }
  private toParams(type: TransactionTypes, paramsDto: any) {
    switch (type) {
      case "SEND":
        return [paramsDto.recipientAddress, ethers.utils.parseUnits(paramsDto.amount, 18)];
      case "APPROVE":
        return [paramsDto.spender, ethers.constants.MaxUint256];
      case "ALLOWANCE":
        return [paramsDto.owner, paramsDto.spender];
      case "BALANCE_OF":
        return [paramsDto.account];
      default:
        throw new Error("");
    }
  }
}

export default new TxBuilderService();
