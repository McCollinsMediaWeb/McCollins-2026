import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import CaseStudiesSection from "../../Components/CaseStudies/CaseStudies";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import InnerNew from "../../Components/Banner/InnerNew";

function CaseStudiesPage() {
    return (
        <>
            <HeadTitle title="Case Studies - McCollins Media - Digital Marketing Agency" />
            {/* <BannerInnerSection title="Case Studies" currentPage="Case Studies" /> */}
            <InnerNew desktopImage="/assets/images/servicemaindesk.jpg" mobileImage="/assets/images/servicemainmob.jpg" title="Case Studies" title2="" title3="" />
            <CaseStudiesSection />
            {/* <GuideBannerSection /> */}
            {/* <ModalVideoSection /> */}
            {/* <TestimonialSection /> */}
        </>
    );
}

export default CaseStudiesPage;