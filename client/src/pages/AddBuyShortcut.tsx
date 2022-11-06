import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import { COLORS } from "../common/constants/colors";
import styled from "styled-components";
import { TextInput } from "../components/AddShortcut/TextInput";
import { TokenDropDownList } from "../components/AddShortcut/TokenDropDownList";
import { TokenDropDownInput } from "../components/AddShortcut/TokenDropDownInput";
import { useState } from "react";
import { AddShortCutButton } from "../components/AddShortcut/Button";

const S = {
  Title: styled.h1`
    color: ${COLORS.white};
    font-size: 36px;
    font-weight: 700;
    margin-right: 60px;
  `,
  SubTitle: styled.h1`
    color: ${COLORS.white};
    font-size: 36px;
    font-weight: 700;
    margin-right: 60px;
    width: 75px;
  `,
};

export interface ShortCutData {
  toToken: string;
  fromToken: string;
  amount: string;
}

export const AddBuyShortCut = () => {
  const [shortCutData, setShortCutData] = useState<ShortCutData>({
    toToken: "",
    fromToken: "",
    amount: "",
  });
  const onChangeToToken = (tokenSymbol: string) => {
    if(tokenSymbol === shortCutData.fromToken) return;
    setShortCutData({
      ...shortCutData,
      toToken: tokenSymbol,
    });
  }
  
  const onChangeFromToken = (tokenSymbol: string) => {
    if(tokenSymbol === shortCutData.toToken) return;
    setShortCutData({
      ...shortCutData,
      fromToken: tokenSymbol,
    });
  };

  const onChangeAmount = (e: React.FormEvent<HTMLInputElement>) =>
    setShortCutData({
      ...shortCutData,
      amount: e.currentTarget.value,
    });

  return (
    <div style={{marginLeft: '50px', width: '100vw'}}>
      <S.Title>Add Buy ShortCuts</S.Title>
      <div style={{ display: "flex", marginTop: "67px", alignItems: "center" }}>
        <S.SubTitle>Buy</S.SubTitle>
        <TokenDropDownInput
          placeholder="to token"
          tokenSymbol={shortCutData.toToken}
          onClickSymbol={onChangeToToken}
        ></TokenDropDownInput>
        <div style={{ marginLeft: "30px" }}>
          <TextInput
            placeHodler="amount"
            amount={shortCutData.amount}
            onChangeHanlder={onChangeAmount}
          ></TextInput>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "30px", alignItems: "center" }}>
        <S.SubTitle>with</S.SubTitle>
        <TokenDropDownInput
          placeholder="from token"
          tokenSymbol={shortCutData.fromToken}
          onClickSymbol={onChangeFromToken}
        ></TokenDropDownInput>
      </div>
      <AddShortCutButton onClickHandler={() => console.log(shortCutData)}/>
    </div>
  );
};
