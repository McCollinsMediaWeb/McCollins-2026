import React from "react";
import { caseStudiesData2 } from "../../Data/CaseStudiesData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CaseStudyCardNew from "../Card/CaseStudiesCardNew";

const CaseStudiesSectionNew = ({ noPadding }) => {

    return (
        <div className={`section ${noPadding ? "p-0" : ""}`}>
            <div className="hero-container">
                <div className=" case-studies-layout" style={{ padding: '0px', borderRadius: 'none' }}>
                    <div className="card card-case-studies" style={{ padding: '5px 5px 55px 5px', backgroundColor: 'var(--background-color)' }} >
                        <div className=" row row-cols-1 grid-spacer-5">
                            <div className="col">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <div className="d-flex flex-column gspace-1">
                                        <div className="sub-heading">
                                            <i className="fa-regular fa-circle-dot"></i>
                                            <span>Case Studies</span>
                                        </div>
                                        <h2 className="title-heading">Featured Cases</h2>
                                    </div>
                                </AnimateOnScroll>
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <p style={{ marginTop: "15px", fontWeight: 100 }}>Every brand in today's time must have a website to showcase itself to its audience. Having a mobile friendly website is even more important. Our team of in-house developers specialize in various backends be it Wordpress, WooCommerce, Magento, React or Shopify to name a few. Our agency is Partners with several leading platforms.</p>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                    {/* <div className="spacer"></div> */}
                </div>
            </div>



            {/* Cards */}
            <div className="MainWeb row g-4" style={{ marginTop: "20px" }}>
                {caseStudiesData2.map((item) => (
                    <div key={item.id} className="col-12 col-md-6" style={{ paddingLeft: '0px', paddingRight: '0px', marginTop: '0px' }}>
                        <CaseStudyCardNew {...item} />
                    </div>
                ))}
            </div>


        </div>
    );
};

export default CaseStudiesSectionNew;
