import React from 'react';
import logo from './logo.svg';
import {GlobalStyle} from './GlobalStyle'
import { Header } from './components/Header';
import { SignIn } from './pages/SignIn';


function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Header /> */}
      <SignIn />
    </>
  );
}

export default App;
