import React from "react";
import HeadTitle from "../../../Components/Head/HeadTitle";
import NewsletterSection from "../../../Components/Form/Newsletter";
import InnerNew from "../../../Components/Banner/InnerNew";
import CaseStudiesSectionNew from "../../../Components/CaseStudies/CaseStudiesNew";
import AnimateOnScroll from "../../../Components/Hooks/AnimateOnScroll";

function ToshibaCaseStudyPage() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Toshiba Case Study - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/case-studies/toshiba/banner.jpg" mobileImage="/assets/images/case-studies/toshiba/banner.jpg" title="Toshiba" title2="Case Study" title3="" />


            <div className="section pt-5 pb-0">
                <div className="hero-container">
                    <div className="row">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <p style={{ fontWeight: 100, margin: '20px 0px' }}>
                                Toshiba Corporation is a Japanese multinational conglomerate that specializes in the production of electronic and electrical products. The company was founded in 1939 and is headquartered in Tokyo, Japan. Toshiba produces a wide range of products, including laptops, desktops, tablets, printers, televisions, home appliances, and electronic components.
                            </p>
                        </AnimateOnScroll>
                    </div>




                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Brief</h3>
                                    <p>Our Mandate was to focus on creating awareness and brand recall for the Toshiba Home Appliances vertical within the Middle East Market</p>
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
                                src="/assets/images/case-studies/toshiba/toshiba-video.mp4"
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
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <p>Toshiba is a brand with a strong recall. We focused on resonating with the target audience, working with brand partners to promote tactical offers and engage with our audience. From developing monthly content calendars to designing seasonal content for different GCC Markets, we also focused on Performance Marketing mainly META Ads.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Result</h3>
                                    <p>Increase in engagement and positive brand sentiment.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <img style={{ width: '70%', margin: '0 auto' }} src="/assets/images/case-studies/toshiba/toshiba-image.png" />
                    </div>
                </div>
            </div>

            <CaseStudiesSectionNew />
            <NewsletterSection />
        </div>
    );
}

export default ToshibaCaseStudyPage;