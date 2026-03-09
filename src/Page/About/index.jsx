import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import AboutSection from "../../Components/About/about";
import PartnershipSection from "../../Components/Partnership/Partnership";
import ChooseUsAboutSection from "../../Components/ChooseUs/chooseusabout";
import TeamSection from "../../Components/Team/Team";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import InnerNew from "../../Components/Banner/InnerNew";
import AnimateOnScroll from "../../Components/Hooks/AnimateOnScroll";

function AboutPage() {
    return (
        <>
            <HeadTitle title="About - McCollins Media" />

            <InnerNew desktopImage="/assets/images/abtdesk.jpg" mobileImage="/assets/images/abtmob.jpg" title="Strategically Rooted." title2="Creatively Fueled." title3="Insight Driven." />
            <AnimateOnScroll animation="fadeInUp">
                <div>
                    <div className="section HdLayt1">
                        <div className="container">
                            <div className="expertise-title">
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="sub-heading">
                                        <i className="fa-regular fa-circle-dot"></i>
                                        <span>About Us</span>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <h2 className="title-heading">
                                                Built on Strategy<br /> Defined by Insight
                                            </h2>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="HdT1">A Voice For Your Brand</div>
                                            <p>
                                                Partnering With Ambitious Brands To Transform Cultural Intelligence Into Market-Leading Digital Influence.
                                            </p>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                                <div className="AbtParaBox">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">

                                        <p>McCollins Media is a Digital Brand Activation agency specializing in Mobile-first technology and Performance-Driven Marketing campaigns in the MENA region. We are Headquartered in Dubai with a complete in-house team of creative professionals.</p>

                                    </AnimateOnScroll>
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <p>We are in the pursuit of providing digital advancement to all our clients to take their brand to the next level. Be it Web Development, Google Ads, 360 Brand Development, or Digital Marketing, we do everything in-house.
                                        </p>
                                    </AnimateOnScroll>
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">

                                        <p>Our multi-cultural team is always daring to set viral trends, venture into the digital realm, and take ownership of the brands we represent. After 15 years of being a pioneer Digital Marketing agency in the UAE, we’re just starting what we are here for!</p>
                                    </AnimateOnScroll>
                                </div>

                            </div>
                            <div className="section BoxItem1">
                                <h2 className="title-heading text-center">
                                    Where Strategic Precision Meets<br /> Global Creative Excellence.
                                </h2>
                            </div>
                        </div>

                    </div>
                </div>
            </AnimateOnScroll>

            <div className="AbtRows">
                <AnimateOnScroll animation="fadeInUp">
                    <div className="AbtRow">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <img className="width-full abtImage" src="/assets/images/abt1.jpg" />
                                </div>
                                <div className="col-md-4">
                                    <div className="AbtRowContent">
                                        <div className="AbtT1">Mastering Ecosystems. Delivering Results.</div>
                                        <div className="AbtT2">Managing the digital ecosystem for your
                                            brand with a result</div>
                                        <div className="AbtT3">From Digital Media Buying, Campaign Development, Blogger Outreach Programs to Content Development, we do it all in-house.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll animation="fadeInUp">
                    <div className="AbtRow">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <div className="AbtRowContent">
                                        <div className="AbtT1">Web. Apps. Commerce.</div>
                                        <div className="AbtT2">Be it a mobile application, website or an e-commerce platform,</div>
                                        <div className="AbtT3">we create a product for your brand from the scratch. Create an exclusive product for your brand which can build a database over time!</div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img className="width-full abtImage" src="/assets/images/abt2.jpg" />
                                </div>

                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeInUp">
                    <div className="AbtRow">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <img className="width-full abtImage" src="/assets/images/abt3.jpg" />
                                </div>
                                <div className="col-md-4">
                                    <div className="AbtRowContent">
                                        <div className="AbtT1">Precision Lead
                                            Generation.</div>
                                        <div className="AbtT2">Implement performance based marketing, ensure lead generation</div>
                                        <div className="AbtT3">call to action to your website or mobile application. Get the phone ringing or increase the CTR for your campaigns. Get in touch now.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>



            {/* <AboutSection />
            <PartnershipSection />
            <ChooseUsAboutSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <TeamSection />
            <DigitalProcessSection />
            <TestimonialSection /> */}
        </>
    );
}

export default AboutPage;