import React from "react";
import { services } from "../../Data/ServiceData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const SingleServiceSection = () => {
    return (
        <>
            <div className="section pb-0" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
                <div className="hero-container">
                    <div className="d-flex flex-column gspace-5">
                        {/* <div className="single-service-spacer"></div> */}
                        <div className="single-service-title-wrapper" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
                            <div className="single-service-title" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
                                <AnimateOnScroll animation="fadeInRight" speed="slow">
                                    <div className="sub-heading" style={{ justifyContent: 'center' }}>
                                        <i className="fa-regular fa-circle-dot"></i>
                                        <span style={{ fontSize: 'var(--font-size-xl)', color: '#3876fc', fontWeight: '500' }}>Marketing Automation</span>
                                    </div>
                                </AnimateOnScroll>
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <h2 className="title-heading text-center">
                                        Precision Automation<br /> For High-Velocity Brands.
                                    </h2>
                                </AnimateOnScroll>
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <p className="text-center" style={{ marginTop: '15px', fontWeight: '100', }}>
                                        We architect sophisticated automation ecosystems that bridge the gap between audience engagement and<br /> commercial scale. By engineering intelligent workflows that nurture prospects with precision, we transform your digital<br /> presence into a high-velocity engine for sustainable growth.
                                    </p>
                                </AnimateOnScroll>
                            </div>

                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                                <img
                                    src="/assets/images/p1.jpg"
                                    alt="Service Image"
                                    className="single-service-img"
                                    style={{ marginTop: '40px', marginBottom: '70px' }}
                                />
                            </AnimateOnScroll>

                        </div>
                    </div>
                </div>
            </div>





            <div className="section pt-5 pb-0" style={{ backgroundColor: 'var(--background-color)' }}>
                <div className="hero-container">
                    <div className="d-flex flex-column gspace-5">
                        {/* <div className="single-service-spacer"></div> */}
                        <div className="single-service-title-wrapper" >
                            <div className="single-service-title" >
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <h2 className="title-heading text-center">
                                        Core Performance Pillars
                                    </h2>
                                </AnimateOnScroll>
                            </div>

                            <div className="row pt-5" >
                                <div className="col-md-8" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                    <img
                                        src="/assets/images/p2.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                        style={{ borderRadius: '0px' }}
                                    />
                                </div>
                                <div className="col-md-4 d-flex flex-column justify-content-center px-4 py-3">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Intelligent Lead Nurturing
                                        </h4>
                                    </AnimateOnScroll>
                                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                                        <p style={{ marginTop: '15px' }}>We design multi-stage, behavior-triggered workflows that deliver personalized content at the exact moment of intent, accelerating the transition from lead to loyal customer.</p>
                                    </AnimateOnScroll>
                                </div>
                            </div>

                            <div className="row d-flex d-md-none" >
                                <div className="col-md-8" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                    <img
                                        src="/assets/images/p3.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                        style={{ borderRadius: '0px' }}
                                    />
                                </div>
                                <div className="col-md-4 d-flex flex-column justify-content-center px-4 py-3">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Omnichannel Synchronization
                                        </h4>
                                    </AnimateOnScroll>
                                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                                        <p style={{ marginTop: '15px' }}>Architecting a unified communication layer across email, SMS and web to ensure a seamless and consistent brand narrative throughout the entire user journey.</p>
                                    </AnimateOnScroll>
                                </div>
                            </div>


                            <div className="row d-none d-md-flex" >
                                <div className="col-md-8 d-flex flex-column justify-content-center px-4 py-3">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Omnichannel Synchronization
                                        </h4>
                                    </AnimateOnScroll>
                                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                                        <p style={{ marginTop: '15px' }}>Architecting a unified communication layer across email, SMS and web to ensure a seamless and consistent brand narrative throughout the entire user journey.</p>
                                    </AnimateOnScroll>
                                </div>
                                <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                    <img
                                        src="/assets/images/p3.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                        style={{ borderRadius: '0px' }}
                                    />
                                </div>
                            </div>



                            <div className="row" >
                                <div className="col-md-8" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                    <img
                                        src="/assets/images/p4.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                        style={{ borderRadius: '0px' }}
                                    />
                                </div>
                                <div className="col-md-4 d-flex flex-column justify-content-center px-4 py-3">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            CRM & Data Integration
                                        </h4>
                                    </AnimateOnScroll>
                                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                                        <p style={{ marginTop: '15px' }}>Engineering seamless data pipelines between your digital platforms and CRM, providing a 360-degree view of consumer behavior and actionable business intelligence.</p>
                                    </AnimateOnScroll>
                                </div>
                            </div>

                            <div className="row d-flex d-md-none" >
                                <div className="col-md-8" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                    <img
                                        src="/assets/images/p5.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                        style={{ borderRadius: '0px' }}
                                    />
                                </div>
                                <div className="col-md-4 d-flex flex-column justify-content-center px-4 py-3">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Predictive Audience Segmentation
                                        </h4>
                                    </AnimateOnScroll>
                                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                                        <p style={{ marginTop: '15px' }}>Utilizing data driven triggers to automatically categorize users based on their engagement levels, ensuring high relevance messaging and maximum conversion efficiency.</p>
                                    </AnimateOnScroll>
                                </div>
                            </div>


                            <div className="row d-none d-md-flex" >
                                <div className="col-md-8 d-flex flex-column justify-content-center px-4 py-3">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Predictive Audience Segmentation
                                        </h4>
                                    </AnimateOnScroll>
                                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                                        <p style={{ marginTop: '15px' }}>Utilizing data driven triggers to automatically categorize users based on their engagement levels, ensuring high relevance messaging and maximum conversion efficiency.</p>
                                    </AnimateOnScroll>
                                </div>
                                <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                    <img
                                        src="/assets/images/p5.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                        style={{ borderRadius: '0px' }}
                                    />
                                </div>
                            </div>

                            <div className="row" >
                                <div className="col-md-8" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                    <img
                                        src="/assets/images/p6.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                        style={{ borderRadius: '0px' }}
                                    />
                                </div>
                                <div className="col-md-4 d-flex flex-column justify-content-center px-4 py-3">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Automated Lifecycle Management
                                        </h4>
                                    </AnimateOnScroll>
                                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                                        <p style={{ marginTop: '15px' }}>From onboarding to re-engagement, we build persistent automation frameworks that maximize customer lifetime value (CLV) and reduce operational overhead.</p>
                                    </AnimateOnScroll>
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