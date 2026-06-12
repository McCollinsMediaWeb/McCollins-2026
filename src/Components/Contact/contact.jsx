import React, { useState, useEffect } from "react";
import ContactFormNew from "../Form/ContactFormNew";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import "./contact.css";

const ContactSection = () => {
    // Live Clock State
    const [dubaiTime, setDubaiTime] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    const [copiedEmail, setCopiedEmail] = useState(false);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            // Convert to GST (UTC+4)
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const dubaiOffset = 4;
            const dubaiDate = new Date(utc + (3600000 * dubaiOffset));

            let hours = dubaiDate.getHours();
            const minutes = String(dubaiDate.getMinutes()).padStart(2, '0');
            const seconds = String(dubaiDate.getSeconds()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const displayHours = hours % 12 || 12;

            setDubaiTime(`${displayHours}:${minutes}:${seconds} ${ampm}`);

            // Mon-Fri: Day 1 to 5. Working Hours: 9 AM to 6 PM (9 to 18)
            const day = dubaiDate.getDay();
            const hour = dubaiDate.getHours();
            const isWeekday = day >= 1 && day <= 5;
            const isWorkingHour = hour >= 9 && hour < 18;

            setIsOpen(isWeekday && isWorkingHour);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text).then(() => {
            if (type === "email") {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
            }
        });
    };

    return (
        <div className="section contact-section-wrapper">
            <div className="container" style={{ maxWidth: '1440px' }}>
                <div className="row g-5">
                    {/* Left Column: Premium Interactive Cards */}
                    <div className="col-12 col-lg-5">
                        <AnimateOnScroll animation="fadeInLeft">
                            <div>
                                <div className="sub-heading align-items-center mb-3">
                                    <span className="pulsing-dot-heading"></span>
                                    <span style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12.5px', fontWeight: '700', color: 'var(--accent-color)' }}>
                                        Get In Touch
                                    </span>
                                </div>
                                <h2 className="title-heading" style={{ WebkitTextFillColor: "#fff", color: "#fff", fontSize: "clamp(30px, 3.5vw, 48px)", lineHeight: "1.2", marginBottom: "24px" }}>
                                    Ready to do something <span style={{ color: "var(--accent-color)" }}>big?</span>
                                </h2>
                                <p style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "16px", marginBottom: "40px" }}>
                                    Have an idea, project, or campaign you want to bring to life? Drop us a line, or visit our office in Dubai Media City.
                                </p>

                                <div className="contact-details-flat">
                                    {/* Contact */}
                                    <div className="detail-block">
                                        <h3>Contact</h3>
                                        <h5>Mobile: +971 55 956 4135</h5>
                                        <h5>Email: info@mccollinsmedia.com</h5>
                                    </div>

                                    {/* Our Address */}
                                    <div className="detail-block">
                                        <h3>Our Address</h3>
                                        <h5>G04, Loft Office 2, Entrance C,</h5>
                                        <h5>Dubai Media City, Dubai</h5>
                                    </div>

                                    {/* Office Hours */}
                                    <div className="detail-block">
                                        <h3>Office Hours</h3>
                                        <h5>Monday - Friday (9.00 AM to 6.00 PM)</h5>
                                        <div className="d-flex align-items-center gap-2 mt-2">
                                            <span style={{ fontFamily: 'monospace', fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', letterSpacing: '0.5px' }}>
                                                Dubai Time: {dubaiTime || "--:--:-- --"}
                                            </span>
                                            <span className={`status-indicator-badge ${isOpen ? "open" : "closed"}`} style={{ marginTop: '0', padding: '3px 8px', fontSize: '9px' }}>
                                                <span className="pulsing-status-dot" style={{ width: '6px', height: '6px' }}></span>
                                                {isOpen ? "Open" : "Closed"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Right Column: Premium Glassmorphic Form */}
                    <div className="col-12 col-lg-7">
                        <AnimateOnScroll animation="fadeInRight">
                            <div className="contact-form-glass-card">
                                <div id="success-message" className="alert success hidden">
                                    <span className="check-icon">
                                        <i className="fa-solid fa-2xl fa-check"></i>
                                    </span>
                                    <p>Thank you! Form submitted successfully.</p>
                                </div>
                                <div id="error-message" className="alert error hidden">
                                    <span className="cross-icon">
                                        <i className="fa-solid fa-2xl fa-xmark"></i>
                                    </span>
                                    <p>Oops! Form submission failed. Please try again.</p>
                                </div>
                                <ContactFormNew />
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;