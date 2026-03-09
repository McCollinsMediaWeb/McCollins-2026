import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const ContentProductionStepCard = ({ icon, step, title, title2, content, isFirst }) => {

    return (
        <>
            <AnimateOnScroll animation="fadeInUp" speed="normal">
                <div className="digital-process-card">
                    {!isFirst && <div className="step-spacer"></div>}
                    <div className="digital-process-step">
                        <div className="d-flex flex-column gspace-4">
                            <h2 style={{ color: '#e02f47' }}>{step}</h2>
                            <div className="d-flex flex-column gspace-2">
                                <h5 style={{ lineHeight: '10px' }}>{title}</h5>
                                {title2 && <h5 style={{ lineHeight: '10px' }}>{title2}</h5>}
                            </div>
                            <p style={{ fontWeight: '100' }}>{content}</p>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </>
    );
};

export default ContentProductionStepCard;
