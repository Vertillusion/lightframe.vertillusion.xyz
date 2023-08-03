import React from 'react';

import Header from "./components/Header";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Log from "./components/Log";
import Footer from "./components/Footer";

import "./app.scss";

function App(){
  return <>
    <Header/>
    <Main/>
    <Intro/>
    <Log/>
    <Footer/>
  </>
}

export default App;