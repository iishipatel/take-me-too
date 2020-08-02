import React from 'react';

import Particle from '../components/particle/particle';
import Mainbox from '../components/mainbox';
import Footer2 from "../components/footer/f2"
import Header from "../components/header/header"
import KommunicateChat from "../chat"


function Landing() {
  return (
    <div>
        <Header/>
        <Particle/>
        <Mainbox/>
        <Footer2/>
    
    </div>
  );
}

export default Landing;
