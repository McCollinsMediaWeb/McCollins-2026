import React, { useRef, useEffect, useState } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const CaseStudiesSection = () => {
    const trackRef = useRef(null);
    const isMouseDownRef = useRef(false);
    const [isHovered, setIsHovered] = useState(false);

    const studies = [
        {
            title: "PIONEER",
            subtitle: "Website",
            image: "/case-studies-thumbs/pioneer.jpg",
            link: "/case_studies/pioneer",
            themeClass: "theme-dark-text"
        },
        {
            title: "OAK BERRY",
            subtitle: "Creative Campaign",
            image: "/case-studies-thumbs/oakberry.jpg",
            link: "/case_studies/oakberry",
            themeClass: "theme-dark-text"
        },
        {
            title: "VOSS DUBAI",
            subtitle: "Digital Marketing",
            image: "/case-studies-thumbs/voss.jpg?v=2",
            link: "/case_studies/voss-dubai",
            themeClass: "theme-light-text"
        },
        {
            title: "BETTER LIFE",
            subtitle: "Performance Marketing",
            image: "/case-studies-thumbs/betterlife.jpg",
            link: "/case_studies/better-life",
            themeClass: "theme-dark-text"
        },
        {
            title: "MAPEI",
            subtitle: "Digital Marketing",
            image: "/case-studies-thumbs/mapei.jpg",
            link: "/case_studies/mapei",
            themeClass: "theme-light-text"
        },
        {
            title: "DOORS FREESTYLE GRILL",
            subtitle: "Website",
            image: "/case-studies-thumbs/doors.jpg",
            link: "/case_studies/doors",
            themeClass: "theme-light-text"
        },
        {
            title: "ZILLI DUBAI",
            subtitle: "Luxury Shopify",
            image: "/case-studies-thumbs/zilli-dubai.jpg",
            link: "/case_studies/zilli-dubai",
            themeClass: "theme-light-text"
        },
        {
            title: "CLEANING SUPERSTORE",
            subtitle: "Brand ➔ Scale",
            image: "/case-studies-thumbs/cleaning-superstore.jpg",
            link: "/case_studies/cleaning-superstore",
            themeClass: "theme-light-text"
        },
        {
            title: "ARMOURED SOLUTIONS",
            subtitle: "Brand ➔ Scale",
            image: "/case-studies-thumbs/armoured-solutions.jpg",
            link: "/case_studies/armoured-solutions",
            themeClass: "theme-light-text"
        }
    ];

    // Triple studies for seamless infinite scrolling
    const tripledStudies = [...studies, ...studies, ...studies];

    // Set initial scroll position to start of middle set
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        
        const setInitialScroll = () => {
            const children = track.children;
            if (children.length >= 5) {
                const firstChild = children[0];
                const targetChild = children[5];
                if (firstChild && targetChild) {
                    const singleSetWidth = targetChild.offsetLeft - firstChild.offsetLeft;
                    track.scrollLeft = singleSetWidth;
                }
            }
        };

        const timer = setTimeout(setInitialScroll, 150);
        return () => clearTimeout(timer);
    }, []);

    // Infinite auto-scrolling loop
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let animationFrameId;
        const speed = 0.8; // scroll speed (pixels per frame)

        const animate = () => {
            if (!isMouseDownRef.current && !isHovered) {
                track.scrollLeft += speed;

                const children = track.children;
                if (children.length >= 5) {
                    const firstChild = children[0];
                    const targetChild = children[5];
                    if (firstChild && targetChild) {
                        const singleSetWidth = targetChild.offsetLeft - firstChild.offsetLeft;
                        
                        if (track.scrollLeft >= singleSetWidth * 2) {
                            track.scrollLeft -= singleSetWidth;
                        } else if (track.scrollLeft <= 10) {
                            track.scrollLeft += singleSetWidth;
                        }
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isHovered]);

    // Drag to scroll logic
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let startX;
        let scrollLeft;
        let hasMoved = false;

        const onMouseDown = (e) => {
            isMouseDownRef.current = true;
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
            hasMoved = false;
        };

        const onMouseLeave = () => {
            isMouseDownRef.current = false;
        };

        const onMouseUp = () => {
            isMouseDownRef.current = false;
        };

        const onMouseMove = (e) => {
            if (!isMouseDownRef.current) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.5; // Scroll speed multiplier
            if (Math.abs(walk) > 3) {
                hasMoved = true;
            }
            track.scrollLeft = scrollLeft - walk;
        };

        const onClick = (e) => {
            if (hasMoved) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        track.addEventListener('mousedown', onMouseDown);
        track.addEventListener('mouseleave', onMouseLeave);
        track.addEventListener('mouseup', onMouseUp);
        track.addEventListener('mousemove', onMouseMove);
        track.addEventListener('click', onClick, true);

        return () => {
            track.removeEventListener('mousedown', onMouseDown);
            track.removeEventListener('mouseleave', onMouseLeave);
            track.removeEventListener('mouseup', onMouseUp);
            track.removeEventListener('mousemove', onMouseMove);
            track.removeEventListener('click', onClick, true);
        };
    }, []);

    const handleScrollNext = () => {
        const track = trackRef.current;
        if (!track) return;
        const children = track.children;
        let cardWidth = 340;
        if (children.length > 0) {
            cardWidth = children[0].offsetWidth + 20; // card width + gap
        }
        track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    };

    const handleScrollPrev = () => {
        const track = trackRef.current;
        if (!track) return;
        const children = track.children;
        let cardWidth = 340;
        if (children.length > 0) {
            cardWidth = children[0].offsetWidth + 20;
        }
        track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    };

    return (
        <>
            <div className="section case-studies-section-container">
                <div className="hero-container">
                    {/* Centered Subheading */}
                    <div className="d-flex flex-column justify-content-center text-center mb-4">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <div className="sub-heading align-self-center" style={{ marginBottom: '20px', justifyContent: 'center' }}>
                                <i className="fa-regular fa-circle-dot case-study-dot" style={{ color: '#3876fc' }}></i>
                                <span style={{ fontFamily: 'Delight', textTransform: 'uppercase' }}>Case Study</span>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    <div className="row align-items-start mb-4">
                        <div className="col-md-8">

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="case-studies-heading">
                                    <span className="sans-bold">WITNESS THE IMPACT</span>
                                    <span className="serif-italic"> OF GLOBALLY FLUENT </span>
                                    <span className="sans-bold">Digital Strategies.</span>
                                </h2>
                            </AnimateOnScroll>

                            <div className="mt-4 d-none d-md-block">
                                <a href="/case_studies" className="btn-case-studies-more">
                                    <span>More Case Studies</span>
                                    <div className="btn-icon-circle">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 pt-md-4 mt-md-5">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <p className="case-studies-desc-new">
                                    Witness the transformative impact of strategies engineered for global resonance and measurable market dominance.
                                </p>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div 
                            className="case-studies-track-container position-relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Navigation buttons */}
                            <button 
                                className="case-studies-nav-btn prev-btn" 
                                onClick={handleScrollPrev}
                                aria-label="Previous Case Study"
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>
                            
                            <button 
                                className="case-studies-nav-btn next-btn" 
                                onClick={handleScrollNext}
                                aria-label="Next Case Study"
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
    
                            <div className="case-studies-track" ref={trackRef}>
                                {tripledStudies.map((study, idx) => (
                                    <a 
                                        key={`${idx}-${study.title}`}
                                        href={study.link} 
                                        className={`case-study-card-new ${study.themeClass}`} 
                                        style={{ backgroundImage: `url(${study.image})` }}
                                    >
                                        <div className="card-image-overlay"></div>
                                        <div className="card-content">
                                            <h4 className="card-title">{study.title}</h4>
                                            <p className="card-subtitle">{study.subtitle}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Mobile only button display underneath */}
                    <div className="mt-4 d-block d-md-none text-center">
                        <a href="/case_studies" className="btn-case-studies-more">
                            <span>More Case Studies</span>
                            <div className="btn-icon-circle">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaseStudiesSection;