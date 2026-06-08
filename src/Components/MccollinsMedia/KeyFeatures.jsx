import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function KeyFeatures() {

    return (
        <>
            <div className="section" style={{ backgroundColor: 'var(--background-color)' }}>
                <div className="hero-container">
                    <div className="text-center">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <h2 className="title-heading" style={{ marginBottom: '40px' }}>
                                Key Features
                            </h2>
                        </AnimateOnScroll>
                    </div>
                    <div className="row g-4">
                        <AnimateOnScroll animation="fadeInLeft" speed="slow">
                            <div className="col-md-4">
                                <div style={{ backgroundColor: 'var(--feature-card-bg)', padding: '40px 30px', borderRadius: '5px', height: '100%' }} >
                                    <h4 style={{ color: '#3876fc', lineHeight: '35px' }}>Advanced<br /> Attribution Modeling</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>We deploy sophisticated tracking frameworks to provide total transparency on the customer journey, ensuring every dollar is optimized for maximum ROI.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <div className="col-md-4">
                                <div style={{ backgroundColor: 'var(--feature-card-bg)', padding: '40px 30px', borderRadius: '5px', height: '100%' }} >
                                    <h4 style={{ color: '#3876fc', lineHeight: '35px' }}>Algorithmic<br /> Audience Targeting</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>Leveraging deep-tier data insights and AI-driven signals to reach high-value prospects at the exact moment of intent across global platforms.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInLeft" speed="fast">
                            <div className="col-md-4">
                                <div style={{ backgroundColor: 'var(--feature-card-bg)', padding: '40px 30px', borderRadius: '5px', height: '100%' }} >
                                    <h4 style={{ color: '#3876fc', lineHeight: '35px' }}>Continuous<br />Conversion Optimization</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>Our team executes rigorous A/B testing and UX refinements to eliminate friction and accelerate the transition from prospects to loyal customers.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                    <div className="row g-4 mt-1">
                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <div className="col-md-6">
                                <div style={{ backgroundColor: 'var(--feature-card-bg)', padding: '40px 30px', borderRadius: '5px', height: '100%' }} >
                                    <h4 style={{ color: '#3876fc', lineHeight: '35px' }}>Multi-Channel Synergy</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>We architect unified campaigns across Search, Social, and Programmatic networks to ensure a cohesive brand presence that drives consistent sales velocity.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="col-md-6">
                                <div style={{ backgroundColor: 'var(--feature-card-bg)', padding: '40px 30px', borderRadius: '5px', height: '100%' }} >
                                    <h4 style={{ color: '#3876fc', lineHeight: '35px' }}>Scalable Growth Architecture</h4>
                                    <p style={{ fontWeight: 100, marginTop: '18px' }}>We engineer flexible campaigns structures that allow for rapid budget scaling across global markets while maintaining strict cost-per-acquisition (CPA) thresholds.</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>

        </>
    );
}

export default KeyFeatures;