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
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <h1 className="title-heading-banner">
                                    Market with <br /> Digital Mastery
                                </h1>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
    );
}

export default BannerHomeSection;