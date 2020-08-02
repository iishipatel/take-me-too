import React from 'react';
import "./moon.css"
import moon from "../../assets/moon.png"
import Tinycard from "../cards/tinycard"
import Button from "../button/button"
import moon1 from "../../assets/moon1.png"
import {Link} from "react-router-dom"




function Moon() {
  return (
    <div className="mooncenter">
        <div className="mflex1">
            <img src={moon}></img>
            <div>
                <h2 className="heh">Moon</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>

        <h3 className="h3text heh">Book Your Seat</h3>
        <Tinycard 
        name="Space X crew 1" 
        date="Aug 2030"
        time="72hrs"
        moon1={moon1}
        />
        <Tinycard 
        name="Space X crew 2" 
        date="Jan 2022"
        time="32hrs"
        moon1={moon1}

        />
        

        <div className="flexbtn">
          <Link className="animate__animated animate__bounceInRight" to="/moondestination"><Button text="Book Your Stay"/></Link>  
          <div  className="animate__animated animate__bounceInLeft"><Link  to="/experience">  <Button text="Book Your Experience"/></Link></div>
        </div>
       

    </div>
  );
}

export default Moon;
