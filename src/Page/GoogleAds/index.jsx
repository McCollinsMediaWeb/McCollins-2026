import React, { useEffect, useState } from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import InnerNew from "../../Components/Banner/InnerNew";
import NewsletterSection from "../../Components/Form/Newsletter";
import AnimateOnScroll from "../../Components/Hooks/AnimateOnScroll";
import CaseStudiesBrandDevelopment from "../../Components/MccollinsMedia/CaseStudiesBrandDevelopment";

function GoogleAds() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <div style={{ backgroundColor: 'var(--background-color)' }} >
            <HeadTitle title="Google Ads - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/film-production-banner.jpg" mobileImage="/assets/images/film-production-banner-mobile.jpg" title="Google Ads" title2="" title3="" />
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


                        <div className="row">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <>
                                    <h2 className="title-heading" >
                                        Google Ads Management:<br />Drive Conversions with McCollins Media
                                    </h2>
                                    <p className="mt-4" style={{ fontWeight: 100 }}>Google Ads Management involves creating and optimizing campaigns to connect brands with customers searching for specific products.</p>
                                    <p className="mt-4" style={{ fontWeight: 100 }}>As a certified Google Partner, Mccollins Media is a leading agency for Search Engine Marketing in Dubai. We specialize in high-impact lead generation and conversion campaigns, helping businesses achieve their short-term targets faster and more effectively.</p>
                                    <p className="mt-4" style={{ fontWeight: 100 }}>Google Ad Management involves several steps, including:</p>
                                </>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: '1rem' }}>
                        <AnimateOnScroll animation="fadeInLeft" speed="slow">
                            <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }} >
                                <div className="mb-2 mb-md-0" style={{ backgroundColor: 'var(--feature-card-bg)', padding: '40px 30px', borderRadius: '5px' }} >
                                    <h4 className="point-google-ads" style={{ color: '#3876fc', lineHeight: '35px' }}>Campaign planning</h4>
                                    <p className="text-custom-google-ads" style={{ fontWeight: 100, marginTop: '18px' }}>Defining the campaign goals, target audience, and budget.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }}  >
                                <div className="mb-2 mb-md-0" style={{ backgroundColor: 'var(--feature-card-bg)', padding: '40px 30px', borderRadius: '5px' }} >
                                    <h4 className="point-google-ads" style={{ color: '#3876fc', lineHeight: '35px' }}>Keyword research</h4>
                                    <p className="text-custom-google-ads" style={{ fontWeight: 100, marginTop: '18px' }}>Identifying the keywords that people use to search for the products or services being advertised.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInLeft" speed="fast">
                            <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }}  >
                                <div style={{ backgroundColor: 'var(--feature-card-bg)', padding: '40px 30px', borderRadius: '5px' }} >
                                    <h4 className="point-google-ads" style={{ color: '#3876fc', lineHeight: '35px' }}>Campaign setup</h4>
                                    <p className="text-custom-google-ads" style={{ fontWeight: 100, marginTop: '18px' }}>Setting up the campaign structure, ad groups and targeting options.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                    <div className="row" style={{ marginTop: '0.5rem' }}>
                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <div className="col-md-6" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }} >
                                <div className="mb-2 mb-md-0" style={{ backgroundColor: 'var(--feature-card-bg)', padding: '40px 30px', borderRadius: '5px' }} >
                                    <h4 className="point-google-ads" style={{ color: '#3876fc', lineHeight: '35px' }}>Ad creation</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>Creating compelling and relevant ads that resonate with the target audience.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="col-md-6" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }} >
                                <div style={{ backgroundColor: 'var(--feature-card-bg)', padding: '40px 30px', borderRadius: '5px' }} >
                                    <h4 className="point-google-ads" style={{ color: '#3876fc', lineHeight: '35px' }}>Bid management</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>Setting the right bid amounts for each ad and keyword to optimize ad performance.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                    <div className="row" style={{ marginTop: '0.5rem' }}>
                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <div className="col-md-6" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }} >
                                <div className="mb-2 mb-md-0" style={{ backgroundColor: 'var(--feature-card-bg)', padding: '40px 30px', borderRadius: '5px' }} >
                                    <h4 className="point-google-ads" style={{ color: '#3876fc', lineHeight: '35px' }}>Performance monitoring</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>Tracking the campaign performance and making adjustments to improve the ad's performance.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="col-md-6" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }} >
                                <div style={{ backgroundColor: 'var(--feature-card-bg)', padding: '40px 30px', borderRadius: '5px' }} >
                                    <h4 className="point-google-ads" style={{ color: '#3876fc', lineHeight: '35px' }}>Optimization</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>Continuously testing and optimizing the ads to improve their relevance, click-through rate (CTR), and conversion rate.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>




            <div className="section position-relative">
                <div className="BannerImageBox">
                    <AnimateOnScroll animation="fadeInUp">
                        {isMobile ? (
                            <img src="/assets/images/global-mob.jpg" alt="mobile view" />
                        ) : (
                            <img src="/assets/images/global.jpg" alt="desktop view" />
                        )}
                    </AnimateOnScroll>
                </div>

                <div className="BannerBoxContent">
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-end" >
                                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                                        <div>
                                            <h3 className="title-heading mb-3" style={{ WebkitTextFillColor: '#fff' }}>Scale Your Brand<br /> with Expert SEM in Dubai</h3>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="col-md-6" >
                                        <p style={{ fontWeight: 100, maxWidth: '90%', color: '#adadad' }}>Effectively managed Google Ads campaigns boost visibility and connect businesses with potential customers, driving higher sales and revenue.</p>
                                        <p style={{ fontWeight: 100, maxWidth: '90%', color: '#adadad' }}>Our in-house team of SEM experts in Dubai manages global campaigns across the GCC and beyond. We focus on precision targeting to ensure your brand reaches the right audience at the right time.</p>
                                        <div>
                                            <a href="/contact" className="btn btn-primary mt-3" style={{ maxWidth: 'fit-content' }}>
                                                <div className="btn-title">
                                                    <span>Let's Work Together</span>
                                                </div>
                                                <div className="icon-circle" style={{ backgroundColor: '#000' }}>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CaseStudiesBrandDevelopment />

            <NewsletterSection btnColor="#e02f47" />
        </div >
    );
}

export default GoogleAds;