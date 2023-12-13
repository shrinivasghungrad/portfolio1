import "./HeroImg.css";
import React from "react";
import FirstImg from "../assets/firstbg.jpg";
import { Link } from "react-router-dom";



const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="Firstbg" src={FirstImg} alt="FirstImg" />
      </div>
      <div className="content">
        <p>
            hhhhhhhhhhhhh
        </p>
        <h1>
            React.......
        </h1>
        <div>
            <Link to="/Project" className="btn" >Projects</Link>
            <Link to="/Contact" className="btn-light" >Contact</Link>
        
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
