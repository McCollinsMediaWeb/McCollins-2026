import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import NewsletterSection from "../../Components/Form/Newsletter";
import InnerNew from "../../Components/Banner/InnerNew";
import MarketingFoundation from "../../Components/MccollinsMedia/MarketingFoundation";
import ClientPortfolio from "../../Components/MccollinsMedia/ClientPortfolio";
import SocialMediaMarketingImageWithText from "../../Components/MccollinsMedia/SocialMediaMarketing";
import CaseStudiesSocialMediaMarketing from "../../Components/CaseStudies/CaseStudiesSocialMediaMarketing";
import OurPartners from "../../Components/MccollinsMedia/OurPartners";

function SocialMediaMarketing() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Social Media Marketing - McCollins Media - Digital Marketing Agency" />
            {/* <BannerInnerSection title="Performance Marketing" currentPage="Services Details" /> */}
            <InnerNew desktopImage="/assets/images/social-media-marketing-banner.jpg" mobileImage="/assets/images/social-media-marketing-banner-mobile.jpg" title="Social Media" title2="Marketing" />
            <MarketingFoundation />
            <ClientPortfolio />
            <SocialMediaMarketingImageWithText />
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