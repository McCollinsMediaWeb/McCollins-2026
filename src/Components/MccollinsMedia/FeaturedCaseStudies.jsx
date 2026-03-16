import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CustomCounterOnScroll from "../Hooks/CustomCounterOnScroll";

const FeaturedCaseStudies = () => {

    return (
        <div className={`section`} style={{ backgroundColor: 'var(--featured-case-studies-bg)' }}>
            <div className="hero-container">
                <AnimateOnScroll animation="fadeInUp" speed="normal">
                    <div className="card card-case-studies" style={{ padding: '5px 5px 5px 5px', backgroundColor: 'var(--featured-case-studies-bg)' }} >
                        <style>
                            {`
                            .card-case-studies::before {
                                background-image: none;
                            }
                        `}
                        </style>
                        <div className="row row-cols-1 grid-spacer-5">
                            <div className="col">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <div className="d-flex flex-column gspace-1">
                                        <div className="sub-heading">
                                            <i className="fa-regular fa-circle-dot"></i>
                                            <span>Case Studies</span>
                                        </div>
                                        <h2 className="title-heading">Featured Cases</h2>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>

                        <div className="row featured-case-studies-inner-card">
                            <div className="col-md-7" >
                                <div className="case-studies-logo" style={{ marginBottom: '40px' }} >
                                    <img src="/assets/images/clients/mmi.png" alt="" />
                                </div>
                                <div className="d-flex d-md-none mb-3" style={{ display: 'flex' }} >
                                    <img className="width-full brdRadius" src="/assets/images/cake.jpg" alt="" />
                                </div>
                                <div className="row mb-md-5" >
                                    <div className="col-md-6" >
                                        <h4 style={{ color: '#3876fc', marginBottom: '10px' }}>Objective</h4>
                                        <p style={{ fontWeight: 100 }}>Masterbaker Studio aimed to boost website traffic and sales by targeting passionate bakers with premium ingredients like flour, chocolate butters, and creams.</p>
                                    </div>
                                    <div className="col-md-6" >
                                        <h4 style={{ color: '#3876fc', marginBottom: '10px' }}>Challenge</h4>
                                        <p style={{ fontWeight: 100 }}>They are struggling to scale their brand online & increase the sales MoM consistently.</p>
                                    </div>
                                </div>
                                <div className="row" >
                                    <h4 style={{ color: '#3876fc', marginBottom: '10px' }}>Strategy & Implementation</h4>
                                    <p style={{ fontWeight: 100 }}>To effectively display Masterbaker’s extensive inventory, we utilized Dynamic Search Ads and Performance Max campaigns with Feed-only on Google Ads. Additionally, on Meta Ads, we employed Dynamic prospecting ads and catalog ads targeting lookalike and retargeting audiences. To prevent ad fatigue, we regularly refreshed the first card creatives when frequency exceeded the standard benchmark threshold. Furthermore, implementing negative keywords and placements at the account level helped optimize spending and achieve lower cost per acquisition.</p>
                                </div>
                            </div>
                            <div className="col-md-4" >
                                <div className="d-none d-md-flex" style={{ display: 'flex' }} >
                                    <img className="width-full brdRadius" src="/assets/images/cake.jpg" alt="" />
                                </div>
                                <div>
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', padding: '10px 0px' }} >
                                        <h2 style={{ color: '#3876fc' }}>
                                            <CustomCounterOnScroll
                                                target={32}
                                                prefix="+"
                                                suffix="%"
                                                counterClassName="counter"
                                                suffixClassName="counter-detail"
                                            />
                                        </h2>
                                        <p style={{ fontWeight: 100 }}>Increased in conversion/purchase</p>
                                    </div>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#000' }} />
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', padding: '10px 0px' }} >
                                        <h2 style={{ color: '#3876fc' }}>
                                            <CustomCounterOnScroll
                                                target={14}
                                                prefix="+"
                                                suffix="%"
                                                counterClassName="counter"
                                                suffixClassName="counter-detail"
                                            />
                                        </h2>
                                        <p style={{ fontWeight: 100 }}>Conversion rates, with a 3.25 ROAS</p>
                                    </div>
                                    <div style={{ width: '100%', height: '1px', backgroundColor: '#000' }} />
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', padding: '10px 0px' }} >
                                        <h2 style={{ color: '#3876fc' }}>
                                            <CustomCounterOnScroll
                                                target={28}
                                                prefix="+"
                                                suffix="%"
                                                counterClassName="counter"
                                                suffixClassName="counter-detail"
                                            />
                                        </h2>
                                        <p style={{ fontWeight: 100 }}>Increased in ROAS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );
};

export default FeaturedCaseStudies;
