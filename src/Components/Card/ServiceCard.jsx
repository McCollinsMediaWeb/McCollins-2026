import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const ServiceCard = ({ icon, title, content, link, speed = "" }) => {
    return (
        <>
            <AnimateOnScroll animation="fadeInLeft" speed={speed} style={{ height: '100%' }}>
                <div className="card card-service" style={{ backgroundColor: 'var(--background-color)', backgroundImage: 'none', border: '1px solid #5d5d5d', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                            <div className="service-title">
                                <h4>{title}</h4>
                            </div>
                        </div>
                        <p className="custom-card-text" style={{ marginTop: '15px', fontWeight: 100 }}>{content}</p>
                    </div>
                    <a href={link} className="btn btn-accent mt-3" style={{ backgroundColor: '#0d0d0d', width: 'fit-content' }}>
                        <div className="btn-title">
                            <span>Read More</span>
                        </div>
                        <div className="icon-circle" style={{ backgroundColor: '#3874ff' }}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </a>
                </div>
            </AnimateOnScroll>
        </>
    );
}

export default ServiceCard;