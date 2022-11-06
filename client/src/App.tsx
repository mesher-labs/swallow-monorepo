import React, { createContext, useContext } from "react";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Web3 from "web3";
import localStorageService from "./common/services/local-storage.service";
import { Router } from "./router";

type ServiceState =
  | "unSigned"
  | "home"
  | "browse"
  | "AddBuyShortcut"
  | "AddSendShortcut"
  | "AddAaveShortcut"
  | "AddTokenBalanceShortcut";

const Web3Context = createContext<{
  web3: Web3;
  setWeb3: React.Dispatch<React.SetStateAction<Web3>>;
  serviceState: ServiceState;
  setServiceState: React.Dispatch<React.SetStateAction<ServiceState>>;
}>({
  web3: new Web3(),
  setWeb3: () => {},
  serviceState: "home",
  setServiceState: () => {},
}); // 기본 값

export const Web3Provider = ({ children }: any) => {
  const [web3, setWeb3] = useState<Web3>(new Web3());
  const [serviceState, setServiceState] = useState<ServiceState>("home");

  useEffect(() => {
    if (!window.ethereum) return alert("please install metamask first");
    window.ethereum.enable().then(() => {
      setWeb3(new Web3(window.ethereum));
    });
  }, window.ethereum);

  const account = localStorageService.get("account");
  const nickName = localStorageService.get("nickName");

  useEffect(() => {
    if (!account || !nickName) setServiceState("unSigned");
  }, [account, nickName]);

  const value = {
    web3,
    setWeb3,
    serviceState,
    setServiceState,
  };

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};

export const useWeb3 = () => {
  return useContext(Web3Context);
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Web3Provider>
        <Router />
      </Web3Provider>
    </>
  );
}

export default App;

const Layout = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
