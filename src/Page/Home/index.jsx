import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerHomeSection from "../../Components/Banner";
import ExpertiseSection from "../../Components/Expertise/expertise";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import ServiceSection from "../../Components/Services/service";
import CaseStudiesSection from "../../Components/CaseStudies/CaseStudies";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import PartnershipSection from "../../Components/Partnership/Partnership";
import NewsletterSection from "../../Components/Form/Newsletter";
import BlogSection from "../../Components/Blog/blog";
import FullImageWithContact from "../../Components/MccollinsMedia/FullImageWithContact";
import HowWeWork from "../../Components/MccollinsMedia/HowWeWork";
import WhyChooseUs from "../../Components/MccollinsMedia/WhyChooseUs";
import OurExpertise from "../../Components/MccollinsMedia/OurExpertise";
import OurServices from "../../Components/MccollinsMedia/OurServices";
import Showreel from "../../Components/MccollinsMedia/Showreel";

function HomePage() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="McCollins Media - Home" />
            <BannerHomeSection desktopImage="/assets/images/mcmain.jpg" mobileImage="/assets/images/mcmainmob.jpg" title="Brand" title2="Development" title3="" />
            <OurServices />
            {/* <ExpertiseSection /> */}
            {/* <PartnershipSection /> */}
            <ServiceSection />
            <CaseStudiesSection />
            <OurExpertise />

            <Showreel />


            {/* <GuideBannerSection /> */}
            <ModalVideoSection />

            {/* <ChooseUsSection /> */}
            <WhyChooseUs />
            {/* <TestimonialSection /> */}
            {/* <DigitalProcessSection /> */}

            <HowWeWork />
            <div className="container">
                <div style={{ height: '1px', backgroundColor: 'grey', marginBottom: '0px', marginTop: '10px' }} />
            </div>
            <NewsletterSection />
            <FullImageWithContact desktopImage="/assets/images/global.jpg" mobileImage="/assets/images/global.jpg" title="Let's Start Your Project" subtitle="Initiate your production journey by scheduling a session with our cinematic specialists to translate your brand vision into-high fidelity visual reality." Position="left" />
            {/* <BlogSection /> */}
        </div>
    );
}

export default HomePage;