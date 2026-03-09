import React from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function VideoBanner(){
    return(
        <>
            <div className="section-guide">
                <div className="guide-banner bg2">
                    <div className="hero-container">
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="guide-content">
                                <div className="guide-video-container">
                                    <VideoButton videoUrl="https://youtu.be/eK6SzU776KY?si=nn5Aenc7vEr9DcvT" />
                                    <p>See How We Help Brands Grow</p>
                                </div>
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">Transform Your Business with Marko!</h3>
                                    <p>Strategy-led design defines every brand we architect. By translating your vision into a precise and memorable visual identity, we ensure your brand excels in recognition and delivers significant, measurable results.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoBanner;