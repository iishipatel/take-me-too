import Particles from 'react-particles-js';
import React, { Component } from 'react';
import "./mainbox.css";
import img2 from "../assets/Ellipse 2.png"
import img3 from "../assets/Ellipse 3.png"
import img4 from "../assets/Ellipse 4.png"
import img5 from "../assets/Ellipse 5.png"
import img6 from "../assets/Ellipse 6.png"
import img7 from "../assets/Ellipse 7.png"
import img8 from "../assets/Ellipse 8.png"
import img1 from "../assets/Ellipse 1.jpeg"

import {Link} from "react-router-dom"





class Mainbox extends Component{
  
    render(){
        return (
            <div className="mainbox">
                <h1 className="animate__animated animate__fadeIn mb-2">Book your next space<br></br>adventure right now</h1>

            <div className="flex0">
                <div className="flex2">
                    
                        <h3>Top destination</h3>
                        <div className="flex1 animate__animated animate__bounceInLeft">
                        <Link to="/moon"><img className="imground-img1" src={img1}></img>  </Link>                       
                        <Link to="/spacestation"><img className="imground" src={img2}></img></Link>    
                        </div>
                    
                </div>
                <div className="flex2">
                    
                        <h3>Coming Soon</h3>
                        <div className="flex1 animate__animated animate__bounceInRight">
                        <Link to="/comingsoon"><img className="imground" src={img3}></img>    </Link>                       
                        <Link to="/comingsoon"><img className="imground" src={img4}></img></Link>   
                        </div>
                    
                </div>
               
                </div>

                <div className="flex2">
                    
                        <h3>Book Experiences</h3>
                        <div className="flex3 animate__animated animate__bounceInUp">
                        <Link to="/experience"><img className="imground" src={img5}></img></Link>                        
                        <Link to="/experience"><img className="imground" src={img6}></img> </Link>                       
                        <Link to="/experience"><img className="imground" src={img7}></img> </Link>                       
                        <Link to="/experience"><img className="imground" src={img8}></img></Link>
                        </div>
                    
                </div>
            
            </div>
        )
        }
}

export default Mainbox