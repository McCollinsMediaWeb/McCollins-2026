import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import InnerNew from "../../Components/Banner/InnerNew";
import HeaderLayout1 from "../../Components/MccollinsMedia/HeaderLayout-1";
import VideoBanner from "../../Components/MccollinsMedia/VideoBanner";
import AnimateOnScroll from "../../Components/Hooks/AnimateOnScroll";
import CaseStudiesBrandDevelopment from "../../Components/MccollinsMedia/CaseStudiesBrandDevelopment";

function Industry() {
    return (
        <>
            <HeadTitle title="Expertise - McCollins Media" />
            <InnerNew desktopImage="/assets/images/exp.jpg" mobileImage="/assets/images/expmobile.jpg.jpg" title="Proven Excellence." title2="Diverse Sectors." title3="" />

            <div className="UnderstandingBox section">
                <div className="container">
                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="UnBoxT1">
                            <h2 className="title-heading text-center">Proven Success Across <br />These Key Structures</h2>
                            <p className="text-center">Transforming industry-specific challenges into global success stories through specialized strategic mastery.</p>
                        </div>
                    </AnimateOnScroll>


                    <div className="IndustryAreaWrap">
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="IndustryItem">
                                <div className="row">
                                    <div className="col-md-5">
                                        <h3 className="InIt1 t1">Real Estate</h3>
                                        <img className="width-full InImage" src="/assets/images/in1.png" />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="StWrp1">
                                            <div className="StRp1">Architecting Digital Dominance for Global Real Estate.</div>
                                            <div className="StRp2">Architecting a dominant digital presence for the world’s most ambitious property developments and brokerage firms. We bridge the gap between premier real estate assets and global investors through data-backed lead generation and immersive brand storytelling.</div>
                                            <div className="LnkLstBox">
                                                <div className="LnkLstBoxItem">Precision Lead Acquisition</div>
                                                <div className="LnkLstBoxItem">Immersive Digital Showcasing</div>
                                                <div className="LnkLstBoxItem">Global Market Penetration</div>
                                                <div className="LnkLstBoxItem">Data-Driven Sales Velocity</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>

                    </div>
                </div>

            </div>

        </>
    );
}

export default Industry;