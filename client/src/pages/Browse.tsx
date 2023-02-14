import styled from "styled-components";

import {
  DefaultSendShortcut,
  DefaultBuyShortcut,
  DefaultAaveCurrentAPYShortcut,
  DefaultMultiSendShortcut,
  DefaultTokenBalanceShortcut,
} from "../components/Home/DefaultShortCuts";

export const Browse = () => {
  return (
    <>
      <Container>
        <Row>
          <DefaultSendShortcut />
          <DefaultBuyShortcut />
          <DefaultAaveCurrentAPYShortcut />
        </Row>
        <Row>
          <DefaultMultiSendShortcut />
          <DefaultTokenBalanceShortcut />
        </Row>
      </Container>
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
