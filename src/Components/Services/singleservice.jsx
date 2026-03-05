import React from "react";
import { services } from "../../Data/ServiceData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const SingleServiceSection = () => {
    return (
        <>
            <div className="section pb-0" style={{ backgroundColor: '#212121' }}>
                <div className="hero-container">
                    <div className="d-flex flex-column gspace-5">
                        {/* <div className="single-service-spacer"></div> */}
                        <div className="single-service-title-wrapper" style={{ backgroundColor: '#212121' }}>
                            <div className="single-service-title" style={{ backgroundColor: '#212121' }}>
                                <AnimateOnScroll animation="fadeInRight" speed="slow">
                                    <div className="sub-heading" style={{ justifyContent: 'center' }}>
                                        <i className="fa-regular fa-circle-dot"></i>
                                        <span style={{ fontSize: 'var(--font-size-3xl)', color: '#3876fc' }}>Marketing Automation</span>
                                    </div>
                                </AnimateOnScroll>
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <h2 className="title-heading text-center" style={{ WebkitTextFillColor: "#ffffff" }}>
                                        Precision Automation<br /> For High-Velocity Brands.
                                    </h2>
                                </AnimateOnScroll>
                                <p className="text-center" style={{ marginTop: '15px', fontWeight: '100', }}>
                                    We architect sophisticated automation ecosystems that bridge the gap between audience engagement and<br /> commercial scale. By engineering intelligent workflows that nurture prospects with precision, we transform your digital<br /> presence into a high-velocity engine for sustainable growth.
                                </p>
                            </div>

                            <img
                                src="/assets/images/dummy-img-600x400.jpg"
                                alt="Service Image"
                                className="single-service-img"
                                style={{ marginTop: '40px', marginBottom: '70px' }}
                            />

                        </div>
                    </div>
                </div>
            </div>





            <div className="section pt-5 pb-0" style={{ backgroundColor: '#000' }}>
                <div className="hero-container">
                    <div className="d-flex flex-column gspace-5">
                        {/* <div className="single-service-spacer"></div> */}
                        <div className="single-service-title-wrapper" >
                            <div className="single-service-title" >
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <h2 className="title-heading text-center" style={{ WebkitTextFillColor: "#ffffff" }}>
                                        Core Performance Pillars
                                    </h2>
                                </AnimateOnScroll>
                            </div>

                            <div className="row pt-5" >
                                <div className="col-md-8">
                                    <img
                                        src="/assets/images/dummy-img-1920x900.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                    />
                                </div>
                                <div className="col-md-4 d-flex flex-column justify-content-center">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Intelligent Lead Nurturing
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ marginTop: '15px' }}>We design multi-stage, behavior-triggered workflows that deliver personalized content at the exact moment of intent, accelerating the transition from lead to loyal customer.</p>
                                </div>
                            </div>


                            <div className="row" >
                                <div className="col-md-8 d-flex flex-column justify-content-center">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Omnichannel Synchronization
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ marginTop: '15px' }}>Architecting a unified communication layer across email, SMS and web to ensure a seamless and consistent brand narrative throughout the entire user journey.</p>
                                </div>
                                <div className="col-md-4">
                                    <img
                                        src="/assets/images/dummy-img-1920x900.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                    />
                                </div>
                            </div>



                            <div className="row" >
                                <div className="col-md-8">
                                    <img
                                        src="/assets/images/dummy-img-1920x900.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                    />
                                </div>
                                <div className="col-md-4 d-flex flex-column justify-content-center">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            CRM & Data Integration
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ marginTop: '15px' }}>Engineering seamless data pipelines between your digital platforms and CRM, providing a 360-degree view of consumer behavior and actionable business intelligence.</p>
                                </div>
                            </div>


                            <div className="row" >
                                <div className="col-md-8 d-flex flex-column justify-content-center">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Predictive Audience Segmentation
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ marginTop: '15px' }}>Utilizing data driven triggers to automatically categorize users based on their engagement levels, ensuring high relevance messaging and maximum conversion efficiency.</p>
                                </div>
                                <div className="col-md-4">
                                    <img
                                        src="/assets/images/dummy-img-1920x900.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                    />
                                </div>
                            </div>

                            <div className="row" >
                                <div className="col-md-8">
                                    <img
                                        src="/assets/images/dummy-img-1920x900.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                    />
                                </div>
                                <div className="col-md-4 d-flex flex-column justify-content-center">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Automated Lifecycle Management
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ marginTop: '15px' }}>From onboarding to re-engagement, we build persistent automation frameworks that maximize customer lifetime value (CLV) and reduce operational overhead.</p>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServiceSection;