import React, { useState } from "react";
import "./form.css";

const ContactFormNew = () => {
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [errorMessageVisible, setErrorMessageVisible] = useState(false);

    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessageVisible(true);
            setSuccessMessageVisible(false);
            setTimeout(() => setErrorMessageVisible(false), 3000);
            return;
        }

        setSuccessMessageVisible(true);
        setErrorMessageVisible(false);
        e.target.reset();
        setEmail("");
        setTimeout(() => setSuccessMessageVisible(false), 3000);
    };

    return (
        <div className="form-layout-wrapper">
            <div className="card form-layout" style={{ backgroundImage: 'none', backgroundColor: 'var(--contact-card-color)' }}>
                <h3 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>Ready to get started?</h3>
                <h6 className="" style={{ WebkitTextFillColor: "#8f8f8f" }}>Your email address will not be published. Required fields are marked *</h6>

                {successMessageVisible && (
                    <div id="success-message" className="alert success">
                        <span className="check-icon">
                            <i className="fa-solid fa-check"></i>
                        </span>
                        <p className="text-center">Thank you! Message sent successfully.</p>
                    </div>
                )}

                {errorMessageVisible && (
                    <div id="error-message" className="alert error">
                        <span className="cross-icon">
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                        <p className="text-center">Oops! Please enter a valid email.</p>
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    id="contactForm"
                    className="form needs-validation"
                >
                    <div className="row row-cols-md-12">
                        <div className="col">
                            <input type="text" name="full-name" id="full-name" placeholder="Full Name" />
                        </div>
                    </div>

                    <div className="row row-cols-md-2 row-cols-1 g-3">
                        <div className="col">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                placeholder="Company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <input type="text" name="job-tite" id="job-title" placeholder="Job Title" />
                        </div>
                    </div>

                    <div className="row row-cols-md-2 row-cols-1 g-3">
                        <div className="col">
                            <input type="number" name="phone" id="phone" placeholder="Phone Number" />
                        </div>
                        <div className="col">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>



                    <div className="services-group">
                        <h5 className="services-title">Select Services</h5>

                        <div className="services-grid">

                            <label className="service-option">
                                <input type="checkbox" name="services" value="Advertising" />
                                <span className="checkmark"></span>
                                Advertising
                            </label>

                            <label className="service-option">
                                <input type="checkbox" name="services" value="Film Production" />
                                <span className="checkmark"></span>
                                Film Production
                            </label>

                            <label className="service-option">
                                <input type="checkbox" name="services" value="Social Media" />
                                <span className="checkmark"></span>
                                Social Media
                            </label>

                            <label className="service-option">
                                <input type="checkbox" name="services" value="Branding" />
                                <span className="checkmark"></span>
                                Branding
                            </label>

                            <label className="service-option">
                                <input type="checkbox" name="services" value="Media Buying" />
                                <span className="checkmark"></span>
                                Media Buying
                            </label>

                            <label className="service-option">
                                <input type="checkbox" name="services" value="Strategy" />
                                <span className="checkmark"></span>
                                Strategy
                            </label>

                            <label className="service-option">
                                <input type="checkbox" name="services" value="Design Services" />
                                <span className="checkmark"></span>
                                Design Services
                            </label>

                            <label className="service-option">
                                <input type="checkbox" name="services" value="Web Design" />
                                <span className="checkmark"></span>
                                Web Design
                            </label>

                            <label className="service-option">
                                <input type="checkbox" name="services" value="Digital Marketing" />
                                <span className="checkmark"></span>
                                Digital Marketing
                            </label>

                            <label className="service-option">
                                <input type="checkbox" name="services" value="SEO" />
                                <span className="checkmark"></span>
                                SEO
                            </label>

                            <label className="service-option">
                                <input type="checkbox" name="services" value="Event Marketing" />
                                <span className="checkmark"></span>
                                Event Marketing
                            </label>

                            <label className="service-option">
                                <input type="checkbox" name="services" value="Sitecore" />
                                <span className="checkmark"></span>
                                Sitecore
                            </label>

                        </div>
                    </div>



                    {/* <textarea name="message" id="message" rows="1" placeholder="How can we help you?"></textarea> */}

                    <div className="row row-cols-md-12">
                        <div className="col">
                            <h5 className="message-title">How can we help you?</h5>
                            <input type="text" name="message" id="message" />
                        </div>
                    </div>

                    <div className="form-button-container">
                        <button type="submit" className="btn btn-accent" style={{ backgroundColor: '#3876fc', color: '#fff' }}>
                            <span className="btn-title">
                                <span>Submit Inquiry</span>
                            </span>
                            <span className="icon-circle" style={{ backgroundColor: 'black', color: '#fff' }} >
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactFormNew;
