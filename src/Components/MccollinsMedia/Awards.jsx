// import React from "react";
// import AnimateOnScroll from "../Hooks/AnimateOnScroll";

// const Awards = () => {

//     return (
//         <>
//             <div className="section pt-5 pb-5" style={{ backgroundColor: '#141414' }}>
//                 <div className="hero-container" style={{ maxWidth: 'none' }}>
//                     <div className="d-flex flex-column gspace-3">
//                         <div className="single-service-title-wrapper" style={{ backgroundColor: '#141414' }} >
//                             <div className="single-service-title text-center" style={{ backgroundColor: '#141414', gap: '5px' }} >
//                                 <AnimateOnScroll animation="fadeInRight" speed="normal">
//                                     <h2 className="title-heading text-center" style={{ WebkitTextFillColor: "#ffffff" }}>
//                                         Awards & Accreditations
//                                     </h2>
//                                 </AnimateOnScroll>
//                                 <p style={{ marginTop: '5px', fontWeight: 100 }}>A decorated legacy of industry-leading excellence and globally recognized performance standards.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Awards;


import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const awards = [
    "/assets/images/dummy-img-600x400.jpg",
    "/assets/images/dummy-img-600x400.jpg",
    "/assets/images/dummy-img-600x400.jpg"
];

const Awards = () => {
    return (
        <>
            <div className="section pt-5 pb-5" style={{ backgroundColor: "#141414", paddingBottom: "80px" }}>
                <div className="hero-container" style={{ maxWidth: "none" }}>

                    {/* Title */}
                    <div className="d-flex flex-column gspace-3">
                        <div className="single-service-title-wrapper" style={{ backgroundColor: "#141414" }}>
                            <div className="single-service-title text-center" style={{ gap: "5px", backgroundColor: "#141414" }}>

                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <h2 className="title-heading text-center" style={{ WebkitTextFillColor: "#ffffff" }}>
                                        Awards & Accreditations
                                    </h2>
                                </AnimateOnScroll>

                                <p style={{ marginTop: "5px", fontWeight: 100 }}>
                                    A decorated legacy of industry-leading excellence and globally recognized performance standards.
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* Awards Images */}
                    <div className="row mt-5 g-4">

                        {awards.map((img, index) => (
                            <div key={index} className="col-lg-4 col-md-6">

                                <div
                                    style={{
                                        borderRadius: "40px",
                                        overflow: "hidden",
                                        background: "#2c2c2c"
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt="award"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "40px"
                                        }}
                                    />
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </>
    );
};

export default Awards;