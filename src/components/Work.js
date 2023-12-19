import "./WorkCardStyle.css";
import React from "react";
import Hospital from "./austin-distel-wD1LRb9OeEo-unsplash.jpg";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img className="hospitalimg" src={Hospital} alt="img" />
          <h2 className="project-title"> Project Title</h2>
          <div className="pro-details">
            <p>
                this is text
            </p>
            <div className="pro-btns">
         <NavLink to="url.com" className="btn">view</NavLink>
         <NavLink to="url.com" className="btn">source</NavLink>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
