import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const MapsSection = () => {
  return (
    <div className="section pt-0">
        <div className="hero-container">
            <AnimateOnScroll animation="fadeInUp" speed="normal">
                <iframe
                loading="lazy"
                className="maps overflow-hidden"
                src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near"
                title="London Eye, London, United Kingdom"
                aria-label="London Eye, London, United Kingdom" 
                ></iframe>
            </AnimateOnScroll>
        </div>
    </div>
  );
};

export default MapsSection;
