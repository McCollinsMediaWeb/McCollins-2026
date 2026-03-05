import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function BrandGrids() {

    return (
        <>
            <div className="BrandGrids">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <AnimateOnScroll animation="fadeInLeft">
                                <div className="card card-service">
                                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">

                                        <div className="service-title">
                                            <h4>Brand Discovery &
                                                Research</h4>
                                        </div>
                                    </div>
                                    <p>We explore your brand, audience, and market to uncover clear insights that form the foundation for a strong brand identity and a distinctive market position.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col-md-4">
                            <AnimateOnScroll animation="fadeInLeft">
                                <div className="card card-service">
                                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">

                                        <div className="service-title">
                                            <h4>Positioning &
                                                Strategy</h4>
                                        </div>
                                    </div>
                                    <p>We define what your brand stands for, the position it claims within the market, and the message that truly resonates with your audience the strategic foundation for a brand that sticks.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col-md-4">
                            <AnimateOnScroll animation="fadeInLeft">
                                <div className="card card-service">
                                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">

                                        <div className="service-title">
                                            <h4>Visual identity</h4>
                                        </div>
                                    </div>
                                    <p>We design a visual identity that reflects your ambitions including logo, colors, typography, imagery, and guidelines. A recognizable look that gives your brand instant strength.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col-md-6">
                            <AnimateOnScroll animation="fadeInLeft">
                                <div className="card card-service">
                                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">

                                        <div className="service-title">
                                            <h4>Brand Collateral &
                                                Applications</h4>
                                        </div>
                                    </div>
                                    <p>We translate your brand’s visual DNA into a cohesive ecosystem of high-impact physical and digital applications. Every touchpoint is architected to uphold your premium positioning and ensure absolute consistency throughout the consumer journey.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col-md-6">
                            <AnimateOnScroll animation="fadeInLeft">
                                <div className="card card-service">
                                    <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">

                                        <div className="service-title">
                                            <h4>Brand Guidelines &
                                                Implementation</h4>
                                        </div>
                                    </div>
                                    <p>We deliver a complete brand book with guidelines, tools, and templates, enabling your team to implement the new brand identity consistently and professionally across every channel.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default BrandGrids;