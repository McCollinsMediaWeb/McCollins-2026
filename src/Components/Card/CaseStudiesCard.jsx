// import React from "react";
// import AnimateOnScroll from "../Hooks/AnimateOnScroll";

// const CaseStudyCard = ({ title, description, tags, className, size }) => {

//     return (
//         <>
//             <AnimateOnScroll animation="fadeInUp">
//                 <div className={`card case-studies-content ${className}`}>
//                     {size === "large" && (
//                         <div className={`case-studies-component ${size} align-self-end justify-content-end align-items-end`}>
//                             {tags.map((tag, index) => (
//                                 <div key={index} className="cs-component">
//                                     <a href="#">{tag}</a>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                     <div className="d-flex flex-column gspace-2">
//                         <a href="#" className="case-studies-title"><h4>{title}</h4></a>
//                         <p>{description}</p>
//                     </div>
//                     {size === "small" && (
//                     <div className={`case-studies-component ${size} align-self-end justify-content-end align-items-end`}>
//                         {tags.map((tag, index) => (
//                             <div key={index} className="cs-component">
//                                 <a href="#">{tag}</a>
//                             </div>
//                         ))}
//                     </div>
//                     )}
//                 </div>
//             </AnimateOnScroll>
//         </>
//     );
// };

// export default CaseStudyCard;



import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const CaseStudyCard = ({ title, description, tags, className, size, category }) => {

    return (
        <>
            <AnimateOnScroll animation="fadeInUp">
                <div className={`card case-studies-content d-flex flex-column ${className}`} style={{ minHeight: '700px', borderRadius: '0px' }}>
                    <div className="d-flex flex-column gspace-1 mt-auto">
                        <div className="sub-heading">
                            <i className="fa-regular fa-circle-dot"></i>
                            <span>{category}</span>
                        </div>
                        <a href="#" className="case-studies-title"><h4>{title}</h4></a>

                        <div className={`case-studies-component ${size} align-self-start justify-content-start align-items-start`}>
                            {tags.map((tag, index) => (
                                <div key={index} className="cs-component" style={{ borderColor: 'white' }}>
                                    <a href="#">{tag}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </>
    );
};

export default CaseStudyCard;
