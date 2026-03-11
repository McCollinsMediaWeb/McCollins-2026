import React from "react";
import { whychooseus } from "../../Data/ChooseUsData";
import ChooseUsCard from "../Card/ChoooseUsCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import WebDevelopmentCard from "../Card/WebDevelopmentCard";
import { webDevelopmentSteps } from "../../Data/DigitalProcessData";

function LargestBrands() {
    return (
        <>
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column gspace-5">
                        <div className="chooseus-content-container">
                            <div className="d-flex flex-column gspace-5">
                                <AnimateOnScroll animation="fadeInDown" speed="normal">
                                    <div className="d-flex flex-column gspace-2">
                                        <h2 className="title-heading">Trusted By Largest Brands<br />For Website Development</h2>
                                        <p className="mb-0" style={{ fontWeight: 100 }}>Every brand in today's time must have a website to showcase itself to its audience. Having a mobile friendly website is even more important. Our team of in-house developers specialize in various backends be it Wordpress, WooCommerce, Magneto, React or Shopify to name a few. Our agency is partners with several leading platforms.</p>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>


                        <div className="digital-process-steps-wrapper">
                            <style>
                                {`
                                .digital-process-steps-wrapper::before{
                                    background-image: none !important;
                                }
                            `}
                            </style>
                            <div className="digital-process-steps" style={{ backgroundColor: 'var(--background-color)', border: 'none' }}>
                                <div className="row row-cols-lg-5 row-cols-md-2 row-cols-1">
                                    {webDevelopmentSteps.map((item, index) => (
                                        <WebDevelopmentCard
                                            key={index}
                                            icon={item.icon}
                                            step={item.step}
                                            title={item.title}
                                            title2={item.title2}
                                            content={item.content}
                                            isFirst={index === 0}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* <div className="chooseus-card-container">
                            <div className="row">
                                {whychooseus.slice(0, 6).map((item) => (
                                    <div className="col-md-4">
                                        <ChooseUsCard
                                            key={item.id}
                                            icon={item.icon}
                                            title={item.title}
                                            content={item.content}
                                            link={item.link}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>

        </>
    );
}

export default LargestBrands;