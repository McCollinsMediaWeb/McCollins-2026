import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function OurExpertise() {

    return (
        <>
            <div className="section" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
                <div className="hero-container">

                    <div className="row text-center">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sub-heading justify-content-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Expertise</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <h2 className="title-heading" style={{ marginBottom: "0px", marginTop: "20px" }}>
                                Proven success across
                                <br className="d-none d-md-block" />
                                {` `}these key sectors.
                            </h2>
                        </AnimateOnScroll>
                    </div>


                    <div className="row mt-1 pt-5">
                        <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }} >
                            <div className="mb-2" style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px' }} >
                                <div className="d-flex align-items-end gap-3 mb-4">
                                    <img className="img-fluid" style={{ width: '70px' }} src="/assets/images/ind1.png" alt="" />
                                    <h5>Real Estate</h5>
                                </div>
                                <p style={{ fontWeight: 100 }}>Fueling your brand's evolution with precision analytics and real-time market insights.</p>
                            </div>
                        </div>
                        <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }}  >
                            <div className="mb-2" style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px' }} >
                                <div className="d-flex align-items-end gap-3 mb-4">
                                    <img className="img-fluid" style={{ width: '70px' }} src="/assets/images/ind2.png" alt="" />
                                    <h5>Luxury</h5>
                                </div>
                                <p style={{ fontWeight: 100 }}>Transforming disruptive ideas into high-impact digital experiences across every continent.</p>
                            </div>
                        </div>
                        <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }}  >
                            <div style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px' }} >
                                <div className="d-flex align-items-end gap-3 mb-4">
                                    <img className="img-fluid" style={{ width: '70px' }} src="/assets/images/ind3.png" alt="" />
                                    <h5>Food & Beverage</h5>
                                </div>
                                <p style={{ fontWeight: 100 }}>Honest analytics and actionable insights to ensure your investment drives measurable impact. </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-1">
                        <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }} >
                            <div className="mb-2" style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px' }} >
                                <div className="d-flex align-items-end gap-3 mb-4">
                                    <img className="img-fluid" style={{ width: '70px' }} src="/assets/images/ind4.png" alt="" />
                                    <h5>Technology</h5>
                                </div>
                                <p style={{ fontWeight: 100 }}>Fueling your brand's evolution with precision analytics and real-time market insights.</p>
                            </div>
                        </div>
                        <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }}  >
                            <div className="mb-2" style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px' }} >
                                <div className="d-flex align-items-end gap-3 mb-4">
                                    <img className="img-fluid" style={{ width: '70px' }} src="/assets/images/ind5.png" alt="" />
                                    <h5>Startups</h5>
                                </div>
                                <p style={{ fontWeight: 100 }}>Transforming disruptive ideas into high-impact digital experiences across every continent.</p>
                            </div>
                        </div>
                        <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }}  >
                            <div style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px' }} >
                                <div className="d-flex align-items-end gap-3 mb-4">
                                    <img className="img-fluid" style={{ width: '70px' }} src="/assets/images/ind6.png" alt="" />
                                    <h5>B2B</h5>
                                </div>

                                <p style={{ fontWeight: 100 }}>Honest analytics and actionable insights to ensure your investment drives measurable impact. </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}

export default OurExpertise;