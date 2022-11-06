<<<<<<< HEAD
import React from "react";
import logo from "./logo.svg";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
=======
import React from 'react';
import logo from './logo.svg';
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header';
import { SignIn } from './pages/SignIn';
import { LNB } from './components/SideBar/LNB';

>>>>>>> 0106a5486fbe8718ec041a5f18995d8245d5c8b1

function App() {
  return (
    <>
      <GlobalStyle />
<<<<<<< HEAD
      <Header />
      <Home />
=======
      {/* <Header /> */}
      {/* <SignIn /> */}
      <LNB/>
>>>>>>> 0106a5486fbe8718ec041a5f18995d8245d5c8b1
    </>
  );
}

export default App;
