import React, { useEffect, useState } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function BehindTheScence() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://widget.taggbox.com/embed-lite.min.js";
        script.defer = false;
        script.async = false;
        script.type = "text/javascript";
        document.body.appendChild(script);
    }, []);

    return (
        <div className="section pb-0">
            <div className="hero-container" style={{ maxWidth: "none" }} >
                <div className="newsletter-wrapper">
                    <style>
                        {`
                            .newsletter-wrapper::before{
                                content:none !important;
                                background:none !important;
                            }
                        `}
                    </style>
                    <div className="newsletter-layout" >
                        <style>
                            {`
                                .newsletter-layout{
                                    border:none !important;
                                    background-image:none !important;
                                    text-align:left !important;
                                    align-items: normal !important;
                                }
                                .newsletter-layout::before {
                                    background-image:none !important;
                                }
                            `}
                        </style>
                        <div className="d-flex flex-column gspace-5 position-relative z-2">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="d-flex flex-column gspace-2 text-center">
                                    <h2 className="title-heading text-align-left">#BehindTheScenes</h2>
                                </div>
                            </AnimateOnScroll>

                            <div
                                className="taggbox"
                                style={{ width: "100%", height: "100%" }}
                                data-widget-id="124868"
                                data-tags="false"
                            ></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BehindTheScence;