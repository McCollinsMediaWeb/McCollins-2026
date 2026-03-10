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
import MeetTheTeam from "../../Components/MccollinsMedia/MeetTheTeam";
import GlobalCreative from "../../Components/MccollinsMedia/GlobalCreative";
import CustomGuide from "../../Components/Banner/CustomGuide";
import Awards from "../../Components/MccollinsMedia/Awards";
import BehindTheScence from "../../Components/MccollinsMedia/BehindTheScence";
import NewsletterSection from "../../Components/Form/Newsletter";

function AboutPage() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)', paddingBottom: '50px' }}>
            <HeadTitle title="About - McCollins Media" />

            <InnerNew desktopImage="/assets/images/abtdesk.jpg" mobileImage="/assets/images/abtmob.jpg" title="Strategically Rooted." title2="Creatively Fueled." title3="Insight Driven." />

            <AnimateOnScroll animation="fadeInUp">
                <div>
                    <div className="section HdLayt1" style={{ paddingBottom: '0px' }}>
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
                                        <div className="col-md-6">
                                            <h2 className="title-heading">
                                                Built on Strategy.<br /> Defined by Insight.
                                            </h2>
                                        </div>
                                        <div className="col-md-6 d-flex align-items-end">
                                            <div>
                                                <div className="HdT1">A Voice For Your Brand</div>
                                                <p>
                                                    Partnering With Ambitious Brands To Transform Cultural Intelligence Into Market-Leading Digital Influence.
                                                </p>
                                            </div>
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
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>

            <GlobalCreative />

            <CustomGuide />
            <ModalVideoSection />

            <MeetTheTeam />

            <Awards />
            <BehindTheScence />
            <NewsletterSection />



            {/* <AboutSection />
            <PartnershipSection />
            <ChooseUsAboutSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <TeamSection />
            <DigitalProcessSection />
            <TestimonialSection /> */}
        </div>
    );
}

export default AboutPage;