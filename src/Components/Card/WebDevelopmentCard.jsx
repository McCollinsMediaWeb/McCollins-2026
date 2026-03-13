import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const WebDevelopmentCard = ({ icon, step, title, title2, content, isFirst }) => {

    return (
        <>
            <AnimateOnScroll animation="fadeInUp" speed="normal">
                <div className="digital-process-card">
                    {!isFirst && <div className="step-spacer"></div>}
                    <div className="digital-process-step">
                        {/* <div className="d-flex justify-content-between">
                            <div>
                                <img src={icon} alt="Digital Process Icon" className="process-icon" style={{ width: '40%' }} />
                            </div>
                        </div> */}
                        <div className="d-flex justify-content-between justify-content-md-between justify-content-center">
                            <div className="w-100 text-center text-md-start">
                                <img
                                    src={icon}
                                    alt="Digital Process Icon"
                                    className="process-icon img-fluid"
                                    style={{ width: "30%" }}
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-column gspace-2 text-center text-md-start">
                            <h5 style={{ lineHeight: '10px' }}>{title}</h5>
                            {title2 && <h5 style={{ lineHeight: '10px' }}>{title2}</h5>}
                            <p style={{ fontWeight: 100 }}>{content}</p>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </>
    );
};

export default WebDevelopmentCard;
