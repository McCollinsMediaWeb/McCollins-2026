import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function HeaderLayout1() {

    return (
        <>
            <div className="section HdLayt1">
                <div className="container">
                    <div className="expertise-title">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Our Expertise</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div>
                                        <h2 className="title-heading">
                                            Digital Solutions ,<br /> That Drive Real Results
                                        </h2>
                                        <p>
                                            Where data-driven precision meets creative excellence to deliver high-impact outcomes for the world’s most discerning brands.
                                        </p>
                                    </div>

                        </AnimateOnScroll>

                    </div>
                </div>

            </div>

        </>
    );
}

export default HeaderLayout1;