import { ethers } from "ethers";
import styled from "styled-components";
import { useWeb3 } from "../../App";
import { CONTRACTS } from "../../common/constants/contracts";
import localStorageService from "../../common/services/local-storage.service";
import { TokenService } from "../../common/services/tokens.service";
import txBuilderService from "../../common/services/tx-builder.service";
import { useGetAaveCurrentAPY } from "../../hooks/react-query/query/useGetAaveCurrentAPY";
import { useEffect, useState } from "react";
import {
  ShortcutRes,
  UserParams,
  BuyShortcutParamsType,
  SendShortCutParamsType,
} from "../../common/types/short-cuts.types";

interface ShortcutProps {
  myShortcut: ShortcutRes;
}
export const AaveCurrentAPYShortcut = ({ myShortcut }: ShortcutProps) => {
  const { userParams } = myShortcut;
  const { data: allAaveMarketDatas, isLoading } = useGetAaveCurrentAPY();
  if (isLoading || !allAaveMarketDatas) return <></>;
  const apyInfoList = userParams.map((param) => {
    const symbol = param.value;

    const data = allAaveMarketDatas
      .find(
        (marketData: any) =>
          marketData.id ===
          TokenService.findAddressBySymbol(param.value, "mainnet"),
      )
      .rates.filter((rate: any) => rate.type === "VARIABLE");

    const supplyAPY = data.find((rate: any) => rate.side === "LENDER").rate;

    const borrowAPY = data.find((rate: any) => rate.side === "BORROWER").rate;

    return {
      symbol,
      supplyAPY: Number(supplyAPY).toFixed(3),
      borrowAPY: Number(borrowAPY).toFixed(3),
    };
  });

  if (isLoading || !allAaveMarketDatas) return <></>;
  console.log("give me money", allAaveMarketDatas);

  return (
    <RectangleContainer backgroundColor="#B682F7">
      <div>
        <h1>Aave Current APY</h1>
        <p>*supply, borrow</p>
      </div>
      <APYContainer>
        {apyInfoList.map((info) => (
          <Row>
            <APYTokenWrapper>
              <APYInside>
                <img src={`/images/${info.symbol}.png`} />
                <h3>{info.symbol}</h3>
              </APYInside>
              <p>
                {info.supplyAPY}%, {info.borrowAPY}%
              </p>
            </APYTokenWrapper>
          </Row>
        ))}
        {/* <Row>
          <APYTokenWrapper>
            <h3>USDC</h3>
            <p>1.30%, 2.55%</p>
          </APYTokenWrapper>
          <APYTokenWrapper>
            <h3>CRV</h3>
            <p>1.30%, 2.55%</p>
          </APYTokenWrapper>
        </Row> */}
      </APYContainer>
    </RectangleContainer>
  );
};

export const BuyShortcut = ({ myShortcut }: ShortcutProps) => {
  const { userParams } = myShortcut;
  const { web3 } = useWeb3();
  const account = localStorageService.get("account");
  const parsedParams: Record<BuyShortcutParamsType, string> = {
    sellToken: "",
    buyToken: "",
    buyAmount: "",
  };
  userParams.forEach((param: UserParams) => {
    const name = param.name as BuyShortcutParamsType;
    parsedParams[name] = param.value;
  });

  const onClickHanlder = async () => {
    console.log("object");

    if (parsedParams["sellToken"] !== "MATIC") {
      const allowanceTx = await txBuilderService.buildTx(web3, "ALLOWANCE", {
        token: parsedParams["sellToken"],
        owner: account,
        spender: CONTRACTS.ZERO_X_PROXY_CONTRACT,
      });

      const allowance = await web3.eth.call(allowanceTx);
      console.log(allowance);

      if (+allowance < 0) {
        const approveTx = await txBuilderService.buildTx(web3, "APPROVE", {
          token: parsedParams["sellToken"],
          spender: CONTRACTS.ZERO_X_PROXY_CONTRACT,
        });
        await web3.eth.sendTransaction(approveTx);
      }
    }

    const swapTx = await txBuilderService.buildTx(web3, "BUY", {
      sellToken: TokenService.findAddressBySymbol(parsedParams["sellToken"]),
      buyToken: TokenService.findAddressBySymbol(parsedParams["buyToken"]),
      buyAmount: ethers.utils
        .parseUnits(parsedParams["buyAmount"], 18)
        .toString(),
      takerAddress: account,
    });

    await web3.eth.sendTransaction(swapTx);
  };

  return (
    <SquareContainer onClick={onClickHanlder} backgroundColor="#6FEB8E">
      <div>
        <h1>Buy</h1>
        <h2>
          {parsedParams.buyAmount} {parsedParams.buyToken} <br /> with{" "}
          {parsedParams.sellToken}
        </h2>
      </div>
      <img src={`/images/${parsedParams.buyToken}.png`} />
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
  const { userParams } = myShortcut;
  const { web3 } = useWeb3();
  const parsedParams: Record<SendShortCutParamsType, string> = {
    recipientAddress: "",
    recipientNickName: "",
    amount: "",
    token: "",
  };
  userParams.forEach((param: UserParams) => {
    const name = param.name as SendShortCutParamsType;
    parsedParams[name] = param.value;
  });
  const onClickHandler = async () => {
    const tx = await txBuilderService.buildTx(web3, "SEND", parsedParams);
    await web3.eth.sendTransaction(tx);
  };
  return (
    <SquareContainer onClick={onClickHandler} backgroundColor="#F5BF45">
      <div>
        <h1>Send</h1>
        <h2>
          {parsedParams.amount} {parsedParams.token} <br /> to @
          {parsedParams.recipientNickName}
        </h2>
      </div>
      <img src={`/images/${parsedParams.token}.png`} />
    </SquareContainer>
  );
};

export const TokenBalanceShortcut = ({ myShortcut }: ShortcutProps) => {
  const [balanceInfo, setBalanceInfo] = useState<
    { symbol: string; balance: string }[]
  >([]);
  const { web3 } = useWeb3();
  const account = localStorageService.get("account");

  // useEffect(() => {
  //   const promiseList = myShortcut.userParams.map(param => getBalance(param.value))
  //   Promise.all(promiseList).then(res => setBalanceInfo([...balanceInfo, ...res.map((balance, index) => ({symbol: myShortcut.userParams[index].value, balance })) ]))
  // }, [])

  // console.log(balanceInfo);

  // if(!account) return <></>;

  // const getBalance = async (tokenSymbol: string) => {
  //   if(tokenSymbol === 'MATIC') return web3.eth.getBalance(account);
  //   else {
  //     const tx = await txBuilderService.buildTx(web3, 'BALANCE_OF', {
  //       token:  tokenSymbol,
  //       account,
  //     })
  //     return web3.eth.call(tx);
  //   }
  // }

  return (
    <RectangleContainer backgroundColor="#58B9EF">
      <h1>Token Balance @juwon</h1>
      <TokenBalanceContainer>
        <Row>
          {/* {balanceInfo.map(info => (
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
            ))
          } */}
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
  cursor: pointer;
  margin: 10px;
  text-align: left;
  padding: 26px;
  background: ${({ backgroundColor }) => backgroundColor};
  width: 252px;
  height: 252px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  img {
    align-self: flex-end;
    width: 45px;
    height: 45px;
  }
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
  cursor: pointer;

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
const APYInside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  img {
    width: 18px;
    margin-right: 5px;
    height: 18px;
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
