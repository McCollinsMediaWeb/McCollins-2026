import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function FullSizeBanner({ desktopImage, mobileImage, altText = "Services Banner" }) {
    return (
        <div className="fullsize-banner-wrapper" style={{ width: "100%", overflow: "hidden" }}>
            <AnimateOnScroll animation="fadeInUp" speed="normal">
                <picture style={{ width: "100%", display: "block" }}>
                    {/* Mobile View Image */}
                    <source media="(max-width: 768px)" srcSet={mobileImage} />
                    {/* Desktop View Image (Default fallback) */}
                    <img
                        src={desktopImage}
                        alt={altText}
                        className="img-fluid"
                        style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            objectFit: "cover"
                        }}
                    />
                </picture>
            </AnimateOnScroll>
        </div>
    );
}

export default FullSizeBanner;
