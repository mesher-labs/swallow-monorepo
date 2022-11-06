import React from 'react';
import logo from './logo.svg';
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header';
import { SignIn } from './pages/SignIn';
import { LNB } from './components/SideBar/LNB';
import { AddBuyShortCut } from './pages/AddBuyShortcut';
import { AddSendShortCut } from './pages/AddSendShortcut';
import { AddAaveApyShortcut } from './pages/AddAaveApyShortcut';


function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      {/* <SignIn /> */}
      {/* <AddBuyShortCut/> */}
      {/* <AddSendShortCut/> */}
      <AddAaveApyShortcut/>
      {/* <LNB/> */}
    </>
  );
}

export default App;
