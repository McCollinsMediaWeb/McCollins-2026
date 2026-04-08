import React from "react";
import HeadTitle from "../../../Components/Head/HeadTitle";
import NewsletterSection from "../../../Components/Form/Newsletter";
import InnerNew from "../../../Components/Banner/InnerNew";
import CaseStudiesSectionNew from "../../../Components/CaseStudies/CaseStudiesNew";
import AnimateOnScroll from "../../../Components/Hooks/AnimateOnScroll";

function SnaideroCaseStudyPage() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Snaidero Case Study - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/case-studies/snaidero/banner.jpg" mobileImage="/assets/images/case-studies/snaidero/banner.jpg" title="Snaidero" title2="Case Study" title3="" />

            <div className="section pt-5 pb-0">
                <div className="hero-container">
                    <div className="row">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <p style={{ fontWeight: 100, margin: '20px 0px' }}>
                                Snaidero is an Italian manufacturer of high-end kitchens. The company was founded in 1946 by Rino Snaidero, and it has since grown to become one of the leading kitchen manufacturers in the world. Snaidero's kitchens are known for their contemporary design, high-quality materials, and advanced technology.<br /><br />Snaidero offers a wide range of kitchen designs, from sleek and modern to more traditional styles. The company uses a variety of materials in its kitchens, including wood, glass, stainless steel, and lacquer. Snaidero also offers a variety of accessories and appliances to complement its kitchen designs.
                            </p>
                        </AnimateOnScroll>
                    </div>

                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Brief</h3>
                                    <p>To create awareness about the brand in the UAE Market and to generate leads from the relevant target audience</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Route</h3>
                                    <p>We took a 360 Digital Approach for Snaidero. From Social Media Management to Website Management, Google Ad Management, Search Engine Optimization to Influencer marketing. Lead Generation being the key KPI for the brand, we set different campaigns targeting the Villa Community Area in UAE. We focused on Arabic and English Content - other niche channels like Snapchat for Ads, META Ads and so on.</p>
                                    <div className="point-arrow-list-wrapper d-none d-md-flex" style={{ gap: '100px' }}>
                                        <style>
                                            {`.point-arrow-list li::before {
                                                width: 20px;
                                            }`}
                                        </style>
                                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                            <div>
                                                <ul className="point-arrow-list">
                                                    <li><p>Google Ads Management</p></li>
                                                    <li><p>Search Engine Optimization</p></li>
                                                    <li><p>Social Media Marketing</p></li>
                                                </ul>
                                            </div>
                                        </AnimateOnScroll>

                                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                                            <div>
                                                <ul className="point-arrow-list">
                                                    <li><p>Social Media Ads</p></li>
                                                    <li><p>Influencer Marketing</p></li>
                                                    <li><p>Content Production</p></li>
                                                </ul>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>

                                    <div className="point-arrow-list-wrapper d-flex d-md-none">
                                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                                            <div>
                                                <ul className="point-arrow-list">
                                                    <li><p>Google Ads Management</p></li>
                                                    <li><p>Search Engine Optimization</p></li>
                                                    <li><p>Social Media Marketing</p></li>
                                                    <li><p>Social Media Ads</p></li>
                                                    <li><p>Influencer Marketing</p></li>
                                                    <li><p>Content Production</p></li>
                                                </ul>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                </div>
                            </AnimateOnScroll>

                            <div className="pt-3" style={{ width: '100%', height: '100%' }}>
                                <video
                                    title="Film Production Company Dubai"
                                    autoPlay
                                    loop
                                    muted
                                    controls
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '700px',
                                        objectFit: 'cover',
                                        borderRadius: '8px'
                                    }}
                                    src="/assets/images/case-studies/snaidero/snaidero-video.mp4"
                                >
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Result</h3>
                                    <p>Increase in Leads and awareness of Snaidero Kitchens within the UAE Market.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>

            <CaseStudiesSectionNew />
            <NewsletterSection />
        </div>
    );
}

export default SnaideroCaseStudyPage;