import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function WebsiteAppDesign() {

    return (
        <>
            <div className="section">
                <div className="hero-container">
                    {/* <div className="d-flex flex-column flex-lg-row gspace-5"> */}

                    <div className="">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>WEBSITE / APP DESIGN</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <h2 className="title-heading" style={{ marginBottom: '0px', marginTop: '20px' }}>
                                Smartly Engineered For Your<br /> Convenience
                            </h2>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <p style={{ fontWeight: 100, margin: '20px 0px' }}>
                                Cutting-edge websites designed to engage, captivate, and grow your business-where innovation meets creativity for every industry.
                            </p>
                        </AnimateOnScroll>

                        <div>
                            <a href="/contact" className="btn btn-primary" style={{ maxWidth: 'fit-content' }}>

                                <div className="btn-title">
                                    <span>Let's Work Together</span>
                                </div>

                                <div className="icon-circle" style={{ backgroundColor: '#000' }}>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>

                            </a>
                        </div>
                    </div>


                    <div className="row mt-1 pt-5">
                        <AnimateOnScroll animation="fadeInLeft" speed="slow">
                            <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }} >
                                <div className="mb-2" style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px', borderRadius: '5px' }} >
                                    <h4 style={{ color: '#3876fc', lineHeight: '35px' }}>Corporate Website<br /> Development</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>We engineer tailored corporate websites that elevate your brand identity through seamless user experiences and precision digital design.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }}  >
                                <div className="mb-2" style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px', borderRadius: '5px' }} >
                                    <h4 style={{ color: '#3876fc', lineHeight: '35px' }}>E-commerce Website<br /> Development</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>We create strategic E-commerce experiences designed to optimize user journeys, drive conversions, and unlock measurable revenue potential.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInLeft" speed="fast">
                            <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }}  >
                                <div style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px', borderRadius: '5px' }} >
                                    <h4 style={{ color: '#3876fc', lineHeight: '35px' }}>Lead Generation<br /> Funnel Development</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>We make strategic lead funnels designed to maximize acquisition efficiency and convert high-value prospects into loyal customers.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                    <div className="row" style={{ marginTop: '0' }}>
                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <div className="col-md-6" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }} >
                                <div className="mb-2" style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px', borderRadius: '5px' }} >
                                    <h4 style={{ color: '#3876fc', lineHeight: '35px' }}>Tailored Websites for Your<br /> Unique Needs</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>Tired of One-Size-Fits-All Websites? Generic website templates can’t effectively showcase what sets your business apart. Don’t settle for mediocrity when you can have a website that’s as unique as your brand.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="col-md-6" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }} >
                                <div style={{ backgroundColor: 'var(--feature-card-bg)', padding: '25px 30px', borderRadius: '5px' }} >
                                    <h4 style={{ color: '#3876fc', lineHeight: '35px' }}>Mobile-First Website<br /> Development</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>Our mobile-first website development services prioritize the mobile user experience. We ensure your website is designed and optimized for smartphones and tablets, with a focus on speed, functionality, and user-friendliness.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>

        </>
    );
}

export default WebsiteAppDesign;