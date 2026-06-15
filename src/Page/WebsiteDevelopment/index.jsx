import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";
import SingleServiceSection from "../../Components/Services/singleservice";
import WebDevHero from "../../Components/Banner/WebDevHero";
import LargestBrands from "../../Components/MccollinsMedia/LargestBrands";
import ClientPortfolio from "../../Components/MccollinsMedia/ClientPortfolio";
import WebsiteAppDesign from "../../Components/MccollinsMedia/WebsiteAppDesign";
import CaseStudiesSectionNew from "../../Components/CaseStudies/CaseStudiesNew";
import FullSizeBanner from "../../Components/Banner/FullSizeBanner";

function WebsiteDevelopment() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Website Development - McCollins Media - Digital Marketing Agency" />
            {/* <BannerInnerSection title="Performance Marketing" currentPage="Services Details" /> */}
            <WebDevHero />
            <LargestBrands />
            <ClientPortfolio />
            <WebsiteAppDesign />
            <FullSizeBanner 
                desktopImage="/services/web/McC_WDev_Web_2-min.jpg" 
                mobileImage="/services/web/McC_WDev_Mob_2-min.jpg" 
                altText="Dubai Hotel Web Showcase" 
            />
            <FullSizeBanner 
                desktopImage="/services/web/McC_WDev_Web_4-min.jpg" 
                mobileImage="/services/web/McC_WDev_Mob_3-min.jpg" 
                altText="Takmeel Web Showcase" 
            />
            <FullSizeBanner 
                desktopImage="/services/web/McC_WDev_Web_5-min.jpg" 
                mobileImage="/services/web/McC_WDev_Mob_5-min.jpg" 
                altText="Costa Coffee Web Showcase" 
            />
            <FullSizeBanner 
                desktopImage="/services/web/McC_WDev_Web_6-min.jpg" 
                mobileImage="/services/web/McC_WDev_Mob_6-min.jpg" 
                altText="Fujifilm Web Showcase" 
            />
            <FullSizeBanner 
                desktopImage="/services/web/McC_WDev_Web_7-min.jpg" 
                mobileImage="/services/web/McC_WDev_Mob_7-min.jpg" 
                altText="Oak Berry Web Showcase" 
            />
            <FullSizeBanner 
                desktopImage="/services/web/McC_WDev_Web_8-min.jpg" 
                mobileImage="/services/web/McC_WDev_Mob_8-min.jpg" 
                altText="Cleaning Superstore Web Showcase" 
            />
            <FullSizeBanner 
                desktopImage="/services/web/McC_WDev_Web_9-min.jpg" 
                mobileImage="/services/web/McC_WDev_Mob_9-min.jpg" 
                altText="Cryo Web Showcase" 
            />
            <FullSizeBanner 
                desktopImage="/services/web/McC_WDev_Web_10-min.jpg" 
                mobileImage="/services/web/McC_WDev_Mob_10-min.jpg" 
                altText="Toshiba Web Showcase" 
            />
            <CaseStudiesSectionNew noPadding={false} />
            {/* <TestimonialSection /> */}
            <NewsletterSection />
            {/* <FaqSection /> */}
        </div>
    );
}

export default WebsiteDevelopment;