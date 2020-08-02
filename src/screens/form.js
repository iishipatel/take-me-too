import React from 'react';
import Particle from '../components/particle/particle';
import Form from '../components/form/form';
import Footer from "../components/footer/footer"
import Header from "../components/header/header"


function Landing() {
  return (
    <div>
        <Header/>
        <Particle/>
        <Form/>
        <Footer/>
    </div>
  );
}

export default Landing;
