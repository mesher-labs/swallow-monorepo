import styled from "styled-components";

export const AaveCurrentAPYShortcut = () => {
  return (
    <RectangleContainer backgroundColor="#B682F7">
      <h1>Aave Current APY</h1>
      <p>*supply, borrow</p>
      <APYContainer>
        <Row>
          <APYTokenWrapper>
            <h3>DAI</h3>
            <p>1.30%, 2.55%</p>
          </APYTokenWrapper>
          <APYTokenWrapper>
            <h3>USDT</h3>
            <p>1.30%, 2.55%</p>
          </APYTokenWrapper>
        </Row>
        <Row>
          <APYTokenWrapper>
            <h3>USDC</h3>
            <p>1.30%, 2.55%</p>
          </APYTokenWrapper>
          <APYTokenWrapper>
            <h3>CRV</h3>
            <p>1.30%, 2.55%</p>
          </APYTokenWrapper>
        </Row>
      </APYContainer>
    </RectangleContainer>
  );
};

export const BuyShortcut = () => {
  return (
    <SquareContainer backgroundColor="#6FEB8E">
      <h1>Buy</h1>
      <h2>
        100 MATIC <br /> with USDC
      </h2>
    </SquareContainer>
  );
};

export const MultiSendShortcut = () => {
  return <RectangleContainer backgroundColor="#ED797C"></RectangleContainer>;
};

export const SendShortcut = () => {
  return (
    <SquareContainer backgroundColor="#F5BF45">
      <h1>Send</h1>
      <h2>
        100 MATIC <br /> to @juwon
      </h2>
    </SquareContainer>
  );
};

export const TokenBalanceShortcut = () => {
  return <RectangleContainer backgroundColor="#58B9EF"></RectangleContainer>;
};

interface ContainerProps {
  backgroundColor: string;
}

const SquareContainer = styled.div<ContainerProps>`
  text-align: left;
  padding: 26px;
  background: ${({ backgroundColor }) => backgroundColor};
  width: 252px;
  height: 252px;
  border-radius: 20px;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;

    color: rgba(255, 255, 255, 0.8);

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

interface RectangleContainerProps extends ContainerProps {}

const RectangleContainer = styled.div<RectangleContainerProps>`
  text-align: left;
  padding: 26px;
  background: ${({ backgroundColor }) => backgroundColor};
  width: 521px;
  height: 252px;
  border-radius: 20px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;

    color: rgba(255, 255, 255, 0.8);

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const APYContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 100%;
`;
const APYTokenWrapper = styled.div`
  width: 50%;
  display: flex;
  h1 {
    width: 30%;
  }
  p {
    width: 70%;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
