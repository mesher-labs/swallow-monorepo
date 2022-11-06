import { TOKENS } from "../constants/tokens";

export class TokenService {
  static findAddressBySymbol(symbol: string) {
    return TOKENS.find(token => token.symbol === symbol)?.address;
  }
}
