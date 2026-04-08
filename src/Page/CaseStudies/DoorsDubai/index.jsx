import React from "react";
import HeadTitle from "../../../Components/Head/HeadTitle";
import NewsletterSection from "../../../Components/Form/Newsletter";
import InnerNew from "../../../Components/Banner/InnerNew";
import CaseStudiesSectionNew from "../../../Components/CaseStudies/CaseStudiesNew";
import AnimateOnScroll from "../../../Components/Hooks/AnimateOnScroll";

function DoorsDubaiCaseStudyPage() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Doors Dubai Case Study - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/case-studies/oakberry/banner.jpg" mobileImage="/assets/images/case-studies/oakberry/banner.jpg" title="Doors Dubai" title2="Case Study" title3="" />


            <div className="section pt-5 pb-0">
                <div className="hero-container">
                    <div className="row">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <p style={{ fontWeight: 100, margin: '20px 0px' }}>
                                OAKBERRY is a global brand known for its Acai - from the Amazon. We have had the utmost pleasure working with OAKBERRY from Day 1 - when it entered the market in the Middle East, that too right before the pandemic. <br /><br />With the start of the pandemic, the brand saw its fair share of challenges, however, the product itself got a lot of love! The brands vibrant personality was well received on social media and soon we are close to 90 locations within the Middle East. OAKBERRY launched its key locations in United Arab Emirates, Saudi Arabia, Kuwait etc over a span of 4 years.
                            </p>
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
                                src="/assets/images/case-studies/oakberry/Oakberry_Case_Study_Video.mp4"
                            >
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                    </div>




                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Brief</h3>
                                    <p>To launch OAKBERRY in the Middle East Market. To create awareness and drive footfall to the stores.
                                        The brand was also pushed through third party delivery channels like Talabat, Deliveroo and more.</p>
                                </div>
                            </AnimateOnScroll>
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

                    <div className="row mt-1 pt-5">
                        <div className="col">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h4 className="title-heading">Social Media</h4>
                                    <p>We created a vibrant feed , just like the brand's personality. Engaging with influencers, creating fun reel and TikTok content - bite size video content which is mobile first. While we were growing at the peak of the pandemic, the team at OAKBERRY was very innovative in launching the Acai Bucket, Nut Butters and Acai popsicles. With great health benefits, we focused on pushing our content to the health conscious lifestyle of people.<br /><br />Performance Marketing was a focus - META, TikTok, Snapchat Ads to push awareness and conversion. We developed a website for the OAKBERRY with the capability to order online. Search Engine Optimization, Google Ads were optimized.<br /><br />Blogger Meet Ups were arranged from time to time with the launch of a new location.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row">
                        <img style={{ width: '70%', margin: '0 auto' }} src="/assets/images/case-studies/oakberry/oak-berry-image.png" />
                    </div>

                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Result</h3>
                                    <p>Increase in brand recall and loyalty. Over 90 Locations within the Middle East over a span of 4 years.</p>
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

export default DoorsDubaiCaseStudyPage;