import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function FullSizeBanner({ desktopImage, mobileImage, altText = "Services Banner" }) {
    return (
        <div className="fullsize-banner-wrapper" style={{ width: "100%", overflow: "hidden" }}>
            <style>
                {`
                    .fullsize-banner-wrapper {
                        cursor: pointer;
                    }
                    .fullsize-banner-wrapper img {
                        transition: transform 1.5s cubic-bezier(0.25, 1, 0.5, 1) !important;
                    }
                    .fullsize-banner-wrapper:hover img {
                        transform: scale(1.04);
                    }
                `}
            </style>
            <AnimateOnScroll animation="fadeInUp" speed="slow">
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
