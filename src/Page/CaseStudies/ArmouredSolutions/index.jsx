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

    const formatted = decimals > 0 
        ? count.toFixed(decimals) 
        : Math.floor(count).toLocaleString();

    return (
        <span ref={ref}>
            {prefix}
            {formatted}
            {suffix}
        </span>
    );
};

function ArmouredSolutionsCaseStudyPage() {
    return (
        <div className="as-page-wrapper">
            <HeadTitle title="Armoured Solutions Case Study - McCollins Media - Digital Marketing Agency" />
            
            <style dangerouslySetInnerHTML={{ __html: `
                .as-page-wrapper {
                    background-color: #000000;
                    color: #ffffff;
                    font-family: 'Delight', sans-serif;
                    overflow-x: hidden;
                }
                
                /* Hero Section */
                .as-hero {
                    min-height: 95vh;
                    padding: 160px 0 100px 0;
                    display: flex;
                    align-items: center;
                    position: relative;
                    background-color: #000000;
                }
                
                .as-hero-content {
                    max-width: 600px;
                    text-align: left;
                    z-index: 2;
                    position: relative;
                }
                
                .as-hero-title-main {
                    font-family: 'Delight', sans-serif;
                    font-size: 5.5rem;
                    font-weight: 900;
                    line-height: 0.95;
                    letter-spacing: -2.5px;
                    margin: 0;
                    color: #ffffff;
                    text-transform: uppercase;
                }
                
                .as-serif-italic {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    text-transform: uppercase;
                    font-weight: 400;
                    color: #ffffff;
                    display: block;
                    margin-top: -5px;
                }
                
                .as-hero-subtitle {
                    font-family: 'Delight', sans-serif;
                    font-size: 1.25rem;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.6;
                    margin-top: 25px;
                    margin-bottom: 0;
                    max-width: 500px;
                    text-transform: none;
                }
                
                .as-hero-badge {
                    display: inline-block;
                    padding: 10px 28px;
                    border-radius: 50px;
                    background: transparent;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: #ffffff;
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-size: 1.05rem;
                    font-weight: 400;
                    margin-top: 35px;
                    text-transform: none;
                }
                
                .as-hero-image-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;
                }
                
                .as-hero-image {
                    width: 100%;
                    max-width: 500px;
                    height: auto;
                    border-radius: 24px;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    object-fit: cover;
                }
                
                /* Blue Info Bar */
                .as-blue-bar {
                    background-color: #1a4cf6;
                    padding: 24px 0;
                    position: relative;
                    z-index: 2;
                }
                
                .as-blue-bar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 0.85rem;
                    letter-spacing: 2.5px;
                }
                
                .as-blue-bar-content span {
                    text-transform: uppercase;
                }
                
                /* KPI Section */
                .as-kpi-section {
                    padding: 100px 0;
                    background-color: #000000;
                    color: #ffffff;
                    position: relative;
                }
                
                .as-section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 15px;
                    margin-bottom: 60px;
                }
                
                .as-label-left, .as-label-right {
                    font-size: 0.75rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: rgba(255, 255, 255, 0.4);
                    font-weight: 600;
                }
                
                .as-kpi-grid {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    height: 500px;
                    z-index: 2;
                }
                
                .as-kpi-col {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                    width: 320px;
                    z-index: 2;
                }
                
                .as-kpi-col.center {
                    justify-content: center;
                    align-items: center;
                    width: 440px;
                }
                
                .as-graphic-container {
                    width: 320px;
                    height: 400px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;
                }
                
                .as-graphic-image {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: contain;
                }
                
                .as-kpi-card {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 24px 30px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    height: 120px;
                    width: 320px;
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                
                .as-kpi-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(56, 117, 253, 0.4);
                    background: rgba(255, 255, 255, 0.05);
                }
                
                .as-kpi-badge {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.7);
                    flex-shrink: 0;
                }
                
                .as-kpi-content {
                    display: flex;
                    flex-direction: column;
                }
                
                .as-kpi-stat {
                    font-size: 2.8rem;
                    font-weight: 800;
                    line-height: 1.1;
                    color: #ffffff;
                    letter-spacing: -0.5px;
                }
                
                .as-kpi-desc {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.5);
                    letter-spacing: 1.5px;
                    margin-top: 6px;
                    text-transform: uppercase;
                }
                
                .as-kpi-lines {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 1;
                }
                
                /* Strategic Approach Section */
                .as-approach-section {
                    padding: 100px 0 50px 0;
                    background-color: #D8DFE4;
                    color: #0F172A;
                }
                
                .as-approach-section .as-section-header {
                    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
                    margin-bottom: 40px;
                }
                
                .as-approach-section .as-label-left,
                .as-approach-section .as-label-right {
                    color: rgba(15, 23, 42, 0.45);
                }
                
                .as-approach-col {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 30px;
                }
                
                .as-approach-card {
                    background: rgba(255, 255, 255, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    border-radius: 20px;
                    padding: 35px 30px;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.4s ease;
                }
                
                .as-approach-card:hover {
                    transform: translateY(-4px);
                    background: rgba(255, 255, 255, 0.85);
                    border-color: rgba(255, 255, 255, 0.9);
                    box-shadow: 0 15px 40px rgba(15, 23, 42, 0.06);
                }
                
                .as-approach-header {
                    display: flex;
                    align-items: baseline;
                    margin-bottom: 20px;
                    min-height: 70px;
                }
                
                .as-approach-header.flex-col {
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-end;
                }
                
                .as-approach-the {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-weight: 400;
                    font-size: 1.6rem;
                    color: rgba(15, 23, 42, 0.45);
                    margin-right: 8px;
                }
                
                .as-approach-title {
                    font-family: 'Delight', sans-serif;
                    font-weight: 900;
                    font-size: 1.7rem;
                    text-transform: uppercase;
                    color: #0F172A;
                    letter-spacing: 0.5px;
                    margin: 0;
                }
                
                .as-approach-title.accent-blue {
                    color: #1a4cf6;
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    text-transform: none;
                    font-weight: 400;
                    margin-top: -5px;
                }
                
                .as-approach-text {
                    font-size: 0.98rem;
                    line-height: 1.7;
                    color: rgba(15, 23, 42, 0.75);
                    font-weight: 400;
                    margin: 0;
                }
                
                /* Capabilities Section */
                .as-capabilities-section {
                    padding: 40px 0 0 0;
                    background-color: #D8DFE4;
                    color: #0F172A;
                    text-align: center;
                }
                
                .as-capabilities-text {
                    font-size: 0.82rem;
                    letter-spacing: 2.2px;
                    color: rgba(15, 23, 42, 0.7);
                    text-transform: uppercase;
                    font-weight: 700;
                    line-height: 1.8;
                }
                
                .as-bottles-banner {
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
                    .as-kpi-col {
                        padding-top: 110px;
                        padding-bottom: 110px;
                    }
                    .as-approach-col:not(:first-child) {
                        border-left: 1px solid rgba(15, 23, 42, 0.12);
                    }
                    .as-approach-col {
                        padding-left: 30px;
                        padding-right: 30px;
                    }
                    .as-approach-col:first-child {
                        padding-left: 0;
                    }
                    .as-approach-col:last-child {
                        padding-right: 0;
                    }
                }
                
                @media (max-width: 991px) {
                    .as-hero {
                        padding: 120px 0 60px 0;
                    }
                    
                    .as-hero-title-main {
                        font-size: 4rem;
                    }
                    
                    .as-serif-italic {
                        font-size: 4rem;
                    }
                    
                    .as-hero-subtitle {
                        font-size: 1.15rem;
                    }
                    
                    .as-blue-bar-content {
                        flex-direction: column;
                        gap: 12px;
                        text-align: center;
                        font-size: 0.75rem;
                    }
                    
                    .as-kpi-section {
                        padding: 70px 0;
                    }
                    
                    .as-kpi-grid {
                        flex-direction: column;
                        gap: 30px;
                        height: auto;
                    }
                    
                    .as-kpi-col {
                        max-width: 100%;
                        width: 100%;
                        gap: 25px;
                        height: auto;
                    }
                    
                    .as-graphic-container {
                        margin: 20px 0;
                        width: 100%;
                        height: auto;
                    }
                    
                    .as-kpi-card {
                        width: 100%;
                        height: auto;
                        padding: 24px;
                    }
                    
                    .as-approach-section {
                        padding: 70px 0 40px 0;
                    }
                    
                    .as-approach-col {
                        border-left: none;
                        border-top: 1px solid rgba(15, 23, 42, 0.12);
                        padding-left: 0;
                        padding-top: 30px;
                    }
                    
                    .as-approach-header {
                        min-height: auto;
                        margin-bottom: 15px;
                    }
                    
                    .as-approach-card {
                        padding: 30px 20px;
                    }
                    
                    .as-capabilities-section {
                        padding: 20px 0 0 0;
                    }
                    
                    .as-bottles-banner {
                        height: 180px;
                        margin-top: 30px;
                    }
                }
                
                @media (max-width: 575px) {
                    .as-hero-title-main {
                        font-size: 2.8rem;
                    }
                    
                    .as-serif-italic {
                        font-size: 2.8rem;
                    }
                    
                    .as-kpi-card {
                        padding: 20px 18px;
                    }
                    
                    .as-kpi-stat {
                        font-size: 2.5rem;
                    }
                }
            ` }} />
            
            {/* 1. Hero Section */}
            <div className="as-hero">
                <div className="hero-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pr-lg-5">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="as-hero-content">
                                    <h1 className="as-hero-title-main">
                                        ARMOURED <span className="as-serif-italic">SOLUTIONS</span>
                                    </h1>
                                    <p className="as-hero-subtitle">
                                        Rebuilding the regional digital identity of UAE's premier custom tactical armoring firm.
                                    </p>
                                    <div className="as-hero-badge">
                                        Brand ➔ Scale
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        {/* Hero Image on Right */}
                        <div className="col-lg-6 mt-5 mt-lg-0 as-hero-image-container">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <img 
                                    className="as-hero-image" 
                                    src="/case-studies-thumbs/armoured-solutions.jpg" 
                                    alt="Armoured Solutions tactical defense vehicle mockup"
                                />
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 2. Blue Info Bar */}
            <div className="as-blue-bar">
                <div className="hero-container">
                    <div className="as-blue-bar-content">
                        <span>ARMOURED SOLUTIONS</span>
                        <span>CASE STUDY</span>
                        <span>BRAND ➔ SCALE</span>
                    </div>
                </div>
            </div>
            
            {/* 3. KPI Section */}
            <div className="as-kpi-section">
                <div className="hero-container position-relative">
                    <div className="as-section-header">
                        <span className="as-label-left">01 / KEY METRICS</span>
                        <span className="as-label-right">ARMOURED SOLUTIONS</span>
                    </div>
                    
                    {/* SVG connection lines for desktop viewports */}
                    <svg className="as-kpi-lines d-none d-lg-block" viewBox="0 0 1180 500" preserveAspectRatio="none" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        zIndex: 1
                    }}>
                        {/* Left Top Line */}
                        <path d="M 320 170 C 420 170, 480 250, 590 250" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="320" cy="170" r="3" fill="#fff" />

                        {/* Left Bottom Line */}
                        <path d="M 320 330 C 420 330, 480 250, 590 250" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="320" cy="330" r="3" fill="#fff" />

                        {/* Right Top Line */}
                        <path d="M 860 170 C 760 170, 700 250, 590 250" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="860" cy="170" r="3" fill="#fff" />

                        {/* Right Bottom Line */}
                        <path d="M 860 330 C 760 330, 700 250, 590 250" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="860" cy="330" r="3" fill="#fff" />
                    </svg>
                    
                    <div className="as-kpi-grid">
                        {/* Left Column KPIs */}
                        <div className="as-kpi-col">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={100}>
                                <div className="as-kpi-card">
                                    <div className="as-kpi-badge">01</div>
                                    <div className="as-kpi-content">
                                        <span className="as-kpi-stat">
                                            <Counter target={120} prefix="+" suffix="%" />
                                        </span>
                                        <span className="as-kpi-desc">ORGANIC CONVERSIONS</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            
                            <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={250}>
                                <div className="as-kpi-card">
                                    <div className="as-kpi-badge">02</div>
                                    <div className="as-kpi-content">
                                        <span className="as-kpi-stat">
                                            <Counter target={45} suffix="%" />
                                        </span>
                                        <span className="as-kpi-desc">LOWER COST PER ACQUISITION</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Center Column - Graphic image */}
                        <div className="as-kpi-col center">
                            <AnimateOnScroll animation="zoomIn" speed="slow" delay={150}>
                                <div className="as-graphic-container">
                                    <img 
                                        className="as-graphic-image" 
                                        src="/case-studies/pioneer/voss-kpi-section.jpg" 
                                        alt="Translucent 3D plates with blue glow"
                                    />
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Right Column KPIs */}
                        <div className="as-kpi-col">
                            <AnimateOnScroll animation="fadeInRight" speed="normal" delay={100}>
                                <div className="as-kpi-card">
                                    <div className="as-kpi-badge">03</div>
                                    <div className="as-kpi-content">
                                        <span className="as-kpi-stat">
                                            #<Counter target={1} />
                                        </span>
                                        <span className="as-kpi-desc">SERP DEFENSE TERMS</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            
                            <AnimateOnScroll animation="fadeInRight" speed="normal" delay={250}>
                                <div className="as-kpi-card">
                                    <div className="as-kpi-badge">04</div>
                                    <div className="as-kpi-content">
                                        <span className="as-kpi-stat">
                                            <Counter target={3} suffix="x" />
                                        </span>
                                        <span className="as-kpi-desc">LEAD VELOCITY INCREASE</span>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 4. Strategic Approach Section */}
            <div className="as-approach-section">
                <div className="hero-container">
                    <div className="as-section-header">
                        <span className="as-label-left">THE STRATEGIC APPROACH</span>
                        <span className="as-label-right">ARMOURED SOLUTIONS</span>
                    </div>
                    
                    <div className="row">
                        {/* Card 1: The Challenge */}
                        <div className="col-lg-4 as-approach-col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={100}>
                                <div className="d-flex flex-column h-100 w-100">
                                    <div className="as-approach-header">
                                        <span className="as-approach-the">THE</span>
                                        <h3 className="as-approach-title">CHALLENGE</h3>
                                    </div>
                                    <div className="as-approach-card">
                                        <p className="as-approach-text">
                                            Entering a highly restricted defense and armoring market with search constraints and confidential client profiles. The existing site functioned as a low-res catalog with zero SEO footprint and no direct lead capturing.
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Card 2: The Strategic Approach */}
                        <div className="col-lg-4 as-approach-col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={250}>
                                <div className="d-flex flex-column h-100 w-100">
                                    <div className="as-approach-header flex-col">
                                        <div className="d-flex align-items-baseline">
                                            <span className="as-approach-the">THE</span>
                                            <h3 className="as-approach-title">STRATEGIC</h3>
                                        </div>
                                        <h3 className="as-approach-title accent-blue">APPROACH</h3>
                                    </div>
                                    <div className="as-approach-card">
                                        <p className="as-approach-text">
                                            Engineered an entity-first SEO architecture targeting global B2B procurement terms. Deployed a high-fidelity editorial portfolio highlighting vehicular ballistic ratings (CEN BR6/BR7) and technical specifications under strict privacy guidelines.
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        
                        {/* Card 3: The Impact */}
                        <div className="col-lg-4 as-approach-col">
                            <AnimateOnScroll animation="fadeInUp" speed="normal" delay={400}>
                                <div className="d-flex flex-column h-100 w-100">
                                    <div className="as-approach-header">
                                        <span className="as-approach-the">THE</span>
                                        <h3 className="as-approach-title">IMPACT</h3>
                                    </div>
                                    <div className="as-approach-card">
                                        <p className="as-approach-text">
                                            Delivered a major lift in high-value global inquiries. Secured category leadership for key defense vehicle queries. Automated CRM routing for immediate tactical request dispatch.
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 5. Capabilities & Banner Section */}
            <div className="as-capabilities-section">
                <div className="hero-container text-center">
                    <AnimateOnScroll animation="fadeInUp" speed="normal" delay={150}>
                        <div className="as-capabilities-text px-3 px-md-5">
                            CAPABILITIES — BRAND REBUILD • TECHNICAL SEO • DEFENSE UX • LEAD VELOCITY • BALLISTIC RATINGS • CUSTOM CRM • SITE MAINTENANCE
                        </div>
                    </AnimateOnScroll>
                </div>
                
                {/* Bottom Banner */}
                <div className="as-bottles-banner"></div>
            </div>
            
            <CaseStudiesSection />
            <NewsletterSection />
        </div>
    );
}

export default ArmouredSolutionsCaseStudyPage;
