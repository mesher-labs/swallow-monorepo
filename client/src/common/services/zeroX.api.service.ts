import { BaseApiService } from "./api.base.service";
import { AxiosRequestConfig } from "axios";
import { URLS } from "../constants/urls";
import qs from 'qs'

export interface SwapQuoteParams {
  sellToken: string;
  buyToken: string,
  sellAmount: string,
  takerAddress: string,
}

class ZeroXApiService extends BaseApiService {
  constructor() {
    super({
      baseURL: URLS["ZERO_X"],
    });
  }
  getSwapQuote(params: SwapQuoteParams, config?: AxiosRequestConfig) {
    return this.axiosInstance.get(`swap/v1/quote?${qs.stringify(params)}`, config);
  }
}

export default new ZeroXApiService();
