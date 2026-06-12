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

function OakberryCaseStudyPage() {
    return (
        <div className="voss-page-wrapper">
            <HeadTitle title="Oakberry Case Study - McCollins Media - Digital Marketing Agency" />
            
            <style dangerouslySetInnerHTML={{ __html: `
                .voss-page-wrapper {
                    background-color: #ffffff;
                    color: #0F172A;
                    font-family: 'Delight', sans-serif;
                    overflow-x: hidden;
                }
                
                /* Hero Section */
                .voss-hero {
                    min-height: 90vh;
                    background-color: #e4e4e4 !important;
                    padding: 95px 0 50px 0;
                    display: flex;
                    align-items: center;
                    position: relative;
                }
                
                .voss-hero-title-main {
                    font-family: 'Delight', sans-serif;
                    font-size: 6.5rem;
                    font-weight: 900;
                    line-height: 0.85;
                    letter-spacing: -2.5px;
                    margin: 0;
                    color: #0F172A;
                    text-transform: uppercase;
                }
                
                .oakberry-serif-blue {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-weight: 400;
                    color: #3875FD;
                    text-transform: none;
                }
                
                .voss-hero-subtitle {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #0F172A;
                    letter-spacing: 1.5px;
                    margin-top: 25px;
                    font-family: 'Delight', sans-serif;
                    text-transform: uppercase;
                }
                
                .voss-hero-image-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .oakberry-hero-image {
                    width: 100%;
                    max-width: 580px;
                    height: auto;
                    object-fit: contain;
                    display: block;
                }
                
                /* Blue Bar */
                .voss-blue-bar {
                    background-color: #3875FD;
                    padding: 24px 0;
                }
                
                .voss-blue-bar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 0.85rem;
                    letter-spacing: 2.5px;
                }
                
                /* Section labels (Light Background theme) */
                .voss-section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
                    padding-bottom: 15px;
                    margin-bottom: 60px;
                }
                
                .voss-label-left, .voss-label-right {
                    font-size: 0.75rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: rgba(15, 23, 42, 0.45);
                    font-weight: 600;
                }
                
                /* KPI Section (Dark Background) */
                .voss-kpi-section {
                    padding: 75px 0;
                    background: #000000 !important;
                    color: #ffffff;
                    position: relative;
                }
                
                .voss-kpi-grid {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    gap: 30px;
                    z-index: 2;
                }
                
                .oakberry-kpi-left-col {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    width: 360px;
                    height: 480px;
                    justify-content: space-between;
                    flex-shrink: 0;
                    z-index: 2;
                }
                
                .oakberry-kpi-connector {
                    flex-grow: 1;
                    height: 480px;
                    max-width: 160px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                }
                
                .oakberry-kpi-right-col {
                    flex: 1.5;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    z-index: 2;
                }
                
                .oakberry-graphic-container {
                    width: 100%;
                    max-width: 540px;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                }
                
                .oakberry-graphic-image {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                
                .oakberry-kpi-card {
                    background: rgba(30, 30, 30, 0.65) !important;
                    backdrop-filter: blur(12px) !important;
                    -webkit-backdrop-filter: blur(12px) !important;
                    border: 1px solid rgba(255, 255, 255, 0.08) !important;
                    border-radius: 16px !important;
                    padding: 20px 20px !important;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    position: relative;
                    z-index: 2;
                    height: 90px;
                    width: 100%;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2) !important;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease;
                }
                
                .oakberry-kpi-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(56, 117, 253, 0.4) !important;
                    box-shadow: 0 10px 25px rgba(56, 117, 253, 0.1) !important;
                }
                
                .oakberry-kpi-badge {
                    width: 46px;
                    height: 46px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.05) !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: #ffffff !important;
                    flex-shrink: 0;
                }
                
                .voss-kpi-content {
                    display: flex;
                    flex-direction: column;
                }
                
                .oakberry-kpi-card .voss-kpi-stat {
                    font-size: 2.8rem;
                    font-weight: 800;
                    line-height: 1;
                    color: #ffffff !important;
                    letter-spacing: -1px;
                }
                
                .oakberry-kpi-card .voss-kpi-desc {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.5) !important;
                    letter-spacing: 1.5px;
                    margin-top: 8px;
                    text-transform: uppercase;
                }
                
                /* Approach Section (Light Background) */
                .voss-approach-section {
                    padding: 75px 0;
                    background: linear-gradient(180deg, #E2E8F0 0%, #CBD5E1 100%) !important;
                    color: #0F172A;
                }
                
                .voss-approach-card {
                    background: rgba(255, 255, 255, 0.50);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    border: 1px solid rgba(15, 23, 42, 0.05);
                    border-radius: 16px;
                    padding: 45px 35px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.01);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease;
                }
                
                .voss-approach-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(56, 117, 253, 0.2);
                    box-shadow: 0 12px 30px rgba(56, 117, 253, 0.06);
                }
                
                .voss-approach-header {
                    display: flex;
                    align-items: baseline;
                    margin-bottom: 25px;
                }
                
                .voss-approach-header.flex-col {
                    flex-direction: column;
                    align-items: flex-start;
                }
                
                .voss-approach-the {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-weight: 400;
                    font-size: 1.6rem;
                    color: rgba(15, 23, 42, 0.45);
                    margin-right: 8px;
                }
                
                .voss-approach-title {
                    font-family: 'Delight', sans-serif;
                    font-weight: 700;
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    color: #0F172A;
                    letter-spacing: 0.5px;
                }
                
                .voss-approach-title.accent-blue {
                    color: #3876fc;
                }
                
                .voss-approach-text {
                    font-size: 0.98rem;
                    line-height: 1.7;
                    color: rgba(15, 23, 42, 0.7);
                    font-weight: 400;
                    margin: 0;
                }
                
                /* Capabilities & Bottom Banner (Light Background) */
                .voss-capabilities-section {
                    padding: 75px 0 0 0;
                    background-color: #DCE3EC;
                    color: #0F172A;
                    position: relative;
                }
                
                .voss-capabilities-text {
                    font-size: 0.8rem;
                    letter-spacing: 2px;
                    color: rgba(15, 23, 42, 0.6);
                    text-transform: uppercase;
                    font-weight: 600;
                    margin-bottom: 60px;
                    line-height: 1.6;
                }
                
                .voss-bottles-banner {
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
                }
                
                /* Responsive styles */
                @media (max-width: 991px) {
                    .voss-hero {
                        background-color: #e4e4e4 !important;
                        min-height: auto;
                        padding: 80px 0 30px 0;
                        text-align: center;
                    }
                    
                    .voss-hero-title-main {
                        font-size: 4.5rem;
                    }
                    
                    .voss-hero-subtitle {
                        font-size: 1.1rem;
                        margin-bottom: 30px;
                    }
                    
                    .oakberry-hero-image {
                        max-width: 400px;
                        margin: 0 auto;
                    }
                    
                    .voss-blue-bar-content {
                        flex-direction: column;
                        gap: 10px;
                        text-align: center;
                        font-size: 0.75rem;
                    }
                    
                    .voss-kpi-grid {
                        flex-direction: column;
                        gap: 30px;
                    }
                    
                    .oakberry-kpi-left-col {
                        max-width: 100%;
                        width: 100%;
                        height: auto;
                        gap: 20px;
                    }
                    
                    .oakberry-kpi-right-col {
                        justify-content: center;
                        width: 100%;
                    }
                    
                    .voss-approach-section {
                        padding: 50px 0;
                    }
                    
                    .voss-approach-card {
                        padding: 35px 25px;
                        margin-bottom: 30px;
                    }
                    
                    .voss-capabilities-section {
                        padding: 50px 0 0 0;
                    }
                    
                    .voss-bottles-banner {
                        height: 180px;
                    }
                }
                
                @media (max-width: 575px) {
                    .voss-hero-title-main {
                        font-size: 3.2rem;
                    }
                    
                    .oakberry-kpi-card {
                        padding: 20px 18px;
                    }
                }
            ` }} />
            
            {/* 1. Hero Section */}
            <div className="voss-hero">
                <div className="hero-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pr-lg-5">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div>
                                    <h1 className="voss-hero-title-main">
                                        OAKBERRY <span className="oakberry-serif-blue">UAE</span>
                                    </h1>
                                    <p className="voss-hero-subtitle">
                                        From one storefront in a pandemic to <br />
                                        <span className="voss-serif-italic">20+ retail locations across the GCC.</span>
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        {/* Right side graphic for desktop/mobile */}
                        <div className="col-lg-6 mt-4 mt-lg-0 voss-hero-image-container">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <img 
                                    className="oakberry-hero-image" 
                                    src="/case-studies/oakberry/heroimage.png" 
                                    alt="Four cups of Oakberry Acai cups standing side by side"
                                />
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 2. Blue Info Bar */}
            <div className="voss-blue-bar">
                <div className="hero-container">
                    <div className="voss-blue-bar-content">
                        <span>OAKBERRY UAE</span>
                        <span>CASE STUDY</span>
                        <span>F&B</span>
                    </div>
                </div>
            </div>
            
            {/* 3. KPI Section */}
            <div className="voss-kpi-section">
                <div className="hero-container position-relative">
                    <div className="voss-kpi-grid">
                        {/* Left Column: 4 KPI Cards */}
                        <div className="oakberry-kpi-left-col">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={100}>
                                <div className="oakberry-kpi-card">
                                    <div className="oakberry-kpi-badge">01</div>
                                    <div className="voss-kpi-content">
                                        <span className="voss-kpi-stat">
                                            <Counter target={20} prefix="1 → " suffix="+" />
                                        </span>
                                        <span className="voss-kpi-desc">GCC Retail Footprint</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            
                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={200}>
                                <div className="oakberry-kpi-card">
                                    <div className="oakberry-kpi-badge">02</div>
                                    <div className="voss-kpi-content">
                                        <span className="voss-kpi-stat">
                                            <Counter target={5} suffix="+" />
                                        </span>
                                        <span className="voss-kpi-desc">Disciplines Deployed</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={300}>
                                <div className="oakberry-kpi-card">
                                    <div className="oakberry-kpi-badge">03</div>
                                    <div className="voss-kpi-content">
                                        <span className="voss-kpi-stat">
                                            <Counter target={450} prefix="+" suffix="%" />
                                        </span>
                                        <span className="voss-kpi-desc">Community Growth</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={400}>
                                <div className="oakberry-kpi-card">
                                    <div className="oakberry-kpi-badge">04</div>
                                    <div className="voss-kpi-content">
                                        <span className="voss-kpi-stat">
                                            <Counter target={90} prefix="&lt;" suffix="d" />
                                        </span>
                                        <span className="voss-kpi-desc">Launch Cadence</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Middle: SVG Connector */}
                        <div className="oakberry-kpi-connector d-none d-lg-block">
                            <svg viewBox="0 0 160 500" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.2" style={{ width: '100%', height: '100%', display: 'block' }}>
                                {/* Curve matching card 1 (y=45) to vertical connector at x=40 */}
                                <path d="M 0 45 C 40 45, 40 45, 40 70" />
                                {/* Vertical line at x=40 */}
                                <line x1="40" y1="70" x2="40" y2="410" />
                                {/* Horizontal line from Card 2 (y=175) to x=40 */}
                                <line x1="0" y1="175" x2="40" y2="175" />
                                {/* Horizontal line from Card 3 (y=305) to x=40 */}
                                <line x1="0" y1="305" x2="40" y2="305" />
                                {/* Curve from card 4 (y=435) to vertical connector at x=40 */}
                                <path d="M 0 435 C 40 435, 40 435, 40 410" />
                                {/* Horizontal connector going right to the 3D graphic */}
                                <line x1="40" y1="240" x2="120" y2="240" />
                            </svg>
                        </div>

                        {/* Right Column: 3D Image */}
                        <div className="oakberry-kpi-right-col">
                            <AnimateOnScroll animation="zoomIn" speed="slow" delay={150}>
                                <div className="oakberry-graphic-container">
                                    <img 
                                        className="oakberry-graphic-image" 
                                        src="/case-studies/oakberry/voss-kpi-section.jpg" 
                                        alt="3D render of four dark glossy rounded squares sitting in grid pattern" 
                                    />
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 4. Strategic Approach Section */}
            <div className="voss-approach-section">
                <div className="hero-container">
                    <div className="voss-section-header">
                        <span className="voss-label-left">THE STRATEGIC APPROACH</span>
                        <span className="voss-label-right">OAKBERRY UAE</span>
                    </div>
                    
                    <div className="row">
                        {/* Card 1: The Challenge */}
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={100}>
                                <div className="voss-approach-card">
                                    <div className="voss-approach-header">
                                        <span className="voss-approach-the">THE</span>
                                        <h3 className="voss-approach-title">CHALLENGE</h3>
                                    </div>
                                    <p className="voss-approach-text">
                                        Launching a global F&B icon into a region with no behavioural reference
                                        for açaí — during COVID, with footfall constrained. Build a category,
                                        build an audience, build a regional growth path from a single piece of
                                        retail estate.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Card 2: The Strategic Approach */}
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={250}>
                                <div className="voss-approach-card">
                                    <div className="voss-approach-header flex-col">
                                        <div className="d-flex align-items-baseline">
                                            <span className="voss-approach-the">THE</span>
                                            <h3 className="voss-approach-title">STRATEGIC</h3>
                                        </div>
                                        <h3 className="voss-approach-title accent-blue">APPROACH</h3>
                                    </div>
                                    <p className="voss-approach-text">
                                        Brand & community architecture for Gulf audience. Always-on content
                                        production engine. Geo-fenced performance media against each new
                                        opening. Web ecosystem scaling with the retail footprint. Repeatable
                                        launch playbook.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Card 3: The Impact */}
                        <div className="col-lg-4">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={400}>
                                <div className="voss-approach-card">
                                    <div className="voss-approach-header">
                                        <span className="voss-approach-the">THE</span>
                                        <h3 className="voss-approach-title">IMPACT</h3>
                                    </div>
                                    <p className="voss-approach-text">
                                        From single COVID-era opening to 20+ stores across UAE & wider
                                        GCC. Category effectively defined in the region. Per-store launch
                                        cadence cheaper and faster with every new opening.
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 5. Capabilities Section */}
            <div className="voss-capabilities-section">
                <div className="hero-container text-center">
                    <AnimateOnScroll animation="fadeInUp" speed="normal" delay={150}>
                        <div className="voss-capabilities-text px-3 px-md-5">
                            CAPABILITIES — BRAND ARCHITECTURE • WEB DEVELOPMENT • CONTENT ENGINE • META ADS • TIKTOK ADS • SNAPCHAT ADS • GEO-FENCING • LAUNCH PLAYBOOK
                        </div>
                    </AnimateOnScroll>
                </div>
                
                {/* Horizontal row of bottles image / Pyramid style image */}
                <div className="voss-bottles-banner"></div>
            </div>

            
            <CaseStudiesSection />
            <NewsletterSection />
        </div>
    );
}

export default OakberryCaseStudyPage;