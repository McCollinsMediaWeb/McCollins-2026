import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function SocialMediaMarketingImageWithText() {

    return (
        <>
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">

                        <div className="expertise-title">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Social Media Marketing</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading" style={{ marginBottom: '10px' }}>
                                    Social Media <br />Route
                                </h2>
                            </AnimateOnScroll>

                            {/* <div>
                                <ul style={{ paddingLeft: '0px' }}>
                                    <li style={{ display: 'flex', alignItems: 'start', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px', marginTop: '5px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Content Management in AR/EN</h5></li>
                                    <li style={{ display: 'flex', alignItems: 'start', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px', marginTop: '5px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Comment Moderation</h5></li>
                                    <li style={{ display: 'flex', alignItems: 'start', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px', marginTop: '5px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Buzz Generation - Ramadan,<br /> UAE National Day, Menu Launch, Competitions</h5></li>
                                    <li style={{ display: 'flex', alignItems: 'start', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px', marginTop: '5px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Blogger Outreach Program</h5></li>
                                    <li style={{ display: 'flex', alignItems: 'start', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px', marginTop: '5px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Social Media Monitoring and Analysis</h5></li>
                                </ul>
                            </div> */}

                            <div>
                                <ul className="point-arrow-list" style={{ paddingLeft: '0px' }}>
                                    <li><h5>Content Management in AR/EN</h5></li>
                                    <li><h5>Comment Moderation</h5></li>
                                    <li>
                                        <h5>Buzz Generation - Ramadan,<br />
                                            UAE National Day, Menu Launch, Competitions</h5>
                                    </li>
                                    <li><h5>Blogger Outreach Program</h5></li>
                                    <li><h5>Social Media Monitoring and Analysis</h5></li>
                                </ul>
                            </div>

                            <div>
                                <a href="#" className="btn btn-primary" style={{ maxWidth: 'fit-content' }}>

                                    <div className="btn-title">
                                        <span>Schedule a Meeting Today</span>
                                    </div>

                                    <div className="icon-circle" style={{ backgroundColor: '#000' }}>
                                        <i className="fa-solid fa-arrow-right" style={{ color: '#fff' }}></i>
                                    </div>

                                </a>
                            </div>
                        </div>

                        <div className="expertise-img-layout">
                            <div className="expertise-layout">
                                <div className="d-flex flex-column">
                                    <img
                                        src="/assets/images/sc1.png"
                                        alt="Expertise Image"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SocialMediaMarketingImageWithText;