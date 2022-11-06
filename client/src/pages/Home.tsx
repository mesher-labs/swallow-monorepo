import styled from "styled-components";

import { isUndefined } from "lodash-es";
import { HomePresenter } from "../components/Home/HomePresenter";
import {
  Shortcuts,
  ShortcutTypes,
  ShortcutRes,
} from "../common/types/short-cuts.types";
import { useGetAllShortcuts } from "../hooks/react-query/query/useGetAllShortcuts";

export const Home = () => {
  const { data: allShortcuts, isLoading } = useGetAllShortcuts();

  return (
    <>
      {!isLoading && (
        <Container>
          <Row>
            <HomePresenter shortcutType={Shortcuts.SEND} />
            <HomePresenter shortcutType={Shortcuts.BUY} />
            <HomePresenter shortcutType={Shortcuts.AAVE_CURRENT_APY} />
          </Row>
          <Row>
            <HomePresenter shortcutType={Shortcuts.MULTI_SEND} />
            <HomePresenter shortcutType={Shortcuts.TOKEN_BALANCE} />
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
