import React, { useEffect, useState } from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import InnerNew from "../../Components/Banner/InnerNew";
import NewsletterSection from "../../Components/Form/Newsletter";
import AnimateOnScroll from "../../Components/Hooks/AnimateOnScroll";
import CaseStudiesBrandDevelopment from "../../Components/MccollinsMedia/CaseStudiesBrandDevelopment";

function SearchEngineOptimization() {

    return (
        <div style={{ backgroundColor: 'var(--background-color)' }} >
            <HeadTitle title="Search Engine Optimization - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/film-production-banner.jpg" mobileImage="/assets/images/film-production-banner-mobile.jpg" title="Search Engine" title2="Optimization" title3="" />
            {/* <HeaderLayoutDynamic /> */}


            <div className="section HdLayt1 pb-0">
                <div className="container">
                    <div className="expertise-title">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Services</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="row">
                                <div className="col-md-5">
                                    <h3 className="title-heading" >
                                        Be Exactly Where Your<br /> Customers Are Looking.
                                    </h3>
                                </div>
                                <div className="col-md-7" style={{ display: "flex", alignItems: 'end' }}>
                                    <p style={{ fontWeight: 100 }}>
                                        We help your brand rank high on Google search so you're noticed at the right place, at the right time.
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>


            {/* <div className="section pt-5 pb-5">
                <div className="hero-container">
                    <div className="row">
                        <img
                            src="/assets/images/healthcare-marketing-1.png"
                            alt="Expertise Image"
                            className="img-fluid rounded"
                        />
                    </div>

                    <div className="row pt-5">
                        <div className="col-md-9" >
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h3 className="title-heading">
                                    Get A Best-Healthcare Marketing Plan
                                </h3>
                            </AnimateOnScroll>
                        </div>
                        <div className="col-md-3" >
                            <div>
                                <a href="/contact" className="btn btn-primary" style={{ maxWidth: 'fit-content' }}>
                                    <div className="btn-title">
                                        <span>Schedule a Meeting Today</span>
                                    </div>
                                    <div className="icon-circle" style={{ backgroundColor: '#000' }}>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <div className="mt-3">
                                <p style={{ fontWeight: 100 }} >Be it for a hospital, medicine suppliers, or even their agencies, creating strategies for all of them fall under healthcare marketing. These strategies are designed to attract new patients, raise awareness and provide valuable advice to the community.</p>
                                <p className="mt-4" style={{ fontWeight: 100 }} >Al Borg Laboratories and Al Tadawi Medical Center are some of our clients who have helped us pave our name in the healthcare marketing services sector.</p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div> */}


            <div className="section pt-5 pb-5">
                <div className="container">
                    <div className="GridBoxWrap">
                        <div className="GridBoxes">
                            <div className="GridBox mb-5">
                                <div className="row gx-5 g-5">
                                    <div className="col-md-6">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">On-page optimization</h5>
                                                <p style={{ fontWeight: 100 }}>Optimizing the content, meta tags, and other elements on the website to make it more relevant and accessible to search engines.</p>
                                            </div>
                                        </AnimateOnScroll>

                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div className="mt-4">
                                                <h5 className="GridBoxT1">Off-page optimization</h5>
                                                <p style={{ fontWeight: 100 }}>Building high-quality backlinks from other websites to improve the website’s authority and relevance.</p>
                                            </div>
                                        </AnimateOnScroll>

                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div className="mt-4">
                                                <h5 className="GridBoxT1">Keyword research</h5>
                                                <p style={{ fontWeight: 100 }}>Identifying the most relevant and high-traffic keywords for the business and optimizing the website’s content to target those keywords.</p>
                                            </div>
                                        </AnimateOnScroll>

                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div className="mt-4">
                                                <h5 className="GridBoxT1">Content creation</h5>
                                                <p style={{ fontWeight: 100 }}>Creating high-quality, relevant, and engaging content that appeals to the target audience and helps drive traffic to the website.</p>
                                            </div>
                                        </AnimateOnScroll>

                                    </div>
                                    <div className="col-md-5 d-flex justify-content-end">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull rounded" src="/assets/images/seo-1.png" />
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Analytics and reporting</h5>
                                                <p style={{ fontWeight: 100 }}>Monitoring the website’s performance, tracking the progress of the SEO campaign, and providing regular reports to the client.</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="col-md-5 d-flex align-items-end justify-content-end">
                                        <div>
                                            <a href="/contact" className="btn btn-primary" style={{ maxWidth: 'fit-content' }}>
                                                <div className="btn-title">
                                                    <span>Schedule a Meeting Today</span>
                                                </div>
                                                <div className="icon-circle" style={{ backgroundColor: '#000' }}>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-5 mt-5">
                                    <div className="col-md-7">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull rounded" src="/assets/images/seo-2.png" />
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="col-md-5 d-flex align-items-end justify-content-end">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h3 className="title-heading" >
                                                    Stop Being Invisible.<br />
                                                    Start Ranking High on Google Today.
                                                </h3>
                                                <p className="mt-3" style={{ fontWeight: 100 }}>As a Performance driven, Search Engine Optimization agency in Dubai, we specialize in providing SEO services to businesses. Our primary goal is to support businesses to improve their online visibility and increase organic traffic to their websites.</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CaseStudiesBrandDevelopment />

            <NewsletterSection btnColor="#e02f47" />
        </div>
    );
}

export default SearchEngineOptimization;