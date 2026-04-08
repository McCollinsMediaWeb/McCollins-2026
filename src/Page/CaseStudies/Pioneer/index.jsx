import React from "react";
import HeadTitle from "../../../Components/Head/HeadTitle";
import NewsletterSection from "../../../Components/Form/Newsletter";
import InnerNew from "../../../Components/Banner/InnerNew";
import CaseStudiesSectionNew from "../../../Components/CaseStudies/CaseStudiesNew";
import AnimateOnScroll from "../../../Components/Hooks/AnimateOnScroll";

function PioneerCaseStudyPage() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Pioneer Case Study - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/case-studies/pioneer/banner.jpg" mobileImage="/assets/images/case-studies/pioneer/banner.jpg" title="Pioneer" title2="Case Study" title3="" />


            <div className="section pt-5 pb-0">
                <div className="hero-container">
                    <div className="row">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <p style={{ fontWeight: 100, margin: '20px 0px' }}>
                                Pioneer Corporation is a Japanese multinational corporation that specializes in the production of electronics, including audio equipment, car electronics, and home appliances. The company was founded in 1938 and is headquartered in Tokyo, Japan.<br /><br />Pioneer is best known for its audio equipment, including speakers, headphones, and amplifiers. The company's audio products are renowned for their high-quality sound and innovative features, such as Bluetooth connectivity and voice control. Pioneer also produces car audio systems, including speakers, receivers, and amplifiers.
                            </p>
                        </AnimateOnScroll>

                        {/* <div className="pt-3" style={{ width: '100%', height: '100%' }}>
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
                            src="/assets/images/case-studies/videos/Oakberry_Case_Study_Video.mp4"
                        >
                            Your browser does not support HTML5 video.
                        </video>
                    </div> */}
                    </div>




                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Brief</h3>
                                    <p>To create a website , launch it, maintain it and build the digital ecosystem for the brand.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row pt-2">
                        <img style={{ width: '80%', margin: '0 auto' }} src="/assets/images/case-studies/pioneer/pioneer-image.png" />
                    </div>

                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Route</h3>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <p>We developed a website for Pioneer which can be easily used by the distributors to learn about the products and engage with the content. Post launch of the website, we have been working on Search Engine Optimization. On page, off page and local SEO being the focus, we choose different markets from the vast regions Pioneer covers, to increase organic traffic within each market.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Result</h3>
                                    <p>Building a solid foundation for the brand on the digital ecosystem - growing organically.</p>
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

export default PioneerCaseStudyPage;