import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function WhyChooseUs() {
    return (
        <>
            <div className="section" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
                <div className="hero-container">
                    <div className="row align-items-start mb-5">
                        <div className="col-md-8">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot case-study-dot"></i>
                                    <span>Why Choose McCollins Media</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="choose-us-heading">
                                    <span className="line-delight">YOUR GLOBAL GROWTH IS</span>
                                    <span className="line-delight">THE BENCHMARK OF <span className="line-playfair d-inline">Our</span></span>
                                    <span className="line-playfair">Performance.</span>
                                </h2>
                            </AnimateOnScroll>

                            <div className="mt-4">
                                <a href="/contact" className="btn-case-studies-more">
                                    <span>Get Free Consultation</span>
                                    <div className="btn-icon-circle">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 pt-md-4 mt-md-5">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <p className="choose-us-desc-new">
                                    In a borderless digital landscape, the right partnership defines your trajectory. At McCollins, we go beyond standard campaigns to craft globally fluent strategies that drive measurable, long-term success.
                                </p>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row g-4 pt-4 mt-1">
                        {/* Card 1 */}
                        <div className="col-md-4">
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                                <div className="choose-us-card-new">
                                    <div className="choose-us-img-wrapper">
                                        <img src="/tr1.png" alt="Data-Driven Approach" className="choose-us-img-new" />
                                    </div>
                                    <h5 className="choose-us-title-new mt-3">
                                        <i className="fa-solid fa-arrow-up-right choose-us-arrow"></i>
                                        <span className="text-delight">DATA-DRIVEN </span>
                                        <span className="text-playfair">Approach</span>
                                    </h5>
                                    <p className="expertise-desc mt-2">
                                        Fueling your brand's evolution with precision analytics and real-time market insights.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-4">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={100}>
                                <div className="choose-us-card-new">
                                    <div className="choose-us-img-wrapper">
                                        <img src="/tr2.png" alt="Creative & Innovative" className="choose-us-img-new" />
                                    </div>
                                    <h5 className="choose-us-title-new mt-3">
                                        <i className="fa-solid fa-arrow-up-right choose-us-arrow"></i>
                                        <span className="text-playfair">Creative </span>
                                        <span className="text-delight">& INNOVATIVE</span>
                                    </h5>
                                    <p className="expertise-desc mt-2">
                                        Transforming disruptive ideas into high-impact digital experiences across every continent.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-4">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={200}>
                                <div className="choose-us-card-new">
                                    <div className="choose-us-img-wrapper">
                                        <img src="/tr3.png" alt="Transparent Reporting" className="choose-us-img-new" />
                                    </div>
                                    <h5 className="choose-us-title-new mt-3">
                                        <i className="fa-solid fa-arrow-up-right choose-us-arrow"></i>
                                        <span className="text-delight">TRANSPARENT </span>
                                        <span className="text-playfair">Reporting</span>
                                    </h5>
                                    <p className="expertise-desc mt-2">
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

export default WhyChooseUs;