import React from "react";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer.js";
import HeroImg2 from "../components/HeroImg2.js";
import PricingCard from "../components/PricingCard.js";
import Work from "../components/Work.js";


const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some Of My Recent Works"/>
      <Work/>
      <PricingCard/>
      <Footer />
      
    </div>
  );
};

export default Project;
