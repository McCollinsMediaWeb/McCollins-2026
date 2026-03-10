import React, { useEffect, useState } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function FullImageWithText({ desktopImage, mobileImage, title, subtitle, content, points, iconClass, mb }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const bgImage = isMobile ? mobileImage : desktopImage;

    return (
        <div
            style={{
                height: "90vh",
                display: "flex",
                alignItems: "center",
                backgroundImage: `
                    linear-gradient(
                        to right,
                        rgba(0,0,0,0) 0%,
                        rgba(0,0,0,0) 50%,
                        rgba(0,0,0,0.85) 50%,
                        rgba(0,0,0,0.9) 100%
                    ),
                    url(${bgImage})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: mb
            }}
        >
            <div className="container">
                <div className="row">

                    {/* Left column (empty, image visible) */}
                    <div className="col-md-6"></div>

                    {/* Right column */}
                    <div className="col-md-6">
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="IndustryItem FullScreenItem">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="StWrp1">
                                            <h3 className={`InIt1 ${iconClass}`} style={{ color: '#fff' }}>{title}</h3>
                                            <div className="StRp1">{subtitle}</div>
                                            <p style={{ color: '#8f8f8f' }}>
                                                {content}
                                            </p>
                                            <div className="LnkLstBox">
                                                {points.map((point, index) => (
                                                    <div key={index} className="LnkLstBoxItem" style={{ color: '#fff' }}>
                                                        {point}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FullImageWithText;