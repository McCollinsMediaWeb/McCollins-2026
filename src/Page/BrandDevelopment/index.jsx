import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import InnerNew from "../../Components/Banner/InnerNew";
import HeaderLayout1 from "../../Components/MccollinsMedia/HeaderLayout-1";

function BrandDevelopment() {
    return (
        <>
            <HeadTitle title="Services - McCollins Media" />
            <InnerNew desktopImage="/assets/images/s1.jpg" mobileImage="/assets/images/s1mob.jpg" title="Brand" title2="Development" title3="" />
            <HeaderLayout1 />
        </>
    );
}

export default BrandDevelopment;