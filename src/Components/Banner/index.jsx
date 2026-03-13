import React, { useEffect, useRef } from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function BannerHomeSection() {

    const playerRef = useRef(null);
    const videoContainerRef = useRef(null);



    return (
        <div className="section-banner">
            <AnimateOnScroll animation="fadeInUp">
                <div
                    ref={videoContainerRef}
                    className="keep-dark"
                >
                    <div className="HeroBanner">
                        <img
                            src="/assets/images/mcmain.jpg"
                            className="mainBannerimage width-full"
                            alt="MainBanner"
                        />
                    </div>
                    <div className="HeroBannerContent">
                        <div className="container">
                            <div className="HeroBannerSbText1">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <h3 className="title-heading">
                                        Market with Digital Mastery
                                    </h3>
                                </AnimateOnScroll>
                            </div>
                            <div className="HeroBannerSbText2">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <h1 className="title-heading">
                                        Market with <br /> Digital Mastery
                                    </h1>
                                </AnimateOnScroll>
                            </div>
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="HomeButtonWrap1">
                                    <a href="#" class="btn btn-accent"><div class="btn-title"><span>Get Started</span></div><div class="icon-circle"><i class="fa-solid fa-arrow-right"></i></div></a>
                                </div>
                            </AnimateOnScroll>

                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
    );
}

export default BannerHomeSection;