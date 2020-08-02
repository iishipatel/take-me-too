import React from 'react';
import Particle from '../components/particle/particle';
import Ty from '../components/thanku/thanku';
import Footer from "../components/footer/footer"
import Header from "../components/header/header"



function Landing() {
  return (
    <div>
        <Header/>
        <Particle/>
        <Ty/>
        <Footer/>
    </div>
  );
}

export default Landing;
