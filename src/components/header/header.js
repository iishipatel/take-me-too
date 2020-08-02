

import React, { Component } from 'react';
import "./header.css"
import Logo from "../../assets/logomain.png"
import {Link} from "react-router-dom"

class Header extends Component{
  
    render(){
        return (
            
                <nav className="nav-wrapper #212121 grey darken-4">
                    <div>
                        <Link to="/" className="brand-logo"><img className="logomain" src={Logo}></img></Link>
                    </div>
                
                        <div className="right ">
                            <button className="auth">Login</button>
                            <button className="auth">Signup</button>
                        </div>
                </nav>
            

        )
        }
}

export default Header