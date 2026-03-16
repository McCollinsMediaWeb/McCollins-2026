import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

const clients = [
    "rta.png",
    "costa-coffee.png",
    "fujifilm.png",
    "toshiba.png",
    "energizer.png",
    "damac.png",
    "pioneer.png",
    "wagamama.png",
    "dxb.png",
    "mmi.png",
];

function ClientPortfolio() {

    return (
        <>
            <div className="section" style={{ backgroundColor: 'var(--client-portfolio-bg)' }}>
                <div className="hero-container">
                    <div className="text-center">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <h2 className="title-heading" style={{ WebkitTextFillColor: '#000', marginBottom: '10px' }}>
                                Client Portfolio
                            </h2>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <p style={{ color: '#000', fontWeight: 100, marginBottom: '5rem' }}>In an industry that emphasizes inputs, we promise to deliver outputs!</p>
                        </AnimateOnScroll>
                    </div>
                    <div className="d-none d-md-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img src="/assets/images/clients/rta.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/costa-coffee.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/fujifilm.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/toshiba.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/energizer.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                    </div>


                    <div className="d-none d-md-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5rem' }}>
                        <img src="/assets/images/clients/damac.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/pioneer.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/wagamama.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/dxb.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        <img src="/assets/images/clients/mmi.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                    </div>

                    <div className="d-flex d-md-none" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }} >
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', alignItems: 'start', flexDirection: 'column' }}>
                            <img src="/assets/images/clients/rta.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                            <img src="/assets/images/clients/costa-coffee.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                            <img src="/assets/images/clients/fujifilm.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                            <img src="/assets/images/clients/toshiba.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                            <img src="/assets/images/clients/energizer.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '5rem', alignItems: 'start', flexDirection: 'column' }}>
                            <img src="/assets/images/clients/damac.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                            <img src="/assets/images/clients/pioneer.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                            <img src="/assets/images/clients/wagamama.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                            <img src="/assets/images/clients/dxb.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                            <img src="/assets/images/clients/mmi.png" alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}

export default ClientPortfolio;