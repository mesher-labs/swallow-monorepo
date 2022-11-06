import styled from "styled-components";
import ShortcutUtils from "../../utils/shortcuts";

import {
  AaveCurrentAPYShortcut,
  BuyShortcut,
  MultiSendShortcut,
  SendShortcut,
  TokenBalanceShortcut,
} from "../../components/Home/Shortcuts";
import {
  DefaultSendShortcut,
  DefaultBuyShortcut,
  DefaultAaveCurrentAPYShortcut,
  DefaultMultiSendShortcut,
  DefaultTokenBalanceShortcut,
} from "./DefaultShortCuts";

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

export interface HomePresenterProps {
  shortcutType: ShortcutTypes;
}

const getMyShortcuts: Record<ShortcutTypes, JSX.Element> = {
  SEND: <SendShortcut />,
  BUY: <BuyShortcut />,
  AAVE_CURRENT_APY: <AaveCurrentAPYShortcut />,
  MULTI_SEND: <MultiSendShortcut />,
  TOKEN_BALANCE: <TokenBalanceShortcut />,
};

const getDefaultShortcuts: Record<ShortcutTypes, JSX.Element> = {
  SEND: <DefaultSendShortcut />,
  BUY: <DefaultBuyShortcut />,
  AAVE_CURRENT_APY: <DefaultAaveCurrentAPYShortcut />,
  MULTI_SEND: <DefaultMultiSendShortcut />,
  TOKEN_BALANCE: <DefaultTokenBalanceShortcut />,
};

const getShortcutsTitle: Record<ShortcutTypes, string> = {
  SEND: "SEND",
  BUY: "BUY",
  AAVE_CURRENT_APY: "AAVE_CURRENT_APY2",
  MULTI_SEND: "MULTI_SEND",
  TOKEN_BALANCE: "TOKEN_BALANCE",
};

const getShortcutsSubTitle: Record<ShortcutTypes, JSX.Element> = {
  // TODO : token symbol 등 동적으로 변하는 데이터 객체 타입 정해지면 수정하기
  SEND: (
    <>
      100 MATIC <br /> to @juwon
    </>
  ),
  BUY: (
    <>
      100 MATIC <br /> with USDC
    </>
  ),
  AAVE_CURRENT_APY: <>Aave Current APY</>,
  MULTI_SEND: (
    <>
      Send 100 USDC <br /> to every <br /> @mesherDev
    </>
  ),
  TOKEN_BALANCE: <>Token Balance @juwon</>,
};

export const HomePresenter = ({ shortcutType }: HomePresenterProps) => {
  const myShortCuts = ShortcutUtils.myShortCuts();

  // TODO:  DefaultShortcuts 와 toggle
  // return <>{getMyShortcuts[shortcutType]}</>;
  return <>{getDefaultShortcuts[shortcutType]}</>;
};
