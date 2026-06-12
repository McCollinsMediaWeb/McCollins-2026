import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const CaseStudiesSectionNew = ({ noPadding }) => {
    const studies = [
        {
            title: "PIONEER",
            subtitle: "Website Rebuild",
            description: "Rebuilding the regional digital identity of Pioneer Gulf, optimizing the UX/UI for organic search reach, entity schema, and mobile Core Web Vitals.",
            image: "/case-studies-thumbs/pioneer.jpg",
            link: "/case_studies/pioneer",
            imgHeight: "360px"
        },
        {
            title: "OAK BERRY",
            subtitle: "Creative Campaign",
            description: "Creating an entity-rich digital campaign and website build for Oakberry Açaí, driving brand awareness and local foot traffic across the UAE.",
            image: "/case-studies-thumbs/oakberry.jpg",
            link: "/case_studies/oakberry",
            imgHeight: "260px"
        },
        {
            title: "VOSS DUBAI",
            subtitle: "Digital Marketing & UX",
            description: "Developing a premium editorial commerce experience for Voss water, focusing on minimal luxury aesthetics, payment optionality, and headless speed.",
            image: "/case-studies-thumbs/voss.jpg",
            link: "/case_studies/voss-dubai",
            imgHeight: "420px"
        },
        {
            title: "BETTER LIFE",
            subtitle: "Performance Marketing",
            description: "Scaling the digital storefront for Better Life home appliances through high-intent search acquisition, localized UX flow, and optimized conversion funnels.",
            image: "/case-studies-thumbs/betterlife.jpg",
            link: "/case_studies/better-life",
            imgHeight: "280px"
        },
        {
            title: "MAPEI",
            subtitle: "B2B Social & Digital",
            description: "Building a robust B2B lead generation platform and custom brand world for Mapei Construction Chemicals across regional Middle East markets.",
            image: "/case-studies-thumbs/mapei.jpg",
            link: "/case_studies/mapei",
            imgHeight: "380px"
        },
        {
            title: "DOORS FREESTYLE GRILL",
            subtitle: "Luxury UX & Website",
            description: "Designing a mouth-watering interactive digital menu and reservation booking experience for the premier luxury steakhouse in Al Seef.",
            image: "/case-studies-thumbs/doors.jpg",
            link: "/case_studies/doors",
            imgHeight: "460px"
        },
        {
            title: "ZILLI DUBAI",
            subtitle: "Luxury Shopify Experience",
            description: "Crafting a mobile-first, editorial Shopify experience for French luxury maison ZILLI, tailored for elite regional clientele and single-tap checkout.",
            image: "/case-studies-thumbs/zilli-dubai.jpg",
            link: "/case_studies/zilli-dubai",
            imgHeight: "320px"
        },
        {
            title: "CLEANING SUPERSTORE",
            subtitle: "Brand Build & E-Commerce",
            description: "Scaling a COVID-era brand build into the largest cleaning chemicals, machinery, and consumables e-commerce superstore in the UAE.",
            image: "/case-studies-thumbs/cleaning-superstore.jpg",
            link: "/case_studies/cleaning-superstore",
            imgHeight: "440px"
        },
        {
            title: "ARMOURED SOLUTIONS",
            subtitle: "Defense Digital Rebuild",
            description: "Engineering search engine dominance, high-fidelity defense UX, and custom CRM leads capture for custom tactical armored defense vehicle solutions.",
            image: "/case-studies-thumbs/armoured-solutions.jpg",
            link: "/case_studies/armoured-solutions",
            imgHeight: "300px"
        }
    ];

    return (
        <div className={`cs-masonry-container ${noPadding ? "p-0" : ""}`} style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh' }}>
            <style dangerouslySetInnerHTML={{ __html: `
                .cs-masonry-container {
                    padding: 80px 0;
                }
                .cs-masonry-grid {
                    column-count: 3;
                    column-gap: 30px;
                    width: 100%;
                }
                .cs-masonry-item {
                    break-inside: avoid;
                    margin-bottom: 30px;
                    width: 100%;
                }
                .cs-masonry-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }
                .cs-masonry-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(56, 117, 253, 0.4);
                    background: rgba(255, 255, 255, 0.05);
                    box-shadow: 0 20px 40px rgba(56, 117, 253, 0.15);
                }
                .cs-masonry-image-wrapper {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                }
                .cs-masonry-img {
                    width: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .cs-masonry-card:hover .cs-masonry-img {
                    transform: scale(1.05);
                }
                .cs-masonry-content {
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                }
                .cs-masonry-title {
                    font-family: 'Delight', sans-serif;
                    font-size: 1.8rem;
                    font-weight: 900;
                    color: #ffffff;
                    margin: 0 0 8px 0;
                    letter-spacing: -0.5px;
                    text-transform: uppercase;
                }
                .cs-masonry-subtitle {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-size: 1.15rem;
                    color: #3875fd;
                    margin-bottom: 15px;
                }
                .cs-masonry-desc {
                    font-size: 0.95rem;
                    line-height: 1.65;
                    color: rgba(255, 255, 255, 0.65);
                    margin-bottom: 25px;
                    font-weight: 300;
                }
                .cs-masonry-link {
                    font-family: 'Delight', sans-serif;
                    font-size: 0.82rem;
                    font-weight: 700;
                    color: #ffffff;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: color 0.3s ease;
                }
                .cs-masonry-card:hover .cs-masonry-link {
                    color: #3875fd;
                }
                .cs-masonry-link i {
                    font-size: 0.75rem;
                    transition: transform 0.3s ease;
                }
                .cs-masonry-card:hover .cs-masonry-link i {
                    transform: translateX(4px);
                }
                
                @media (max-width: 991px) {
                    .cs-masonry-grid {
                        column-count: 2;
                        column-gap: 20px;
                    }
                    .cs-masonry-item {
                        margin-bottom: 20px;
                    }
                    .cs-masonry-title {
                        font-size: 1.6rem;
                    }
                }
                
                @media (max-width: 767px) {
                    .cs-masonry-grid {
                        column-count: 1;
                    }
                }
            ` }} />

            <div className="hero-container">
                <div className="cs-masonry-grid">
                    {studies.map((study, index) => (
                        <div key={index} className="cs-masonry-item">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={index * 50}>
                                <a href={study.link} style={{ textDecoration: 'none' }}>
                                    <div className="cs-masonry-card">
                                        {/* Image */}
                                        <div className="cs-masonry-image-wrapper">
                                            <img 
                                                className="cs-masonry-img" 
                                                src={study.image} 
                                                alt={`${study.title} case study thumbnail`} 
                                                style={{ height: study.imgHeight }}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="cs-masonry-content">
                                            <h3 className="cs-masonry-title">{study.title}</h3>
                                            <div className="cs-masonry-subtitle">{study.subtitle}</div>
                                            <p className="cs-masonry-desc">{study.description}</p>
                                            <span className="cs-masonry-link">
                                                View Case Study <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </AnimateOnScroll>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudiesSectionNew;
