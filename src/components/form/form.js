import React from 'react'
import "./form.css"
import Button from "../button/button"
import {Link} from "react-router-dom"


function Form() {
    return (
        <div>
            <h2 className="ocllr animate__animated animate__bounceInLeft">To book this service, fill out the following form:</h2>
            <div className="formflexing mt-3">
                <div className="formflexinput">
                    <label>First Name:</label>
                    <input type="text" required ></input>
                </div>
                <div className="formflexinput">
                    <label>Last Name:</label>
                    <input type="text" required ></input>
                </div>
                <div className="formflexinput">
                    <label>Email:</label>
                    <input type="email" required ></input>
                </div>
                <div className="formflexinput">
                    <label>Contact No:</label>
                    <input type="number" required ></input>
                </div>
                <div className="formflexinput">
                    <label>Address:</label>
                    <textarea type="text" required ></textarea>
                </div>
                <div className="formflexinput">
                    <label>Country:</label>
                    <input type="text" required ></input>
                </div>
                <div>
                  <Link to="/thankyou"><Button text="Submit"></Button></Link>  
                </div>
            </div>
        </div>
    )
}

export default Form
