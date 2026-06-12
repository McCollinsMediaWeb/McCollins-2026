import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../Theme/themeswitch";
import { useState, useEffect } from "react";
import ContactFormNew from "../Form/ContactFormNew";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [showContactModal, setShowContactModal] = useState(false);

    const toggleSubmenu = (menu) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu);
    };

    useEffect(() => {
        if (showContactModal) {
            document.body.classList.add("modal-open");
            document.body.style.overflow = "hidden";
        } else {
            document.body.classList.remove("modal-open");
            document.body.style.overflow = "";
        }
        return () => {
            document.body.classList.remove("modal-open");
            document.body.style.overflow = "";
        };
    }, [showContactModal]);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("MenuActive");
        } else {
            document.body.classList.remove("MenuActive");
        }

        return () => {
            document.body.classList.remove("MenuActive");
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const viewportHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            if (scrollTop + viewportHeight >= fullHeight - 5) {
                document.body.classList.add("ScrollInitiated");
            } else {
                document.body.classList.remove("ScrollInitiated");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 100) {
                setIsScrolled(true);
                document.body.classList.add("ScrollActivated");
            } else {
                setIsScrolled(false);
                document.body.classList.remove("ScrollActivated");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.classList.remove("ScrollActivated");
        };
    }, []);

    return (
        <>
            <div className={`FixedHeader ${isScrolled ? "fixed" : ""}`}>
                <div className="container">
                    <div className="HeaderBox">
                        <div className="HeaderBoxFlex">
                            <div className="HeaderBoxLeft">
                                <div
                                    className="HamberMenuIcon"
                                    onClick={() => setMenuOpen(prev => !prev)}
                                >
                                    <div className="HamberMenuLine"></div>
                                    <div className="HamberMenuLine"></div>
                                    <div className="HamberMenuLine"></div>
                                </div>
                            </div>

                            <div className="HeaderBoxMiddle">
                                <a className="navbar-brand" href="/">
                                    <img
                                        src="/assets/images/mcmain.png"
                                        className="site-logo img-fluid"
                                        alt="Logo"
                                    />
                                </a>
                            </div>

                            <div style={{ display: "flex" }}>
                                <div className="navbar-action-button">
                                    <ThemeSwitcher />
                                </div>

                                <div className="HeaderBoxRight">
                                    <a
                                        href="#"
                                        style={{ backgroundColor: "#000" }}
                                        className="CallLink btn btn-accent"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShowContactModal(true);
                                        }}
                                    >
                                        Let's Talk
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`MegaMenu ${menuOpen ? "active" : ""}`}>
                <div className="MegamenuHeader">
                    <div className="container">
                        <div className="HdMenuFlex">
                            <div className="HdMenuLeft">
                                <NavLink
                                    className="navbar-brand"
                                    onClick={() => setMenuOpen(prev => !prev)}
                                >
                                    <img
                                        src="/assets/images/mcmain.png"
                                        className="img-fluid site-logo"
                                        alt="Logo"
                                    />
                                </NavLink>
                            </div>

                            <div className="HdMenuMiddle d-none d-lg-block">
                                <div className="HdT1">Explore Menu</div>
                            </div>

                            <div className="HdMenuRight">
                                <div
                                    className="CloseBtn"
                                    onClick={() => setMenuOpen(prev => !prev)}
                                >
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="MegaMenuMiddle">
                    <div className="container">
                        <div className="MenuItems">
                            <div className="row">

                                {/* Column 1: Core Navigation */}
                                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                    <div className="menu-col-title d-none d-lg-block">Explore</div>
                                    
                                    <div className="LinkItem">
                                        <a
                                            className="MegLnkTp1"
                                            href="/"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Home
                                        </a>
                                    </div>

                                    <div className="LinkItem">
                                        <a
                                            className="MegLnkTp1"
                                            href="/about"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            About Us
                                        </a>
                                    </div>

                                    <div className="LinkItem">
                                        <a
                                            className="MegLnkTp1"
                                            href="/case_studies"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Case Studies
                                        </a>
                                    </div>

                                    <div className="LinkItem">
                                        <a
                                            className="MegLnkTp1"
                                            href="/Testimonial"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Testimonials
                                        </a>
                                    </div>

                                    <div className="LinkItem">
                                        <a
                                            className="MegLnkTp1"
                                            href="/faq"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            FAQs
                                        </a>
                                    </div>

                                    <div className="LinkItem">
                                        <a
                                            className="MegLnkTp1 desk-only"
                                            href="/blog"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Blogs
                                        </a>
                                    </div>

                                    <div className="LinkItem">
                                        <a
                                            className="MegLnkTp1 desk-only"
                                            href="/contact"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Contact
                                        </a>
                                    </div>
                                </div>

                                {/* Column 2: Our Services */}
                                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                    <div className="menu-col-title HasSubmenu">
                                        <a
                                            href="/service"
                                            onClick={() => setMenuOpen(false)}
                                            style={{ color: 'inherit', textDecoration: 'none' }}
                                        >
                                            Services
                                        </a>

                                        {openSubmenu === "services" ? (
                                            <span
                                                className="Minus"
                                                onClick={() => toggleSubmenu("services")}
                                            >
                                                &nbsp;
                                            </span>
                                        ) : (
                                            <span
                                                className="Plus"
                                                onClick={() => toggleSubmenu("services")}
                                            >
                                                &nbsp;
                                            </span>
                                        )}
                                    </div>

                                    <div
                                        className={`SubMenuItems ${openSubmenu === "services" ? "active" : ""
                                            }`}
                                    >
                                        <div className="LinkItem">
                                            <a
                                                className="MegLnkTp1 FontSmall"
                                                href="/service/website-development"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Website Development
                                            </a>
                                        </div>

                                        <div className="LinkItem">
                                            <a
                                                className="MegLnkTp1 FontSmall"
                                                href="/service/social-media-marketing"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Social Media Marketing
                                            </a>
                                        </div>

                                        <div className="LinkItem">
                                            <a
                                                className="MegLnkTp1 FontSmall"
                                                href="/service/marketing-automations"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Marketing Automations
                                            </a>
                                        </div>

                                        <div className="LinkItem">
                                            <a
                                                className="MegLnkTp1 FontSmall"
                                                href="/service/google-ads"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Google Ads
                                            </a>
                                        </div>

                                        <div className="LinkItem">
                                            <a
                                                className="MegLnkTp1 FontSmall"
                                                href="/service/search-engine-optimization"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Search Engine Optimization
                                            </a>
                                        </div>

                                        <div className="LinkItem">
                                            <a
                                                className="MegLnkTp1 FontSmall"
                                                href="/service/content-production"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Film Production
                                            </a>
                                        </div>

                                        <div className="LinkItem">
                                            <a
                                                className="MegLnkTp1 FontSmall"
                                                href="/service/brand-development"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Brand Development
                                            </a>
                                        </div>

                                        <div className="LinkItem">
                                            <a
                                                className="MegLnkTp1 FontSmall"
                                                href="/service/performance-marketing"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Performance Marketing
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 3: Industries */}
                                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                    <div className="menu-col-title HasSubmenu">
                                        <a
                                            href="/industry"
                                            onClick={() => setMenuOpen(false)}
                                            style={{ color: 'inherit', textDecoration: 'none' }}
                                        >
                                            Industries
                                        </a>

                                        {openSubmenu === "industry" ? (
                                            <span
                                                className="Minus"
                                                onClick={() => toggleSubmenu("industry")}
                                            >
                                                &nbsp;
                                            </span>
                                        ) : (
                                            <span
                                                className="Plus"
                                                onClick={() => toggleSubmenu("industry")}
                                            >
                                                &nbsp;
                                            </span>
                                        )}
                                    </div>

                                    <div
                                        className={`SubMenuItems ${openSubmenu === "industry" ? "active" : ""
                                            }`}
                                    >
                                        <div className="LinkItem">
                                            <a
                                                className="MegLnkTp1 FontSmall"
                                                href="/industry/corporate-marketing"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Corporate Marketing
                                            </a>
                                        </div>

                                        <div className="LinkItem">
                                            <a
                                                className="MegLnkTp1 FontSmall"
                                                href="/industry/food-and-beverage"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Food And Beverage
                                            </a>
                                        </div>

                                        <div className="LinkItem">
                                            <a
                                                className="MegLnkTp1 FontSmall"
                                                href="/industry/healthcare-marketing"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Healthcare Marketing
                                            </a>
                                        </div>

                                        <div className="LinkItem">
                                            <a
                                                className="MegLnkTp1 FontSmall"
                                                href="/industry/luxury-marketing"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Luxury Marketing
                                            </a>
                                        </div>

                                        <div className="LinkItem">
                                            <a
                                                className="MegLnkTp1 FontSmall"
                                                href="/industry/technology-marketing"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                Technology Marketing
                                            </a>
                                        </div>
                                    </div>

                                    <div className="LinkItem">
                                        <a
                                            className="MegLnkTp1 mob-only"
                                            href="/blog"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Blogs
                                        </a>
                                    </div>

                                    <div className="LinkItem">
                                        <a
                                            className="MegLnkTp1 mob-only"
                                            href="/contact"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Contact
                                        </a>
                                    </div>
                                </div>

                                {/* Column 4: Featured Promo Panel */}
                                <div className="col-lg-3 col-12 d-none d-lg-block">
                                    <div className="menu-featured-card h-100 d-flex flex-column justify-content-between p-4 rounded-4">
                                        <div>
                                            <span className="badge-featured">Featured Agency</span>
                                            <h4 className="card-heading mt-3 mb-2 text-white" style={{ fontWeight: 600 }}>Let's build something remarkable.</h4>
                                            <p className="card-text text-white-50" style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.4 }}>Transform your brand's digital resonance and scale your impact with McCollins Media.</p>
                                        </div>
                                        <a
                                            href="/contact"
                                            onClick={() => setMenuOpen(false)}
                                            className="btn btn-accent mt-4 align-self-start"
                                            style={{ backgroundColor: 'var(--accent-color)', color: '#fff', border: 'none' }}
                                        >
                                            Get In Touch <i className="fa-solid fa-arrow-right ms-2"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="MegaMenuFooter d-none d-sm-block desk-only">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-md-9 desk-only">
                                <h6 style={{ color: "#fff" }}>
                                    We Do It Right , We Do It Well , We Do It On Time
                                </h6>
                            </div>

                            <div className="col-md-3">
                                <a
                                    className="btn btn-accent"
                                    href="/contact"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <div className="btn-title">
                                        <span>Get Started</span>
                                    </div>

                                    <div className="icon-circle">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {showContactModal && (
                <div className="contact-modal-overlay" onClick={() => setShowContactModal(false)}>
                    <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
                        <button className="contact-modal-close" onClick={() => setShowContactModal(false)}>
                            &times;
                        </button>
                        <ContactFormNew page="Header Modal" />
                    </div>
                </div>
            )}

            <style dangerouslySetInnerHTML={{ __html: `
                .contact-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(0, 0, 0, 0.75);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    z-index: 99999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                    animation: fadeInOverlay 0.3s ease forwards;
                }

                .contact-modal-card {
                    background-color: var(--contact-card-color);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    width: 100%;
                    max-width: 700px;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    padding: 40px;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
                    animation: scaleUpCard 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .contact-modal-close {
                    position: absolute;
                    top: 15px;
                    right: 20px;
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 2rem;
                    cursor: pointer;
                    transition: color 0.2s ease;
                    line-height: 1;
                    z-index: 10;
                }

                .contact-modal-close:hover {
                    color: #3875fd;
                }

                .contact-modal-card .card.form-layout {
                    background-color: transparent !important;
                    border: none !important;
                    box-shadow: none !important;
                    padding: 0 !important;
                }

                @keyframes fadeInOverlay {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes scaleUpCard {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                @media (max-width: 767px) {
                    .contact-modal-card {
                        padding: 30px 20px;
                        border-radius: 16px;
                    }
                }

                @media (min-width: 992px) {
                    .contact-modal-card {
                        overflow: hidden;
                    }
                    .contact-modal-card .card.form-layout {
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    .contact-modal-card .card.form-layout .title-heading {
                        margin-bottom: 4px !important;
                        font-size: 1.6rem !important;
                    }
                    .contact-modal-card .card.form-layout h6 {
                        margin-bottom: 10px !important;
                        font-size: 0.8rem !important;
                    }
                    .contact-modal-card #contactForm .row {
                        margin-bottom: 8px !important;
                    }
                    .contact-modal-card #contactForm input {
                        padding: 6px 0 !important;
                        font-size: 14px !important;
                    }
                    .contact-modal-card #contactForm textarea {
                        padding: 6px 0 !important;
                        min-height: 40px !important;
                        height: 40px !important;
                        font-size: 14px !important;
                    }
                    .contact-modal-card .services-group {
                        margin-top: 4px !important;
                        margin-bottom: 10px !important;
                    }
                    .contact-modal-card .services-title {
                        font-size: 1.05rem !important;
                        margin-bottom: 8px !important;
                        padding-bottom: 6px !important;
                    }
                    .contact-modal-card .services-grid {
                        grid-template-columns: repeat(4, 1fr) !important;
                        gap: 8px 12px !important;
                        margin-top: 8px !important;
                    }
                    .contact-modal-card .service-option {
                        font-size: 12.5px !important;
                        gap: 6px !important;
                    }
                    .contact-modal-card .checkmark {
                        width: 13px !important;
                        height: 13px !important;
                    }
                    .contact-modal-card .message-title {
                        font-size: 1.05rem !important;
                        margin-bottom: 4px !important;
                    }
                    .contact-modal-card #contactForm button[type="submit"] {
                        padding: 8px 20px !important;
                        font-size: 0.78rem !important;
                        margin-top: 4px !important;
                    }
                }
            ` }} />
        </>
    );
}

export default Navbar;