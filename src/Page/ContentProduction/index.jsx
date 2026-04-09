import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import InnerNew from "../../Components/Banner/InnerNew";
import HeaderLayoutDynamic from "../../Components/MccollinsMedia/HeaderLayoutDynamic";
import ServiceItemContent from "../../Components/MccollinsMedia/ServiceItemContent";
import OurTimeline from "../../Components/MccollinsMedia/OurTimeline";
import NewsletterSection from "../../Components/Form/Newsletter";

function ContentProduction() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }} >
            <HeadTitle title="Content Production - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/film-production-banner.jpg" mobileImage="/assets/images/film-production-banner-mobile.jpg" title="Content" title2="Production" title3="" />
            <HeaderLayoutDynamic />
            <ServiceItemContent desktopImage="/assets/images/cnt1.jpg" mobileImage="/assets/images/cnt1mob.jpg" title="Schedule Your Shoot" subtitle="Initiate your production journey by scheduling a session with our cinematic specialists to translate your brand vision into-high fidelity visual reality." Position="left" />
            <OurTimeline />
            <NewsletterSection btnColor="#e02f47" />
        </div>
    );
}

export default ContentProduction;