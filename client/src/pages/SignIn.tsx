import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../common/constants/colors";
import React from "react";
import localStorageService from "../common/services/local-storage.service";
import { ethers } from "ethers";
import Web3 from "web3";
import { useWeb3 } from "../App";

const S = {
  Title: styled.h1`
    font-weight: 700;
    font-size: 80px;
    color: ${COLORS.white};
    width: fit-content;
    margin: 0 auto;
    margin-top: 60px;
  `,
  SubTitle: styled.h2`
    font-weight: 400;
    font-size: 32px;
    color: ${COLORS.white};
    width: fit-content;
    margin: 0 auto;
    margin-top: 23px;
  `,
  Form: styled.div`
    width: 515px;
    margin: 0 auto;
    margin-top: 86px;
  `,
  FormTitle: styled.h3`
    font-weight: 700;
    font-size: 24px;
    color: ${COLORS.white};
  `,
  FormInput: styled.input`
    border: 1px solid ${COLORS.white};
    border-radius: 34.5px;
    background: transparent;
    margin-top: 30px;
    padding-left: 30px;
    color: ${COLORS.darkGray};
    font-weight: 400;
    font-size: 24px;
    width: 100%;
    height: 69px;
  `,
  FormButton: styled.button`
    width: 317px;
    height: 69px;
    display: block;
    background: ${COLORS.purple};
    color: ${COLORS.white};
    border-radius: 34.5px;
    margin: 0 auto;
    margin-top: 44px;
    font-size: 28px;
    font-weight: 700;
    cursor: pointer;
  `,
};
export const SignIn = () => {
  const [nickName, setNickName] = useState<string>("");
  const { setServiceState } = useWeb3();
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setNickName(e.currentTarget.value);
  };
  const onSignIn = async () => {
    if (!nickName.length) return alert("please enter your nickname");

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();

    localStorageService.set("nickName", nickName);
    localStorageService.set("account", accounts[0]);

    setServiceState("HOME");
  };
  return (
    <>
      <S.Title>Swallow</S.Title>
      <S.SubTitle>Swallowing all DeFi</S.SubTitle>
      <S.Form>
        <S.FormTitle>Make your own tag of address</S.FormTitle>
        <S.FormInput
          placeholder="ex) @eth_sf"
          value={nickName}
          onChange={onChangeHandler}
        />
        <S.FormButton onClick={onSignIn}>sign in</S.FormButton>
      </S.Form>
    </>
  );
};
