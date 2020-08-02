import React from 'react';
import "./tinycard.css"
import moon1 from "../../assets/moon1.png"
import moon2 from "../../assets/moon1.png"



function Tinycard(props) {
  return (
    <div className="cardflex1">
        <img className="moonimg" src={props.moon1}></img>
        <div className="cardflex2">
            <div>
                <h4 className="whiteshi">{props.name}</h4>
            </div>
            <div className="cardflex3">
                <p>Launch Date: {props.date} <span className="whiteshi">- </span>  Estimated Duration: {props.time} </p>
                
            </div>
        </div>
        <div className="moreinfo">
            <a href="https://www.nasa.gov/centers/kennedy/events/index.html"><p>Click Here <br></br> For more Info <br></br>✨</p></a>
        </div>

    </div>
  );
}

export default Tinycard;
