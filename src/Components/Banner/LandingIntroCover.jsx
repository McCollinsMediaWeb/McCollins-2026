import React, { useEffect, useRef, useState } from "react";

const LandingIntroCover = () => {
    const coverRef = useRef(null);
    const contentRef = useRef(null);
    
    const [visibleCount, setVisibleCount] = useState(0);
    const [typingComplete, setTypingComplete] = useState(false);

    const fullText = "McCOLLINS MEDIA";
    const typingSpeed = 75; // speed of typing (ms)

    useEffect(() => {
        let timer;
        const startDelay = 400; // delay before typing starts

        const startTyping = () => {
            let currentCount = 0;
            const type = () => {
                if (currentCount < fullText.length) {
                    currentCount++;
                    setVisibleCount(currentCount);
                    timer = setTimeout(type, typingSpeed);
                } else {
                    setTypingComplete(true);
                }
            };
            type();
        };

        const delayTimer = setTimeout(startTyping, startDelay);

        return () => {
            clearTimeout(delayTimer);
            clearTimeout(timer);
        };
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
                    <span className="hero-landing-logo-text">
                        {visibleCount === 0 && !typingComplete && (
                            <span className="typing-cursor-initial">|</span>
                        )}
                        {fullText.split("").map((char, index) => {
                            const isSpace = char === " ";
                            const isVisible = index < visibleCount;
                            const showCursorHere = index === visibleCount - 1 && !typingComplete;
                            
                            return (
                                <span 
                                    key={index} 
                                    className="typing-char-wrapper"
                                    style={{ position: 'relative', display: 'inline-block' }}
                                >
                                    <span className={`typing-char ${isVisible ? "visible" : ""} ${isSpace ? "space" : ""}`}>
                                        {isSpace ? "\u00A0" : char}
                                    </span>
                                    {showCursorHere && (
                                        <span className="typing-cursor-absolute">|</span>
                                    )}
                                </span>
                            );
                        })}
                    </span>
                </div>
                <div className={`hero-tagline ${typingComplete ? "visible" : ""}`}>
                    TRUTH WELL TOLD™
                </div>
            </div>
        </div>
    );
};

export default LandingIntroCover;
