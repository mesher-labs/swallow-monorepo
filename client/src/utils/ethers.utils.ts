import { ethers } from "ethers";
import { EventFragment } from "ethers/lib/utils";

const iface =  new ethers.utils.Interface([
  "function approve(address spender, uint amount) external returns(bool)"
]);


class EthersUtil {

  static encodeFunctionData(fn: string, params: any[]): string {
    return iface.encodeFunctionData(fn, params);
  }
  static decodeRawTx(rawTx: string) {
    return ethers.utils.parseTransaction(rawTx);
  }
  static decodeFunctionData(functionData: string) {
    return iface.parseTransaction({ data: functionData });
  }
  static decodeFunctionResult(fn: string, resultData: string) {
    return iface.decodeFunctionResult(fn, resultData);
  }
  static encodeFilterTopics(eventFragment: EventFragment, topics: string[]) {
    return iface.encodeFilterTopics(eventFragment, topics);
  }
  static decodeLog(topics: string[], data: string) {
    return iface.parseLog({
      data,
      topics,
    });
  }
}

export default EthersUtil;
