import React from "react";
import HeadTitle from "../../../Components/Head/HeadTitle";
import NewsletterSection from "../../../Components/Form/Newsletter";
import InnerNew from "../../../Components/Banner/InnerNew";
import CaseStudiesSectionNew from "../../../Components/CaseStudies/CaseStudiesNew";
import AnimateOnScroll from "../../../Components/Hooks/AnimateOnScroll";

function CleaningSuperstoreCaseStudyPage() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Cleaning Superstore Case Study - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/case-studies/cleaning-superstore/banner.jpg" mobileImage="/assets/images/case-studies/cleaning-superstore/banner.jpg" title="Cleaning Superstore" title2="Case Study" title3="" />


            <div className="section pt-5 pb-0">
                <div className="hero-container">
                    <div className="row">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <p style={{ fontWeight: 100, margin: '20px 0px' }}>
                                Cleaning Superstore is out and about a Pandemic born brand. With the start of Covid, Cleaning Superstore was conceptualized. McCollins Media created the brand from the inception of its logo, to taking it all the way to Website Development , Social Media Activation, Performance Marketing , Influencer Collaborations and more
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
                                src="/assets/images/case-studies/cleaning-superstore/cleaning-store.mp4"
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

                    <div className="row mt-1 pt-5">
                        <div className="col">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h4 className="title-heading">Social Media</h4>
                                    <p>We launched social media with a very supermarket vibe of raw content. Worked with the team to create TikTok Emoji personalities of the team members who speak in colloquial Arabic. The target audience is 100% Local Emirati. Being a TikTok Partner, our agency in UAE focused on Arabic and English to create the much needed buzz about Shopping by Carton and the first every refill station in UAE as the brand launched a 5L Jerry Can.<br /><br />We launched Snapchat Ads with heavy focus on conversion Ad campaigns to shop via the website. And another campaign to drive awareness about the factory outlet in Ajman. Being a Performance Marketing agency in Dubai, we focused on creating different ad sets , running A/B Testing campaigns to understand what our audience prefers.<br /><br />We focused on inviting influencers and collaborating with them with exclusive Promo Codes via the Shopify Website. Being a Shopify Partner in UAE, we got our shopify developers to customize the website for the UAE Market.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Result</h3>
                                    <p>Cleaning Superstore is completely driven by Digital Marketing with huge focus on Snapchat Ads, TikTok, Amazon Store, the local feel of shopping at a Factory Outlet in Ajman. Customers enjoy the concept of a Refill Station, Shop by Carton and more. Sales have been on the rise, the brand enjoys a customer retention of 65% with monthly orders for their cleaning supplies.</p>
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

export default CleaningSuperstoreCaseStudyPage;