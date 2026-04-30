import React, { useEffect, useState } from "react";
import HeadTitle from "../../../Components/Head/HeadTitle";
import InnerNew from "../../../Components/Banner/InnerNew";
import NewsletterSection from "../../../Components/Form/Newsletter";
import AnimateOnScroll from "../../../Components/Hooks/AnimateOnScroll";

function HealthcareMarketing() {

    return (
        <div style={{ backgroundColor: 'var(--background-color)' }} >
            <HeadTitle title="Healthcare Marketing - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/film-production-banner.jpg" mobileImage="/assets/images/film-production-banner-mobile.jpg" title="Healthcare Marketing" title2="" title3="" />
            {/* <HeaderLayoutDynamic /> */}

            <div className="section HdLayt1 pb-0">
                <div className="container">
                    <div className="row text-center">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sub-heading justify-content-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Expertise</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <h2 className="title-heading" style={{ marginBottom: "0px", marginTop: "20px" }}>
                                Scalable Marketing For The
                                <br className="d-none d-md-block" />
                                {` `} Modern Health System.
                            </h2>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>



            <div className="section pt-5 pb-5">
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
            </div>


            <div className="section pt-5 pb-5" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
                <div className="container">
                    <div className="GridBoxWrap">
                        <div className="GridBoxes">
                            <div className="GridBox mb-5">
                                <div className="row gx-5">
                                    <div className="col-md-7">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Content Marketing and Lead Generation</h5>
                                                <p style={{ fontWeight: 100 }}>The material that you post or publish should be curated while keeping your target audience in mind. It is always about what interests them and not you. Rather than promoting your brand, since it is healthcare we’re dealing with, talk about general health awareness, and various tips for remaining healthy.</p>
                                            </div>
                                        </AnimateOnScroll>

                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div className="mt-4">
                                                <h5 className="GridBoxT1">Website Design and Development</h5>
                                                <p style={{ fontWeight: 100 }}>Your website talks about your brand. While a cluttered brand can make the customers lose their interest, a clean and precise website will attract more customers. A well-designed healthcare website is a great communication tool for clinics and hospitals to inform existing patients and new prospects.</p>
                                            </div>
                                        </AnimateOnScroll>

                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div className="mt-4">
                                                <h5 className="GridBoxT1">Social Media Marketing</h5>
                                                <p style={{ fontWeight: 100 }}>All businesses, including the healthcare industry, need to use social media, which is essential in the healthcare industry. Most of the news and information is disseminated through social media, which is widely used and understood by most people. Therefore, it can be an effective public health tool. We have to learn to use this to our strength and make tactics. Creating brand credibility so one can trust you as a healthcare provider is key.</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="col-md-5">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull rounded" src="/assets/images/healthcare-marketing-2.png" />
                                            </div>
                                        </AnimateOnScroll>
                                    </div>

                                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                                        <div className="mt-3">
                                            <h5 className="GridBoxT1">Performance Marketing</h5>
                                            <p style={{ fontWeight: 100 }}>In a very competitive market, standing out as the top of mind recall is of prime importance. Be it being first on google search or search rankings on certain keywords being high, we ensure your brand is positioned well - at the right place, at the right time.</p>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NewsletterSection btnColor="#e02f47" />
        </div>
    );
}

export default HealthcareMarketing;