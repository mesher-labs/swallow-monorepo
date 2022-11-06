import styled from "styled-components";
const S = {
  DropDownList: styled.ul`
    width: 110px;
    height: 306px;
    margin-top: 8.5px;
    background: #13192b;
    border: 1px solid #5b5b5b;
    border-radius: 11px;
    overflow: scroll;
    padding: 0;
  `,
  DropDownItem: styled.li`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 24px;
    border-bottom: 1px solid #5b5b5b;
    cursor: pointer;
    font-weight: 400;
    font-size: 18px;
    color: #767676;
    &:first-child {
      border-top-left-radius: 11px;
      border-top-right-radius: 11px;
    }
    &:hover {
      background: #253565;
      cursor: pointer;
    }
    p {
      padding-top : 3px;
      margin-left: 7px;
    }
  `
};

interface Props {
  tokenList : {
    symbol : string;
    address: {
      mainnet: string;
      mumbai: string;
    }
    imgSrc: string;
  }[];
  onClickHanlder : (tokenSymbol: string) => void;
}

export const TokenDropDownList = ({tokenList, onClickHanlder} : Props) => {
  return (
    <S.DropDownList>
      {tokenList.map(token => {return (
      <S.DropDownItem onClick={() => onClickHanlder(token.symbol)}>
        <img width={19} height={19} src={token.imgSrc}></img>
        <p>{token.symbol}</p>
      </S.DropDownItem>
      )})}
    </S.DropDownList>
  );
};
