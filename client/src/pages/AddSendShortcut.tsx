import Icon from "@mdi/react";
import styled from "styled-components";
import localStorageService from "../common/services/local-storage.service";

import { mdiArrowLeft } from "@mdi/js";
import { useState } from "react";

import { COLORS } from "../common/constants/colors";
import { TextInput } from "../components/AddShortcut/TextInput";
import { TokenDropDownList } from "../components/AddShortcut/TokenDropDownList";
import { TokenDropDownInput } from "../components/AddShortcut/TokenDropDownInput";
import { AddShortCutButton } from "../components/AddShortcut/Button";
import { useGetAllShortcuts } from "../hooks/react-query/query/useGetAllShortcuts";
import { ShortcutRes } from "../common/types/short-cuts.types";

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
  token: string;
  amount: string;
  toAddress: string;
  toNickName: string;
}

export const AddSendShortCut = () => {
  const [shortCutData, setShortCutData] = useState<ShortCutData>({
    token: "",
    amount: "",
    toAddress: "",
    toNickName: "",
  });

  const { data: allShortcuts, isLoading } = useGetAllShortcuts();

  if (isLoading || !allShortcuts) return <></>;

  const addSendShortCut = allShortcuts.find(
    (shortCut: ShortcutRes) => shortCut.shortcutType === "SEND",
  );

  if (!addSendShortCut) return <></>;

  const onChangeToken = (tokenSymbol: string) => {
    setShortCutData({
      ...shortCutData,
      token: tokenSymbol,
    });
  };

  const onChangeToAddress = (e: React.FormEvent<HTMLInputElement>) => {
    setShortCutData({
      ...shortCutData,
      toAddress: e.currentTarget.value,
    });
  };

  const onChangeAmount = (e: React.FormEvent<HTMLInputElement>) =>
    setShortCutData({
      ...shortCutData,
      amount: e.currentTarget.value,
    });

  const onChangeToNickName = (e: React.FormEvent<HTMLInputElement>) => {
    setShortCutData({
      ...shortCutData,
      toNickName: e.currentTarget.value,
    });
  };

  const onClickButton = () => {
    addSendShortCut.userParams = [
      { name: "recipientAddress", value: shortCutData.toAddress },
      { name: "recipientNickName", value: shortCutData.toNickName },
      { name: "amount", value: shortCutData.amount },
      { name: "token", value: shortCutData.token },
    ];
    localStorageService.add("myShortCut", addSendShortCut);
  };

  return (
    <div style={{ marginLeft: "50px", width: "100vw" }}>
      <S.Title>Add Send ShortCuts</S.Title>
      <div style={{ display: "flex", marginTop: "67px", alignItems: "center" }}>
        <S.SubTitle>Send</S.SubTitle>
        <TokenDropDownInput
          placeholder="token"
          tokenSymbol={shortCutData.token}
          onClickSymbol={onChangeToken}
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
        <S.SubTitle>to</S.SubTitle>
        <TextInput
          placeHodler="address"
          amount={shortCutData.toAddress}
          onChangeHanlder={onChangeToAddress}
          width="1000px"
        ></TextInput>
      </div>
      <div style={{ display: "flex", marginTop: "30px", alignItems: "center" }}>
        <S.SubTitle style={{ width: "150px" }}>nickname</S.SubTitle>
        <TextInput
          placeHodler="nickname"
          amount={shortCutData.toNickName}
          onChangeHanlder={onChangeToNickName}
          width="500px"
        ></TextInput>
      </div>
      <AddShortCutButton onClickHandler={onClickButton} />
    </div>
  );
};
