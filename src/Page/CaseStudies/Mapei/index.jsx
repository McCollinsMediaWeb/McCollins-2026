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

function MapeiCaseStudyPage() {
    return (
        <div className="mapei-page-wrapper">
            <HeadTitle title="Mapei Case Study - McCollins Media - Digital Marketing Agency" />
            
            <style dangerouslySetInnerHTML={{ __html: `
                .mapei-page-wrapper {
                    background-color: #000000;
                    color: #ffffff;
                    font-family: 'Delight', sans-serif;
                    overflow-x: hidden;
                }
                
                /* Hero Section */
                .mapei-hero {
                    min-height: 90vh;
                    background-image: url('/case-studies/mapei/hero.jpg');
                    background-size: cover;
                    background-position: 85% center;
                    padding: 140px 0 100px 0;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background-color: #000000;
                }
                
                .mapei-hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%),
                                linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 100%);
                    z-index: 1;
                }
                
                .mapei-hero-content {
                    width: 100%;
                    z-index: 2;
                    position: relative;
                }
                
                .mapei-hero-title-main {
                    font-family: 'Delight', sans-serif;
                    font-size: 5.5rem;
                    font-weight: 900;
                    line-height: 0.9;
                    letter-spacing: -2px;
                    margin: 0;
                    color: #ffffff;
                    text-transform: uppercase;
                }
                
                .mapei-serif-italic {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    text-transform: none;
                    font-weight: 400;
                    color: #ffffff;
                    margin-left: 15px;
                }
                
                .mapei-hero-subtitle {
                    font-family: 'Delight', sans-serif;
                    font-size: 1.25rem;
                    font-weight: 400;
                    color: #e2e8f0;
                    line-height: 1.6;
                    margin-top: 25px;
                    margin-bottom: 0;
                    max-width: 550px;
                    text-transform: none;
                }
                
                .mapei-hero-badge-text {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-size: 1.8rem;
                    color: #ffffff;
                    margin-top: 60px;
                    font-weight: 400;
                }
                
                /* Blue Info Bar */
                .mapei-blue-bar {
                    background-color: #1a4cf6;
                    padding: 24px 0;
                    position: relative;
                    z-index: 2;
                }
                
                .mapei-blue-bar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #ffffff;
                    font-family: 'Delight', sans-serif;
                    font-weight: 700;
                    font-size: 0.85rem;
                    letter-spacing: 2.5px;
                }
                
                .mapei-blue-bar-content span {
                    text-transform: uppercase;
                }
                
                /* KPI Section (Light Background) */
                .mapei-kpi-section {
                    padding: 100px 0;
                    background: url('/case-studies/mapei/bg1.png');
                    background-size: cover;
                    background-position: center;
                    color: #0F172A;
                    position: relative;
                }
                
                .mapei-section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
                    padding-bottom: 15px;
                    margin-bottom: 60px;
                }
                
                .mapei-label-left, .mapei-label-right {
                    font-family: 'Delight', sans-serif;
                    font-size: 0.75rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: rgba(15, 23, 42, 0.45);
                    font-weight: 600;
                }
                
                .mapei-kpi-grid {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    gap: 30px;
                    z-index: 2;
                }
                
                .mapei-kpi-col {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                    max-width: 320px;
                    z-index: 2;
                }
                
                .mapei-kpi-col.center {
                    flex: 1.5;
                    max-width: 440px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }
                
                .mapei-graphic-container {
                    width: 100%;
                    max-width: 380px;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;
                }
                
                .mapei-graphic-image {
                    width: 100%;
                    max-width: 280px;
                    height: auto;
                    display: block;
                    object-fit: contain;
                }
                
                .mapei-kpi-card {
                    background: rgba(255, 255, 255, 0.75);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    border-radius: 20px;
                    padding: 30px 25px;
                    display: flex;
                    align-items: center;
                    gap: 25px;
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 10px 40px rgba(15, 23, 42, 0.04);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease;
                }
                
                .mapei-kpi-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(26, 76, 246, 0.3);
                    box-shadow: 0 15px 35px rgba(26, 76, 246, 0.08);
                }
                
                .mapei-kpi-badge {
                    width: 46px;
                    height: 46px;
                    border-radius: 12px;
                    background: rgba(15, 23, 42, 0.03);
                    border: 1px solid rgba(15, 23, 42, 0.08);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: #0F172A;
                    flex-shrink: 0;
                }
                
                .mapei-kpi-content {
                    display: flex;
                    flex-direction: column;
                }
                
                .mapei-kpi-stat {
                    font-family: 'Delight', sans-serif;
                    font-size: 2.8rem;
                    font-weight: 800;
                    line-height: 1;
                    color: #0F172A;
                    letter-spacing: -1px;
                }
                
                .mapei-kpi-desc {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: rgba(15, 23, 42, 0.6);
                    letter-spacing: 1.5px;
                    margin-top: 8px;
                    text-transform: uppercase;
                }
                
                .mapei-kpi-lines {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 1;
                }
                
                /* Strategic Approach Section */
                .mapei-approach-section {
                    padding: 100px 0;
                    background-color: #D8DFE4;
                    color: #0F172A;
                }
                
                .mapei-approach-section .mapei-section-header {
                    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
                }
                
                .mapei-approach-section .mapei-label-left,
                .mapei-approach-section .mapei-label-right {
                    color: rgba(15, 23, 42, 0.45);
                }
                
                .mapei-approach-col {
                    border-left: 1px solid rgba(15, 23, 42, 0.12);
                    padding-left: 30px;
                    margin-bottom: 30px;
                    display: flex;
                    flex-direction: column;
                }
                
                .mapei-approach-col:first-child {
                    border-left: none;
                    padding-left: 15px;
                }
                
                .mapei-approach-card {
                    flex-grow: 1;
                    background: rgba(255, 255, 255, 0.6);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    border-radius: 20px;
                    padding: 35px 30px;
                    border: 1px solid rgba(255, 255, 255, 0.4);
                    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
                    transition: all 0.4s ease;
                }
                
                .mapei-approach-card:hover {
                    transform: translateY(-4px);
                    background: rgba(255, 255, 255, 0.9);
                    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
                }
                
                .mapei-approach-header {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-start;
                    margin-bottom: 25px;
                    height: 85px;
                }
                
                .mapei-approach-header-row {
                    display: flex;
                    align-items: baseline;
                }
                
                .mapei-approach-the {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-weight: 400;
                    font-size: 1.8rem;
                    color: rgba(15, 23, 42, 0.45);
                    margin-right: 8px;
                    line-height: 1;
                }
                
                .mapei-approach-title {
                    font-family: 'Delight', sans-serif;
                    font-weight: 800;
                    font-size: 2rem;
                    text-transform: uppercase;
                    color: #0F172A;
                    letter-spacing: -0.5px;
                    margin: 0;
                    line-height: 1;
                }
                
                .mapei-approach-title.accent-blue {
                    color: #1a4cf6;
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    text-transform: none;
                    font-weight: 400;
                    margin-top: 4px;
                    font-size: 2.2rem;
                }
                
                .mapei-approach-text {
                    font-size: 0.98rem;
                    line-height: 1.7;
                    color: rgba(15, 23, 42, 0.7);
                    font-weight: 400;
                    margin: 0;
                }
                
                /* Capabilities Section */
                .mapei-capabilities-section {
                    padding: 90px 0 0 0;
                    background-color: #D8DFE4;
                    color: #0F172A;
                    text-align: center;
                    border-top: 1px solid rgba(15, 23, 42, 0.08);
                    position: relative;
                }
                
                .mapei-capabilities-text {
                    font-size: 0.85rem;
                    letter-spacing: 2px;
                    color: rgba(15, 23, 42, 0.7);
                    text-transform: uppercase;
                    font-weight: 700;
                    line-height: 1.8;
                }
                
                .mapei-bottles-banner {
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
                    .mapei-hero {
                        padding: 100px 0 60px 0;
                        background-position: center;
                    }
                    
                    .mapei-hero-title-main {
                        font-size: 4rem;
                    }
                    
                    .mapei-serif-italic {
                        font-size: 4rem;
                    }
                    
                    .mapei-hero-subtitle {
                        font-size: 1.2rem;
                    }
                    
                    .mapei-blue-bar-content {
                        flex-direction: column;
                        gap: 12px;
                        text-align: center;
                        font-size: 0.75rem;
                    }
                    
                    .mapei-kpi-section {
                        padding: 70px 0;
                    }
                    
                    .mapei-kpi-grid {
                        flex-direction: column;
                        gap: 30px;
                    }
                    
                    .mapei-kpi-col {
                        max-width: 100%;
                        width: 100%;
                        gap: 25px;
                    }
                    
                    .mapei-graphic-container {
                        max-width: 280px;
                    }
                    
                    .mapei-approach-section {
                        padding: 70px 0;
                    }
                    
                    .mapei-approach-col {
                        border-left: none;
                        border-top: 1px solid rgba(15, 23, 42, 0.12);
                        padding-left: 0;
                        padding-top: 30px;
                    }
                    
                    .mapei-approach-col:first-child {
                        border-top: none;
                        padding-top: 0;
                    }
                    
                    .mapei-approach-header {
                        height: auto;
                        margin-bottom: 15px;
                    }
                    
                    .mapei-approach-card {
                        padding: 30px 20px;
                    }
                    
                    .mapei-capabilities-section {
                        padding: 60px 0 0 0;
                    }
                    
                    .mapei-bottles-banner {
                        height: 180px;
                    }
                }
                
                @media (max-width: 575px) {
                    .mapei-hero-title-main {
                        font-size: 2.8rem;
                    }
                    
                    .mapei-serif-italic {
                        font-size: 2.8rem;
                        margin-left: 5px;
                    }
                    
                    .mapei-kpi-card {
                        padding: 20px 18px;
                    }
                    
                    .mapei-kpi-stat {
                        font-size: 2.2rem;
                    }
                }
            ` }} />
            
            {/* 1. Hero Section */}
            <div className="mapei-hero">
                <div className="hero-container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="mapei-hero-content">
                                    <h1 className="mapei-hero-title-main">
                                        mapei <span className="mapei-serif-italic">Mena</span>
                                    </h1>
                                    <p className="mapei-hero-subtitle">
                                        Engineering B2B authority on META & LinkedIn — for a specifier audience.
                                    </p>
                                    <div className="mapei-hero-badge-text">
                                        B2B Social
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 2. Blue Info Bar */}
            <div className="mapei-blue-bar">
                <div className="hero-container">
                    <div className="mapei-blue-bar-content">
                        <span>MAPEI MENA</span>
                        <span>CASE STUDY</span>
                        <span>B2B SOCIAL</span>
                    </div>
                </div>
            </div>
            
            {/* 3. KPI Section */}
            <div className="mapei-kpi-section">
                <div className="hero-container position-relative">
                    <div className="mapei-section-header">
                        <span className="mapei-label-left">THE BRIEF</span>
                        <span className="mapei-label-right">IMPACTFUL</span>
                    </div>
                    
                    {/* SVG connection lines for desktop viewports */}
                    <svg className="mapei-kpi-lines d-none d-lg-block" viewBox="0 0 1180 500" preserveAspectRatio="none" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        zIndex: 1
                    }}>
                        {/* Top-left card to waist */}
                        <path d="M 320 125 C 450 125, 520 250, 590 250" fill="none" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1.2" />
                        <circle cx="320" cy="125" r="3" fill="rgba(15, 23, 42, 0.3)" />

                        {/* Bottom-left card to waist */}
                        <path d="M 320 375 C 450 375, 520 250, 590 250" fill="none" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1.2" />
                        <circle cx="320" cy="375" r="3" fill="rgba(15, 23, 42, 0.3)" />

                        {/* Top-right card to waist */}
                        <path d="M 860 125 C 730 125, 660 250, 590 250" fill="none" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1.2" />
                        <circle cx="860" cy="125" r="3" fill="rgba(15, 23, 42, 0.3)" />

                        {/* Bottom-right card to waist */}
                        <path d="M 860 375 C 730 375, 660 250, 590 250" fill="none" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1.2" />
                        <circle cx="860" cy="375" r="3" fill="rgba(15, 23, 42, 0.3)" />
                    </svg>
                    
                    <div className="mapei-kpi-grid">
                        {/* Left Column KPIs */}
                        <div className="mapei-kpi-col">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={100}>
                                <div className="mapei-kpi-card">
                                    <div className="mapei-kpi-badge">01</div>
                                    <div className="mapei-kpi-content">
                                        <span className="mapei-kpi-stat">
                                            0 &#10142; Launch
                                        </span>
                                        <span className="mapei-kpi-desc">CHANNELS BUILT FROM ZERO</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            
                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={250}>
                                <div className="mapei-kpi-card">
                                    <div className="mapei-kpi-badge">02</div>
                                    <div className="mapei-kpi-content">
                                        <span className="mapei-kpi-stat">
                                            <Counter target={2} />
                                        </span>
                                        <span className="mapei-kpi-desc">PRIMARY PLATFORMS</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Center Column - hourglass */}
                        <div className="mapei-kpi-col center">
                            <AnimateOnScroll animation="zoomIn" speed="slow" delay={150}>
                                <div className="mapei-graphic-container">
                                    <img src="/case-studies/mapei/bb.png" className="mapei-graphic-image" alt="Hourglass" />
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Right Column KPIs */}
                        <div className="mapei-kpi-col">
                            <AnimateOnScroll animation="fadeInRight" speed="normal" delay={100}>
                                <div className="mapei-kpi-card">
                                    <div className="mapei-kpi-badge">03</div>
                                    <div className="mapei-kpi-content">
                                        <span className="mapei-kpi-stat">
                                            <Counter target={680} prefix="+" suffix="%" />
                                        </span>
                                        <span className="mapei-kpi-desc">TIME-TO-INTERACTIVE</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            
                            <AnimateOnScroll animation="fadeInRight" speed="normal" delay={250}>
                                <div className="mapei-kpi-card">
                                    <div className="mapei-kpi-badge">04</div>
                                    <div className="mapei-kpi-content">
                                        <span className="mapei-kpi-stat">
                                            <Counter target={185} prefix="+" suffix="%" />
                                        </span>
                                        <span className="mapei-kpi-desc">SPECIFIER ENGAGEMENT</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 4. Strategic Approach Section */}
            <div className="mapei-approach-section">
                <div className="hero-container">
                    <div className="mapei-section-header">
                        <span className="mapei-label-left">THE STRATEGIC APPROACH</span>
                        <span className="mapei-label-right">MAPEI MENA</span>
                    </div>
                    
                    <div className="row">
                        {/* Card 1: The Challenge */}
                        <div className="col-lg-4 mapei-approach-col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={100}>
                                <div className="w-100 h-100 d-flex flex-column">
                                    <div className="mapei-approach-header">
                                        <div className="mapei-approach-header-row">
                                            <span className="mapei-approach-the">THE</span>
                                            <h3 className="mapei-approach-title">CHALLENGE</h3>
                                        </div>
                                    </div>
                                    <div className="mapei-approach-card">
                                        <p className="mapei-approach-text">
                                            Global B2B leader with unbuilt MENA social presence. Audience is specifier, architect, contractor — buyers who decide on technical evidence and peer signals, not lifestyle hooks. Need credibility-grade channel architecture.
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Card 2: The Strategic Approach */}
                        <div className="col-lg-4 mapei-approach-col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={250}>
                                <div className="w-100 h-100 d-flex flex-column">
                                    <div className="mapei-approach-header">
                                        <div className="mapei-approach-header-row">
                                            <span className="mapei-approach-the">THE</span>
                                            <h3 className="mapei-approach-title">STRATEGIC</h3>
                                        </div>
                                        <h3 className="mapei-approach-title accent-blue">APPROACH</h3>
                                    </div>
                                    <div className="mapei-approach-card">
                                        <p className="mapei-approach-text">
                                            META + LinkedIn channels architected from launch. B2B content programme: project case studies, technical explainers, executive thought leadership. SEO surface area engineered for technical search queries. Targeted distribution against specifier persona.
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Card 3: The Impact */}
                        <div className="col-lg-4 mapei-approach-col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={400}>
                                <div className="w-100 h-100 d-flex flex-column">
                                    <div className="mapei-approach-header">
                                        <div className="mapei-approach-header-row">
                                            <span className="mapei-approach-the">THE</span>
                                            <h3 className="mapei-approach-title">IMPACT</h3>
                                        </div>
                                    </div>
                                    <div className="mapei-approach-card">
                                        <p className="mapei-approach-text">
                                            Combined audience compounded from near-zero. Specifier engagement lifted measurably. Organic search visibility on technical queries materially up. Inbound project inquiries lifted as a function of the build.
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 5. Capabilities Section */}
            <div className="mapei-capabilities-section">
                <div className="hero-container text-center">
                    <AnimateOnScroll animation="fadeInUp" speed="normal" delay={150}>
                        <div className="mapei-capabilities-text px-3 px-md-5">
                            CAPABILITIES — BRAND ARCHITECTURE • B2B SOCIAL ENGINE • B2B CONTENT PLAYBOOK • EXECUTIVE THOUGHT LEADERSHIP • SOCIAL SALES ORCHESTRATION
                        </div>
                    </AnimateOnScroll>
                </div>
                
                {/* Voss Bottles Banner at bottom */}
                <div className="mapei-bottles-banner"></div>
            </div>
            
            <CaseStudiesSection />
            <NewsletterSection />
        </div>
    );
}

export default MapeiCaseStudyPage;