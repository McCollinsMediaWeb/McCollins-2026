import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";
import SingleServiceSection from "../../Components/Services/singleservice";
import InnerNew from "../../Components/Banner/InnerNew";

function MarketingAutomations() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Marketing Automations - McCollins Media - Digital Marketing Agency" />
            {/* <BannerInnerSection title="Performance Marketing" currentPage="Services Details" /> */}
            <InnerNew desktopImage="/assets/images/marketing-automation-banner.jpg" mobileImage="/assets/images/marketing-automation-banner-mobile.jpg" title="Marketing" title2="Automation" />
            <SingleServiceSection />
            {/* <TestimonialSection /> */}
            <div className="container">
                <div className="mt-5" style={{ width: '100%', height: '1px', backgroundColor: '#d6d6d6' }} />
            </div>
            <NewsletterSection />
            {/* <FaqSection /> */}
        </div>
    );
}

export default MarketingAutomations;