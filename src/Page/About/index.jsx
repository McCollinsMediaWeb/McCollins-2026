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

function AboutPage(){
    return(
        <>
            <HeadTitle title="About - McCollins Media"/>
            {/* <BannerInnerSection title="About Marko" currentPage="About Us" /> */}
            <InnerNew desktopImage="/assets/images/abtdesk.jpg" mobileImage="/assets/images/abtmob.jpg" title="Strategically Rooted." title2="Creatively Fueled." title3="Insight Driven." />
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