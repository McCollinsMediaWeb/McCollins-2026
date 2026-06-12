import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import HeadTitle from "../../../Components/Head/HeadTitle";
import NewsletterSection from "../../../Components/Form/Newsletter";
import CaseStudiesSection from "../../../Components/CaseStudies/CaseStudies";
import AnimateOnScroll from "../../../Components/Hooks/AnimateOnScroll";

// Animated Counter Component that starts when visible
const Counter = ({ target, decimals = 0, duration = 1500, prefix = "", suffix = "" }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (!inView) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = progress * target;
            setCount(currentValue);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [inView, target, duration]);

    return (
        <span ref={ref}>
            {prefix}
            {count.toFixed(decimals)}
            {suffix}
        </span>
    );
};

function DoorsCaseStudyPage() {
    return (
        <div className="doors-page-wrapper">
            <HeadTitle title="Doors Freestyle Grill Case Study - McCollins Media - Digital Marketing Agency" />
            
            <style dangerouslySetInnerHTML={{ __html: `
                .doors-page-wrapper {
                    background-color: #000000;
                    color: #ffffff;
                    font-family: 'Delight', sans-serif;
                    overflow-x: hidden;
                }
                
                /* Hero Section */
                .doors-hero {
                    min-height: 90vh;
                    background-image: url('/case-studies/doors/herobanner.jpg');
                    background-size: cover;
                    background-position: center;
                    padding: 120px 0 80px 0;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background-color: #0a0a0a;
                }
                
                .doors-hero-content {
                    width: 100%;
                    z-index: 2;
                }
                
                .doors-hero-title-main {
                    font-family: 'Delight', sans-serif;
                    font-size: 5.5rem;
                    font-weight: 900;
                    line-height: 0.9;
                    letter-spacing: -2px;
                    margin: 0;
                    color: #ffffff;
                    text-transform: uppercase;
                }
                
                .doors-serif-italic {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    text-transform: none;
                    font-weight: 400;
                    color: #ffffff;
                }
                
                .doors-hero-subtitle {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-size: 1.4rem;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.85);
                    line-height: 1.5;
                    margin-top: 25px;
                    margin-bottom: 0;
                    max-width: 500px;
                }
                
                .doors-hero-badge {
                    display: inline-block;
                    padding: 10px 24px;
                    border-radius: 50px;
                    background: rgba(0, 0, 0, 0.4);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: #ffffff;
                    font-size: 0.95rem;
                    font-weight: 400;
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    letter-spacing: 0.5px;
                    text-transform: none;
                }
                
                /* Blue Info Bar */
                .doors-blue-bar {
                    background-color: #3875FD;
                    padding: 24px 0;
                }
                
                .doors-blue-bar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 0.85rem;
                    letter-spacing: 2.5px;
                }
                
                .doors-blue-bar-content span {
                    text-transform: uppercase;
                }
                
                /* KPI Section */
                .doors-kpi-section {
                    padding: 100px 0;
                    background-color: #000000;
                    color: #ffffff;
                    position: relative;
                }
                
                .doors-section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 15px;
                    margin-bottom: 60px;
                }
                
                .doors-label-left, .doors-label-right {
                    font-size: 0.75rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: rgba(255, 255, 255, 0.4);
                    font-weight: 600;
                }
                
                .doors-kpi-grid {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    gap: 30px;
                    z-index: 2;
                }
                
                .doors-kpi-col {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                    max-width: 320px;
                    z-index: 2;
                }
                
                .doors-kpi-col.center {
                    flex: 1.5;
                    max-width: 440px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }
                
                .doors-graphic-container {
                    width: 100%;
                    max-width: 220px;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;
                }
                
                .doors-graphic-image {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: contain;
                }
                
                .doors-kpi-card {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 30px 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease;
                }
                
                .doors-kpi-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(56, 117, 253, 0.4);
                    box-shadow: 0 15px 35px rgba(56, 117, 253, 0.2);
                }
                
                .doors-kpi-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                
                .doors-kpi-stat {
                    font-size: 2.8rem;
                    font-weight: 800;
                    line-height: 1.1;
                    color: #ffffff;
                    letter-spacing: -0.5px;
                }
                
                .doors-kpi-desc {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.5);
                    letter-spacing: 1.5px;
                    margin-top: 8px;
                    text-transform: uppercase;
                }
                
                .doors-kpi-lines {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 1;
                }
                
                /* Strategic Approach Section */
                .doors-approach-section {
                    padding: 100px 0;
                    background-color: #D8DFE4;
                    color: #0F172A;
                }
                
                .doors-approach-section .doors-section-header {
                    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
                }
                
                .doors-approach-section .doors-label-left,
                .doors-approach-section .doors-label-right {
                    color: rgba(15, 23, 42, 0.45);
                }
                
                .doors-approach-col {
                    border-left: 1px solid rgba(15, 23, 42, 0.12);
                    padding-left: 30px;
                    margin-bottom: 30px;
                }
                
                .doors-approach-card {
                    background: rgba(255, 255, 255, 0.4);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    border-radius: 16px;
                    padding: 35px 25px;
                    height: 100%;
                    transition: all 0.4s ease;
                }
                
                .doors-approach-card:hover {
                    transform: translateY(-4px);
                    background: rgba(255, 255, 255, 0.75);
                    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
                }
                
                .doors-approach-header {
                    display: flex;
                    align-items: baseline;
                    margin-bottom: 25px;
                }
                
                .doors-approach-header.flex-col {
                    flex-direction: column;
                    align-items: flex-start;
                }
                
                .doors-approach-the {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-weight: 400;
                    font-size: 1.6rem;
                    color: rgba(15, 23, 42, 0.45);
                    margin-right: 8px;
                }
                
                .doors-approach-title {
                    font-family: 'Delight', sans-serif;
                    font-weight: 700;
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    color: #0F172A;
                    letter-spacing: 0.5px;
                }
                
                .doors-approach-title.accent-blue {
                    color: #3875FD;
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    text-transform: none;
                    font-weight: 400;
                }
                
                .doors-approach-text {
                    font-size: 0.98rem;
                    line-height: 1.7;
                    color: rgba(15, 23, 42, 0.7);
                    font-weight: 400;
                    margin: 0;
                }
                
                /* Capabilities Section */
                .doors-capabilities-section {
                    padding: 90px 0 0 0;
                    background-color: #D8DFE4;
                    color: #0F172A;
                    text-align: center;
                    border-top: 1px solid rgba(15, 23, 42, 0.08);
                }
                
                .doors-capabilities-text {
                    font-size: 0.85rem;
                    letter-spacing: 2px;
                    color: rgba(15, 23, 42, 0.7);
                    text-transform: uppercase;
                    font-weight: 700;
                    line-height: 1.8;
                }
                
                .doors-bottles-banner {
                    width: 100%;
                    height: 280px;
                    background-image: url('/case-studies/case-pyramid-image.jpg');
                    background-size: cover;
                    background-position: center bottom;
                    background-repeat: no-repeat;
                    opacity: 0.95;
                    margin-top: 30px;
                }
                
                .hero-container {
                    --bs-gutter-x: 1.5rem;
                    --bs-gutter-y: 0;
                    width: 100%;
                    padding-right: calc(var(--bs-gutter-x) * .5);
                    padding-left: calc(var(--bs-gutter-x) * .5);
                    margin-right: auto;
                    margin-left: auto;
                    max-width: 1200px;
                }
                
                /* Responsive styles */
                @media (max-width: 991px) {
                    .doors-hero {
                        padding: 100px 0 60px 0;
                        background-position: left center;
                    }
                    
                    .doors-hero-title-main {
                        font-size: 4rem;
                    }
                    
                    .doors-hero-subtitle {
                        font-size: 1.2rem;
                    }
                    
                    .doors-blue-bar-content {
                        flex-direction: column;
                        gap: 12px;
                        text-align: center;
                        font-size: 0.75rem;
                    }
                    
                    .doors-kpi-section {
                        padding: 70px 0;
                    }
                    
                    .doors-kpi-grid {
                        flex-direction: column;
                        gap: 30px;
                    }
                    
                    .doors-kpi-col {
                        max-width: 100%;
                        width: 100%;
                        gap: 25px;
                    }
                    
                    .doors-graphic-container {
                        max-width: 180px;
                    }
                    
                    .doors-approach-section {
                        padding: 70px 0;
                    }
                    
                    .doors-approach-col {
                        border-left: none;
                        border-top: 1px solid rgba(15, 23, 42, 0.12);
                        padding-left: 0;
                        padding-top: 30px;
                    }
                    
                    .doors-approach-card {
                        padding: 30px 20px;
                    }
                    
                    .doors-capabilities-section {
                        padding: 60px 0 0 0;
                    }

                    .doors-bottles-banner {
                        height: 180px;
                    }
                }
                
                @media (max-width: 575px) {
                    .doors-hero-title-main {
                        font-size: 2.8rem;
                    }
                    
                    .doors-kpi-card {
                        padding: 20px 18px;
                    }
                    
                    .doors-kpi-stat {
                        font-size: 2.2rem;
                    }
                }
            ` }} />
            
            {/* 1. Hero Section */}
            <div className="doors-hero">
                <div className="hero-container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="doors-hero-content">
                                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                                        <h1 className="doors-hero-title-main">
                                            doors freestyle <br />
                                            <span className="doors-serif-italic">grill</span>
                                        </h1>
                                        <div className="doors-hero-badge mt-4 mt-md-0">
                                            Brand Build - Hospitality
                                        </div>
                                    </div>
                                    <p className="doors-hero-subtitle">
                                        Engineering organic discoverability — a regional digital infrastructure built for the long compound.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 2. Blue Info Bar */}
            <div className="doors-blue-bar">
                <div className="hero-container">
                    <div className="doors-blue-bar-content">
                        <span>DOORS FREESTYLE GRILL</span>
                        <span>CASE STUDY</span>
                        <span>BRAND BUILD - HOSPITALITY</span>
                    </div>
                </div>
            </div>
            
            {/* 3. KPI Section */}
            <div className="doors-kpi-section">
                <div className="hero-container position-relative">
                    <div className="doors-section-header">
                        <span className="doors-label-left">THE INFO</span>
                        <span className="doors-label-right">DOORS FREESTYLE GRILL</span>
                    </div>
                    
                    {/* SVG connection lines for desktop viewports */}
                    <svg className="doors-kpi-lines d-none d-lg-block" viewBox="0 0 1180 500" preserveAspectRatio="none">
                        {/* Top-left card connection */}
                        <line x1="320" y1="160" x2="540" y2="160" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                        <circle cx="540" cy="160" r="3" fill="#ffffff" />
                        <circle cx="320" cy="160" r="3" fill="#ffffff" />

                        {/* Bottom-left card connection */}
                        <line x1="320" y1="340" x2="540" y2="340" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                        <circle cx="540" cy="340" r="3" fill="#ffffff" />
                        <circle cx="320" cy="340" r="3" fill="#ffffff" />

                        {/* Top-right card connection */}
                        <line x1="860" y1="160" x2="640" y2="160" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                        <circle cx="640" cy="160" r="3" fill="#ffffff" />
                        <circle cx="860" cy="160" r="3" fill="#ffffff" />

                        {/* Bottom-right card connection */}
                        <line x1="860" y1="340" x2="640" y2="340" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                        <circle cx="640" cy="340" r="3" fill="#ffffff" />
                        <circle cx="860" cy="340" r="3" fill="#ffffff" />
                    </svg>
                    
                    <div className="doors-kpi-grid">
                        {/* Left Column KPIs */}
                        <div className="doors-kpi-col">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={100}>
                                <div className="doors-kpi-card">
                                    <div className="doors-kpi-content">
                                        <span className="doors-kpi-stat">
                                            0 &rarr; 1
                                        </span>
                                        <span className="doors-kpi-desc">BRAND BUILT FROM INCEPTION</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            
                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={250}>
                                <div className="doors-kpi-card">
                                    <div className="doors-kpi-content">
                                        <span className="doors-kpi-stat">
                                            <Counter target={520} prefix="+" suffix="%" />
                                        </span>
                                        <span className="doors-kpi-desc">AUDIENCE GROWTH</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Center Column - Graphic image */}
                        <div className="doors-kpi-col center">
                            <AnimateOnScroll animation="zoomIn" speed="slow" delay={150}>
                                <div className="doors-graphic-container">
                                    <img 
                                        className="doors-graphic-image" 
                                        src="/case-studies/doors/doors-kpi-section.jpg" 
                                        alt="Vertical capsule shaped graphical element"
                                    />
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Right Column KPIs */}
                        <div className="doors-kpi-col">
                            <AnimateOnScroll animation="fadeInRight" speed="normal" delay={100}>
                                <div className="doors-kpi-card">
                                    <div className="doors-kpi-content">
                                        <span className="doors-kpi-stat">
                                            <Counter target={6} suffix="+" />
                                        </span>
                                        <span className="doors-kpi-desc">DISCIPLINES UNDER ONE ROOF</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            
                            <AnimateOnScroll animation="fadeInRight" speed="normal" delay={250}>
                                <div className="doors-kpi-card">
                                    <div className="doors-kpi-content">
                                        <span className="doors-kpi-stat">
                                            <Counter target={4.8} decimals={1} suffix="★" />
                                        </span>
                                        <span className="doors-kpi-desc">PUBLIC REVIEW SCORE</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 4. Strategic Approach Section */}
            <div className="doors-approach-section">
                <div className="hero-container">
                    <div className="doors-section-header">
                        <span className="doors-label-left">THE STRATEGIC APPROACH</span>
                        <span className="doors-label-right">DOORS FREESTYLE GRILL</span>
                    </div>
                    
                    <div className="row">
                        {/* Card 1: The Challenge */}
                        <div className="col-lg-4 doors-approach-col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={100}>
                                <div className="doors-approach-card">
                                    <div className="doors-approach-header">
                                        <span className="doors-approach-the">THE</span>
                                        <h3 className="doors-approach-title">CHALLENGE</h3>
                                    </div>
                                    <p className="doors-approach-text">
                                        Clean-sheet brief. No identity, no guidelines, no audience, no digital footprint. Saturated F&B market. Bar to be noticed in Dubai brutally high. Mandate: design, codify, build and operate from day one.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Card 2: The Strategic Approach */}
                        <div className="col-lg-4 doors-approach-col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={250}>
                                <div className="doors-approach-card">
                                    <div className="doors-approach-header flex-col">
                                        <div className="d-flex align-items-baseline">
                                            <span className="doors-approach-the">THE</span>
                                            <h3 className="doors-approach-title">STRATEGIC</h3>
                                        </div>
                                        <h3 className="doors-approach-title accent-blue">APPROACH</h3>
                                    </div>
                                    <p className="doors-approach-text">
                                        Brand identity programme — mark, monogram, system. Codified guidelines. In-house content production engine for food, lifestyle, vertical video. Social channels architected. Web ecosystem with reservation integration. Always-on operation.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Card 3: The Impact */}
                        <div className="col-lg-4 doors-approach-col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={400}>
                                <div className="doors-approach-card">
                                    <div className="doors-approach-header">
                                        <span className="doors-approach-the">THE</span>
                                        <h3 className="doors-approach-title">IMPACT</h3>
                                    </div>
                                    <p className="doors-approach-text">
                                        Brand built end-to-end. Reservation velocity lifted post-launch. Public review reputation established. Owned audience built channel-by-channel. Codified system that scales without dilution.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 5. Capabilities Section */}
            <div className="doors-capabilities-section">
                <div className="hero-container text-center">
                    <AnimateOnScroll animation="fadeInUp" speed="normal" delay={150}>
                        <div className="doors-capabilities-text px-3 px-md-5">
                            CAPABILITIES — BRAND ARCHITECTURE • CREATIVE DIRECTION • VISUAL IDENTITY • CONTENT PRODUCTION • WEBSITE DEV • SOCIAL ARCHITECTURE • RESERVATION INTEGRATION
                        </div>
                    </AnimateOnScroll>
                </div>
                
                {/* Voss Bottles Banner at bottom */}
                <div className="doors-bottles-banner"></div>
            </div>
            
            <CaseStudiesSection />
            <NewsletterSection />
        </div>
    );
}

export default DoorsCaseStudyPage;
