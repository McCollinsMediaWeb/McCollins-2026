import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import HowWeWork from "../../Components/MccollinsMedia/HowWeWork";
import NewsletterSection from "../../Components/Form/Newsletter";
import AnimateOnScroll from "../../Components/Hooks/AnimateOnScroll";

const serviceListData = [
    {
        image: "/servicepage/1.jpg",
        titleLine1: "Brand",
        titleLine2: "Development",
        description: "Crafting cohesive brand identities that resonate across cultures and command a global presence.",
        tags: [
            "DISCOVERY WORKSHOP",
            "VISUAL MOODBOARD",
            "COLORS & TYPOGRAPHY",
            "DESIGN DIRECTIONS"
        ],
        link: "/service/brand-development"
    },
    {
        image: "/servicepage/2.jpg",
        titleLine1: "Website/App",
        titleLine2: "Design",
        description: "Developing high-performance, responsive websites engineered to convert global audiences into loyal customers.",
        tags: [
            "UI/UX WIREFRAMING",
            "RESPONSIVE PROTOTYPE",
            "DESIGN SYSTEM",
            "FRONTEND DEV"
        ],
        link: "/service/website-development"
    },
    {
        image: "/servicepage/3.jpg",
        titleLine1: "Social Media",
        titleLine2: "Marketing",
        description: "Cultivating vibrant digital communities through culturally resonant content that sparks global engagement.",
        tags: [
            "AUDIENCE RESEARCH",
            "CONTENT CALENDAR",
            "CREATIVE ASSETS",
            "INFLUENCER OUTREACH"
        ],
        link: "/service/social-media-marketing"
    },
    {
        image: "/servicepage/4.jpg",
        titleLine1: "Performance",
        titleLine2: "Marketing",
        description: "Accelerating your ROI through data-driven, cross-border campaigns engineered for maximum conversion and global scale.",
        tags: [
            "PPC CAMPAIGNS",
            "CONVERSION OPTIMIZATION",
            "RETARGETING FUNNELS",
            "ANALYTICS & DASHBOARD"
        ],
        link: "/service/performance-marketing"
    },
    {
        image: "/servicepage/5.jpg",
        titleLine1: "Marketing",
        titleLine2: "Automation",
        description: "Driving sustainable growth through data-driven automation engineered for global consistency and local relevance.",
        tags: [
            "LEAD SCORING SYSTEM",
            "DRIP CAMPAIGNS",
            "CRM INTEGRATION",
            "CUSTOMER JOURNEY"
        ],
        link: "/service/marketing-automations"
    },
    {
        image: "/assets/images/s6.jpg",
        titleLine1: "Content",
        titleLine2: "Production",
        description: "Blending cinematic storytelling with strategic intent to produce content that resonates locally and scales globally.",
        tags: [
            "STORYBOARD & SCRIPT",
            "VIDEO FILMING",
            "MOTION GRAPHICS",
            "AUDIO POST-PROD"
        ],
        link: "/service/content-production"
    }
];

function ServicePage() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Services - McCollins Media" />
            
            <div className="services-page-container">
                <div className="hero-container">
                    
                    {/* Header Area */}
                    <div className="services-header-area">
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <h1 className="services-massive-header">
                                Services
                            </h1>
                        </AnimateOnScroll>
                        
                        <div className="services-header-desc-wrapper">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={150}>
                                <div className="services-header-desc">
                                    <strong style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "var(--primary)" }}>
                                        Precision Solutions. Proven Results.
                                    </strong>
                                    Where data-driven precision meets creative excellence to deliver high-impact outcomes for the world's most discerning brands.
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                    
                    {/* Services List Editorial Grid */}
                    <div className="services-list-wrapper">
                        {serviceListData.map((service, index) => (
                            <div key={index} className="service-row-new">
                                
                                {/* Image Col */}
                                <div className="service-col-img">
                                    <AnimateOnScroll animation="revealImage" speed="slow" delay={index * 50}>
                                        <a href={service.link} style={{ display: "block", width: "100%", height: "100%" }}>
                                            <img src={service.image} alt={`${service.titleLine1} ${service.titleLine2}`} />
                                        </a>
                                    </AnimateOnScroll>
                                </div>
                                
                                {/* Content Col (Title + Desc) */}
                                <div className="service-col-content">
                                    <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={index * 50}>
                                        <div>
                                            <a href={service.link} style={{ textDecoration: "none", color: "inherit" }}>
                                                <h3 className="service-row-title">
                                                    <span className="sans-bold">{service.titleLine1}</span>
                                                    <br />
                                                    <span className="serif-italic">{service.titleLine2}</span>
                                                </h3>
                                            </a>
                                            <p className="service-row-desc">
                                                {service.description}
                                            </p>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                                
                                {/* Tags Col */}
                                <div className="service-col-tags">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal" delay={100 + index * 50}>
                                        <div>
                                            <div className="service-tags-label">Includes:</div>
                                            <div className="service-tags-list">
                                                {service.tags.map((tag, tagIdx) => (
                                                    <span key={tagIdx} className="service-tag-pill">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
            
            <HowWeWork />
            
            <div className="container">
                <div style={{ height: '1px', backgroundColor: 'grey', marginBottom: '0px', marginTop: '10px' }} />
            </div>
            <NewsletterSection />
        </div>
    );
}

export default ServicePage;