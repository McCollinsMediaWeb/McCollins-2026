import React, { useState, useEffect, useRef } from "react";
import LogoSvg from "../Logo/LogoSvg";

const Footer = () => {
    const logoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const logo = logoRef.current;
            if (!logo) return;

            const rect = logo.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Start animation when the top of the logo enters the viewport
            // Finish animation after scrolling a comfortable range (e.g. 350px) to make it smooth and slow
            const scrollRange = Math.min(350, viewportHeight * 0.45);
            const entryPoint = viewportHeight;
            const exitPoint = viewportHeight - scrollRange;

            const totalDistance = entryPoint - exitPoint;
            const currentDistance = viewportHeight - rect.top;

            let progress = currentDistance / totalDistance;
            progress = Math.max(0, Math.min(1, progress));

            // Map progress: 0 (not in view / at entry) -> opacity 0.2, scale 0.94, translateY 40px
            // 1 (fully in view / at exit) -> opacity 1.0, scale 1.0, translateY 0px
            const opacity = 0.2 + progress * 0.8;
            const scale = 0.94 + progress * 0.06;
            const translateY = (1 - progress) * 40;

            logo.style.opacity = opacity;
            logo.style.transform = `scale(${scale}) translateY(${translateY}px)`;

            // Staggered letter reveal within the SVG logo (rain drops reveal on scroll)
            const paths = logo.querySelectorAll("path");
            paths.forEach((path, index) => {
                const staggerOffset = index * 0.06;
                let letterProgress = (progress - staggerOffset) / (1 - staggerOffset);
                letterProgress = Math.max(0, Math.min(1, letterProgress));

                // Easing curve (easeOutCubic) for a smooth, natural raindrop fall
                const easeProgress = 1 - Math.pow(1 - letterProgress, 3);

                // Map letterProgress: translateY from -100px (top hidden) to 0px (final resting position)
                const letterY = (1 - easeProgress) * -100;
                const letterOpacity = easeProgress;

                path.style.transform = `translateY(${letterY}px)`;
                path.style.opacity = letterOpacity;
                path.style.transition = "none"; // ensure responsive scroll-scrubbing
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        // Initial trigger
        const timer = setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            clearTimeout(timer);
        };
    }, []);
    // Show more / show less states
    const [quickLinksShowMore, setQuickLinksShowMore] = useState(false);
    const [servicesShowMore, setServicesShowMore] = useState(false);

    // Mobile collapse states
    const [quickLinksOpen, setQuickLinksOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    // Links data
    const allQuickLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Service", path: "/service" },
        { name: "Case Study", path: "/case_studies" },
        { name: "Industry", path: "/industry" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" }
    ];

    const allServices = [
        { name: "Website Development", path: "/service/website-development" },
        { name: "Social Media Marketing", path: "/service/social-media-marketing" },
        { name: "Marketing Automation", path: "/service/marketing-automations" },
        { name: "Google Ads", path: "/service/google-ads" },
        { name: "Search Engine Optimization", path: "/service/search-engine-optimization" },
        { name: "Film Production", path: "/service/content-production" },
        { name: "Brand Development", path: "/service/brand-development" },
        { name: "Performance Marketing", path: "/service/performance-marketing" }
    ];

    // Determine what to display
    const displayedQuickLinks = quickLinksShowMore ? allQuickLinks : allQuickLinks.slice(0, 4);
    const displayedServices = servicesShowMore ? allServices : allServices.slice(0, 4);

    return (
        <div className="section-footer">
            <div className="bg-footer-wrapper">
                <div className="bg-footer" style={{ overflow: "hidden" }}>
                    <div className="hero-container position-relative z-2">
                        <div className="d-flex flex-column gspace-2">
                            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                                
                                {/* Column 1: Quick Links */}
                                <div className="col col-lg-2">
                                    <div className={`footer-quick-links footer-collapse-section ${quickLinksOpen ? 'is-open' : ''}`}>
                                        <h6 className="footer-heading" onClick={() => setQuickLinksOpen(!quickLinksOpen)}>
                                            Quick Links
                                            <span className="footer-toggle-icon">
                                                {quickLinksOpen ? '−' : '+'}
                                            </span>
                                        </h6>
                                        <ul className="footer-list">
                                            {displayedQuickLinks.map((link) => (
                                                <li key={link.name}>
                                                    <a href={link.path}>{link.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                        <button 
                                            className="footer-show-more-btn"
                                            onClick={() => setQuickLinksShowMore(!quickLinksShowMore)}
                                        >
                                            <span>{quickLinksShowMore ? "Show less" : "Show more"}</span>
                                            <i className={`fa-solid ${quickLinksShowMore ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                        </button>
                                    </div>
                                </div>

                                {/* Column 2: Services */}
                                <div className="col col-lg-3">
                                    <div className={`footer-services-container footer-collapse-section ${servicesOpen ? 'is-open' : ''}`}>
                                        <h6 className="footer-heading" onClick={() => setServicesOpen(!servicesOpen)}>
                                            Services
                                            <span className="footer-toggle-icon">
                                                {servicesOpen ? '−' : '+'}
                                            </span>
                                        </h6>
                                        <ul className="footer-list">
                                            {displayedServices.map((service) => (
                                                <li key={service.name}>
                                                    <a href={service.path}>{service.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                        <button 
                                            className="footer-show-more-btn"
                                            onClick={() => setServicesShowMore(!servicesShowMore)}
                                        >
                                            <span>{servicesShowMore ? "Show less" : "Show more"}</span>
                                            <i className={`fa-solid ${servicesShowMore ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                        </button>
                                    </div>
                                </div>

                                {/* Column 3: Contact Info */}
                                <div className="col col-lg-3">
                                    <div className="footer-contact-container">
                                        <h6 className="footer-heading">Contact Info</h6>
                                        <ul className="footer-list footer-contact-list">
                                            <li>
                                                <a href="tel:+971559564135">
                                                    <i className="fa-solid fa-phone footer-contact-icon"></i>
                                                    <span><strong>Phone:</strong><br /> +971 55 956 4135</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:info@mccollinsmedia.com">
                                                    <i className="fa-solid fa-envelope footer-contact-icon"></i>
                                                    <span><strong>Email:</strong><br /> info@mccollinsmedia.com</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://maps.app.goo.gl/Q73FPL2WiPaVaofQ8" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-solid fa-location-dot footer-contact-icon"></i>
                                                    <span><strong>Address:</strong><br />
                                                        G04, Loft Office 2, Entrance C,<br />
                                                        Dubai Media City, Dubai
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Column 4: Right Side CTA & Socials */}
                                <div className="col col-lg-4">
                                    <div className="footer-cta-container">
                                        <div className="d-flex justify-content-between align-items-start gap-3">
                                            <h4 className="footer-cta-text">
                                                Ready to start your next<br /> digital experience?
                                            </h4>
                                            <button 
                                                className="footer-scroll-top"
                                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                aria-label="Scroll to top"
                                            >
                                                <i className="fa-solid fa-arrow-up"></i>
                                            </button>
                                        </div>
                                        
                                        <div className="mt-3">
                                            <a href="/contact" className="btn-get-in-touch">
                                                <span className="btn-white-dot"></span>
                                                <span>GET IN TOUCH</span>
                                            </a>
                                        </div>

                                        <div className="social-container-new mt-4">
                                            <a href="https://www.instagram.com/mccollinsmedia/?hl=en" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="Instagram">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/company/mccollins-media/" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="LinkedIn">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </a>
                                            <a href="https://www.tiktok.com/@mccollinsmedia" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="TikTok">
                                                <i className="fa-brands fa-tiktok"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="footer-content-spacer" style={{ height: '30px' }}></div>
                        </div>

                        {/* Divider Line */}
                        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)', width: '100%', marginBottom: '25px' }} />

                        <div className="copyright-container mt-0" style={{ border: 'none', paddingTop: '0px' }}>
                            <span className="copyright" style={{ textTransform: 'uppercase' }}>© 2026 ALL RIGHTS RESERVED McCOLLINS MEDIA</span>
                            <div className="d-flex flex-row gspace-2">
                                <a href="/privacy-policy" className="legal-link">PRIVACY POLICY</a>
                            </div>
                        </div>

                        <div className="footer-spacer"></div>

                        {/* Giant Brand Text */}
                        <div className="footer-brand-name-wrapper">
                            <LogoSvg 
                                ref={logoRef}
                                className="footer-brand-logo-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;