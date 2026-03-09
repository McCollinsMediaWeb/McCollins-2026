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
        <>
            <HeadTitle title="Marketing Automations - McCollins Media - Digital Marketing Agency" />
            {/* <BannerInnerSection title="Performance Marketing" currentPage="Services Details" /> */}
            <InnerNew desktopImage="/assets/images/s5.jpg" mobileImage="/assets/images/s5mob.jpg" title="Marketing" title2="Automation" />
            <SingleServiceSection />
            {/* <TestimonialSection /> */}
            <NewsletterSection />
            {/* <FaqSection /> */}
        </>
    );
}

export default MarketingAutomations;