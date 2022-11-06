import {
  HomePresenter,
} from "../components/Home/HomePresenter";
import styled from "styled-components";
import { Shortcuts } from "../common/types/short-cuts.types";

export const Home = () => {
  return (
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
  );
};

const Container = styled.div`
  display: block;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;
