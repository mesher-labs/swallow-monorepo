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
    case "home":
      return (
        <>
          <Header />
          <Layout>
            <LNB />
            <Home />
          </Layout>
        </>
      );
    case "browse":
      return (
        <>
          <Header />
          <Layout>
            <LNB />
            <Browse />;
          </Layout>
        </>
      );
    case "AddSendShortcut":
      return (
        <>
          <Header />
          <div style={{ display: "flex", marginTop: "50px" }}>
            <AddSendShortCut />
          </div>
        </>
      );
    case "AddBuyShortcut":
      return (
        <>
          <Header />
          <div style={{ display: "flex", marginTop: "50px" }}>
            <AddBuyShortCut />
          </div>
        </>
      );
    case "AddAaveShortcut":
      return (
        <>
          <Header />
          <div style={{ display: "flex", marginTop: "50px" }}>
            <AddAaveApyShortcut />
          </div>
        </>
      );
    case "AddTokenBalanceShortcut":
      return (
        <>
          <Header />
          <div style={{ display: "flex", marginTop: "50px" }}>
            <AddTokenBalanceShortcut />
          </div>
        </>
      );
    default:
      return <></>;
  }
};
