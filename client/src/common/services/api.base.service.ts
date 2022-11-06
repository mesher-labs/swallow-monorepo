import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export abstract class BaseApiService {
  protected readonly axiosInstance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
      ...config,
    });
  }
}
