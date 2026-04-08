import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";
import BrandGrids from "./BrandGrids";

function CaseStudiesBrandDevelopment() {

    return (
        <>
            <div className="section HdLayt1" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
                <div className="container">
                    <div className="expertise-title">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Case Studies</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="RowSt1">
                                <h2 className="title-heading">
                                    Featured Cases
                                </h2>
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <p>
                                        Over the past decade, we have partnered with a wide range of brands on their brand development journeys—helping them shape identities, build trust, and create meaningful connections with their audiences. From strategy and design to storytelling and positioning, our work has empowered brands to stand out and grow stronger in competitive markets.
                                    </p>
                                </AnimateOnScroll>

                            </div>

                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="CaseStudiesBoxWrap">
                                <div className="CaseStudiesBoxes">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="CaseStudyBox">
                                                <img src="/assets/images/cs1.jpg" />
                                                <div className="CaseStudyBoxContent">
                                                    <div className="csSt1" style={{ color: '#fff' }}>Hospitality / Restaurent</div>
                                                    <h4 className="csSt2" style={{ color: '#fff' }}>Doors Dubai</h4>
                                                    <div className="LinkLists">
                                                        <div className="LinkListItem" style={{ color: '#fff' }}>Brand Strategy & Identity</div>
                                                        <div className="LinkListItem" style={{ color: '#fff' }}>Social Media</div>
                                                        <div className="LinkListItem" style={{ color: '#fff' }}>Performance Marketing</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="/case_studies/doors-dubai" class="btn btn-primary">
                                                <div class="btn-title">
                                                    <span>View Details</span>
                                                </div>
                                                <div class="icon-circle">
                                                    <i class="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="CaseStudyBox">
                                                <img src="/assets/images/cs2.jpg" />
                                                <div className="CaseStudyBoxContent">
                                                    <div className="csSt1" style={{ color: '#fff' }}>Hospitality / Restaurent</div>
                                                    <h4 className="csSt2" style={{ color: '#fff' }}>Creamio Cafe</h4>
                                                    <div className="LinkLists">
                                                        <div className="LinkListItem" style={{ color: '#fff' }}>Brand Strategy & Identity</div>
                                                        <div className="LinkListItem" style={{ color: '#fff' }}>Social Media</div>
                                                        <div className="LinkListItem" style={{ color: '#fff' }}>Performance Marketing</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="/case_studies/creamio-cafe" class="btn btn-primary">
                                                <div class="btn-title">
                                                    <span>View Details</span>
                                                </div>
                                                <div class="icon-circle">
                                                    <i class="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="CaseStudyBox">
                                                <img src="/assets/images/cs3.jpg" />
                                                <div className="CaseStudyBoxContent">
                                                    <div className="csSt1" style={{ color: '#fff' }}>Hospitality / Restaurent</div>
                                                    <h4 className="csSt2" style={{ color: '#fff' }}>Doors Dubai</h4>
                                                    <div className="LinkLists">
                                                        <div className="LinkListItem" style={{ color: '#fff' }}>Brand Strategy & Identity</div>
                                                        <div className="LinkListItem" style={{ color: '#fff' }}>Social Media</div>
                                                        <div className="LinkListItem" style={{ color: '#fff' }}>Performance Marketing</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="/case_studies/doors-dubai" class="btn btn-primary">
                                                <div class="btn-title">
                                                    <span>View Details</span>
                                                </div>
                                                <div class="icon-circle">
                                                    <i class="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </AnimateOnScroll>

                    </div>
                </div>
            </div>

        </>
    );
}

export default CaseStudiesBrandDevelopment;