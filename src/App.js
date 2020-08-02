import React from 'react';
import logo from './logo.svg';
import './App.css';

import Splash from "./screens/splashscreen"
import KommunicateChat from "./chat"

import Routes from "./router/routing"




function App() {
  return (
    <div className="App">
      <Routes/>
      {/* <KommunicateChat/> */}
    </div>
  );
}

export default App;
