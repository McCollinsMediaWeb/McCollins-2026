import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function BestSolutions() {

    return (
        <>
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">

                        <div className="expertise-title">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Performance Marketing</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading" style={{ marginBottom: '40px' }}>
                                    The Best Solutions <br />For Your Business
                                </h2>
                            </AnimateOnScroll>

                            {/* <div style={{ display: 'flex', gap: '30px' }}>
                                <div>
                                    <ul style={{ paddingLeft: '0px' }}>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Campaign Planning</h5></li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Keyword Research</h5></li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Campaign Setup</h5></li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Ad Creation</h5></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul style={{ paddingLeft: '0px' }}>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Bid Management</h5></li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Performance Monitoring</h5></li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Optimization</h5></li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Achieving Target Audience</h5></li>
                                    </ul>
                                </div>
                            </div> */}

                            <div style={{ display: "flex", gap: "30px" }}>
                                <div>
                                    <ul className="point-arrow-list">
                                        <li><h5>Campaign Planning</h5></li>
                                        <li><h5>Keyword Research</h5></li>
                                        <li><h5>Campaign Setup</h5></li>
                                        <li><h5>Ad Creation</h5></li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="point-arrow-list">
                                        <li><h5>Bid Management</h5></li>
                                        <li><h5>Performance Monitoring</h5></li>
                                        <li><h5>Optimization</h5></li>
                                        <li><h5>Achieving Target Audience</h5></li>
                                    </ul>
                                </div>
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
                                    <div className="card-expertise-wrapper">
                                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                                            <p style={{ fontWeight: 100, marginTop: '60px' }}>
                                                We engineer data-driven acquisition engines that transform marketing spend into measurable business growth. By bridging the gap between high-fidelity creative and precision tier targeting, we ensure your brand dominates the digital landscape with absolute efficiency.
                                            </p>
                                        </AnimateOnScroll>
                                    </div>
                                    <img
                                        src="/assets/images/pr1.jpg"
                                        alt="Expertise Image"
                                        className="img-fluid brdRadius"
                                    />
                                </div>
                                <div className="expertise-spacer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default BestSolutions;