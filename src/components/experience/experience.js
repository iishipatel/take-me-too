import React from 'react'
import "./exp.css"
import {Link} from "react-router-dom"


const ExperienceCard = ({title,pic}) => {
    return (
        <div className="cflexx">
            <Link to="/form" className="cool">
                
                    <img className="cardimg1" src={pic}></img>
                    <div className="ylotext"><h2>{title}</h2></div>
                    <div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown .</p></div>
            
            </Link>
        </div>
    )
}

export default ExperienceCard
