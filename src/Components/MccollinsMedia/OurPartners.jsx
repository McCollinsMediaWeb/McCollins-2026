// import React, { useState } from "react";
// import AnimateOnScroll from "../Hooks/AnimateOnScroll";
// import CounterOnScroll from "../Hooks/CounterOnScroll";

// function OurPartners() {
//     const [isLightMode, setIsLightMode] = useState(
//         document.body.classList.contains("lightmode")
//     );

//     const getImage = (name) =>
//         `/assets/images/${isLightMode ? "dark-" : "light-"}${name}`;

//     return (
//         <>
//             <div className="section" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
//                 <div className="hero-container">
//                     <div className="text-center">
//                         <AnimateOnScroll animation="fadeInRight" speed="normal">
//                             <h2 className="title-heading" style={{ marginBottom: '10px' }}>
//                                 Our Partners
//                             </h2>
//                         </AnimateOnScroll>
//                         <AnimateOnScroll animation="fadeInLeft" speed="normal">
//                             <p style={{ fontWeight: 100, marginBottom: '5rem' }}>In an industry that emphasizes inputs, we promise to deliver outputs!</p>
//                         </AnimateOnScroll>
//                     </div>
//                     <div className="d-none d-md-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <img src={getImage("a1.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                         <img src={getImage("a2.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                         <img src={getImage("a3.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                         <img src={getImage("a4.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                         <img src={getImage("a5.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                     </div>

//                     <div className="d-none d-md-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5rem' }}>
//                         <img src={getImage("a6.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                         <img src={getImage("a7.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                         <img src={getImage("a8.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                         <img src={getImage("a9.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                         <img src={getImage("a10.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                     </div>

//                     <div className="d-flex d-md-none" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }} >
//                         <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', alignItems: 'start', flexDirection: 'column' }}>
//                             <img src={getImage("a1.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                             <img src={getImage("a2.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                             <img src={getImage("a3.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                             <img src={getImage("a4.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                             <img src={getImage("a5.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                         </div>

//                         <div style={{ display: 'flex', justifyContent: 'space-around', gap: '5rem', alignItems: 'start', flexDirection: 'column' }}>
//                             <img src={getImage("a6.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                             <img src={getImage("a7.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                             <img src={getImage("a8.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                             <img src={getImage("a9.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                             <img src={getImage("a10.png")} alt="Client Portfolio" className="img-fluid" style={{ objectFit: 'cover' }} />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// }

// export default OurPartners;




import React, { useState, useEffect } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function OurPartners() {
    const [isLightMode, setIsLightMode] = useState(
        document.body.classList.contains("lightmode")
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsLightMode(document.body.classList.contains("lightmode"));
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const getImage = (name) =>
        `/assets/images/${isLightMode ? "dark-" : "light-"}${name}`;

    return (
        <div className="section" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
            <div className="hero-container">

                <div className="text-center">
                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                        <h2 className="title-heading" style={{ marginBottom: '10px' }}>
                            Our Partners
                        </h2>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeInLeft" speed="normal">
                        <p style={{ fontWeight: 100, marginBottom: '5rem' }}>
                            In an industry that emphasizes inputs, we promise to deliver outputs!
                        </p>
                    </AnimateOnScroll>
                </div>

                <div className="d-none d-md-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src={getImage("a1.png")} className="img-fluid" />
                    <img src={getImage("a2.png")} className="img-fluid" />
                    <img src={getImage("a3.png")} className="img-fluid" />
                    <img src={getImage("a4.png")} className="img-fluid" />
                    <img src={getImage("a5.png")} className="img-fluid" />
                </div>

                <div className="d-none d-md-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5rem' }}>
                    <img src={getImage("a6.png")} className="img-fluid" />
                    <img src={getImage("a7.png")} className="img-fluid" />
                    <img src={getImage("a8.png")} className="img-fluid" />
                    <img src={getImage("a9.png")} className="img-fluid" />
                    <img src={getImage("a10.png")} className="img-fluid" />
                </div>

                <div className="d-flex d-md-none" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
                        <img src={getImage("a1.png")} className="img-fluid" />
                        <img src={getImage("a2.png")} className="img-fluid" />
                        <img src={getImage("a3.png")} className="img-fluid" />
                        <img src={getImage("a4.png")} className="img-fluid" />
                        <img src={getImage("a5.png")} className="img-fluid" />
                    </div>

                    <div style={{ display: 'flex', gap: '5rem', flexDirection: 'column' }}>
                        <img src={getImage("a6.png")} className="img-fluid" />
                        <img src={getImage("a7.png")} className="img-fluid" />
                        <img src={getImage("a8.png")} className="img-fluid" />
                        <img src={getImage("a9.png")} className="img-fluid" />
                        <img src={getImage("a10.png")} className="img-fluid" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OurPartners;