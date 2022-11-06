import React, { createContext, useContext } from "react";
import logo from "./logo.svg";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header";
import { SignIn } from "./pages/SignIn";
import { LNB } from "./components/SideBar/LNB";
import { AddBuyShortCut } from "./pages/AddBuyShortcut";
import { AddSendShortCut } from "./pages/AddSendShortcut";
import { AddAaveApyShortcut } from "./pages/AddAaveApyShortcut";
import { Home } from "./pages/Home";
import styled from "styled-components";
import { AddTokenBalanceShortcut } from "./pages/AddTokenBalanceShortcut";
import { useEffect, useState } from "react";
import Web3 from "web3";

const Web3Context = createContext<{
  web3: Web3;
  setWeb3: React.Dispatch<React.SetStateAction<Web3>>;
}>({
  web3: new Web3(),
  setWeb3: () => {},
}); // 기본 값

export const Web3Provider = ({ children }: any) => {
  const [web3, setWeb3] = useState<Web3>(new Web3());
  useEffect(() => {
    if (!window.ethereum) return alert("please install metamask first");
    setWeb3(new Web3(window.ethereum));
  }, window.ethereum);

  const value = {
    web3,
    setWeb3,
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
        <Header />
        {/* <Layout>
          <LNB />
          <Home />
        </Layout> */}
        <SignIn />
        {/* <AddBuyShortCut/> */}
        {/* <AddSendShortCut/> */}
        {/* <AddAaveApyShortcut /> */}
        {/* <AddTokenBalanceShortcut /> */}
        {/* <LNB/> */}
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
