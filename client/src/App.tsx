import React from 'react';
import logo from './logo.svg';
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header';
import { SignIn } from './pages/SignIn';
import { LNB } from './components/SideBar/LNB';


function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      {/* <SignIn /> */}
      <LNB/>
    </>
  );
}

export default App;
