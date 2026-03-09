import React from "react";
import { caseStudiesDataSocialMediaMarketing } from "../../Data/CaseStudiesData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CaseStudyCardNew from "../Card/CaseStudiesCardNew";

const CaseStudiesSocialMediaMarketing = ({ noPadding }) => {

    return (
        <div className={`section ${noPadding ? "p-0" : ""}`}>
            <div className="hero-container" style={{ maxWidth: '1380px' }}>
                <div className="case-studies-layout" style={{ padding: '0px', borderRadius: 'none' }}>
                    <div className="card card-case-studies" style={{ padding: '5px 5px 5px 5px', backgroundColor: '#000' }} >
                        <style>
                            {`
                                .card-case-studies::before {
                                    background-image: none;
                                }
                            `}
                        </style>
                        <div className="row row-cols-1 grid-spacer-5">
                            <div className="col">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <div className="d-flex flex-column gspace-1">
                                        <div className="sub-heading">
                                            <i className="fa-regular fa-circle-dot"></i>
                                            <span>Case Studies</span>
                                        </div>
                                        <h2 className="title-heading" style={{ WebkitTextFillColor: "#ffffff" }}>Featured Cases</h2>
                                    </div>
                                </AnimateOnScroll>
                                <p style={{ marginTop: "15px", fontWeight: 100 }}>Over the decade we have worked on some exciting web projects from Dubai Airport Freezone, Costa Coffee, Roads and Transport Authority Dubai to Samsung, LG, Pioneer or Zamil industries in Saudi Arabia. Have a look at some of our work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Cards */}
            <div className="row g-4" style={{ marginTop: "20px" }}>
                {caseStudiesDataSocialMediaMarketing.map((item) => (
                    <div key={item.id} className="col-12 col-md-6" style={{ paddingLeft: '0px', paddingRight: '0px', marginTop: '0px' }}>
                        <CaseStudyCardNew {...item} />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default CaseStudiesSocialMediaMarketing;
