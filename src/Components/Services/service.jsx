import React from "react";
import { services } from "../../Data/ServiceData";
import ServiceCard from "../Card/ServiceCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import TextReveal from "../Hooks/TextReveal";

function ServiceSection() {

    return (
        <>
            <div className="section ServiceSection">
                <div className="hero-container">
                    <div className="d-flex flex-column justify-content-center gspace-5">
                        
                        {/* Centered Subheading */}
                        <div className="d-flex flex-column justify-content-center text-center mb-4">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="sub-heading align-self-center" style={{ marginBottom: '20px', justifyContent: 'center' }}>
                                    <i className="fa-regular fa-circle-dot" style={{ color: '#3876fc' }}></i>
                                    <span style={{ fontFamily: 'Delight', textTransform: 'uppercase' }}>Our Core Services</span>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        {/* Split Main Heading & Description */}
                        <div className="row align-items-end mb-5">
                            <div className="col-md-7 text-start">
                            <TextReveal>
                                <h2 className="service-section-title">
                                    <span className="sans-bold">DIGITAL </span> <span className="serif-italic">Solutions</span> <span className="sans-bold"> THAT</span>
                                    <br />
                                    <span className="sans-bold">DRIVE REAL RESULTS</span>
                                </h2>
                            </TextReveal>
                            </div>
                            <div className="col-md-5 text-start pt-3 pt-md-0">
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <p className="service-section-desc">
                                        Witness the transformative impact of strategies engineered for global resonance and measurable market dominance.
                                    </p>
                                </AnimateOnScroll>
                            </div>
                        </div>

                        {/* Service Cards Grid */}
                        <div className="card-service-wrapper">
                            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
                                {services.map((item) => (
                                    <div className="col" key={item.id}>
                                        <ServiceCard
                                            icon={item.icon}
                                            title={item.title}
                                            content={item.content}
                                            speed={item.speed}
                                            link={item.link}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Centered Footer Link */}
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="service-link-footer text-center mt-5">
                                <p>
                                    Need a custom solution? Let&apos;s create a strategy tailored for your business.
                                    <a href="./contact"> Get a Free Strategy Call</a>
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceSection;