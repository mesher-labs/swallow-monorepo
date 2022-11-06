import styled from "styled-components";
import { useWeb3 } from "./App";
import { LNB } from "./components/SideBar/LNB";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { AddSendShortCut } from "./pages/AddSendShortcut";
import { AddBuyShortCut } from "./pages/AddBuyShortcut";
import { AddTokenBalanceShortcut } from "./pages/AddTokenBalanceShortcut";
import { AddAaveApyShortcut } from "./pages/AddAaveApyShortcut";
import { Header } from "./components/Header";
import { Browse } from "./pages/Browse";

const Layout = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Router = () => {
  const { serviceState } = useWeb3();
  switch (serviceState) {
    case "unSigned":
      return <SignIn />;
    case "HOME":
      return (
        <>
          <Header />
          <Layout>
            <LNB />
            <Home />
          </Layout>
        </>
      );
    case "BROWSE":
      return (
        <>
          <Header />
          <Layout>
            <LNB />
            <Browse />
          </Layout>
        </>
      );
    case "AddSendShortcut":
      return (
        <>
          <Header />
          <Layout>
            <LNB />
            <AddSendShortCut />
          </Layout>
          <div style={{ display: "flex", marginTop: "50px" }}></div>
        </>
      );
    case "AddBuyShortcut":
      return (
        <>
          <Header />
          <Layout>
            <LNB />
            <AddBuyShortCut />
          </Layout>
        </>
      );
    case "AddAaveShortcut":
      return (
        <>
          <Header />
          <Layout>
            <LNB />
            <AddAaveApyShortcut />
          </Layout>
        </>
      );
    case "AddTokenBalanceShortcut":
      return (
        <>
          <Header />
          <Layout>
            <LNB />
            <AddTokenBalanceShortcut />
          </Layout>
        </>
      );
    default:
      return <></>;
  }
};
