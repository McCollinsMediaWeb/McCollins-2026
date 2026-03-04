import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";
import SingleServiceSection from "../../Components/Services/singleservice";
import InnerNew from "../../Components/Banner/InnerNew";

function PerformanceMarketing() {
    return (
        <>
            <HeadTitle title="Performance Marketing - McCollins Media - Digital Marketing Agency" />
            {/* <BannerInnerSection title="Performance Marketing" currentPage="Services Details" /> */}
            <InnerNew desktopImage="/assets/images/contact-us/banner-desktop.jpg" mobileImage="/assets/images/contact-us/banner-mobile.jpg" title="Marketing Automation" />
            <SingleServiceSection />
            {/* <TestimonialSection /> */}
            <NewsletterSection />
            {/* <FaqSection /> */}
        </>
    );
}

export default PerformanceMarketing;