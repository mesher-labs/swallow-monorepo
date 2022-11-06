import { TOKENS } from "../constants/tokens";

export class TokenService {
  static findAddressBySymbol(symbol: string, network: 'mumbai' | 'mainnet' = "mumbai") {
    return TOKENS.find((token) => token.symbol === symbol)?.address[network];
  }
}
