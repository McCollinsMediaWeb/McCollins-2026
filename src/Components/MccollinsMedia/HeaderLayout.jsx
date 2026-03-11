import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function HeaderLayout() {

    return (
        <>
            <div className="section HdLayt1">
                <div className="container">
                    <div className="expertise-title">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Our Core Services</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="row">
                                <div className="col-md-7">
                                    <h2 className="title-heading">
                                        Digital Solutions ,<br /> That Drive Real Results
                                    </h2>
                                </div>
                                <div className="col-md-5">
                                    <div className="HdT1">Precision Solutions. Proven Results.</div>
                                    <p>
                                        Where data-driven precision meets creative excellence to deliver high-impact outcomes for the world’s most discerning brands.
                                    </p>
                                </div>
                            </div>

                        </AnimateOnScroll>

                    </div>
                </div>

            </div>

        </>
    );
}

export default HeaderLayout;