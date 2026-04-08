import React from "react";
import HeadTitle from "../../../Components/Head/HeadTitle";
import NewsletterSection from "../../../Components/Form/Newsletter";
import InnerNew from "../../../Components/Banner/InnerNew";
import CaseStudiesSectionNew from "../../../Components/CaseStudies/CaseStudiesNew";
import AnimateOnScroll from "../../../Components/Hooks/AnimateOnScroll";

function DxbCaseStudyPage() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Dubai Airport Freezone Case Study - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/case-studies/dxb/banner.jpg" mobileImage="/assets/images/case-studies/dxb/banner.jpg" title="Dubai Airport Freezone" title2="Case Study" title3="" />


            <div className="section pt-5 pb-0">
                <div className="hero-container">
                    <div className="row">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <p style={{ fontWeight: 100, margin: '20px 0px' }}>
                                Dubai Airport Freezone, also known as DAFZA, is a free economic zone located in the vicinity of the Dubai International Airport. The free zone was established in 1996, and it provides a business-friendly environment for companies to set up and operate their businesses.<br /><br />DAFZA offers various benefits to companies, such as 100% foreign ownership, 100% repatriation of capital and profits, no currency restrictions, and exemption from corporate taxes and customs duties. The free zone also provides companies with access to world-class infrastructure and support services, including offices, warehouses, and logistics services.
                            </p>
                        </AnimateOnScroll>
                    </div>


                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Brief</h3>
                                    <p>To create a digital ecosystem for DAFZA and move from Manual paperwork to a more digitized process for over 350 Services within the DAFZA Portal.
                                        To create a Website and Mobile Application across all platforms on Apple, Android, Windows, Blackberry</p>
                                </div>
                            </AnimateOnScroll>
                        </div>

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
                                src="/assets/images/case-studies/dxb/dxb-video.mp4"
                            >
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                    </div>

                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Route</h3>
                                    <p>We worked on creating a flow of requirements by DAFZA. We developed the entire User Journey, Site Map, UI/UX Development of the Website and Mobile Applications.
                                        Our in-house developers were seeded in the DAFZA premises to ensure quality control is top priority and being a government entity we needed the execution to be top of class.
                                        Post development, we tested the products before launch.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Result</h3>
                                    <p>Digitalization of the brand - DAFZA. Automated process for DAFZA Stakeholders.</p>
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

export default DxbCaseStudyPage;