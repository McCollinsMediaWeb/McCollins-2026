import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const CaseStudyCardNew = ({ title, description, tags, className, size, category, url }) => {

    return (
        <>
            <AnimateOnScroll animation="fadeInUp">
                <a href={url}>
                    <div className={`card case-studies-content d-flex flex-column ${className}`} style={{ minHeight: '900px', borderRadius: '0px' }}>
                        <div className="d-flex flex-column gspace-1 mt-auto">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span style={{ color: '#fff' }} >{category}</span>
                            </div>
                            <a href={url} style={{ color: '#fff' }} className="case-studies-title"><h4>{title}</h4></a>

                            <div className={`case-studies-component ${size} align-self-start justify-content-start align-items-start`}>
                                {tags.map((tag, index) => (
                                    <div key={index} className="cs-component" style={{ borderColor: 'white' }}>
                                        <a style={{ color: '#fff' }} href="#">{tag}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </a>
            </AnimateOnScroll>
        </>
    );
};

export default CaseStudyCardNew;
