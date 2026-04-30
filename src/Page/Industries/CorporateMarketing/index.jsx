import React from "react";
import HeadTitle from "../../../Components/Head/HeadTitle";
import InnerNew from "../../../Components/Banner/InnerNew";
import HeaderLayoutDynamic from "../../../Components/MccollinsMedia/HeaderLayoutDynamic";
import NewsletterSection from "../../../Components/Form/Newsletter";
import AnimateOnScroll from "../../../Components/Hooks/AnimateOnScroll";

function CorporateMarketing() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }} >
            <HeadTitle title="Corporate Marketing - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/film-production-banner.jpg" mobileImage="/assets/images/film-production-banner-mobile.jpg" title="Corporate Marketing" title2="" title3="" />
            {/* <HeaderLayoutDynamic /> */}


            <div className="section">
                <div className="hero-container">
                    <div className="row gx-5">
                        <div className="col-md-6" >
                            <div className="expertise-title" style={{ width: '100%' }}>
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="sub-heading">
                                        <i className="fa-regular fa-circle-dot"></i>
                                        <span>Expertise</span>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <h3 className="title-heading" style={{ marginBottom: '0px' }}>
                                        #1 Corporate Marketing<br />Agency In UAE
                                    </h3>
                                </AnimateOnScroll>

                                <img
                                    src="/assets/images/corporate-1.png"
                                    alt="Expertise Image"
                                    className="img-fluid brdRadius mt-4"
                                />

                            </div>
                        </div>

                        <div className="col-md-6" >
                            <div className="">
                                <div className="">
                                    <div className="d-flex flex-column">
                                        <div className="">
                                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                                <p style={{ fontWeight: 100, marginTop: '60px' }}>
                                                    When you take a company as a whole and promote its services and products through various forms of marketing, it is known as corporate marketing.
                                                </p>
                                            </AnimateOnScroll>
                                        </div>
                                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                                            <p className="mt-5" style={{ fontWeight: 100 }}>
                                                We have had the pleasure of working with several
                                                corporate conglomerates over the last decade trom their branding, to social media marketing, website development, performance marketing and content
                                                development within the GCC Markets primarily - United Arab Emirates, Saudi Arabia, Kuwait, Qatar and Bahrain.
                                            </p>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="expertise-spacer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="section" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
                <div className="container">
                    <div className="GridBoxWrap">
                        <div className="GridBoxes">
                            <div className="GridBox mb-5">
                                <div className="row gx-5">
                                    <div className="col-md-7">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Corporate Branding</h5>
                                                <p style={{ fontWeight: 100 }}>Creating a brand identity and story for your brand, creating the brand journey and positioning. Competitor Analysis SWOT Analysis to understand the market and how you can be different.</p>
                                            </div>
                                        </AnimateOnScroll>
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Personalized Customer Experience</h5>
                                                <p style={{ fontWeight: 100 }}>It's important for companies to personalize their interactions with all their customers in order to drive aggressive lead conversions. We can use CRM tools to increase and modify this method. This enables employees to interact more meaningfully and enable a personalized customer journey.</p>
                                            </div>
                                        </AnimateOnScroll>

                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Social Media Marketing</h5>
                                                <p style={{ fontWeight: 100 }}>Business to Business social media marketing can sometimes be tricky. It is not the best practice to be on all social media channels for the sake of it, but understand how each social media channel contributes to your industry. We help you understand that and create content accordingly.</p>
                                            </div>
                                        </AnimateOnScroll>

                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Video Marketing</h5>
                                                <p style={{ fontWeight: 100 }}>Video content is booming and rippling in the virtual world. Companies need to convert blogs and written content into video and rebuild it. The video should be attractive, short and relevant to appeal to the viewer. This is the best way to increase brand awareness and promote your products and services to potential customers.</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="col-md-5">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/corporate-2.png" />
                                            </div>
                                        </AnimateOnScroll>

                                    </div>
                                </div>
                            </div>
                            <div className="GridBox">
                                <div className="row gx-5">
                                    <div className="col-md-5">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/corporate-3.png" />
                                            </div>
                                        </AnimateOnScroll>

                                    </div>
                                    <div className="col-md-7">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Search Engine Marketing and Google Ads</h5>
                                                <p style={{ fontWeight: 100 }}>Google Ads is hands down one of the most effective ways to promote a Corporate business. Search engine optimization helps you put your business in good ranking in comparison to your competitors.</p>
                                            </div>
                                        </AnimateOnScroll>
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Website Development and Chatbots</h5>
                                                <p style={{ fontWeight: 100 }}>Have a solid website developed for your corporate business which can work for you. Be sure to include chatbots in your marketing plan as they can target your audience in the absence of support personnel. They communicate with customers and answer questions they have. Your customers are personally cared for and don't have to wait long for service.</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>

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

export default CorporateMarketing;