import React from "react";
import { caseStudiesData } from "../../Data/CaseStudiesData";
import CaseStudyCard from "../Card/CaseStudiesCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const CaseStudiesSection = ({ noPadding }) => {

    return (
        // <div className={`section ${noPadding ? "p-0" : ""}`}>
        //     <div className="hero-container">
        //         <div className="case-studies-layout">
        //             <div className="card card-case-studies">
        //                 <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
        //                     <div className="col">
        //                         <AnimateOnScroll animation="fadeInLeft" speed="normal">
        //                             <div className="d-flex flex-column gspace-2">
        //                                 <div className="sub-heading">
        //                                     <i className="fa-regular fa-circle-dot"></i>
        //                                     <span>Case Studies</span>
        //                                 </div>
        //                                 <h2 className="title-heading">Witness the impact of globally fluent digital strategies</h2>
        //                             </div>
        //                         </AnimateOnScroll>
        //                     </div>
        //                     <div className="col">
        //                         <AnimateOnScroll animation="fadeInRight" speed="normal">
        //                             <div className="d-flex flex-column h-100 justify-content-end gspace-2">
        //                                 <p>We don't just talk about results—we deliver them. Here are some of our most impactful case studies showcasing how our digital marketing strategies drive success.</p>
        //                                 <div className="link-wrapper">
        //                                     <a href="./case_studies">More Case Studies</a>
        //                                     <i className="fa-solid fa-circle-arrow-right"></i>
        //                                 </div>
        //                             </div>
        //                         </AnimateOnScroll>
        //                     </div>
        //                 </div>

        //                 {/* Cards */}
        //                 <div className="d-flex flex-column gspace-2">
        //                     <div className="d-flex flex-column flex-lg-row gspace-2">
        //                         {caseStudiesData.slice(0, 2).map((item) => (
        //                             <CaseStudyCard key={item.id} {...item} />
        //                         ))}
        //                     </div>
        //                     <div className="d-flex flex-column flex-lg-row gspace-2">
        //                         {caseStudiesData.slice(2, 4).map((item) => (
        //                             <CaseStudyCard key={item.id} {...item} />
        //                         ))}
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="spacer"></div>
        //         </div>
        //     </div>
        // </div>


        <>
            <div className="section">
                <div className="hero-container">

                    {/* <div className="row">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Case Study</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <h2 className="title-heading" style={{ marginBottom: "0px", marginTop: "20px" }}>
                                Witness the impact of globally fluent digital strategies
                                <br className="d-none d-md-block" />
                                {` `}these key sectors.
                            </h2>
                        </AnimateOnScroll>
                    </div> */}

                    <div className="row">
                        <div className="col-md-6" >
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Case Study</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading" style={{ marginBottom: "0px", marginTop: "20px" }}>
                                    Witness the impact
                                    <br className="d-none d-md-block" />
                                    {` `}of globally fluent
                                    <br className="d-none d-md-block" />
                                    {` `}digital strategies.
                                </h2>
                            </AnimateOnScroll>

                            <div className="mt-4">
                                <a href="/case_studies" className="btn btn-primary" style={{ maxWidth: 'fit-content' }}>

                                    <div className="btn-title">
                                        <span>More Case Studies</span>
                                    </div>

                                    <div className="icon-circle" style={{ backgroundColor: '#000' }}>
                                        <i className="fa-solid fa-arrow-right" style={{ color: '#fff' }}></i>
                                    </div>

                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center" >
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <p style={{ fontWeight: 100, margin: '20px 0px' }}>
                                    Witness the transformative impact of strategies engineered for global resonance and measurable market dominance.
                                </p>
                            </AnimateOnScroll>
                        </div>

                    </div>

                    <div className="row mt-1 pt-5">
                        <div className="col-md-8 card-col">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="industry-card" style={{ backgroundImage: "url(/assets/images/oakberry.jpg)" }}>

                                    <div className="industry-overlay"></div>

                                    <div className="industry-content">
                                        <div className="d-flex align-items-end gap-1 mb-1">
                                            <h6>OAK BERRY</h6>
                                        </div>
                                        <p style={{ fontFamily: 'MyCustomFont', fontWeight: 100, color: '#fff' }} >Digital Marketing</p>
                                    </div>

                                    <div className="industry-hover-icon">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        <div className="col-md-4 card-col pt-2 pt-md-0">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="industry-card" style={{ backgroundImage: "url(/assets/images/voss.jpg)" }}>

                                    <div className="industry-overlay"></div>

                                    <div className="industry-content">
                                        <div className="d-flex align-items-end gap-1 mb-1">
                                            <h6>VOSS DUBAI</h6>
                                        </div>
                                        <p style={{ fontFamily: 'MyCustomFont', fontWeight: 100, color: '#fff' }} >Digital Marketing</p>
                                    </div>

                                    <div className="industry-hover-icon">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>

                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>


                    <div className="row mt-3">
                        <div className="col-md-4 card-col">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="industry-card" style={{ backgroundImage: "url(/assets/images/dubai.jpg)" }}>

                                    <div className="industry-overlay"></div>

                                    <div className="industry-content">
                                        <div className="d-flex align-items-end gap-1 mb-1">
                                            <h6>Dubai Airport Freezone</h6>
                                        </div>
                                        <p style={{ fontFamily: 'MyCustomFont', fontWeight: 100, color: '#fff' }} >APP Design</p>
                                    </div>

                                    <div className="industry-hover-icon">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>

                                </div>
                            </AnimateOnScroll>
                        </div>

                        <div className="col-md-8 card-col pt-2 pt-md-0">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="industry-card" style={{ backgroundImage: "url(/assets/images/pioneer.jpg)" }}>

                                    <div className="industry-overlay"></div>

                                    <div className="industry-content">
                                        <div className="d-flex align-items-end gap-1 mb-1">
                                            <h6>Pioneer</h6>
                                        </div>
                                        <p style={{ fontFamily: 'MyCustomFont', fontWeight: 100, color: '#fff' }} >Website</p>
                                    </div>

                                    <div className="industry-hover-icon">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>

                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    {/* <div className="row mt-1">
                        <div className="col-md-4" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }} >
                            <div className="mb-2" style={{ backgroundImage: 'url(/assets/images/dubai.jpg)' }} >
                                <div className="d-flex align-items-end gap-3 mb-4">
                                    <img className="img-fluid" style={{ width: '70px' }} src="/assets/images/ind4.jpg" alt="" />
                                    <h5>Technology</h5>
                                </div>
                                <p style={{ fontWeight: 100 }}>Fueling your brand's evolution with precision analytics and real-time market insights.</p>
                            </div>
                        </div>
                        <div className="col-md-8" style={{ paddingLeft: '0px', paddingRight: '0.5rem' }}  >
                            <div className="mb-2" style={{ backgroundImage: 'url(/assets/images/pioneer.jpg)' }} >
                                <div className="d-flex align-items-end gap-3 mb-4">
                                    <h5>Startups</h5>
                                </div>
                                <p style={{ fontWeight: 100 }}>Transforming disruptive ideas into high-impact digital experiences across every continent.</p>
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>

        </>
    );
};

export default CaseStudiesSection;