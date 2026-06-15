import React, { useState, useEffect, useRef } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const SHEETS_URL =
    "https://script.google.com/macros/s/AKfycbxmDwaT4Le95NuEGMeviV3p_ofzhwfqW6w7TDLttjg0N2n0NdkRNHiPYBVt20eI4VgVKg/exec";

function WebDevHero() {
    // ── Field state ──────────────────────────────────────────────────────────
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [lookingFor, setLookingFor] = useState("");
    const [recaptchaChecked, setRecaptchaChecked] = useState(false);

    // ── UI state ─────────────────────────────────────────────────────────────
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null); // { type: "success" | "error", message: string }

    // ── Hidden GCLID input (Zoho / ZC_GAD) ───────────────────────────────────
    const hiddenInputRef = useRef();
    const [hiddenInputValue, setHiddenInputValue] = useState("");

    useEffect(() => {
        setHiddenInputValue(hiddenInputRef.current?.value || "");
    }, []);

    const showToast = (type, message) => {
        setToast({ type, message });
        setTimeout(() => setToast(null), 5000);
    };

    const resetForm = () => {
        setFullName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setLookingFor("");
        setRecaptchaChecked(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!recaptchaChecked) {
            showToast("error", "Please verify that you are not a robot.");
            return;
        }

        if (!phone || !isValidPhoneNumber(phone)) {
            showToast("error", "Please enter a valid phone number.");
            return;
        }

        setLoading(true);

        try {
            // ✅ 1. API Route
            const nextRes = await fetch("https://mccollins-media.vercel.app/api/form-submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: fullName,
                    company: company,
                    jobTitle: "Website Lead",
                    email: email,
                    contact: phone,
                    services: lookingFor,
                    text: `Looking for: ${lookingFor}. Submitted via Web Development Hero.`,
                    page: "Website Development Page",
                    date: new Date(),
                    source: window.location.pathname,
                }),
            });

            // ✅ 2. Google Sheets
            const formData = new FormData();
            formData.append("Firstname", fullName);
            formData.append("Email", email);
            formData.append("Phone", phone);
            formData.append("Company", company);
            formData.append("Services", lookingFor);
            formData.append("jobTitle", "Website Lead");
            formData.append("Message", `Looking for: ${lookingFor}. Submitted via Web Development Hero.`);
            formData.append("page", "Website Development Page");

            const sheetsRes = await fetch(SHEETS_URL, {
                method: "POST",
                body: formData,
            });

            if (!sheetsRes.ok) throw new Error(`Sheets error: ${sheetsRes.status}`);

            // ✅ 3. Zoho Submission
            const zohoRes = await fetch("https://mccollins-media.vercel.app/api/zoho/refresh-token", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    FirstName: fullName,
                    Email: email,
                    Phone: phone,
                    Company: company,
                    Message: `Looking for: ${lookingFor}. Submitted via Web Development Hero.`,
                    SelectedServices: lookingFor,
                    Page: "Website Development Page",
                    gclid: hiddenInputValue,
                }),
            });

            resetForm();
            showToast("success", "Thank you! We will get in touch with you shortly.");

        } catch (err) {
            console.error("Form submission error:", err);
            showToast("error", "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const techStacks = [
        { name: "React Js", iconClass: "fa-brands fa-react" },
        { name: "Wordpress", iconClass: "fa-brands fa-wordpress" },
        { name: "Vue Js", iconClass: "fa-brands fa-vuejs" },
        { name: "Angular Js", iconClass: "fa-brands fa-angular" },
        { name: "Node Js", iconClass: "fa-brands fa-node-js" },
        { name: "Shopify", iconClass: "fa-brands fa-shopify" },
        { name: "Php", iconClass: "fa-brands fa-php" },
    ];

    return (
        <section className="webdev-hero-section">
            {/* Hidden Input for ZC_GAD / Zoho GCLID tracking */}
            <input
                type="hidden"
                id="zc_gad"
                name="zc_gad"
                ref={hiddenInputRef}
                defaultValue=""
            />

            {/* Toast Notification */}
            {toast && (
                <div className="webdev-toast" style={{ backgroundColor: toast.type === "success" ? "#22c55e" : "#ef4444" }}>
                    <i className={`fa-solid ${toast.type === "success" ? "fa-circle-check" : "fa-circle-xmark"}`} />
                    <span>{toast.message}</span>
                    <button onClick={() => setToast(null)} className="webdev-toast-close">
                        <i className="fa-solid fa-xmark" />
                    </button>
                </div>
            )}

            <div className="container webdev-hero-container">
                <div className="row align-items-center">
                    {/* Left Column: Title & Tech Stacks */}
                    <div className="col-lg-7 col-md-12 webdev-hero-content-left">
                        <AnimateOnScroll animation="fadeInLeft" speed="normal">
                            <div>
                                <h1 className="webdev-hero-title">
                                    Crafting Digital Experiences That<br />
                                    Inspire And Transform
                                </h1>
                                <p className="webdev-hero-desc">
                                    Cutting-edge websites designed to engage, captivate, and grow your business—where innovation meets creativity for every industry.
                                </p>

                                <div className="webdev-tech-stack-wrapper">
                                    <div className="webdev-tech-grid">
                                        {techStacks.map((tech) => (
                                            <div key={tech.name} className="webdev-tech-item">
                                                <div className="webdev-tech-icon-box">
                                                    <i className={`${tech.iconClass} webdev-tech-icon`} />
                                                </div>
                                                <span className="webdev-tech-name">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Right Column: Lead Form */}
                    <div className="col-lg-5 col-md-12 mt-lg-0 mt-5 webdev-hero-content-right">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="webdev-form-card">
                                <form onSubmit={handleSubmit} className="webdev-lead-form">
                                    
                                    {/* Full Name */}
                                    <div className="webdev-form-group">
                                        <label className="webdev-form-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="webdev-form-input"
                                            placeholder="Enter your name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="webdev-form-group">
                                        <label className="webdev-form-label">Email</label>
                                        <input
                                            type="email"
                                            className="webdev-form-input"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Phone Number */}
                                    <div className="webdev-form-group">
                                        <label className="webdev-form-label">Phone Number</label>
                                        <PhoneInput
                                            defaultCountry="AE"
                                            value={phone}
                                            onChange={setPhone}
                                            placeholder="050 123 4567"
                                            className="webdev-phone-input"
                                            required
                                        />
                                    </div>

                                    {/* Company */}
                                    <div className="webdev-form-group">
                                        <label className="webdev-form-label">Company</label>
                                        <input
                                            type="text"
                                            className="webdev-form-input"
                                            placeholder="Enter company name"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Looking For Dropdown */}
                                    <div className="webdev-form-group">
                                        <label className="webdev-form-label">Looking For</label>
                                        <div className="webdev-select-wrapper">
                                            <select
                                                className="webdev-form-select"
                                                value={lookingFor}
                                                onChange={(e) => setLookingFor(e.target.value)}
                                                required
                                            >
                                                <option value="" disabled>Looking for ?</option>
                                                <option value="Custom Website Development">Custom Website Development</option>
                                                <option value="E-commerce Website (Shopify/WooCommerce)">E-commerce Website (Shopify/WooCommerce)</option>
                                                <option value="Web Application Development">Web Application Development</option>
                                                <option value="UI/UX Website Design">UI/UX Website Design</option>
                                                <option value="CMS Website (WordPress/Webflow)">CMS Website (WordPress/Webflow)</option>
                                                <option value="Other Services">Other Services</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* reCAPTCHA Mockup */}
                                    <div className="webdev-recaptcha-container">
                                        <div className="webdev-recaptcha-left">
                                            <div className="webdev-checkbox-wrapper">
                                                <input
                                                    type="checkbox"
                                                    id="webdev-recaptcha"
                                                    className="webdev-recaptcha-checkbox"
                                                    checked={recaptchaChecked}
                                                    onChange={(e) => setRecaptchaChecked(e.target.checked)}
                                                />
                                                <label htmlFor="webdev-recaptcha" className="webdev-recaptcha-label">
                                                    I'm not a robot
                                                </label>
                                            </div>
                                        </div>
                                        <div className="webdev-recaptcha-right">
                                            <div className="webdev-recaptcha-brand">
                                                <svg className="webdev-recaptcha-logo" viewBox="0 0 24 24">
                                                    <path fill="#4285F4" d="M12.5,2C8.7,2,5.3,4.1,3.5,7.2L5.8,9.5C7,7.4,9.5,6,12.5,6C16.6,6,20,9.4,20,13.5C20,17.6,16.6,21,12.5,21C9.2,21,6.5,18.8,5.5,15.8L3.2,18.1C4.9,21.7,8.4,24,12.5,24C18.3,24,23,19.3,23,13.5C23,7.7,18.3,2,12.5,2z" />
                                                    <path fill="#0F9D58" d="M12.5,10c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5S14.4,10,12.5,10z" />
                                                </svg>
                                                <span className="webdev-recaptcha-title">reCAPTCHA</span>
                                                <span className="webdev-recaptcha-links">Privacy - Terms</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Get A Quote Button */}
                                    <button
                                        type="submit"
                                        className="webdev-submit-btn"
                                        disabled={loading}
                                    >
                                        {loading ? "Submitting..." : "Get A Quote"}
                                    </button>
                                </form>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WebDevHero;
