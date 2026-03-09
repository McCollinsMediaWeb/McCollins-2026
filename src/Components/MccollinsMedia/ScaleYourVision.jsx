import React, { useEffect, useState } from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function ScaleYourVision({ desktopImage, mobileImage, title, subtitle, Position }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const containerClass = Position === "right" ? "alignRight" : "alignLeft";

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

            <div className="BannerBoxContent" style={{ top: '35%' }} >
                <div className={`container ${containerClass}`}>
                    <AnimateOnScroll animation="fadeInUp">
                        <div className="BannerBoxCn" style={{ width: '800px' }}>
                            <h2 className="title-heading">{title}</h2>

                            <div className="title-heading-2" style={{ marginTop: '30px', marginBottom: '30px' }}>
                                {subtitle}
                            </div>

                            <a href="#" className="btn btn-primary" style={{ backgroundColor: '#e02f47', border: 'none', width: 'fit-content' }} >

                                <div className="btn-title">
                                    <span>Book Now</span>
                                </div>

                                <div className="icon-circle">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>

                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>

        </div>
    );
}

export default ScaleYourVision;