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