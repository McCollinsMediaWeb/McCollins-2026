
import React from "react";
import { digitalSteps } from "../../Data/DigitalProcessData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import HowWeWorkCard from "../Card/HowWeWorkCard";

const HowWeWork = () => {

    return (
        <div className="section-wrapper-digital-process">
            <div className="digital-process-layout">
                <div className="section digital-process-banner" style={{ backgroundImage: 'none', border: 'none', paddingBottom: '20px' }}>
                    <style>
                        {
                            `
                            .digital-process-banner::before{
                                background-image: none;
                            }
                        `
                        }
                    </style>
                    <div className="hero-container">
                        <div className="digital-process-content">
                            <div className="row grid-spacer-5">
                                <div className="col text-center">
                                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                                        <div className="d-flex flex-column gspace-2">
                                            <div className="sub-heading justify-content-center">
                                                <i className="fa-regular fa-circle-dot"></i>
                                                <span>How We Work</span>
                                            </div>
                                            <h2 className="title-heading">The McCollins Ascension Model</h2>
                                            <p>A systematic roadmap designed to accelerate brand growth and sustain international leadership.</p>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                                {/* <div className="col">
                                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                                        <div className="d-flex flex-column gspace-2 justify-content-end h-100">
                                            <p>
                                                Our streamlined process ensures your digital growth is seamless and effective. ipsum dolor sit amet,
                                                consectetur adipiscing elit. In ex ligula, varius at rutrum et, finibus sed felis.
                                            </p>
                                            <div className="link-wrapper">
                                                <a href="./contact">Get Started Now</a>
                                                <i className="fa-solid fa-arrow-circle-right"></i>
                                            </div>
                                        </div>
                                    </AnimateOnScroll>
                                </div> */}
                            </div>

                            <div className="digital-process-steps-wrapper">
                                <style>
                                    {`
                                        .digital-process-steps-wrapper::before {
                                            background-image: none;
                                        }
                                    `}
                                </style>
                                <div className="digital-process-steps" style={{ border: 'none', backgroundColor: 'var(--background-color)' }}>
                                    <div className="row row-cols-lg-5 row-cols-md-2 row-cols-1">
                                        {digitalSteps.map((item, index) => (
                                            <HowWeWorkCard
                                                key={index}
                                                icon={item.icon}
                                                step={item.step}
                                                title={item.title}
                                                content={item.content}
                                                isFirst={index === 0}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="spacer"></div> */}
            </div>
        </div>
    );
};

export default HowWeWork;
