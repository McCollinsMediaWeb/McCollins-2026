import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";
import BrandGrids from "./BrandGrids";

function HeaderLayout1() {

    return (
        <>
            <div className="section HdLayt1">
                <div className="container">
                    <div className="expertise-title">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Services</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="RowSt1">
                                <h2 className="title-heading">
                                    Brand Strategy & Identity
                                </h2>
                                <p>A commanding brand presence is built on the intersection of rigorous strategy and visionary visual identity. We distill your core positioning into a brand ecosystem that is precise, intuitive, and unforgettable across every global touchpoint. This synergy is the catalyst for enduring recognition, brand prestige, and measurable market growth.</p>
                                <a href="#" className="btn btn-primary">

                                    <div className="btn-title">
                                        <span>Let Work Together</span>
                                    </div>

                                    <div className="icon-circle" style={{ backgroundColor: '#000' }}>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>

                                </a>
                            </div>

                        </AnimateOnScroll>

                    </div>
                </div>
                <BrandGrids />
            </div>

        </>
    );
}

export default HeaderLayout1;