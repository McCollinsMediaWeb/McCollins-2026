import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const TimelineCard = ({ title, subTitle, content, timeline, speed = "" }) => {
    return (
        <>
            <AnimateOnScroll animation="fadeInLeft" speed={speed}>
                <div className="card card-service" style={{ backgroundImage: 'none', backgroundColor: '#e02f47', gap: '10px' }} >
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                        <div className="service-title" style={{ color: '#fff' }}>
                            <h2>{title}</h2>
                        </div>
                    </div>
                    <h4 style={{ color: '#000' }}>{subTitle}</h4>
                    <p style={{ color: '#000', fontWeight: '100', minHeight: '160px' }}>{content}</p>
                    <h4 style={{ color: '#fff' }}>{timeline}</h4>
                </div>
            </AnimateOnScroll>
        </>
    );
}

export default TimelineCard;