import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer.js";
import HeroImg2 from './../components/HeroImg2';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text=" i am......"/>
      <Footer />
    </div>
  );
};

export default About;
