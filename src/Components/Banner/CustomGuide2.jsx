import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import VideoButtonNew from "../Video/VideoButtonNew";

function CustomGuide2() {
    return (
        <>
            <div className="section-guide">
                <div className="guide-banner" style={{ backgroundImage: 'url(/assets/images/videobg1.jpg)' }} >
                    <div className="hero-container">
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="guide-content" style={{ maxWidth: 'unset' }}>
                                {/* <div className="guide-video-container">
                                    <VideoButton videoUrl="https://youtu.be/eK6SzU776KY?si=nn5Aenc7vEr9DcvT" />
                                    <p>See How We Help Brands Grow</p>
                                </div> */}
                                <div className="d-flex flex-column gspace-2">
                                    <h2 className="title-heading mb-3" style={{ WebkitTextFillColor: '#fff' }}>Defining Identity Through<span><br /></span>Strategic Artistry</h2>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexDirection: 'row-reverse' }} >
                                        <p style={{ fontWeight: 100, maxWidth: '40%', color: '#adadad' }}>Strategy-led design defines every brand we architect. By translating your vision into a precise and memorable visual identity, we ensure your brand excels in recognition and delivers significant, measurable results.</p>
                                        <div className="guide-video-container">
                                            <VideoButtonNew videoUrl="https://youtu.be/eK6SzU776KY?si=nn5Aenc7vEr9DcvT" />
                                            <p style={{ maxWidth: '100%', marginBottom: '0px', color: '#fff' }}>See How We Help<br /> Brands Grow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomGuide2;