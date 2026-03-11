import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";
import ContentProductionStepCard from "../Card/ContentProductionStepCard";
import { contentProductionSteps } from "../../Data/DigitalProcessData";

function HeaderLayoutDynamic() {

    return (
        <>
            <div className="section HdLayt1">
                <div className="container">
                    <div className="expertise-title">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot" style={{ color: '#e02f47' }}></i>
                                <span>Content Production</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="row">
                                <div className="col-md-7">
                                    <h2 className="title-heading" >
                                        Video Storytelling For<br />Tech Marketing
                                    </h2>
                                </div>
                                <div className="col-md-5" style={{ display: "flex", alignItems: 'end' }}>
                                    <p style={{ fontWeight: 100 }}>
                                        In A World of Repetitive and Dull B2B tech content, Be the marketer that tells stories your audience actually cares about.
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>

                    </div>



                    <div className="digital-process-steps-wrapper" style={{ marginTop: '50px' }}>
                        <style>
                            {`
                                .digital-process-steps-wrapper::before{
                                    background-image: none !important;
                                }
                            `}
                        </style>
                        <div className="digital-process-steps" style={{ backgroundColor: 'var(--background-color)', border: 'none' }}>
                            <div className="row row-cols-lg-5 row-cols-md-2 row-cols-1">
                                {contentProductionSteps.map((item, index) => (
                                    <ContentProductionStepCard
                                        key={index}
                                        icon={item.icon}
                                        step={item.step}
                                        title={item.title}
                                        title2={item.title2}
                                        content={item.content}
                                        isFirst={index === 0}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>


                </div>



            </div>




        </>
    );
}

export default HeaderLayoutDynamic;