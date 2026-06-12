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

                                <div className="contact-cards-grid">
                                    {/* Card 1: Email */}
                                    <div className="contact-glass-card" onClick={() => copyToClipboard("info@mccollinsmedia.com", "email")} style={{ cursor: "pointer" }}>
                                        <div className="contact-card-icon-box">
                                            <i className="fa-regular fa-envelope"></i>
                                        </div>
                                        <div className="contact-card-info">
                                            <div className="contact-card-label">Email Us</div>
                                            <h4 className="contact-card-value">info@mccollinsmedia.com</h4>
                                            <button className="contact-card-action">
                                                <i className={copiedEmail ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
                                                {copiedEmail ? "Copied!" : "Copy Email"}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Card 2: Phone */}
                                    <div className="contact-glass-card">
                                        <div className="contact-card-icon-box">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </div>
                                        <div className="contact-card-info">
                                            <div className="contact-card-label">Call Our Office</div>
                                            <h4 className="contact-card-value">+971 55 956 4135</h4>
                                            <a href="tel:+971559564135" className="contact-card-action">
                                                <i className="fa-solid fa-arrow-right"></i>
                                                Call Now
                                            </a>
                                        </div>
                                    </div>

                                    {/* Card 3: Address */}
                                    <a 
                                        href="https://maps.google.com/?q=Loft+Office+2,+Dubai+Media+City,+Dubai" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="contact-glass-card"
                                    >
                                        <div className="contact-card-icon-box">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="contact-card-info">
                                            <div className="contact-card-label">Visit Us</div>
                                            <h4 className="contact-card-value">
                                                G04, Loft Office 2, Entrance C,<br />
                                                Dubai Media City, Dubai, UAE
                                            </h4>
                                            <span className="contact-card-action">
                                                <i className="fa-solid fa-map"></i>
                                                Get Directions
                                            </span>
                                        </div>
                                    </a>

                                    {/* Card 4: Clock */}
                                    <div className="contact-glass-card">
                                        <div className="contact-card-icon-box">
                                            <i className="fa-regular fa-clock"></i>
                                        </div>
                                        <div className="contact-card-info">
                                            <div className="contact-card-label">Local Dubai Time</div>
                                            <div className="time-display-digital">{dubaiTime || "--:--:-- --"}</div>
                                            <div>
                                                <span className={`status-indicator-badge ${isOpen ? "open" : "closed"}`}>
                                                    <span className="pulsing-status-dot"></span>
                                                    {isOpen ? "Office Open" : "Office Closed"}
                                                </span>
                                            </div>
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