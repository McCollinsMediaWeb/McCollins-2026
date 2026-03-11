import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function OurPartners() {

    return (
        <>
            <div className="section" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
                <div className="hero-container">
                    <div className="text-center">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <h2 className="title-heading" style={{ marginBottom: '10px' }}>
                                Our Partners
                            </h2>
                        </AnimateOnScroll>
                        <p style={{ fontWeight: 100, marginBottom: '5rem' }}>In an industry that emphasizes inputs, we promise to deliver outputs!</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img src="/assets/images/a1.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/a2.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/a3.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/a4.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/a5.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5rem' }}>
                        <img src="/assets/images/a6.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/a7.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/a8.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/a9.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/a10.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default OurPartners;