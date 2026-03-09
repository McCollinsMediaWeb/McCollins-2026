import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import VideoButtonNew from "../Video/VideoButtonNew";

function CustomGuide() {
    return (
        <>
            <div className="section-guide">
                <div className="guide-banner">
                    <div className="hero-container">
                        <div style={{ position: 'absolute', bottom: '9%', right: '5%' }} >
                            <div className="guide-video-container">
                                <VideoButtonNew videoUrl="https://youtu.be/eK6SzU776KY?si=nn5Aenc7vEr9DcvT" />
                                <p style={{ maxWidth: '100%', marginBottom: '0px' }}>See How We Help<br /> Brands Grow</p>
                            </div>
                        </div>
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="guide-content">
                                {/* <div className="guide-video-container">
                                    <VideoButton videoUrl="https://youtu.be/eK6SzU776KY?si=nn5Aenc7vEr9DcvT" />
                                    <p>See How We Help Brands Grow</p>
                                </div> */}
                                <div className="d-flex flex-column gspace-2">
                                    <h2 className="title-heading" style={{ WebkitTextFillColor: '#fff' }}>Scale your vision<br /> globally with<br /> McCollins Media</h2>
                                    <p style={{ fontWeight: 100, maxWidth: '60%' }}>Elevate your global trajectory through precision - engineered strategies and borderless creative innovation. Let’s build a legacy of measurable success together.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomGuide;