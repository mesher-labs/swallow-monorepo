export type ShortcutTypes =
  | "SEND"
  | "BUY"
  | "AAVE_CURRENT_APY"
  | "MULTI_SEND"
  | "TOKEN_BALANCE";

export const Shortcuts = {
  SEND: "SEND",
  BUY: "BUY",
  AAVE_CURRENT_APY: "AAVE_CURRENT_APY",
  MULTI_SEND: "MULTI_SEND",
  TOKEN_BALANCE: "TOKEN_BALANCE",
} as const;

// TODO : ParamsType 를 추가해야함
export type BuyShortcutParamsType =
  | "sellToken"
  | "buyToken"
  | "buyAmount"

export type SendShortCutParamsType =
  | "recipientNickName"
  | "amount"
  | "token"
  | "recipientAddress";

export type AaveCurrentAPYParamsType = string;
export type ShortCutParamsType =
  | BuyShortcutParamsType
  | SendShortCutParamsType
  | AaveCurrentAPYParamsType;

export interface UserParams {
  // TODO : ParamsType 를 추가해야함
  name: ShortCutParamsType;
  value: string;
}

export interface ShortcutRes {
  isReady: boolean;
  endpoint: string;
  contractAddr: string;
  userParams: UserParams[];
  shortcutType: ShortcutTypes;
}
