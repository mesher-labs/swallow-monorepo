import styled from "styled-components";

import {
  DefaultSendShortcut,
  DefaultBuyShortcut,
  DefaultAaveCurrentAPYShortcut,
  DefaultMultiSendShortcut,
  DefaultTokenBalanceShortcut,
} from "./DefaultShortcuts";
import { isUndefined } from "lodash-es";
import { HomePresenter } from "../components/Home/HomePresenter";
import {
  Shortcuts,
  ShortcutTypes,
  ShortcutRes,
} from "../common/types/short-cuts.types";
import { useGetAllShortcuts } from "../hooks/react-query/query/useGetAllShortcuts";

const getDefaultShortcuts: Record<ShortcutTypes, JSX.Element> = {
  SEND: <DefaultSendShortcut />,
  BUY: <DefaultBuyShortcut />,
  AAVE_CURRENT_APY: <DefaultAaveCurrentAPYShortcut />,
  MULTI_SEND: <DefaultMultiSendShortcut />,
  TOKEN_BALANCE: <DefaultTokenBalanceShortcut />,
};

export const Home = () => {
  const { data: allShortcuts, isLoading } = useGetAllShortcuts();

  return (
    <>
      {!isLoading && (
        <Container>
          <Row>
            <DefaultSendShortcut shortcutType={Shortcuts.SEND} />
            <DefaultBuyShortcut shortcutType={Shortcuts.BUY} />
            <DefaultAaveCurrentAPYShortcut
              shortcutType={Shortcuts.AAVE_CURRENT_APY}
            />
          </Row>
          <Row>
            <DefaultMultiSendShortcut shortcutType={Shortcuts.MULTI_SEND} />
            <DefaultTokenBalanceShortcut
              shortcutType={Shortcuts.TOKEN_BALANCE}
            />
          </Row>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: block;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;
