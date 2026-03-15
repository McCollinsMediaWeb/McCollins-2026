import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const ServiceCard = ({ icon, title, content, link, speed = "" }) => {
    return (
        <>
            <AnimateOnScroll animation="fadeInLeft" speed={speed}>
                <div className="card card-service" style={{ backgroundColor: 'var(--background-color)', backgroundImage: 'none', border: '1px solid #5d5d5d' }}>
                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                        {/* <div>
                            <div className="service-icon-wrapper">
                                <div className="service-icon">
                                    <img src={icon} alt="Service Icon" className="img-fluid" />
                                </div>
                            </div>
                        </div> */}
                        <div className="service-title">
                            <h4>{title}</h4>
                        </div>
                    </div>
                    <p className="custom-card-text">{content}</p>
                    <a href={link} className="btn btn-accent" style={{ backgroundColor: '#0d0d0d', width: 'fit-content' }}>
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