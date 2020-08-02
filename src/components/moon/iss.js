import React from 'react';
import "./moon.css"
import moon from "../../assets/iss2.png"
import Tinycard from "../cards/tinycard"
import Button from "../button/button"
import moon1 from "../../assets/iss.png"
import {Link} from "react-router-dom"



function ISS() {
  return (
    <div className="mooncenter">
        <div className="mflex1">
            <img src={moon}></img>
            <div>
                <h2 className="heh">The International Space Station</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>

        <h3 className="h3text heh">Book Your Seat</h3>
        <Tinycard 
        name="Space X crew 1" 
        date="Sept 2022"
        time="48hrs"
        moon1={moon1}
        />
        <Tinycard 
        name="Soyuz MS 2" 
        date="Jan 2023"
        time="46hrs"
        moon1={moon1}
        />
        

        <div className="flexbtn">
        <Link className="animate__animated animate__bounceInLeft" to="/form">   <Button text="Book Your Stay at the ISS"/></Link> 
        <Link className="animate__animated animate__bounceInRight" to="/experience">   <Button text="Book Your Experience"/></Link> 
        </div>
       

    </div>
  );
}

export default ISS;
