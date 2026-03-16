import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function WhyChooseUs() {

    return (
        <>
            <div className="section" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
                <div className="hero-container">
                    {/* <div className="d-flex flex-column flex-lg-row gspace-5"> */}

                    <div className="row">
                        <div className="col-md-6" >
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Why Choose McCollins Media</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading" style={{ marginBottom: "0px", marginTop: "20px" }}>
                                    Your global growth
                                    <br className="d-none d-md-block" />
                                    {` `}is the benchmark of
                                    <br className="d-none d-md-block" />
                                    {` `}our performance.
                                </h2>
                            </AnimateOnScroll>
                        </div>
                        <div className="col-md-6 align-self-end" >
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <p style={{ fontWeight: 100, margin: '20px 0px' }}>
                                    In a borderless digital landscape, the right partnership defines your trajectory. At McCollins, we go beyond standard campaigns to craft globally fluent strategies that drive measurable, long-term success.
                                </p>
                            </AnimateOnScroll>

                            <div>
                                <a href="/contact" className="btn btn-primary" style={{ maxWidth: 'fit-content' }}>

                                    <div className="btn-title">
                                        <span>Get Free Consultation</span>
                                    </div>

                                    <div className="icon-circle" style={{ backgroundColor: '#000' }}>
                                        <i className="fa-solid fa-arrow-right" style={{ color: '#fff' }}></i>
                                    </div>

                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="row mt-1 pt-5">
                        <AnimateOnScroll animation="fadeInLeft" speed="slow">
                            <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }} >
                                <div className="mb-2" style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px' }} >
                                    <img src="/assets/images/data-driven-approach.png" alt="" style={{ width: '100%', height: '100%' }} />
                                    <h5 className="choose-us-point my-3" style={{ fontWeight: 500 }}>Data-Driven Approach</h5>
                                    <p style={{ fontWeight: 100 }}>Fueling your brand's evolution with precision analytics and real-time market insights.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }}  >
                                <div className="mb-2" style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px' }} >
                                    <img src="/assets/images/creative-innovative.png" alt="" style={{ width: '100%', height: '100%' }} />
                                    <h5 className="choose-us-point my-3" style={{ fontWeight: 500 }}>Creative & Innovative</h5>
                                    <p style={{ fontWeight: 100 }}>Transforming disruptive ideas into high-impact digital experiences across every continent.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInLeft" speed="fast">
                            <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }}  >
                                <div style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px' }} >
                                    <img src="/assets/images/transparent-reporting.png" alt="" style={{ width: '100%', height: '100%' }} />
                                    <h5 className="choose-us-point my-3" style={{ fontWeight: 500 }}>Transparent Reporting</h5>
                                    <p style={{ fontWeight: 100 }}>Honest analytics and actionable insights to ensure your investment drives measurable impact. </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>

        </>
    );
}

export default WhyChooseUs;