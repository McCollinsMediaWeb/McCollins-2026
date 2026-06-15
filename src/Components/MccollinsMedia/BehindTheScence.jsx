import React, { useEffect } from "react";
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
        <div className="section behind-the-scenes-section">
            <div className="container">
                <div className="d-flex flex-column gspace-3 position-relative z-2">
                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="sub-heading align-self-center" style={{ justifyContent: 'center', marginBottom: '10px' }}>
                            <i className="fa-regular fa-circle-dot" style={{ color: '#3876fc' }}></i>
                            <span>Social Feed</span>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeInUp" speed="normal" delay={150}>
                        <div className="text-center mb-5">
                            <h2 className="title-heading" style={{ marginBottom: '15px' }}>
                                #BehindTheScenes
                            </h2>
                            <p style={{ fontWeight: 100, maxWidth: '600px', margin: '0 auto', opacity: 0.7 }}>
                                Take a look at our daily agency life, creative processes, and the amazing team making the magic happen.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeInUp" speed="normal" delay={300}>
                        <div className="taggbox-wrapper">
                            <div
                                className="taggbox"
                                style={{ width: "100%", height: "100%", border: "none" }}
                                data-widget-id="124868"
                                data-tags="false"
                            ></div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </div>
    );
}

export default BehindTheScence;