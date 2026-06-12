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

function ToshibaCaseStudyPage() {
    return (
        <div className="voss-page-wrapper">
            <HeadTitle title="Toshiba Case Study - McCollins Media - Digital Marketing Agency" />
            
            <style dangerouslySetInnerHTML={{ __html: `
                .voss-page-wrapper {
                    background-color: #000000;
                    color: #ffffff;
                    font-family: 'Delight', sans-serif;
                    overflow-x: hidden;
                }
                
                /* Hero Section */
                .voss-hero {
                    min-height: 90vh;
                    background-image: url('/case-studies/case-herobanner-voss.jpg');
                    background-size: cover;
                    background-position: center;
                    padding: 95px 0 50px 0;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background-color: #000000;
                }
                
                .voss-hero-title-main {
                    font-family: 'Delight', sans-serif;
                    font-size: 6.5rem;
                    font-weight: 900;
                    line-height: 0.85;
                    letter-spacing: -2.5px;
                    margin: 0;
                    color: #ffffff;
                    text-transform: lowercase;
                }
                
                .voss-hero-title-sub {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-weight: 400;
                    font-size: 5rem;
                    line-height: 1;
                    margin: 0;
                    color: #ffffff;
                }
                
                .voss-hero-subtitle {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #ffffff;
                    letter-spacing: 1.5px;
                    margin-top: 25px;
                    font-family: 'Delight', sans-serif;
                    text-transform: uppercase;
                }
                
                .voss-serif-italic {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    text-transform: none;
                    font-weight: 400;
                    margin-right: 6px;
                }
                
                .voss-hero-image-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .voss-hero-mobile-image {
                    width: 100%;
                    max-width: 500px;
                    height: auto;
                    object-fit: contain;
                    border-radius: 12px;
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
                
                /* KPI Section (Light Background) */
                .voss-kpi-section {
                    padding: 75px 0;
                    background: url('/case-studies/bg1.png');
                    background-size: cover;
                    background-position: center;
                    color: #0F172A;
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
                
                .voss-kpi-col {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                    max-width: 320px;
                    z-index: 2;
                }
                
                .voss-kpi-col.center {
                    flex: 1.5;
                    max-width: 480px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }
                
                /* Hourglass Cropped Container - never cuts at bottom */
                .voss-hourglass-cropped {
                    width: 100%;
                    max-width: 320px;
                    height: 480px;
                    background-image: url('/case-studies/bb.png');
                    background-size: auto 100%;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }
                
                .voss-kpi-card {
                    background: rgba(255, 255, 255, 0.75);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(15, 23, 42, 0.08);
                    border-radius: 20px;
                    padding: 30px 25px;
                    display: flex;
                    align-items: center;
                    gap: 25px;
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.02);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease;
                }
                
                .voss-kpi-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(56, 117, 253, 0.3);
                    box-shadow: 0 15px 35px rgba(56, 117, 253, 0.08);
                }
                
                .voss-kpi-badge {
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
                
                .voss-kpi-content {
                    display: flex;
                    flex-direction: column;
                }
                
                .voss-kpi-stat {
                    font-size: 2.8rem;
                    font-weight: 800;
                    line-height: 1;
                    color: #0F172A;
                    letter-spacing: -1px;
                }
                
                .voss-kpi-desc {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: rgba(15, 23, 42, 0.6);
                    letter-spacing: 1.5px;
                    margin-top: 8px;
                    text-transform: uppercase;
                }
                
                /* Approach Section (Light Background) */
                .voss-approach-section {
                    padding: 75px 0;
                    background-color: #DCE2E7;
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
                .hero-container{
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
                        background-image: none !important;
                        background: linear-gradient(180deg, #000000 0%, #080f1e 100%) !important;
                        min-height: auto;
                        padding: 80px 0 30px 0;
                        text-align: center;
                    }
                    
                    .voss-hero-title-main {
                        font-size: 4.5rem;
                    }
                    
                    .voss-hero-title-sub {
                        font-size: 3.5rem;
                    }
                    
                    .voss-hero-subtitle {
                        font-size: 1.1rem;
                        margin-bottom: 30px;
                    }
                    
                    .voss-blue-bar-content {
                        flex-direction: column;
                        gap: 10px;
                        text-align: center;
                        font-size: 0.75rem;
                    }
                    
                    .voss-kpi-section {
                        padding: 50px 0;
                    }
                    
                    .voss-kpi-grid {
                        flex-direction: column;
                        gap: 30px;
                    }
                    
                    .voss-kpi-col {
                        max-width: 100%;
                        width: 100%;
                        gap: 25px;
                    }
                    
                    .voss-hourglass-cropped {
                        height: 340px;
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
                    
                    .voss-hero-title-sub {
                        font-size: 2.6rem;
                    }
                    
                    .voss-kpi-card {
                        padding: 20px 18px;
                    }
                    
                    .voss-kpi-stat {
                        font-size: 2.2rem;
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
                                    <h1 className="voss-hero-title-main">toshiba</h1>
                                    <h2 className="voss-hero-title-sub">electronics</h2>
                                    <p className="voss-hero-subtitle">
                                        <span className="voss-serif-italic">Luxury</span> Commerce Rebuilt
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        {/* Empty spacer column on desktop, contains inline mobile banner on mobile */}
                        <div className="col-lg-6 mt-4 mt-lg-0 voss-hero-image-container">
                            <div className="d-block d-lg-none w-100">
                                <img 
                                    className="voss-hero-mobile-image" 
                                    src="/case-studies/case-herobanner-voss.jpg" 
                                    alt="Voss website shown on a laptop screen, held by hands"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 2. Blue Info Bar */}
            <div className="voss-blue-bar">
                <div className="hero-container">
                    <div className="voss-blue-bar-content">
                        <span>TOSHIBA</span>
                        <span>CASE STUDY</span>
                        <span>DIGITAL PRESENCE REBUILT</span>
                    </div>
                </div>
            </div>
            
            {/* 3. KPI Section */}
            <div className="voss-kpi-section">
                <div className="hero-container position-relative">
                    <div className="voss-section-header">
                        <span className="voss-label-left">THE BRIEF</span>
                        <span className="voss-label-right">TOSHIBA</span>
                    </div>
                    
                    {/* SVG connection lines for desktop viewports */}
                    <svg className="voss-kpi-lines d-none d-lg-block" viewBox="0 0 1180 500" preserveAspectRatio="none" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        zIndex: 1
                    }}>
                        {/* Top-left card to waist */}
                        <path d="M 320 125 C 450 125, 520 250, 590 250" fill="none" stroke="rgba(15, 23, 42, 0.12)" strokeWidth="1.2" />
                        {/* Bottom-left card to waist */}
                        <path d="M 320 375 C 450 375, 520 250, 590 250" fill="none" stroke="rgba(15, 23, 42, 0.12)" strokeWidth="1.2" />
                        {/* Top-right card to waist */}
                        <path d="M 860 125 C 730 125, 660 250, 590 250" fill="none" stroke="rgba(15, 23, 42, 0.12)" strokeWidth="1.2" />
                        {/* Bottom-right card to waist */}
                        <path d="M 860 375 C 730 375, 660 250, 590 250" fill="none" stroke="rgba(15, 23, 42, 0.12)" strokeWidth="1.2" />
                    </svg>
                    
                    <div className="voss-kpi-grid">
                        {/* Left Column KPIs */}
                        <div className="voss-kpi-col">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={100}>
                                <div className="voss-kpi-card">
                                    <div className="voss-kpi-badge">01</div>
                                    <div className="voss-kpi-content">
                                        <span className="voss-kpi-stat">
                                            <Counter target={100} suffix="%" />
                                        </span>
                                        <span className="voss-kpi-desc">Bespoke Shopify Build</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            
                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={250}>
                                <div className="voss-kpi-card">
                                    <div className="voss-kpi-badge">02</div>
                                    <div className="voss-kpi-content">
                                        <span className="voss-kpi-stat">
                                            <Counter target={4} suffix="+" />
                                        </span>
                                        <span className="voss-kpi-desc">Payment Rails Integrated</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Center Column - Contained cropped hourglass, never cuts at bottom */}
                        <div className="voss-kpi-col center">
                            <AnimateOnScroll animation="zoomIn" speed="slow" delay={150}>
                                <div className="voss-hourglass-cropped"></div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Right Column KPIs */}
                        <div className="voss-kpi-col">
                            <AnimateOnScroll animation="fadeInRight" speed="normal" delay={100}>
                                <div className="voss-kpi-card">
                                    <div className="voss-kpi-badge">03</div>
                                    <div className="voss-kpi-content">
                                        <span className="voss-kpi-stat">
                                            <Counter target={1.4} decimals={1} prefix="&lt;" suffix="S" />
                                        </span>
                                        <span className="voss-kpi-desc">Time-To-Interactive</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            
                            <AnimateOnScroll animation="fadeInRight" speed="normal" delay={250}>
                                <div className="voss-kpi-card">
                                    <div className="voss-kpi-badge">04</div>
                                    <div className="voss-kpi-content">
                                        <span className="voss-kpi-stat">
                                            <Counter target={96} />
                                        </span>
                                        <span className="voss-kpi-desc">Lighthouse Score</span>
                                    </div>
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
                        <span className="voss-label-right">TOSHIBA</span>
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
                                        Heritage luxury water brand with a generic digital storefront. 
                                        Over-articulated interface, friction at checkout, no payment optionality 
                                        beyond conventional card rails. Brand world deserved a quieter, more 
                                        deliberate digital expression.
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
                                        Editorial commerce design restraint as the system. Performance-first 
                                        engineering for sub-1.5s mobile TTI. Multi-rail transaction layer: Apple Pay, 
                                        Google Pay, card, crypto. Headless-ready foundation for the next horizon.
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
                                        Mobile conversion lifted materially. Checkout abandonment collapsed. 
                                        Near-perfect Lighthouse. A storefront that disappears, leaving 
                                        brand, bottle, transaction.
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
                            CAPABILITIES — SHOPIFY DEV • LUXURY UX • APPLE PAY • GOOGLE PAY • CRYPTO • HEADLESS • CRO • SITE MAINTENANCE
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

export default ToshibaCaseStudyPage;