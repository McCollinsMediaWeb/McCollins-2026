import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import NewsletterSection from "../../Components/Form/Newsletter";
import InnerNew from "../../Components/Banner/InnerNew";
import MarketingFoundation from "../../Components/MccollinsMedia/MarketingFoundation";
import ClientPortfolio from "../../Components/MccollinsMedia/ClientPortfolio";
import SocialMediaMarketingImageWithText from "../../Components/MccollinsMedia/SocialMediaMarketing";
import CaseStudiesSocialMediaMarketing from "../../Components/CaseStudies/CaseStudiesSocialMediaMarketing";
import OurPartners from "../../Components/MccollinsMedia/OurPartners";
import FullSizeBanner from "../../Components/Banner/FullSizeBanner";

function SocialMediaMarketing() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Social Media Marketing - McCollins Media - Digital Marketing Agency" />
            {/* <BannerInnerSection title="Performance Marketing" currentPage="Services Details" /> */}
            <InnerNew desktopImage="/assets/images/social-media-marketing-banner.jpg" mobileImage="/assets/images/social-media-marketing-banner-mobile.jpg" title="Social Media" title2="Marketing" />
            <MarketingFoundation />
            <ClientPortfolio />
            <SocialMediaMarketingImageWithText />
            
            <FullSizeBanner 
                desktopImage="/services/social-media-marketing/McC_SocMedMark_Web_1-min.jpg" 
                mobileImage="/services/social-media-marketing/McC_SocMedMark_Mob_1-min.jpg" 
                altText="Social Media Marketing Showcase 1" 
            />
            <FullSizeBanner 
                desktopImage="/services/social-media-marketing/McC_SocMedMark_Web_2-min.jpg" 
                mobileImage="/services/social-media-marketing/McC_SocMedMark_Mob_2-min.jpg" 
                altText="Social Media Marketing Showcase 2" 
            />
            <FullSizeBanner 
                desktopImage="/services/social-media-marketing/McC_SocMedMark_Web_3-min.jpg" 
                mobileImage="/services/social-media-marketing/McC_SocMedMark_Mob_3-min.jpg" 
                altText="Social Media Marketing Showcase 3" 
            />
            <FullSizeBanner 
                desktopImage="/services/social-media-marketing/McC_SocMedMark_Web_4-min.jpg" 
                mobileImage="/services/social-media-marketing/McC_SocMedMark_Mob_4-min.jpg" 
                altText="Social Media Marketing Showcase 4" 
            />
            <FullSizeBanner 
                desktopImage="/services/social-media-marketing/McC_SocMedMark_Web_6-min.jpg" 
                mobileImage="/services/social-media-marketing/McC_SocMedMark_Mob_6-min.jpg" 
                altText="Social Media Marketing Showcase 5" 
            />
            <FullSizeBanner 
                desktopImage="/services/social-media-marketing/McC_SocMedMark_Web_7-min.jpg" 
                mobileImage="/services/social-media-marketing/McC_SocMedMark_Mob_7-min.jpg" 
                altText="Social Media Marketing Showcase 6" 
            />
            <FullSizeBanner 
                desktopImage="/services/social-media-marketing/McC_SocMedMark_Web_9-min.jpg" 
                mobileImage="/services/social-media-marketing/McC_SocMedMark_Mob_9-min.jpg" 
                altText="Social Media Marketing Showcase 7" 
            />
            <FullSizeBanner 
                desktopImage="/services/social-media-marketing/McC_SocMedMark_Web_10-min.jpg" 
                mobileImage="/services/social-media-marketing/McC_SocMedMark_Mob_10-min.jpg" 
                altText="Social Media Marketing Showcase 8" 
            />
            <FullSizeBanner 
                desktopImage="/services/social-media-marketing/McC_SocMedMark_Web_11-min.jpg" 
                mobileImage="/services/social-media-marketing/McC_SocMedMark_Mob_11-min.jpg" 
                altText="Social Media Marketing Showcase 9" 
            />

            <div className="container mb-5">
                <div style={{ height: '1px', backgroundColor: '#d6d6d6', width: "100%" }} ></div>
            </div>
            <CaseStudiesSocialMediaMarketing noPadding={false} />
            <OurPartners />
            <NewsletterSection />
        </div>
    );
}

export default SocialMediaMarketing;