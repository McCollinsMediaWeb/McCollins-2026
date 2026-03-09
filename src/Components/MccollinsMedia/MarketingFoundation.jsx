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
                            <h2 className="title-heading" style={{ WebkitTextFillColor: '#fff', marginBottom: '40px' }}>
                                A Marketing Foundation That<br /> Grows your brand
                            </h2>
                        </AnimateOnScroll>
                        <p style={{ fontWeight: 100, maxWidth: '900px', margin: '0 auto' }}>Boost your online presence with a top notch Social media marketing agency in Dubai. Drive engagement, increase brand visibility and Reach your target audience effectively.</p>
                    </div>

                    <div className="row mt-5 pt-3" >
                        <div className="col-md-4" >
                            <div className="d-flex flex-column">
                                <div className="card-expertise-wrapper">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h3 className="title-heading" style={{ WebkitTextFillColor: '#fff' }}>
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
                                    <h3 className="title-heading" style={{ WebkitTextFillColor: '#3876fc', marginBottom: '40px' }}>
                                        What We Offer
                                    </h3>
                                </AnimateOnScroll>

                                <div style={{ display: 'flex', gap: '30px' }}>
                                    <div>
                                        <ul style={{ paddingLeft: '0px' }}>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Digital Strategy Development</h5></li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Social Media Management</h5></li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Content Creation</h5></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul style={{ paddingLeft: '0px' }}>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Community Management</h5></li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Influencer Marketing</h5></li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}><img style={{ width: '30px', height: '30px' }} src="/assets/images/arrow-up-right.png" alt="" /><h5 style={{ fontWeight: 600, color: '#3876fc' }}>Performance Marketing</h5></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="row"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden"
                        }}
                    >
                        <div style={{ width: '50%', height: '200px' }} >
                            <img
                                src="/assets/images/600400.png"
                                alt=""
                                style={{
                                    // height: "60%",
                                    objectFit: "contain"
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default MarketingFoundation;