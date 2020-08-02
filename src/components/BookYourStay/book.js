import React,{useState} from 'react'
import Button from '../button/button'

import moon1 from "../../assets/place5.jpeg"
import moon2 from "../../assets/place2.jpeg"
import moon3 from "../../assets/place3.jpeg"
import moon4 from "../../assets/place4.jpeg"
import moon5 from "../../assets/place5.jpeg"
import moon6 from "../../assets/place6.jpeg"

import {Link} from "react-router-dom"

import "./book.css"




  

function Book() {
    const [count, setCount] = useState("0");

    
    // ratings: {
    //     '1': require('../assets/rating-1.png'),
    //     '2': require('../assets/rating-2.png'),
    //     '3': require('../assets/rating-3.png'),
    //     '4': require('../assets/rating-4.png'),
    //     '5': require('../assets/rating-5.png'),
    //   }
    return (
        <div className="container">
                <h1 className="ylt animate__animated animate__fadeIn">Book your Stay</h1>

            <div className="row aww">
                <div className="col-md-4 col-sm-12 space4">
                    <div className="flexlist">
                        <h3>Popular Stays</h3>
                        <div className="hr"></div>
                        <p onClick={()=>setCount(1)} className="listbutton">The Taj Lunar</p>
                        <p onClick={()=>setCount(2)} className="listbutton">Mariot Apollo</p>
                        <p onClick={()=>setCount(3)} className="listbutton">Lunar Club</p>
                        <p onClick={()=>setCount(4)} className="listbutton">Earth View <br></br>Plaza</p>
                        <p onClick={()=>setCount(5)} className="listbutton">The Crescent</p>
                        <p onClick={()=>setCount(6)} className="listbutton">Hilton - Balmer<br></br> Basin</p>

                    </div>
                </div>
                <div className="col-md-8 col-sm-12 space4 ">
                     <img  className="imgtype" src={require("../../assets/place"+count+".jpeg")}></img> 
                </div>
                
            </div>
            {
                count!="0"?<div className="mt-2 animate__animated animate__bounceInLeft"><Link to="/form"><Button text="Proceed" ></Button></Link></div>:null
            }
            
        </div>
    )
}

export default Book
