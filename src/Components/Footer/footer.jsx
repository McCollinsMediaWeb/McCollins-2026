import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    const [quickLinksOpen, setQuickLinksOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <div className="section-footer">
            <div className="bg-footer-wrapper">
                <div className="bg-footer">
                    <div className="hero-container position-relative z-2">
                        <div className="d-flex flex-column gspace-2">
                            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                                <div className="col col-lg-4">
                                    <div className="footer-logo-container">
                                        <div className="logo-container-footer">
                                            <img src="https://res.cloudinary.com/dje8fshak/image/upload/v1773638564/mcmain_re91gd.png" alt="Logo" className="site-logo img-fluid" />
                                        </div>
                                        <h5 className="footer-tagline">Elevate Your Brand in the<br /> Digital World.</h5>

                                        <div className="d-flex flex-column gspace-1">
                                            <div className="social-container">
                                                <div className="social-item-wrapper">
                                                    <a href="https://www.tiktok.com/@mccollinsmedia" className="social-item social-tiktok" aria-label="TikTok">
                                                        <i className="fa-brands fa-tiktok"></i>
                                                    </a>
                                                </div>
                                                <div className="social-item-wrapper">
                                                    <a href="https://www.instagram.com/mccollinsmedia/?hl=en" className="social-item social-instagram" aria-label="Instagram">
                                                        <i className="fa-brands fa-instagram"></i>
                                                    </a>
                                                </div>
                                                <div className="social-item-wrapper">
                                                    <a href="https://www.facebook.com/mccollinsmedia/" className="social-item social-facebook" aria-label="Facebook">
                                                        <i className="fa-brands fa-facebook"></i>
                                                    </a>
                                                </div>
                                                <div className="social-item-wrapper">
                                                    <a href="https://www.linkedin.com/company/mccollins-media/" className="social-item social-linkedin" aria-label="LinkedIn">
                                                        <i className="fa-brands fa-linkedin"></i>
                                                    </a>
                                                </div>
                                                <div className="social-item-wrapper">
                                                    <a href="https://wa.me/971559564135?text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media" className="social-item social-whatsapp" aria-label="WhatsApp">
                                                        <i className="fa-brands fa-whatsapp"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col col-lg-2">
                                    <div className={`footer-quick-links footer-collapse-section ${quickLinksOpen ? 'is-open' : ''}`}>
                                        <h6 className="footer-heading" onClick={() => setQuickLinksOpen(!quickLinksOpen)}>
                                            Quick Links
                                            <span className="footer-toggle-icon">
                                                {quickLinksOpen ? '−' : '+'}
                                            </span>
                                        </h6>
                                        <ul className="footer-list">
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/about">About</a></li>
                                            <li><a href="/service">Service</a></li>
                                            <li><a href="/industry">Industry</a></li>
                                            <li><a href="/blog">Blog</a></li>
                                            <li><a href="/case_studies">Case Study</a></li>
                                            <li><a href="/contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col col-lg-3">
                                    <div className={`footer-services-container footer-collapse-section ${servicesOpen ? 'is-open' : ''}`}>
                                        <h6 className="footer-heading" onClick={() => setServicesOpen(!servicesOpen)}>
                                            Services
                                            <span className="footer-toggle-icon">
                                                {servicesOpen ? '−' : '+'}
                                            </span>
                                        </h6>
                                        <ul className="footer-list">
                                            <li><a href="/service/website-development">Website Development</a></li>
                                            <li><a href="/service/social-media-marketing">Social Media Marketing</a></li>
                                            <li><a href="/service/marketing-automations">Marketing Automation</a></li>
                                            <li><a href="/service/google-ads">Google Ads</a></li>
                                            <li><a href="/service/search-engine-optimization">Search Engine Optimization</a></li>
                                            <li><a href="/service/content-production">Film Production</a></li>
                                            <li><a href="/service/brand-development">Brand Development</a></li>
                                            <li><a href="/service/performance-marketing">Performance Marketing</a></li>
                                        </ul>
                                    </div>
                                </div>

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
                            </div>

                            <div className="footer-content-spacer" style={{ height: '30px' }}></div>
                        </div>

                        <div className="copyright-container">
                            <span className="copyright">© 2026 All Rights Reserved McCollins Media</span>
                            <div className="d-flex flex-row gspace-2">
                                <a href="#" className="legal-link">Terms of Service</a>
                                <a href="#" className="legal-link">Privacy Policy</a>
                            </div>
                        </div>

                        <div className="footer-spacer"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;