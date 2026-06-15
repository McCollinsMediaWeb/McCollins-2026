import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function SocialMediaRoute() {
    const listItems = [
        "Content Management in AR/EN",
        "Comment Moderation",
        "Buzz Generation - Ramadan, UAE National Day, Menu Launch, Competitions",
        "Digital Ads",
        "Blogger Outreach Program",
        "Social Media Monitoring and Analysis"
    ];

    return (
        <section className="social-media-route-section">
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Left Column: Megaphone Graphic */}
                    <div className="col-lg-6 col-md-12 text-center text-lg-start">
                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <div className="sm-route-graphic-container">
                                <img 
                                    src="/services/social-media-marketing/social-media-route-illustration.jpg" 
                                    alt="Social Media Route Megaphone" 
                                    className="img-fluid sm-route-img"
                                />
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Right Column: Title & Bullet points */}
                    <div className="col-lg-6 col-md-12 mt-lg-0 mt-5">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sm-route-content-box">
                                <h2 className="sm-route-title">Social Media Route</h2>
                                <ul className="sm-route-list">
                                    {listItems.map((item, index) => (
                                        <li key={index} className="sm-route-item">
                                            <span className="sm-route-bullet"></span>
                                            <span className="sm-route-text">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimateOnScroll>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SocialMediaRoute;
