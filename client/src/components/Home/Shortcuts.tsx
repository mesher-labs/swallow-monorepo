import styled from "styled-components";
import {
  ShortcutRes,
  UserParams,
  BuyShortcutParamsType,
} from "../../common/types/short-cuts.types";

interface ShortcutProps {
  myShortcut: ShortcutRes;
}
export const AaveCurrentAPYShortcut = ({ myShortcut }: ShortcutProps) => {
  // TODO : call to myShortcut endpoint for AaveCurrentAPY from TheGraph
  return (
    <RectangleContainer backgroundColor="#B682F7">
      <div>
        <h1>Aave Current APY</h1>
        <p>*supply, borrow</p>
      </div>
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

export const BuyShortcut = ({ myShortcut }: ShortcutProps) => {
  const { userParams } = myShortcut;
  const parsedParams: Record<BuyShortcutParamsType, string> = {
    sellToken: "",
    buyToken: "",
    sellAmount: "",
    buyAmount: "",
    slippagePercentage: "",
  };
  userParams.forEach((param: UserParams) => {
    parsedParams[param.name] = param.value;
  });

  return (
    <SquareContainer backgroundColor="#6FEB8E">
      <h1>Buy</h1>
      <h2>
        {parsedParams.sellAmount} {parsedParams.sellToken} <br /> with{" "}
        {parsedParams.buyToken}
      </h2>
    </SquareContainer>
  );
};

export const MultiSendShortcut = ({ myShortcut }: ShortcutProps) => {
  return (
    <RectangleContainer backgroundColor="#ED797C">
      <RectangleLeftAlignBox>
        <h1>Send</h1>
        <h2>
          100 USDC <br /> to every <br /> @mesherDev
        </h2>
      </RectangleLeftAlignBox>
      <img />
    </RectangleContainer>
  );
};

export const SendShortcut = ({ myShortcut }: ShortcutProps) => {
  return (
    <SquareContainer backgroundColor="#F5BF45">
      <h1>Send</h1>
      <h2>
        100 MATIC <br /> to @juwon
      </h2>
    </SquareContainer>
  );
};

export const TokenBalanceShortcut = ({ myShortcut }: ShortcutProps) => {
  return (
    <RectangleContainer backgroundColor="#58B9EF">
      <h1>Token Balance @juwon</h1>
      <TokenBalanceContainer>
        <Row>
          <TokenBalanceItemWrapper>
            <img />
            <Row>
              <TokenInfoColumn isFlexEnd={true}>
                <p>10,588,050,080.45</p>
                <p>$10,688,050,080.45</p>
              </TokenInfoColumn>
              <TokenInfoColumn isFlexEnd={false}>
                <h3>DAI</h3>
                <h3>USD</h3>
              </TokenInfoColumn>
            </Row>
          </TokenBalanceItemWrapper>
          <TokenBalanceItemWrapper>
            <img />
            <Row>
              <TokenInfoColumn isFlexEnd={true}>
                <p>10,588,050,080.45</p>
                <p>$10,688,050,080.45</p>
              </TokenInfoColumn>
              <TokenInfoColumn isFlexEnd={false}>
                <h3>DAI</h3>
                <h3>USD</h3>
              </TokenInfoColumn>
            </Row>
          </TokenBalanceItemWrapper>
        </Row>
        <Row>
          <TokenBalanceItemWrapper>
            <img />
            <Row>
              <TokenInfoColumn isFlexEnd={true}>
                <p>10,588,050,080.45</p>
                <p>$10,688,050,080.45</p>
              </TokenInfoColumn>
              <TokenInfoColumn isFlexEnd={false}>
                <h3>DAI</h3>
                <h3>USD</h3>
              </TokenInfoColumn>
            </Row>
          </TokenBalanceItemWrapper>
          <TokenBalanceItemWrapper>
            <img />
            <Row>
              <TokenInfoColumn isFlexEnd={true}>
                <p>10,588,050,080.45</p>
                <p>$10,688,050,080.45</p>
              </TokenInfoColumn>
              <TokenInfoColumn isFlexEnd={false}>
                <h3>DAI</h3>
                <h3>USD</h3>
              </TokenInfoColumn>
            </Row>
          </TokenBalanceItemWrapper>
        </Row>
      </TokenBalanceContainer>
    </RectangleContainer>
  );
};

interface ContainerProps {
  backgroundColor: string;
}

const SquareContainer = styled.div<ContainerProps>`
  margin: 10px;
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
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 100%;
`;
const APYTokenWrapper = styled.div`
  margin-top: 10px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const RectangleLeftAlignBox = styled.div`
  text-align: left;
`;

const TokenBalanceContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 100%;
`;

const TokenBalanceItemWrapper = styled.div`
  width: 45%;
  height: 72px;
  padding: 10px;

  border: 1px solid rgba(255, 255, 255, 0.37);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const TokenInfoColumn = styled.div<{ isFlexEnd: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ isFlexEnd }) => (isFlexEnd ? "flex-end" : "flex-start")};
  font-size: 14px;
  text-align: right;
  p {
    text-align: right;
    margin-right: 10px;
    margin-bottom: 5px;
  }
  h3 {
    font-size: 14px;
    text-align: left;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;
