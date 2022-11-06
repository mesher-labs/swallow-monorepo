import styled from "styled-components";
import LocalStorageService from "../../common/services/local-storage.service";

import {
  AaveCurrentAPYShortcut,
  BuyShortcut,
  MultiSendShortcut,
  SendShortcut,
  TokenBalanceShortcut,
} from "../../components/Home/Shortcuts";
import {
  ShortcutTypes,
  ShortcutRes,
  Shortcuts,
} from "../../common/types/short-cuts.types";
import {
  DefaultSendShortcut,
  DefaultBuyShortcut,
  DefaultAaveCurrentAPYShortcut,
  DefaultMultiSendShortcut,
  DefaultTokenBalanceShortcut,
} from "./DefaultShortcuts";
import { isUndefined, isNull } from "lodash-es";

export interface HomePresenterProps {
  shortcutType: ShortcutTypes;
  shortcutData: ShortcutRes;
}

const getMyShortcuts = (
  shortcutType: ShortcutTypes,
  myShortcut: ShortcutRes,
) => {
  if (shortcutType === Shortcuts.SEND) {
    return <SendShortcut myShortcut={myShortcut} />;
  }
  if (shortcutType === Shortcuts.BUY) {
    return <BuyShortcut myShortcut={myShortcut} />;
  }
  if (shortcutType === Shortcuts.AAVE_CURRENT_APY) {
    return <AaveCurrentAPYShortcut myShortcut={myShortcut} />;
  }
  if (shortcutType === Shortcuts.MULTI_SEND) {
    return <MultiSendShortcut myShortcut={myShortcut} />;
  }
  if (shortcutType === Shortcuts.TOKEN_BALANCE) {
    return <TokenBalanceShortcut myShortcut={myShortcut} />;
  }
};

const getDefaultShortcuts: Record<ShortcutTypes, JSX.Element> = {
  SEND: <DefaultSendShortcut />,
  BUY: <DefaultBuyShortcut />,
  AAVE_CURRENT_APY: <DefaultAaveCurrentAPYShortcut />,
  MULTI_SEND: <DefaultMultiSendShortcut />,
  TOKEN_BALANCE: <DefaultTokenBalanceShortcut />,
};

export const HomePresenter = ({
  shortcutType,
  shortcutData,
}: HomePresenterProps) => {
  const myShortcutString = LocalStorageService.get("myShortcut");
  // Case 1: 한번도 숏컷을 등록한적 없는놈
  if (
    isNull(myShortcutString) ||
    isUndefined(myShortcutString) ||
    myShortcutString.length === 0
  )
    return <>{getDefaultShortcuts[shortcutType]}</>;

  // Case 2: 등록은 했는데 이 숏컷이 아닌놈
  const myShortcut = JSON.parse(myShortcutString);
  const isMyShortcut = myShortcut.some(
    (shortcut: ShortcutRes) => shortcut.shortcutType === shortcutType,
  );
  if (isMyShortcut) {
    return <>{getDefaultShortcuts[shortcutType]}</>;
  }
  return <>{getMyShortcuts(shortcutType, myShortcut)}</>;
};
