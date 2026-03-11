import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";
import ContentProductionStepCard from "../Card/ContentProductionStepCard";
import { contentProductionSteps } from "../../Data/DigitalProcessData";
import { timeline } from "../../Data/ServiceData";
import TimelineCard from "../Card/TimelineCard";

function OurTimeline() {

    return (
        <>
            <div className="section HdLayt1">
                <div className="container">
                    <div className="expertise-title">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="row">
                                <div className="col-md-7">
                                    <h2 className="title-heading" >
                                        Our Timeline
                                    </h2>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    <div className="digital-process-steps-wrapper" style={{ marginTop: '30px' }}>
                        <style>
                            {`
                                .digital-process-steps-wrapper::before{
                                    background-image: none !important;
                                }
                            `}
                        </style>
                        <div className="digital-process-steps" style={{ backgroundColor: 'var(--background-color)', border: 'none' }}>
                            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                                {timeline.map((item) => (
                                    <div className="col" key={item.id}>
                                        <TimelineCard
                                            title={item.title}
                                            subTitle={item.subTitle}
                                            content={item.content}
                                            timeline={item.timeline}
                                            speed={item.speed}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="section pt-6 pb-10" style={{ backgroundColor: 'var(--set-us-apart-bg)' }}>
                <div className="hero-container">
                    <div className="d-flex flex-column gspace-5">
                        <div className="single-service-title-wrapper" style={{ backgroundColor: 'var(--set-us-apart-bg)' }} >
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h2 className="title-heading" >
                                            What Sets Us Apart
                                        </h2>
                                    </div>
                                    <div className="col-md-6" style={{ display: "flex", alignItems: 'start' }}>
                                        <p style={{ fontWeight: 100 }}>
                                            Our edge lies in the precision-engineering of high-fidelity visual assets that combine global production standards with localized strategic depth.
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>

                            <div className="row pt-5" >
                                <div className="col-md-8">
                                    <img
                                        src="/assets/images/cn1.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                    />
                                </div>
                                <div className="col-md-4 d-flex flex-column justify-content-center" style={{ padding: '30px 30px' }}>
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#e02f47' }}>
                                            Exceptional Creativity
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ marginTop: '15px', fontWeight: 100 }}>We engineer avant-grade visual concepts that bridge the gap between disruptive artistry and strategic brand intent to command absolute market authority.</p>
                                </div>
                            </div>

                            <div className="row pt-5" >
                                <div className="col-md-4 d-flex flex-column justify-content-center" style={{ padding: '30px 30px' }}>
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#e02f47' }}>
                                            Professionalism & Reliability
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ marginTop: '15px', fontWeight: 100 }}>Our reputation is built on the architecture of trust, combining seamless project management with a relentless commitment to deadline-driven excellence and premium output.</p>
                                </div>
                                <div className="col-md-8">
                                    <img
                                        src="/assets/images/cn2.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                    />
                                </div>
                            </div>

                            <div className="row pt-5" >
                                <div className="col-md-8">
                                    <img
                                        src="/assets/images/cn3.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                    />
                                </div>
                                <div className="col-md-4 d-flex flex-column justify-content-center" style={{ padding: '30px 30px' }}>
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#e02f47' }}>
                                            State-of-the-Art Equipment
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ marginTop: '15px', fontWeight: 100 }}>Precision-engineered content powered by a world-class inventory of the latest cinematic technology and specialized production hardware.</p>
                                </div>
                            </div>

                            <div className="row pt-5" >
                                <div className="col-md-4 d-flex flex-column justify-content-center" style={{ padding: '30px 30px' }}>
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#e02f47' }}>
                                            Full-Service Solutions
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ marginTop: '15px', fontWeight: 100 }}>We provide a comprehensive production ecosystem, architecting every phase from conceptual blueprinting to high-fidelity post-production to ensure a seamless, turnkey brand experience.</p>
                                </div>
                                <div className="col-md-8">
                                    <img
                                        src="/assets/images/cn4.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                    />
                                </div>
                            </div>

                            <div className="row pt-5" >
                                <div className="col-md-8">
                                    <img
                                        src="/assets/images/cn5.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                    />
                                </div>
                                <div className="col-md-4 d-flex flex-column justify-content-center" style={{ padding: '30px 30px' }}>
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#e02f47' }}>
                                            Tailored Approach
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ marginTop: '15px', fontWeight: 100 }}>Our process is a meticulous study of your brand's unique DNA, resulting in a precision-engineered production roadmap tailored for maximum market resonance.</p>
                                </div>
                            </div>

                            <div className="row pt-5" >
                                <div className="col-md-4 d-flex flex-column justify-content-center" style={{ padding: '30px 30px' }}>
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#e02f47' }}>
                                            Client Satisfaction
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ marginTop: '15px', fontWeight: 100 }}>Precision-engineered results and uncompromised service standards designed to ensure total brand partner confidence and long-term success.</p>
                                </div>
                                <div className="col-md-8">
                                    <img
                                        src="/assets/images/cn6.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurTimeline;