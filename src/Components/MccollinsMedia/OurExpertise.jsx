import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import TextReveal from "../Hooks/TextReveal";

function OurExpertise() {
    return (
        <>
            <div className="section expertise-section-new">
                <div className="hero-container">
                    <div className="row text-center justify-content-center">
                        <div className="col-lg-8">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="sub-heading justify-content-center">
                                    <i className="fa-regular fa-circle-dot case-study-dot"></i>
                                    <span>Expertise</span>
                                </div>
                            </AnimateOnScroll>

                            <TextReveal>
                                <h2 className="expertise-heading">
                                    <span className="sans-bold">PROVEN SUCCESS ACROSS THESE</span>
                                    <span className="serif-italic"> Key Sectors.</span>
                                </h2>
                            </TextReveal>
                        </div>
                    </div>

                    <div className="row g-4 pt-4 mt-1">
                        {/* Column 1: Left */}
                        <div className="col-md-4 expertise-col-left">
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                                <div className="expertise-item mb-5">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img className="expertise-icon" src="/assets/images/ind1.png" alt="Real Estate" />
                                        <h5 className="expertise-title">REAL ESTATE</h5>
                                    </div>
                                    <p className="expertise-desc">
                                        Fueling your brand's evolution with precision analytics and real-time market insights.
                                    </p>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={100}>
                                <div className="expertise-item">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img className="expertise-icon" src="/assets/images/ind4.png" alt="Technology" />
                                        <h5 className="expertise-title">TECHNOLOGY</h5>
                                    </div>
                                    <p className="expertise-desc">
                                        Fueling your brand's evolution with precision analytics and real-time market insights.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        {/* Column 2: Middle */}
                        <div className="col-md-4 expertise-col-middle">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={50}>
                                <div className="expertise-item mb-5">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img className="expertise-icon" src="/assets/images/ind2.png" alt="Luxury" />
                                        <h5 className="expertise-title">LUXURY</h5>
                                    </div>
                                    <p className="expertise-desc">
                                        Transforming disruptive ideas into high-impact digital experiences across every continent.
                                    </p>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={150}>
                                <div className="expertise-item">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img className="expertise-icon" src="/assets/images/ind5.png" alt="Startups" />
                                        <h5 className="expertise-title">STARTUPS</h5>
                                    </div>
                                    <p className="expertise-desc">
                                        Transforming disruptive ideas into high-impact digital experiences across every continent.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        {/* Column 3: Right */}
                        <div className="col-md-4 expertise-col-right">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={100}>
                                <div className="expertise-item mb-5">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img className="expertise-icon" src="/assets/images/ind3.png" alt="Food & Beverage" />
                                        <h5 className="expertise-title">FOOD & BEVERAGE</h5>
                                    </div>
                                    <p className="expertise-desc">
                                        Honest analytics and actionable insights to ensure your investment drives measurable impact.
                                    </p>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={200}>
                                <div className="expertise-item">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img className="expertise-icon" src="/assets/images/ind6.png" alt="B2B" />
                                        <h5 className="expertise-title">B2B</h5>
                                    </div>
                                    <p className="expertise-desc">
                                        Honest analytics and actionable insights to ensure your investment drives measurable impact.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurExpertise;