import React from 'react';
import Particle from '../components/particle/particle';
import Mainbox from '../components/mainbox';
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import ComingSoon from "../components/comingsoon/soon"


function ComeSoon() {
  return (
    <div className="App">
        <Header/>
        <Particle/>
        <ComingSoon/>
        <Footer/>
    </div>
  );
}

export default ComeSoon;
