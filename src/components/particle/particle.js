import Particles from 'react-particles-js';
import React, { Component } from 'react';
import "./particle.css";

class Particle extends Component{
  
    render(){
        return (
            <Particles 
            className="particles"
            params={{
                particles: {
                  color: {
                    value: "#fff"
                  },
                  line_linked: {
                    color: {
                    "enable": false,
                      value: "#9f9f9f"
                    }
                  },
                  number: {
                    value: 140
                  },
                  size: {
                    value: 2
                  }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        }
                    }
                }
              }}
            
             />
        );
    };
 
}

export default Particle