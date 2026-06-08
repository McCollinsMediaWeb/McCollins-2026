import React from "react";
import { digitalSteps } from "../../Data/DigitalProcessData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const HowWeWork = () => {
    return (
        <div className="section how-we-work-section">
            <div className="hero-container">
                <div className="row text-center justify-content-center mb-5">
                    <div className="col-lg-10">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <div>
                                <div className="sub-heading justify-content-center">
                                    <i className="fa-regular fa-circle-dot case-study-dot"></i>
                                    <span>How We Work</span>
                                </div>
                                <h2 className="how-we-work-heading mt-3">
                                    <span className="line-delight">THE MCCOLLINS ASCENSION </span>
                                    <span className="line-playfair">Model</span>
                                </h2>
                                <p className="how-we-work-sub-desc mt-3">
                                    A SYSTEMATIC ROADMAP DESIGNED TO ACCELERATE BRAND GROWTH AND SUSTAIN INTERNATIONAL LEADERSHIP.
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>

                <div className="how-we-work-steps-row pt-4">
                    {digitalSteps.map((item, index) => (
                        <div key={index} className="how-we-work-step-col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={index * 100}>
                                <div className="how-we-work-item">
                                    <div className="d-flex justify-content-between align-items-start mb-4">
                                        <img src={item.icon} alt={item.title} className="how-we-work-icon" />
                                        <span className="how-we-work-number">{item.step}</span>
                                    </div>
                                    <h4 className="how-we-work-title">{item.title}</h4>
                                    <p className="how-we-work-desc">{item.content}</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;
