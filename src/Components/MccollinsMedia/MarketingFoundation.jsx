import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function MarketingFoundation() {

    return (
        <>
            <div className="section" style={{ paddingBottom: '0px' }}>
                <div className="hero-container">
                    <div className="row text-center" >
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <h2 className="title-heading" style={{ marginBottom: '40px' }}>
                                A Marketing Foundation That<br /> Grows your brand
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <p style={{ fontWeight: 100, maxWidth: '900px', margin: '0 auto' }}>Boost your online presence with a top notch Social media marketing agency in Dubai. Drive engagement, increase brand visibility and Reach your target audience effectively.</p>
                        </AnimateOnScroll>
                    </div>

                    <div className="row mt-5 pt-3" >
                        <div className="col-md-4" >
                            <div className="d-flex flex-column">
                                <div className="card-expertise-wrapper text-center text-md-start">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h3 className="title-heading">
                                            The Best Solutions For Your Business
                                        </h3>
                                    </AnimateOnScroll>
                                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                                        <p style={{ fontWeight: 100, marginTop: '30px' }}>
                                            Boost your online presence with the leading social media agency. Our expert team offers tailored strategies and effective solutions to drive traffic and maximize conversions.
                                        </p>
                                    </AnimateOnScroll>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8" >
                            <div className="">

                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <h3 className="title-heading text-center text-md-start" style={{ WebkitTextFillColor: '#3876fc', marginBottom: '40px' }}>
                                        What We Offer
                                    </h3>
                                </AnimateOnScroll>

                                <div className="point-arrow-list-wrapper d-none d-md-flex">
                                    <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                        <div>
                                            <ul className="point-arrow-list">
                                                <li><h5>Digital Strategy Development</h5></li>
                                                <li><h5>Social Media Management</h5></li>
                                                <li><h5>Content Creation</h5></li>
                                            </ul>
                                        </div>
                                    </AnimateOnScroll>

                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <div>
                                            <ul className="point-arrow-list">
                                                <li><h5>Community Management</h5></li>
                                                <li><h5>Influencer Marketing</h5></li>
                                                <li><h5>Performance Marketing</h5></li>
                                            </ul>
                                        </div>
                                    </AnimateOnScroll>
                                </div>

                                <div className="point-arrow-list-wrapper d-flex d-md-none">
                                    <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                        <div>
                                            <ul className="point-arrow-list">
                                                <li><h5>Digital Strategy Development</h5></li>
                                                <li><h5>Social Media Management</h5></li>
                                                <li><h5>Content Creation</h5></li>
                                                <li><h5>Community Management</h5></li>
                                                <li><h5>Influencer Marketing</h5></li>
                                                <li><h5>Performance Marketing</h5></li>
                                            </ul>
                                        </div>
                                    </AnimateOnScroll>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div
                        className="row d-none d-md-flex"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden"
                        }}
                    >
                        <div style={{ width: '50%', height: '240px' }} >
                            <img
                                src="/assets/images/rounds-shapes.png"
                                alt=""
                                style={{
                                    objectFit: "contain"
                                }}
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    <div
                        className="row d-md-none justify-content-center"
                        style={{
                            height: "100px",
                            overflow: "hidden"
                        }}
                    >
                        <img
                            src="/assets/images/600400.png"
                            alt=""
                            className="img-fluid"
                            style={{
                                width: "100%",
                                height: "auto"
                            }}
                        />
                    </div>

                </div>
            </div>

        </>
    );
}

export default MarketingFoundation;