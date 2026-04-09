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
import HowWeWork from "../../Components/MccollinsMedia/HowWeWork";
import NewsletterSection from "../../Components/Form/Newsletter";

function ServicePage() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Services - McCollins Media" />
            <InnerNew desktopImage="/assets/images/services-banner.jpg" mobileImage="/assets/images/service-banner-mobile.jpg" title="A Comprehensive" title2="Ecosystem of " title3="Digital Excellence." />
            <HeaderLayout />
            <ServiceItem desktopImage="/assets/images/s1.jpg" mobileImage="/assets/images/s1mob.jpg" title="Brand" title2="Development" subtitle="Crafting cohesive brand identities that resonate across cultures and command a global presence." Position="left" link="/service/brand-development" />
            <ServiceItem desktopImage="/assets/images/s2.jpg" mobileImage="/assets/images/s2mob.jpg" title="WEBSITE/APP" title2="DESIGN" subtitle="Developing high-performance, responsive websites engineered to convert global audiences into loyal customers." Position="right" link="/service/website-development" />
            <ServiceItem desktopImage="/assets/images/s3.jpg" mobileImage="/assets/images/s3mob.jpg" title="Social Media" title2="Marketing" subtitle="Cultivating vibrant digital communities through culturally resonant content that sparks global engagement." Position="left" link="/service/social-media-marketing" />
            <ServiceItem desktopImage="/assets/images/s4.jpg" mobileImage="/assets/images/s4mob.jpg" title="Performance" title2="Marketing" subtitle="Accelerating your ROI through data-driven, cross-border campaigns engineered for maximum conversion and global scale." Position="right" link="/service/performance-marketing" />
            <ServiceItem desktopImage="/assets/images/s5.jpg" mobileImage="/assets/images/s5mob.jpg" title="Marketing" title2="Automation" subtitle="Driving sustainable growth through data-driven automation engineered for global consistency and local relevance." Position="left" link="/service/marketing-automations" />
            <ServiceItem desktopImage="/assets/images/s6.jpg" mobileImage="/assets/images/s6mob.jpg" title="Content" title2="Production" subtitle="Blending cinematic storytelling with strategic intent to produce content that resonates locally and scales globally." Position="right" link="/service/content-production" />
            {/* <DigitalProcessSection /> */}
            <HowWeWork />
            <div className="container">
                <div style={{ height: '1px', backgroundColor: 'grey', marginBottom: '0px', marginTop: '10px' }} />
            </div>
            <NewsletterSection />
        </div>
    );
}

export default ServicePage;