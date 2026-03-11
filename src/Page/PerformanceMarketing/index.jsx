import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import InnerNew from "../../Components/Banner/InnerNew";
import NewsletterSection from "../../Components/Form/Newsletter";
import BestSolutions from "../../Components/MccollinsMedia/BestSolutions";
import ClientPortfolio from "../../Components/MccollinsMedia/ClientPortfolio";
import KeyFeatures from "../../Components/MccollinsMedia/KeyFeatures";
import FeaturedCaseStudies from "../../Components/MccollinsMedia/FeaturedCaseStudies";

function PerformanceMarketing() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }} >
            <HeadTitle title="Performance Marketing - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/s4.jpg" mobileImage="/assets/images/s4mob.jpg" title="Performance" title2="Marketing" title3="" />
            <BestSolutions />
            <ClientPortfolio />
            <KeyFeatures />
            <FeaturedCaseStudies />
            <NewsletterSection />
        </div>
    );
}

export default PerformanceMarketing;