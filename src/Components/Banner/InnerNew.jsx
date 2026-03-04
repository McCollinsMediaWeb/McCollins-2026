import React, { useEffect, useRef } from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function InnerNew({ title,title2,title3, desktopImage, mobileImage }) {

    const playerRef = useRef(null);
    const videoContainerRef = useRef(null);



    return (
        <div className="section-banner" style={{ height: 'auto', backgroundColor: '#000' }} >
            <AnimateOnScroll animation="fadeInUp">
                <div
                    ref={videoContainerRef}
                    className="keep-dark"
                >
                    <div className="HeroBanner">
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                            }}
                        >
                            <picture>
                                {/* Mobile image */}
                                <source
                                    media="(max-width: 768px)"
                                    srcSet={mobileImage}
                                />
                                {/* Desktop image (default fallback) */}
                                <img
                                    src={desktopImage}
                                    alt="MainBanner"
                                    className="mainBannerimage width-full"
                                    style={{
                                        width: "100%",
                                        display: "block",
                                        objectFit: "cover",
                                    }}
                                />
                            </picture>

                            {/* Gradient Overlay */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    pointerEvents: "none",
                                    background:
                                        "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.85) 100%)",
                                }}
                            />
                        </div>
                    </div>
                    <div className="HeroBannerContent">
                        <div className="container">
                            <div className="HeroBannerSbText2" style={{ textAlign: 'center' }}>
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <h1 className="title-heading-banner" style={{ WebkitTextFillColor: "#fff" }}>
                                        {title}
                                        <div>{title2}</div>
                                        <div>{title3}</div>
                                    </h1>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
    );
}

export default InnerNew;