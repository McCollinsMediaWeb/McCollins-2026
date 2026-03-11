import React, { useEffect, useState } from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function ServiceItem({ desktopImage, mobileImage, title, title2, subtitle, Position, link }) {
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

            <div className="BannerBoxContent">
                <div className={`container ${containerClass}`}>
                    <AnimateOnScroll animation="fadeInUp">
                        <div className="BannerBoxCn" style={{ width: 'unset' }}>
                            <h1 className="title-heading">{title}</h1>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "30px",
                                    flexDirection: Position === "right" ? "row-reverse" : "row",
                                    alignItems: 'center'
                                }}
                            >
                                <h1 className="title-heading">{title2}</h1>

                                <p style={{ maxWidth: "50%", color: "#fff", marginBottom: '0px' }}>
                                    {subtitle}
                                </p>
                            </div>

                            <a href={link} className="btn btn-primary" style={{ marginTop: '30px', width: '200px' }}>

                                <div className="btn-title">
                                    <span>View More</span>
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

export default ServiceItem;