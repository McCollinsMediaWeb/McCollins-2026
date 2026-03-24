import React, { useState } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function NewsletterSection({ btnColor = "#3876fc" }) {

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === "") {
            setErrorMessage("This field is required");
            setError(true);
            setSuccess(false);
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage("Invalid email format");
            setError(true);
            setSuccess(false);
            return;
        }

        setSuccess(true);
        setError(false);
        setEmail("");

        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <div className="section">
            <div className="hero-container" style={{ maxWidth: "1380px" }} >
                <div className="newsletter-wrapper">
                    <style>
                        {`
                            .newsletter-wrapper::before{
                                content:none !important;
                                background:none !important;
                            }
                        `}
                    </style>
                    <div className="newsletter-layout" >
                        <style>
                            {`
                                .newsletter-layout{
                                    border:none !important;
                                    background-image:none !important;
                                    text-align:left !important;
                                    align-items: normal !important;
                                }
                                .newsletter-layout::before {
                                    background-image:none !important;
                                }
                            `}
                        </style>
                        {/* <div className="spacer"></div> */}
                        <div className="d-flex flex-column gspace-5 position-relative z-2">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h2 className="title-heading text-align-left">Stay Ahead in Digital Marketing</h2>
                                    <p className="text-align-left" style={{ fontWeight: 100 }}>
                                        Get exclusive insights, trends, and strategies delivered straight to your inbox.
                                        Subscribe now!
                                    </p>
                                </div>
                            </AnimateOnScroll>

                            {success && (
                                <div className="alert success">
                                    <span className="check-icon">
                                        <i className="fa-solid fa-2xl fa-check"></i>
                                    </span>
                                    <p className="text-center">Thank you! Form submitted successfully.</p>
                                </div>
                            )}

                            {error && (
                                <div className="alert error">
                                    <span className="cross-icon">
                                        <i className="fa-solid fa-2xl fa-xmark"></i>
                                    </span>
                                    <p className="text-center">{errorMessage}</p>
                                </div>
                            )}

                            <div className="d-none d-md-block" >
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <form
                                        id="newsletterForm"
                                        onSubmit={handleSubmit}
                                        className="needs-validation"
                                        noValidate
                                        style={{ border: '1px solid #666', width: '100%' }}
                                    >
                                        <div className="input-container">
                                            <input
                                                style={{ padding: '5px 20px 5px 20px' }}
                                                type="email"
                                                name="newsletter-email"
                                                id="newsletter-email"
                                                placeholder="Give your best email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className={error ? "error-border" : ""}
                                                required
                                            />
                                            {error && (
                                                <div className="error-text">{errorMessage}</div>
                                            )}
                                        </div>
                                        <button className="btn btn-primary" type="submit">
                                            <span className="btn-title">
                                                <span>Subscribe</span>
                                            </span>
                                            <span className="icon-circle">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </button>
                                    </form>
                                </AnimateOnScroll>
                            </div>


                            <div className="d-block d-md-none" >
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <form
                                        id="newsletterForm"
                                        onSubmit={handleSubmit}
                                        className="needs-validation"
                                        noValidate
                                        style={{ border: '1px solid #666', width: '100%' }}
                                    >
                                        <div className="input-container">
                                            <input
                                                style={{ padding: '12px 14px', marginBottom: '14px', }}
                                                type="email"
                                                name="newsletter-email"
                                                id="newsletter-email"
                                                placeholder="Give your best email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className={error ? "error-border" : ""}
                                                required
                                            />
                                            {error && (
                                                <div className="error-text">{errorMessage}</div>
                                            )}
                                        </div>
                                        <button className="btn btn-primary" type="submit" style={{ padding: '3px' }}>
                                            <span className="btn-title" style={{ padding: '3px 3px 3px 3px' }}>
                                                <span>Subscribe</span>
                                            </span>
                                            <span className="icon-circle">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </button>
                                    </form>
                                </AnimateOnScroll>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsletterSection;