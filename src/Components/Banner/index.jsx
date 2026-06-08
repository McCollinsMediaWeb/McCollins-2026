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


        <div className="section-banner home-hero-banner" style={{ backgroundColor: '#000' }} >
            <AnimateOnScroll animation="fadeInUp">
                <div
                    ref={videoContainerRef}
                    className="keep-dark"
                >
                    <div className="HeroBanner">
                        <div
                            className="home-hero-video-wrapper"
                            style={{
                                position: "relative",
                                width: "100%",
                            }}
                        >
                            <video
                                src="/herobannervideo.mp4"
                                poster={desktopImage}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="mainBannerimage width-full home-hero-video"
                                style={{
                                    width: "100%",
                                    display: "block",
                                    objectFit: "cover",
                                }}
                            />

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
                        <div className="container pb-5 align-self-center">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="hero-title-container">
                                    <div className="hero-subtitle">Navigate the Global</div>
                                    <h1 className="hero-title-main">
                                        <span className="sans-bold">MARKET WITH</span>
                                        <br />
                                        <span className="sans-bold">DIGITAL</span> <span className="serif-italic">Mastery</span>
                                    </h1>
                                </div>
                            </AnimateOnScroll>
                            
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="mt-4">
                                    <a href="/case_studies" className="btn btn-hero">
                                        <div className="btn-title">
                                            <span>Let's Talk</span>
                                        </div>
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </a>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        {/* Split bottom texts */}
                        <div className="hero-bottom-text">
                            <div className="hero-bottom-text-left">
                                Witness the transformative impact of strategies engineered for global resonance and measurable market dominance.
                            </div>
                            <div className="hero-bottom-text-right">
                                Witness the transformative impact of strategies engineered for global resonance and measurable market dominance.
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
    );
}

export default BannerHomeSection;