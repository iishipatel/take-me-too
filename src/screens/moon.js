import React from 'react';
import Particle from '../components/particle/particle';
import Mainbox from '../components/mainbox';
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import Moon from "../components/moon/moon"


function MoonScreen() {
  return (
    <div className="App">
        <Header/>
        <Particle/>
        <Moon/>
        <Footer/>
    </div>
  );
}

export default MoonScreen;
