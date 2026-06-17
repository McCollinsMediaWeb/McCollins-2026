import React, { useEffect, useRef, useState } from "react";

const LandingIntroCover = () => {
    const coverRef = useRef(null);
    const contentRef = useRef(null);
    const [animated, setAnimated] = useState(false);

    const fullText = "MCCOLLINS MEDIA";

    useEffect(() => {
        // Trigger animations immediately upon mount
        setAnimated(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const cover = coverRef.current;
            const content = contentRef.current;
            if (!cover || !content) return;

            const scrollTop = window.scrollY || window.pageYOffset || 0;
            const viewportHeight = window.innerHeight || 800;

            // If we are at the top of the page, guarantee full visibility and zero translation
            if (scrollTop <= 0) {
                cover.style.visibility = "visible";
                content.style.transform = "translateY(0px)";
                content.style.opacity = "1";
                return;
            }

            if (scrollTop > viewportHeight) {
                // Scrolled past the intro, hide it to save layout computing resources
                cover.style.visibility = "hidden";
                return;
            } else {
                cover.style.visibility = "visible";
            }

            // Upward parallax translation: content glides up slightly faster than natural scroll
            const translateY = -scrollTop * 0.35;
            
            // Fade out opacity over the first 70% scroll of the cover height (safe from division by zero)
            const fadeDistance = viewportHeight * 0.7;
            let opacity = 1;
            if (fadeDistance > 0) {
                opacity = 1 - (scrollTop / fadeDistance);
            }
            
            // Double check values are valid numbers
            const safeOpacity = isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
            const safeTranslateY = isNaN(translateY) ? 0 : translateY;

            content.style.transform = `translateY(${safeTranslateY}px)`;
            content.style.opacity = safeOpacity;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        
        // Initial setup
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="flexible-content" className="home-hero-landing" ref={coverRef}>
            <div className="hero-landing-content" ref={contentRef}>
                <div className="hero-logo-text-wrapper">
                    <span className={`hero-landing-logo-text mccan-style ${animated ? "start-anim" : ""}`}>
                        {fullText.split("").map((char, index) => {
                            const isSpace = char === " ";
                            return (
                                <span
                                    key={index}
                                    className={`logo-letter ${isSpace ? "space" : ""}`}
                                    style={{
                                        animationDelay: `${0.1 + index * 0.08}s`
                                    }}
                                >
                                    {isSpace ? "\u00A0" : char}
                                </span>
                            );
                        })}
                    </span>
                </div>
                <div className={`hero-tagline ${animated ? "visible" : ""}`}>
                    TRUTH WELL TOLD™
                </div>
            </div>
        </div>
    );
};

export default LandingIntroCover;
