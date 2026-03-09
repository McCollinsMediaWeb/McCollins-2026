import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
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
                                    <img src="/assets/images/mcmain.png" alt="Logo" className="site-logo img-fluid" />
                                    </div>
                                    <h4>Elevate Your Brand in the
Digital World.</h4>
                                    <p>
                                    Elevate Your Brand in the
Digital World.Elevate Your Brand in the
Digital World.Elevate Your Brand in the
Digital World.
                                    </p>
                                </div>
                            </div>

                            <div className="col col-lg-2">
                                <div className="footer-quick-links">
                                    <h5>Quick Links</h5>
                                    <ul className="footer-list">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About Us</NavLink></li>
                                        <li><NavLink to="/service">Service</NavLink></li>
                                        <li><NavLink to="/industry">Industry</NavLink></li>
                                        <li><NavLink to="/blog">Blog</NavLink></li>
                                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="col col-lg-3">
                                <div className="footer-services-container">
                                    <h5>Services</h5>
                                    <ul className="footer-list">
                                        <li><NavLink to="/service/website-development">Website Development</NavLink></li>
                                        <li><NavLink to="/service/social-media-marketing">Social Media Marketing</NavLink></li>
                                        <li><NavLink to="/service/marketing-automations">Marketing Automation</NavLink></li>
                                        <li><NavLink to="/service">Google Ads</NavLink></li>
                                        <li><NavLink to="/service">Search Engine Optimization</NavLink></li>
                                        <li><NavLink to="/service/content-production">Film Production</NavLink></li>
                                        <li><NavLink to="/service/brand-development">Brand Development</NavLink></li>
                                        <li><NavLink to="/service/performance-marketing">Perfomance Marketing</NavLink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-contact-container">
                                    <h5>Contact Info</h5>
                                    <ul className="contact-list">
                                        <li>Email: info@mccollinsmedia.com</li>
                                        <li>Phone: +971 55 956 4135</li>
                                        <li>Addresss:
G04, Loft Office 2, Entrance C,
Dubai Media City, Dubai</li>
                                    </ul>
                                    <div className="d-flex flex-column gspace-1">
                                        <h5>Social Media</h5>
                                        <div className="social-container">
                                            <div className="social-item-wrapper">
                                                <a href="https://www.tiktok.com/@mccollinsmedia" className="social-item">
                                                    <i className="fa-brands fa-tiktok"></i>
                                                </a>
                                            </div>
                                            <div className="social-item-wrapper">
                                                <a href="https://www.instagram.com/mccollinsmedia/?hl=en" className="social-item">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </div>
                                            <div className="social-item-wrapper">
                                                <a href="https://www.facebook.com/mccollinsmedia/" className="social-item">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                            </div>
                                            <div className="social-item-wrapper">
                                                <a href="https://www.linkedin.com/company/mccollins-media/" className="social-item">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </div>
                                            <div className="social-item-wrapper">
                                                <a href="https://wa.me/971559564135?text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media" className="social-item">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-content-spacer"></div>
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