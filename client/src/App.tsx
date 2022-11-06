import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { LNB } from "./components/SideBar/LNB";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Layout>
        <LNB />
        <Home />
      </Layout>
      {/* <SignIn /> */}
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
