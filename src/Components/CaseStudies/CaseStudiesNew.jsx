import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const CaseStudiesSectionNew = ({ noPadding }) => {
    const studies = [
        {
            title: "PIONEER",
            subtitle: "Website Rebuild",
            description: "Rebuilding the regional digital identity of Pioneer Gulf, optimizing the UX/UI for organic search reach, entity schema, and mobile Core Web Vitals.",
            image: "/case-studies-thumbs/pioneer.jpg",
            link: "/case_studies/pioneer"
        },
        {
            title: "OAK BERRY",
            subtitle: "Creative Campaign",
            description: "Creating an entity-rich digital campaign and website build for Oakberry Açaí, driving brand awareness and local foot traffic across the UAE.",
            image: "/case-studies-thumbs/oakberry.jpg",
            link: "/case_studies/oakberry"
        },
        {
            title: "VOSS DUBAI",
            subtitle: "Digital Marketing & UX",
            description: "Developing a premium editorial commerce experience for Voss water, focusing on minimal luxury aesthetics, payment optionality, and headless speed.",
            image: "/case-studies-thumbs/voss.jpg",
            link: "/case_studies/voss-dubai"
        },
        {
            title: "BETTER LIFE",
            subtitle: "Performance Marketing",
            description: "Scaling the digital storefront for Better Life home appliances through high-intent search acquisition, localized UX flow, and optimized conversion funnels.",
            image: "/case-studies-thumbs/betterlife.jpg",
            link: "/case_studies/better-life"
        },
        {
            title: "MAPEI",
            subtitle: "B2B Social & Digital",
            description: "Building a robust B2B lead generation platform and custom brand world for Mapei Construction Chemicals across regional Middle East markets.",
            image: "/case-studies-thumbs/mapei.jpg",
            link: "/case_studies/mapei"
        },
        {
            title: "DOORS FREESTYLE GRILL",
            subtitle: "Luxury UX & Website",
            description: "Designing a mouth-watering interactive digital menu and reservation booking experience for the premier luxury steakhouse in Al Seef.",
            image: "/case-studies-thumbs/doors.jpg",
            link: "/case_studies/doors"
        },
        {
            title: "ZILLI DUBAI",
            subtitle: "Luxury Shopify Experience",
            description: "Crafting a mobile-first, editorial Shopify experience for French luxury maison ZILLI, tailored for elite regional clientele and single-tap checkout.",
            image: "/case-studies-thumbs/zilli-dubai.jpg",
            link: "/case_studies/zilli-dubai"
        },
        {
            title: "CLEANING SUPERSTORE",
            subtitle: "Brand Build & E-Commerce",
            description: "Scaling a COVID-era brand build into the largest cleaning chemicals, machinery, and consumables e-commerce superstore in the UAE.",
            image: "/case-studies-thumbs/cleaning-superstore.jpg",
            link: "/case_studies/cleaning-superstore"
        },
        {
            title: "ARMOURED SOLUTIONS",
            subtitle: "Defense Digital Rebuild",
            description: "Engineering search engine dominance, high-fidelity defense UX, and custom CRM leads capture for custom tactical armored defense vehicle solutions.",
            image: "/case-studies-thumbs/armoured-solutions.jpg",
            link: "/case_studies/armoured-solutions"
        }
    ];

    return (
        <div className={`cs-list-container ${noPadding ? "p-0" : ""}`} style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh' }}>
            <style dangerouslySetInnerHTML={{ __html: `
                .cs-list-container {
                    padding: 80px 0;
                }
                .cs-list-section {
                    padding: 100px 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }
                .cs-list-section:last-child {
                    border-bottom: none;
                }
                .cs-list-row {
                    display: flex;
                    align-items: center;
                    gap: 60px;
                }
                .cs-list-row.reverse {
                    flex-direction: row-reverse;
                }
                .cs-list-text-col {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .cs-list-image-col {
                    flex: 1.2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .cs-list-image-wrapper {
                    width: 100%;
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .cs-list-image-wrapper:hover {
                    transform: translateY(-5px);
                    border-color: rgba(56, 117, 253, 0.4);
                    box-shadow: 0 25px 60px rgba(56, 117, 253, 0.2);
                }
                .cs-list-img {
                    width: 100%;
                    height: 480px;
                    object-fit: cover;
                    display: block;
                }
                .cs-list-title {
                    font-family: 'Delight', sans-serif;
                    font-size: 3.2rem;
                    font-weight: 950;
                    color: #ffffff;
                    margin: 0 0 10px 0;
                    letter-spacing: -1.5px;
                    line-height: 1;
                    text-transform: uppercase;
                }
                .cs-list-subtitle {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-size: 1.4rem;
                    font-weight: 400;
                    color: #3875fd;
                    margin-bottom: 20px;
                }
                .cs-list-desc {
                    font-size: 1.02rem;
                    line-height: 1.75;
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 35px;
                    font-weight: 300;
                }
                .cs-list-btn {
                    display: inline-flex;
                    align-items: center;
                    padding: 14px 35px;
                    border-radius: 50px;
                    background-color: #3875fd;
                    color: #ffffff;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 0.85rem;
                    letter-spacing: 1px;
                    border: none;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    align-self: flex-start;
                }
                .cs-list-btn:hover {
                    background-color: #1a4cf6;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(56, 117, 253, 0.4);
                    color: #ffffff;
                }
                
                @media (max-width: 991px) {
                    .cs-list-row, .cs-list-row.reverse {
                        flex-direction: column !important;
                        gap: 35px;
                    }
                    .cs-list-img {
                        height: 300px;
                    }
                    .cs-list-title {
                        font-size: 2.4rem;
                    }
                    .cs-list-section {
                        padding: 60px 0;
                    }
                    .cs-list-desc {
                        margin-bottom: 25px;
                    }
                }
            ` }} />

            <div className="hero-container">
                {studies.map((study, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={index} className="cs-list-section">
                            <div className={`cs-list-row ${isEven ? "" : "reverse"}`}>
                                {/* Image Column */}
                                <div className="cs-list-image-col">
                                    <AnimateOnScroll animation={isEven ? "fadeInLeft" : "fadeInRight"} speed="normal">
                                        <a href={study.link} className="w-100">
                                            <div className="cs-list-image-wrapper">
                                                <img 
                                                    className="cs-list-img" 
                                                    src={study.image} 
                                                    alt={`${study.title} case study thumbnail`} 
                                                />
                                            </div>
                                        </a>
                                    </AnimateOnScroll>
                                </div>

                                {/* Text Column */}
                                <div className="cs-list-text-col">
                                    <AnimateOnScroll animation={isEven ? "fadeInRight" : "fadeInLeft"} speed="normal" delay={150}>
                                        <div className="d-flex flex-column">
                                            <h2 className="cs-list-title">{study.title}</h2>
                                            <div className="cs-list-subtitle">{study.subtitle}</div>
                                            <p className="cs-list-desc">{study.description}</p>
                                            <a href={study.link} className="cs-list-btn">
                                                View Case Study
                                            </a>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CaseStudiesSectionNew;
