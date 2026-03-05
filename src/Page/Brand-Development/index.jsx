import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import ServiceSection from "../../Components/Services/service";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import HeadTitle from "../../Components/Head/HeadTitle";
import InnerNew from "../../Components/Banner/InnerNew";
import HeaderLayout from "../../Components/MccollinsMedia/HeaderLayout";
import ServiceItem from "../../Components/MccollinsMedia/ServiceItem";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";

function BrandDevelopment() {
    return (
        <>
            <HeadTitle title="Services - McCollins Media" />
            <InnerNew desktopImage="/assets/images/servicemaindesk.jpg" mobileImage="/assets/images/servicemainmob.jpg" title="A Comprehensive" title2="Ecosystem of " title3="Digital Excellence." />
            <HeaderLayout />
            <ServiceItem desktopImage="/assets/images/s1.jpg" mobileImage="/assets/images/s1mob.jpg" title="Brand Development" subtitle="Crafting cohesive brand identities that resonate across cultures and command a global presence." Position="left" />
            <ServiceItem desktopImage="/assets/images/s2.jpg" mobileImage="/assets/images/s2mob.jpg" title="WEBSITE/APP DESIGN" subtitle="Developing high-performance, responsive websites engineered to convert global audiences into loyal customers." Position="right" />
            <ServiceItem desktopImage="/assets/images/s3.jpg" mobileImage="/assets/images/s3mob.jpg" title="Social Media Marketing" subtitle="Cultivating vibrant digital communities through culturally resonant content that sparks global engagement." Position="left" />
            <ServiceItem desktopImage="/assets/images/s4.jpg" mobileImage="/assets/images/s4mob.jpg" title="Performance Marketing" subtitle="Accelerating your ROI through data-driven, cross-border campaigns engineered for maximum conversion and global scale." Position="right" />
            <ServiceItem desktopImage="/assets/images/s5.jpg" mobileImage="/assets/images/s5mob.jpg" title="Marketing Automation" subtitle="Driving sustainable growth through data-driven automation engineered for global consistency and local relevance." Position="left" />
            <ServiceItem desktopImage="/assets/images/s6.jpg" mobileImage="/assets/images/s6mob.jpg" title="Content Production" subtitle="Blending cinematic storytelling with strategic intent to produce content that resonates locally and scales globally." Position="right" />
            <DigitalProcessSection/>
        </>
    );
}

export default BrandDevelopment;