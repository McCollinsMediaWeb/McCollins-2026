import React, { useEffect, useState } from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import VideoButtonNew from "../Video/VideoButtonNew";

function FullImageWithContact({ desktopImage, mobileImage }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <div className="ServiceItemBox">

            <div className="BannerImageBox">
                <AnimateOnScroll animation="fadeInUp">
                    {isMobile ? (
                        <img src={mobileImage} alt="mobile view" />
                    ) : (
                        <img src={desktopImage} alt="desktop view" />
                    )}
                </AnimateOnScroll>
            </div>

            <div className="BannerBoxContent">
                <div className="section">
                    <div className="hero-container">
                        <div className="row align-items-center">
                            <div className="col-md-6 d-flex align-items-center d-none d-md-flex" >
                                <div className="guide-video-container">
                                    <VideoButtonNew videoUrl="https://youtu.be/eK6SzU776KY?si=nn5Aenc7vEr9DcvT" />
                                    <p className="scale-vision-play-label">See How We Help<br /> Brands Grow</p>
                                </div>
                            </div>
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                                <div className="col-md-6" >
                                    <h2 className="scale-vision-heading">
                                        <span className="text-playfair">Scale </span>
                                        <span className="text-delight">YOUR VISION</span><br />
                                        <span className="text-delight">GLOBALLY WITH</span><br />
                                        <span className="text-delight">MCCOLLINS MEDIA</span>
                                    </h2>
                                    <p className="scale-vision-desc">
                                        Elevate your global trajectory through precision - engineered strategies and borderless creative innovation. Let’s build a legacy of measurable success together.
                                    </p>
                                    <div className="guide-video-container d-flex d-md-none mt-4">
                                        <VideoButtonNew videoUrl="https://youtu.be/eK6SzU776KY?si=nn5Aenc7vEr9DcvT" />
                                        <p className="scale-vision-play-label">See How We Help<br /> Brands Grow</p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullImageWithContact;