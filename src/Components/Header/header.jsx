import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../Theme/themeswitch";
import { useState, useEffect } from "react";
import ContactFormNew from "../Form/ContactFormNew";
import LogoSvg from "../Logo/LogoSvg";

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
                                    <LogoSvg className="site-logo img-fluid" />
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
                                    <LogoSvg className="img-fluid site-logo" />
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
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <ContactFormNew page="Header Modal" isModal={true} />
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
                    background-color: #000000 !important;
                    border: none !important;
                    border-radius: 24px;
                    width: 100%;
                    max-width: 650px;
                    max-height: 95vh;
                    overflow-y: auto;
                    position: relative;
                    padding: 40px;
                    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
                    animation: scaleUpCard 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .contact-modal-close {
                    position: absolute;
                    top: 20px;
                    right: 25px;
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 1.6rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    line-height: 1;
                    z-index: 1000;
                }

                .contact-modal-close:hover {
                    color: var(--accent-color);
                    transform: scale(1.1);
                }

                /* Disable Form layout gradients and borders inside modal */
                .contact-modal-card .form-layout-wrapper::before {
                    content: none !important;
                    background: none !important;
                    display: none !important;
                }
                .contact-modal-card .form-layout-wrapper {
                    background: transparent !important;
                    border: none !important;
                    padding: 0 !important;
                }
                .contact-modal-card .card.form-layout {
                    background: transparent !important;
                    background-image: none !important;
                    border: none !important;
                    box-shadow: none !important;
                    padding: 0 !important;
                }

                /* Black Inputs with White Border-Bottom style overrides */
                .contact-modal-card #contactForm input[type="text"],
                .contact-modal-card #contactForm input[type="email"],
                .contact-modal-card #contactForm select {
                    background-color: #000000 !important;
                    color: #ffffff !important;
                    border: none !important;
                    border-bottom: 1px solid #ffffff !important;
                    border-radius: 0px !important;
                    padding: 10px 0px !important;
                    font-size: 14px !important;
                    width: 100% !important;
                    box-shadow: none !important;
                    outline: none !important;
                    margin-top: 4px !important;
                    height: 42px !important;
                }

                .contact-modal-card #contactForm select option {
                    background-color: #000000 !important;
                    color: #ffffff !important;
                }

                .contact-modal-card #contactForm input::placeholder {
                    color: rgba(255, 255, 255, 0.6) !important;
                    font-size: 14px !important;
                }

                /* Phone Input wrapper styling to match black inputs */
                .contact-modal-card .phone-input-wrapper {
                    display: flex;
                    align-items: center;
                    background-color: #000000 !important;
                    border: none !important;
                    border-bottom: 1px solid #ffffff !important;
                    border-radius: 0px !important;
                    padding: 0px !important;
                    margin-top: 4px !important;
                    height: 42px !important;
                    width: 100% !important;
                }

                .contact-modal-card .phone-input-wrapper input {
                    background-color: transparent !important;
                    color: #ffffff !important;
                    border: none !important;
                    font-size: 14px !important;
                    padding: 8px 0 !important;
                    width: 100% !important;
                    outline: none !important;
                    height: auto !important;
                }

                .contact-modal-card .phone-input-wrapper .PhoneInputCountry {
                    margin-right: 8px !important;
                }

                .contact-modal-card .phone-input-wrapper .PhoneInputCountrySelect {
                    color: #ffffff !important;
                    background-color: #000000 !important;
                }

                .contact-modal-card .phone-input-wrapper .PhoneInputCountrySelect option {
                    background-color: #000000 !important;
                    color: #ffffff !important;
                }

                /* Fix spacing */
                .contact-modal-card #contactForm .row {
                    margin-bottom: 12px !important;
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
                        margin-bottom: 20px !important;
                        font-size: 1.8rem !important;
                    }
                    .contact-modal-card #contactForm .row {
                        margin-bottom: 12px !important;
                    }
                }
            ` }} />
        </>
    );
}

export default Navbar;