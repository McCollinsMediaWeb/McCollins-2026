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

function ZilliDubaiCaseStudyPage() {
    useEffect(() => {
        document.body.classList.add("zilli-page-active");
        return () => {
            document.body.classList.remove("zilli-page-active");
        };
    }, []);

    return (
        <div className="zilli-page-wrapper">
            <HeadTitle title="Zilli Dubai Case Study - McCollins Media - Digital Marketing Agency" />
            
            <style dangerouslySetInnerHTML={{ __html: `
                .zilli-page-wrapper {
                    background-color: #000000;
                    color: #ffffff;
                    font-family: 'Delight', sans-serif;
                    overflow-x: hidden;
                }

                /* Custom Header Overrides when Zilli Page is Active (transparent header state) */
                body.zilli-page-active .FixedHeader:not(.fixed) .site-logo {
                    filter: invert(1) brightness(0) !important;
                }
                body.zilli-page-active .FixedHeader:not(.fixed) .HamberMenuLine {
                    background-color: #3875FD !important;
                }
                body.zilli-page-active .FixedHeader:not(.fixed) .CallLink {
                    background-color: #3875FD !important;
                    color: #ffffff !important;
                }
                body.zilli-page-active .FixedHeader:not(.fixed) #themeSwitch {
                    background-color: #3875FD !important;
                }
                body.zilli-page-active .FixedHeader:not(.fixed) #themeIcon {
                    color: #ffffff !important;
                }
                
                /* Hero Section */
                .zilli-hero {
                    min-height: 95vh;
                    background-image: url('/case-studies/zilli/hero.jpg');
                    background-size: cover;
                    background-position: 75% center;
                    padding: 160px 0 100px 0;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background-color: #f3f4f6;
                }
                
                .zilli-hero-content {
                    max-width: 600px;
                    text-align: left;
                    z-index: 2;
                    position: relative;
                }
                
                .zilli-hero-title-main {
                    font-family: 'Delight', sans-serif;
                    font-size: 5.5rem;
                    font-weight: 900;
                    line-height: 0.95;
                    letter-spacing: -2.5px;
                    margin: 0;
                    color: #0f172a;
                    text-transform: uppercase;
                }
                
                .zilli-serif-italic {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    text-transform: uppercase;
                    font-weight: 400;
                    color: #0f172a;
                    margin-left: 10px;
                }
                
                .zilli-hero-subtitle {
                    font-family: 'Delight', sans-serif;
                    font-size: 1.25rem;
                    font-weight: 400;
                    color: #334155;
                    line-height: 1.6;
                    margin-top: 25px;
                    margin-bottom: 0;
                    max-width: 500px;
                    text-transform: none;
                }
                
                .zilli-hero-badge {
                    display: inline-block;
                    padding: 10px 28px;
                    border-radius: 50px;
                    background: transparent;
                    border: 1px solid rgba(15, 23, 42, 0.2);
                    color: #0f172a;
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-size: 1.05rem;
                    font-weight: 400;
                    margin-top: 35px;
                    text-transform: none;
                }
                
                /* Blue Info Bar */
                .zilli-blue-bar {
                    background-color: #1a4cf6;
                    padding: 24px 0;
                    position: relative;
                    z-index: 2;
                }
                
                .zilli-blue-bar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 0.85rem;
                    letter-spacing: 2.5px;
                }
                
                .zilli-blue-bar-content span {
                    text-transform: uppercase;
                }
                
                /* Alignment adjustments for SVG curves */
                .zilli-kpi-lines circle {
                    fill: #ffffff;
                }
                
                /* KPI Section */
                .zilli-kpi-section {
                    padding: 100px 0;
                    background-image: url('/case-studies/zilli/zilli-kpi-section-bg.jpg');
                    background-size: cover;
                    background-position: center;
                    color: #ffffff;
                    position: relative;
                }
                
                .zilli-section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 15px;
                    margin-bottom: 60px;
                }
                
                .zilli-label-left, .zilli-label-right {
                    font-size: 0.75rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: rgba(255, 255, 255, 0.4);
                    font-weight: 600;
                }
                
                .zilli-kpi-grid {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    height: 500px;
                    z-index: 2;
                }
                
                .zilli-kpi-col {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                    width: 320px;
                    z-index: 2;
                }
                
                .zilli-kpi-col.center {
                    justify-content: center;
                    align-items: center;
                    width: 440px;
                }
                
                .zilli-graphic-container {
                    width: 174px;
                    height: 250px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;
                }
                
                .zilli-graphic-image {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                    border-radius: 100px;
                }
                
                .zilli-kpi-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 16px;
                    padding: 24px 30px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    height: 120px;
                    width: 320px;
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                
                .zilli-kpi-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(255, 255, 255, 0.25);
                    background: rgba(255, 255, 255, 0.06);
                }
                
                .zilli-kpi-content {
                    display: flex;
                    flex-direction: column;
                }
                
                .zilli-kpi-stat {
                    font-size: 3.2rem;
                    font-weight: 800;
                    line-height: 1.1;
                    color: #ffffff;
                    letter-spacing: -0.5px;
                }
                
                .zilli-kpi-desc {
                    font-size: 0.72rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.5);
                    letter-spacing: 1.5px;
                    margin-top: 6px;
                    text-transform: uppercase;
                }
                
                .zilli-kpi-lines {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 1;
                }
                
                /* Strategic Approach Section */
                .zilli-approach-section {
                    padding: 100px 0 50px 0;
                    background-color: #D8DFE4;
                    color: #0F172A;
                }
                
                .zilli-approach-section .zilli-section-header {
                    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
                    margin-bottom: 40px;
                }
                
                .zilli-approach-section .zilli-label-left,
                .zilli-approach-section .zilli-label-right {
                    color: rgba(15, 23, 42, 0.45);
                }
                
                .zilli-approach-col {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 30px;
                }
                
                .zilli-approach-card {
                    background: rgba(255, 255, 255, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    border-radius: 20px;
                    padding: 35px 30px;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.4s ease;
                }
                
                .zilli-approach-card:hover {
                    transform: translateY(-4px);
                    background: rgba(255, 255, 255, 0.85);
                    border-color: rgba(255, 255, 255, 0.9);
                    box-shadow: 0 15px 40px rgba(15, 23, 42, 0.06);
                }
                
                .zilli-approach-header {
                    display: flex;
                    align-items: baseline;
                    margin-bottom: 20px;
                    min-height: 70px;
                }
                
                .zilli-approach-header.flex-col {
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-end;
                }
                
                .zilli-approach-the {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-weight: 400;
                    font-size: 1.6rem;
                    color: rgba(15, 23, 42, 0.45);
                    margin-right: 8px;
                }
                
                .zilli-approach-title {
                    font-family: 'Delight', sans-serif;
                    font-weight: 900;
                    font-size: 1.7rem;
                    text-transform: uppercase;
                    color: #0F172A;
                    letter-spacing: 0.5px;
                    margin: 0;
                }
                
                .zilli-approach-title.accent-blue {
                    color: #1a4cf6;
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    text-transform: none;
                    font-weight: 400;
                    margin-top: -5px;
                }
                
                .zilli-approach-text {
                    font-size: 0.98rem;
                    line-height: 1.7;
                    color: rgba(15, 23, 42, 0.75);
                    font-weight: 400;
                    margin: 0;
                }
                
                /* Capabilities Section */
                .zilli-capabilities-section {
                    padding: 40px 0 0 0;
                    background-color: #D8DFE4;
                    color: #0F172A;
                    text-align: center;
                }
                
                .zilli-capabilities-text {
                    font-size: 0.82rem;
                    letter-spacing: 2.2px;
                    color: rgba(15, 23, 42, 0.7);
                    text-transform: uppercase;
                    font-weight: 700;
                    line-height: 1.8;
                }
                
                .zilli-bottles-banner {
                    width: 100%;
                    height: 320px;
                    background-image: url('/case-studies/case-pyramid-image.jpg');
                    background-size: cover;
                    background-position: center bottom;
                    background-repeat: no-repeat;
                    opacity: 0.95;
                    margin-top: 50px;
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
                @media (min-width: 992px) {
                    .zilli-kpi-col {
                        padding-top: 110px;
                        padding-bottom: 110px;
                    }
                    .zilli-approach-col:not(:first-child) {
                        border-left: 1px solid rgba(15, 23, 42, 0.12);
                    }
                    .zilli-approach-col {
                        padding-left: 30px;
                        padding-right: 30px;
                    }
                    .zilli-approach-col:first-child {
                        padding-left: 0;
                    }
                    .zilli-approach-col:last-child {
                        padding-right: 0;
                    }
                }
                
                @media (max-width: 991px) {
                    .zilli-hero {
                        padding: 120px 0 60px 0;
                        background-position: 65% center;
                    }
                    
                    .zilli-hero-title-main {
                        font-size: 4rem;
                    }
                    
                    .zilli-serif-italic {
                        font-size: 4rem;
                    }
                    
                    .zilli-hero-subtitle {
                        font-size: 1.15rem;
                    }
                    
                    .zilli-blue-bar-content {
                        flex-direction: column;
                        gap: 12px;
                        text-align: center;
                        font-size: 0.75rem;
                    }
                    
                    .zilli-kpi-section {
                        padding: 70px 0;
                    }
                    
                    .zilli-kpi-grid {
                        flex-direction: column;
                        gap: 30px;
                        height: auto;
                    }
                    
                    .zilli-kpi-col {
                        max-width: 100%;
                        width: 100%;
                        gap: 25px;
                        height: auto;
                    }
                    
                    .zilli-graphic-container {
                        margin: 20px 0;
                    }
                    
                    .zilli-kpi-card {
                        width: 100%;
                        height: auto;
                        padding: 24px;
                        align-items: center;
                        text-align: center;
                    }
                    
                    .zilli-kpi-card .zilli-kpi-content {
                        align-items: center;
                    }
                    
                    .zilli-approach-section {
                        padding: 70px 0 40px 0;
                    }
                    
                    .zilli-approach-col {
                        border-left: none;
                        border-top: 1px solid rgba(15, 23, 42, 0.12);
                        padding-left: 0;
                        padding-top: 30px;
                    }
                    
                    .zilli-approach-header {
                        min-height: auto;
                        margin-bottom: 15px;
                    }
                    
                    .zilli-approach-card {
                        padding: 30px 20px;
                    }
                    
                    .zilli-capabilities-section {
                        padding: 20px 0 0 0;
                    }
                    
                    .zilli-bottles-banner {
                        height: 180px;
                        margin-top: 30px;
                    }
                }
                
                @media (max-width: 575px) {
                    .zilli-hero-title-main {
                        font-size: 2.8rem;
                    }
                    
                    .zilli-serif-italic {
                        font-size: 2.8rem;
                        margin-left: 5px;
                    }
                    
                    .zilli-kpi-card {
                        padding: 20px 18px;
                    }
                    
                    .zilli-kpi-stat {
                        font-size: 2.5rem;
                    }
                }
            ` }} />
            
            {/* 1. Hero Section */}
            <div className="zilli-hero">
                <div className="hero-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pr-lg-5">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="zilli-hero-content">
                                    <h1 className="zilli-hero-title-main">
                                        ZILLI <span className="zilli-serif-italic">DUBAI</span>
                                    </h1>
                                    <p className="zilli-hero-subtitle">
                                        A mobile-first Shopify experience for French luxury — engineered for the device in their hand.
                                    </p>
                                    <div className="zilli-hero-badge">
                                        Luxury Shopify
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        {/* Space for background focus on desktop */}
                        <div className="col-lg-6 mt-4 mt-lg-0"></div>
                    </div>
                </div>
            </div>
            
            {/* 2. Blue Info Bar */}
            <div className="zilli-blue-bar">
                <div className="hero-container">
                    <div className="zilli-blue-bar-content">
                        <span>ZILLI DUBAI</span>
                        <span>CASE STUDY</span>
                        <span>LUXURY SHOPIFY</span>
                    </div>
                </div>
            </div>
            
            {/* 3. KPI Section */}
            <div className="zilli-kpi-section">
                <div className="hero-container position-relative">
                    <div className="zilli-section-header">
                        <span className="zilli-label-left">01 / KEY METRICS</span>
                        <span className="zilli-label-right">ZILLI DUBAI</span>
                    </div>
                    
                    {/* SVG connection lines for desktop viewports */}
                    <svg className="zilli-kpi-lines d-none d-lg-block" viewBox="0 0 1180 500" preserveAspectRatio="none" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        zIndex: 1
                    }}>
                        {/* Left Top Line */}
                        <line x1="320" y1="170" x2="503" y2="170" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="320" cy="170" r="3" fill="#fff" />
                        <circle cx="503" cy="170" r="3" fill="#fff" />

                        {/* Left Bottom Line */}
                        <line x1="320" y1="330" x2="503" y2="330" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="320" cy="330" r="3" fill="#fff" />
                        <circle cx="503" cy="330" r="3" fill="#fff" />

                        {/* Right Top Line */}
                        <line x1="860" y1="170" x2="677" y2="170" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="860" cy="170" r="3" fill="#fff" />
                        <circle cx="677" cy="170" r="3" fill="#fff" />

                        {/* Right Bottom Line */}
                        <line x1="860" y1="330" x2="677" y2="330" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="860" cy="330" r="3" fill="#fff" />
                        <circle cx="677" cy="330" r="3" fill="#fff" />
                    </svg>
                    
                    <div className="zilli-kpi-grid">
                        {/* Left Column KPIs */}
                        <div className="zilli-kpi-col">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={100}>
                                <div className="zilli-kpi-card">
                                    <div className="zilli-kpi-content">
                                        <span className="zilli-kpi-stat">
                                            <Counter target={100} suffix="%" />
                                        </span>
                                        <span className="zilli-kpi-desc">MOBILE-FIRST ARCHITECTURE</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            
                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={250}>
                                <div className="zilli-kpi-card">
                                    <div className="zilli-kpi-content">
                                        <span className="zilli-kpi-stat">
                                            <Counter target={82} prefix="+" suffix="%" />
                                        </span>
                                        <span className="zilli-kpi-desc">MOBILE CONVERSION</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Center Column - Graphic image */}
                        <div className="zilli-kpi-col center">
                            <AnimateOnScroll animation="zoomIn" speed="slow" delay={150}>
                                <div className="zilli-graphic-container">
                                    <img 
                                        className="zilli-graphic-image" 
                                        src="/case-studies/zilli/element.jpg" 
                                        alt="Zilli Blue Capsule Element"
                                    />
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Right Column KPIs */}
                        <div className="zilli-kpi-col">
                            <AnimateOnScroll animation="fadeInRight" speed="normal" delay={100}>
                                <div className="zilli-kpi-card">
                                    <div className="zilli-kpi-content">
                                        <span className="zilli-kpi-stat">
                                            {"<"}<Counter target={1.6} decimals={1} suffix="s" />
                                        </span>
                                        <span className="zilli-kpi-desc">MOBILE TTI</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            
                            <AnimateOnScroll animation="fadeInRight" speed="normal" delay={250}>
                                <div className="zilli-kpi-card">
                                    <div className="zilli-kpi-content">
                                        <span className="zilli-kpi-stat">
                                            <Counter target={3} />
                                        </span>
                                        <span className="zilli-kpi-desc">EXPRESS CHECKOUT RAILS</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 4. Strategic Approach Section */}
            <div className="zilli-approach-section">
                <div className="hero-container">
                    <div className="zilli-section-header">
                        <span className="zilli-label-left">THE STRATEGIC APPROACH</span>
                        <span className="zilli-label-right">ZILLI DUBAI</span>
                    </div>
                    
                    <div className="row">
                        {/* Card 1: The Challenge */}
                        <div className="col-lg-4 zilli-approach-col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={100}>
                                <div className="d-flex flex-column h-100 w-100">
                                    <div className="zilli-approach-header">
                                        <span className="zilli-approach-the">THE</span>
                                        <h3 className="zilli-approach-title">CHALLENGE</h3>
                                    </div>
                                    <div className="zilli-approach-card">
                                        <p className="zilli-approach-text">
                                            French maison entering Dubai digital market with a mobile-led, moment-shopping customer. Existing presence desktop-anchored. Product photography deserved larger stage. Checkout was friction layer, not gesture.
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Card 2: The Strategic Approach */}
                        <div className="col-lg-4 zilli-approach-col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={250}>
                                <div className="d-flex flex-column h-100 w-100">
                                    <div className="zilli-approach-header flex-col">
                                        <div className="d-flex align-items-baseline">
                                            <span className="zilli-approach-the">THE</span>
                                            <h3 className="zilli-approach-title">STRATEGIC</h3>
                                        </div>
                                        <h3 className="zilli-approach-title accent-blue">APPROACH</h3>
                                    </div>
                                    <div className="zilli-approach-card">
                                        <p className="zilli-approach-text">
                                            Mobile-first UX engineered for portrait orientation and thumb-reach. Apple Pay, Google Pay, Shop Pay for single-tap conversion. Editorial product pages treating photography as primary sales asset. Performance engineering for sub-1.6s TTI.
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Card 3: The Impact */}
                        <div className="col-lg-4 zilli-approach-col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={400}>
                                <div className="d-flex flex-column h-100 w-100">
                                    <div className="zilli-approach-header">
                                        <span className="zilli-approach-the">THE</span>
                                        <h3 className="zilli-approach-title">IMPACT</h3>
                                    </div>
                                    <div className="zilli-approach-card">
                                        <p className="zilli-approach-text">
                                            Mobile conversion lifted materially. Checkout abandonment collapsed via express rails. Session depth up. A storefront engineered for the screen the customer actually shops on.
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 5. Capabilities & Banner Section */}
            <div className="zilli-capabilities-section">
                <div className="hero-container text-center">
                    <AnimateOnScroll animation="fadeInUp" speed="normal" delay={150}>
                        <div className="zilli-capabilities-text px-3 px-md-5">
                            CAPABILITIES — SHOPIFY • MOBILE-FIRST • LUXURY UX • APPLE PAY • GOOGLE PAY • SHOP PAY • EDITORIAL PDPS • CRO
                        </div>
                    </AnimateOnScroll>
                </div>
                
                {/* Bottom Banner */}
                <div className="zilli-bottles-banner"></div>
            </div>
            
            <CaseStudiesSection />
            <NewsletterSection />
        </div>
    );
}

export default ZilliDubaiCaseStudyPage;
