import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import ServiceSection from "../../Components/Services/service";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import PricingPlanSection from "../../Components/Pricing/Pricing";
import HeadTitle from "../../Components/Head/HeadTitle";
import InnerNew from "../../Components/Banner/InnerNew";

function ServicePage() {
    return (
        <>
            <HeadTitle title="Services - McCollins Media" />
            <InnerNew desktopImage="/assets/images/servicemaindesk.jpg" mobileImage="/assets/images/servicemainmob.jpg" title="A Comprehensive" title2="Ecosystem of " title3="Digital Excellence." />
            {/* <BannerInnerSection title="Our Services" currentPage="Services" />
            <ServiceSection />
            <GuideBannerSection />
            <ModalVideoSection />
            <PricingPlanSection /> */}
        </>
    );
}

export default ServicePage;