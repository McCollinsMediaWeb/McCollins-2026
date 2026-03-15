import React, { useEffect, useRef } from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function BannerHomeSection({ title, title2, title3, desktopImage, mobileImage }) {

    const playerRef = useRef(null);
    const videoContainerRef = useRef(null);



    return (
        // <div className="section-banner">
        //     <AnimateOnScroll animation="fadeInUp">
        //         <div
        //             ref={videoContainerRef}

        //             className="keep-dark"
        //         >
        //             <div className="HeroBanner">
        //                 <img
        //                     src="/assets/images/mcmain.jpg"
        //                     className="mainBannerimage width-full"
        //                     alt="MainBanner"
        //                 />
        //             </div>
        //             <div className="HeroBannerContent">
        //                 <div className="container pb-5 align-self-end">
        //                     <div className="HeroBannerSbText1">
        //                         <AnimateOnScroll animation="fadeInLeft" speed="normal">
        //                             <h3 className="title-heading">
        //                                 Navigate the Global
        //                             </h3>
        //                         </AnimateOnScroll>
        //                     </div>
        //                     <div className="HeroBannerSbText2">
        //                         <AnimateOnScroll animation="fadeInLeft" speed="normal">
        //                             <h1 className="title-heading">
        //                                 Market with <br /> Digital Mastery
        //                             </h1>
        //                         </AnimateOnScroll>
        //                     </div>
        //                     <AnimateOnScroll animation="fadeInLeft" speed="normal">
        //                         <div className="HomeButtonWrap1">
        //                             <a href="#" class="btn btn-accent"><div class="btn-title"><span>Get Started</span></div><div class="icon-circle"><i class="fa-solid fa-arrow-right"></i></div></a>
        //                         </div>
        //                     </AnimateOnScroll>

        //                 </div>
        //             </div>
        //         </div>
        //     </AnimateOnScroll>
        // </div>


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
                    {/* <div className="HeroBannerContent">
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
                    </div> */}
                    <div className="HeroBannerContent">
                        <div className="container pb-5 align-self-end">
                            <div className="HeroBannerSbText1">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <h3 className="title-heading">
                                        Navigate the Global
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
                                {/* <div className="HomeButtonWrap1">
                                    <a href="#" class="btn btn-accent">
                                        <div class="btn-title"><span>Get Started</span></div><div class="icon-circle"><i class="fa-solid fa-arrow-right"></i></div></a>
                                </div> */}

                                <div className="mt-4">
                                    <a href="/case_studies" className="btn btn-primary" style={{ maxWidth: 'fit-content' }}>

                                        <div className="btn-title">
                                            <span>Get Started</span>
                                        </div>

                                        <div className="icon-circle" style={{ backgroundColor: '#000' }}>
                                            <i className="fa-solid fa-arrow-right" style={{ color: '#fff' }}></i>
                                        </div>

                                    </a>
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