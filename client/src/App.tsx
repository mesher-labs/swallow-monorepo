import React from "react";
import logo from "./logo.svg";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Home />
    </>
  );
}

export default App;
