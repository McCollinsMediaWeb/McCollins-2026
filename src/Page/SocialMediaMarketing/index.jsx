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
            <InnerNew desktopImage="/assets/images/s3.jpg" mobileImage="/assets/images/s3mob.jpg" title="Social Media" title2="Marketing" />
            <MarketingFoundation />
            <ClientPortfolio />
            <SocialMediaMarketingImageWithText />
            <div className="container mb-5">
                <div style={{ height: '1px', backgroundColor: '#828282', width: "100%" }} ></div>
            </div>
            <CaseStudiesSocialMediaMarketing noPadding={true} />
            <OurPartners />
            <NewsletterSection />
        </div>
    );
}

export default SocialMediaMarketing;