import React from 'react';
import Particle from '../components/particle/particle';
import Mainbox from '../components/mainbox';
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import ISS from "../components/moon/iss"


function MoonScreen() {
  return (
    <div className="App">
        <Header/>
        <Particle/>
        <ISS/>
        <Footer/>
    </div>
  );
}

export default MoonScreen;
