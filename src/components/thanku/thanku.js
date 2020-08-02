import React from 'react'
import ty2 from "../../assets/ty2.png"
import ty1 from "../../assets/ty1.png"
import "./thanku.css"


function thanku() {
    return (
        <div>
            <img className="oo animate__animated animate__pulse" src={ty1} ></img>
            <h3>You have <span className="yyee">successfully</span> made your booking request. <br></br>You will be hearing from concerned agencies shortly via <span className="yyee">mail</span>.</h3>
            <h2 className="ooo animate__animated animate__fadeIn" >May the force be with you  </h2>
            <img className="oo" src="https://media1.tenor.com/images/a94a598312d8769311002543b6bb0a54/tenor.gif?itemid=16219419"></img>
        </div>
    )
}

export default thanku
