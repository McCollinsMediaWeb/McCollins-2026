import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function OurPartners() {

    return (
        <>
            <div className="section" style={{ backgroundColor: '#212121' }}>
                <div className="hero-container">
                    <div className="text-center">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <h2 className="title-heading" style={{ WebkitTextFillColor: '#fff', marginBottom: '10px' }}>
                                Our Partners
                            </h2>
                        </AnimateOnScroll>
                        <p style={{ color: '#fff', fontWeight: 100, marginBottom: '5rem' }}>In an industry that emphasizes inputs, we promise to deliver outputs!</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img src="/assets/images/clients/rta.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/costa-coffee.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/fujifilm.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/toshiba.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/energizer.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5rem' }}>
                        <img src="/assets/images/clients/damac.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/pioneer.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/wagamama.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/dxb.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/mmi.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default OurPartners;