import "./AboutContentStyle.css";
import reactimg from "../assets/reactimg.jpg"
import reactimg2 from "../assets/reactimg2.jpg"

import React from 'react'
import { Link } from 'react-router-dom';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>
                Who Am I
            </h1>
            <p>
                 I am React Front-End developer . i am create responsive secure website 
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={reactimg} alt="img" className="img"/>

                </div>
                <div className="img-stack bottom">
                    <img src={reactimg2} alt="img" className="img"/>

                </div>
            
            </div>
        </div>
    </div>
  )
}

export default AboutContent;