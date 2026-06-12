// import React, { useState } from "react";
// import "./form.css";

// const ContactFormNew = () => {
//     const [email, setEmail] = useState("");
//     const [company, setCompany] = useState("");
//     const [jobTitle, setJobTitle] = useState("");
//     const [successMessageVisible, setSuccessMessageVisible] = useState(false);
//     const [errorMessageVisible, setErrorMessageVisible] = useState(false);

//     const validateEmail = (email) => {
//         const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         return pattern.test(email);
//     };

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();

//     //     if (!validateEmail(email)) {
//     //         setErrorMessageVisible(true);
//     //         setSuccessMessageVisible(false);
//     //         setTimeout(() => setErrorMessageVisible(false), 3000);
//     //         return;
//     //     }

//     //     setSuccessMessageVisible(true);
//     //     setErrorMessageVisible(false);
//     //     e.target.reset();
//     //     setEmail("");
//     //     setTimeout(() => setSuccessMessageVisible(false), 3000);
//     // };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!validateEmail(email)) {
//             setErrorMessageVisible(true);
//             setSuccessMessageVisible(false);
//             setTimeout(() => setErrorMessageVisible(false), 3000);
//             return;
//         }

//         setLoading(true);

//         try {
//             const form = e.target;

//             const fullName = form["full-name"].value;
//             const phone = form["phone"].value;
//             const jobTitleValue = form["job-title"].value;
//             const message = form["message"].value;

//             const services = Array.from(
//                 form.querySelectorAll('input[name="services"]:checked')
//             ).map(el => el.value).join(", ");

//             const payload = {
//                 firstName: fullName,
//                 email: email,
//                 contact: phone,
//                 services: services,
//                 company: company,
//                 jobTitle: jobTitleValue,
//                 text: message,
//                 page: "Contact Page",
//                 date: new Date(),
//                 source: window.location.pathname
//             };

//             // ✅ 1. NEXT API
//             await fetch("https://your-domain.com/api/form-submit", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(payload)
//             });

//             // ✅ 2. GOOGLE SHEETS
//             const formData = new FormData();
//             formData.append("Firstname", fullName);
//             formData.append("Email", email);
//             formData.append("Phone", phone);
//             formData.append("Company", company);
//             formData.append("Services", services);
//             formData.append("Message", message);

//             fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
//                 method: "POST",
//                 body: formData
//             });

//             // ✅ 3. ZOHO
//             fetch("https://your-domain.com/api/zoho/refresh-token", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     FirstName: fullName,
//                     Email: email,
//                     Phone: phone,
//                     Company: company,
//                     Message: message,
//                     SelectedServices: services,
//                     Page: "Contact Page"
//                 })
//             });

//             // ✅ SUCCESS UI (same as your original)
//             setSuccessMessageVisible(true);
//             setErrorMessageVisible(false);
//             form.reset();
//             setEmail("");

//             setTimeout(() => setSuccessMessageVisible(false), 3000);

//         } catch (err) {
//             console.error(err);
//             setErrorMessageVisible(true);
//             setSuccessMessageVisible(false);
//             setTimeout(() => setErrorMessageVisible(false), 3000);
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="form-layout-wrapper">
//             <div className="card form-layout" style={{ backgroundImage: 'none', backgroundColor: 'var(--contact-card-color)' }}>
//                 <h3 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>Ready to get started?</h3>
//                 <h6 className="" style={{ WebkitTextFillColor: "#8f8f8f" }}>Your email address will not be published. Required fields are marked *</h6>

//                 {successMessageVisible && (
//                     <div id="success-message" className="alert success">
//                         <span className="check-icon">
//                             <i className="fa-solid fa-check"></i>
//                         </span>
//                         <p className="text-center">Thank you! Message sent successfully.</p>
//                     </div>
//                 )}

//                 {errorMessageVisible && (
//                     <div id="error-message" className="alert error">
//                         <span className="cross-icon">
//                             <i className="fa-solid fa-xmark"></i>
//                         </span>
//                         <p className="text-center">Oops! Please enter a valid email.</p>
//                     </div>
//                 )}

//                 <form
//                     onSubmit={handleSubmit}
//                     id="contactForm"
//                     className="form needs-validation"
//                 >
//                     <div className="row row-cols-md-12">
//                         <div className="col">
//                             <input type="text" name="full-name" id="full-name" placeholder="Full Name" />
//                         </div>
//                     </div>

//                     <div className="row row-cols-md-2 row-cols-1 g-3">
//                         <div className="col">
//                             <input
//                                 type="text"
//                                 name="company"
//                                 id="company"
//                                 placeholder="Company"
//                                 value={company}
//                                 onChange={(e) => setCompany(e.target.value)}
//                             />
//                         </div>
//                         <div className="col">
//                             <input type="text" name="job-tite" id="job-title" placeholder="Job Title" />
//                         </div>
//                     </div>

//                     <div className="row row-cols-md-2 row-cols-1 g-3">
//                         <div className="col">
//                             <input type="number" name="phone" id="phone" placeholder="Phone Number" />
//                         </div>
//                         <div className="col">
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 placeholder="Email Address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </div>



//                     <div className="services-group">
//                         <h5 className="services-title">Select Services</h5>

//                         <div className="services-grid">

//                             <label className="service-option">
//                                 <input type="checkbox" name="services" value="Advertising" />
//                                 <span className="checkmark"></span>
//                                 Advertising
//                             </label>

//                             <label className="service-option">
//                                 <input type="checkbox" name="services" value="Film Production" />
//                                 <span className="checkmark"></span>
//                                 Film Production
//                             </label>

//                             <label className="service-option">
//                                 <input type="checkbox" name="services" value="Social Media" />
//                                 <span className="checkmark"></span>
//                                 Social Media
//                             </label>

//                             <label className="service-option">
//                                 <input type="checkbox" name="services" value="Branding" />
//                                 <span className="checkmark"></span>
//                                 Branding
//                             </label>

//                             <label className="service-option">
//                                 <input type="checkbox" name="services" value="Media Buying" />
//                                 <span className="checkmark"></span>
//                                 Media Buying
//                             </label>

//                             <label className="service-option">
//                                 <input type="checkbox" name="services" value="Strategy" />
//                                 <span className="checkmark"></span>
//                                 Strategy
//                             </label>

//                             <label className="service-option">
//                                 <input type="checkbox" name="services" value="Design Services" />
//                                 <span className="checkmark"></span>
//                                 Design Services
//                             </label>

//                             <label className="service-option">
//                                 <input type="checkbox" name="services" value="Web Design" />
//                                 <span className="checkmark"></span>
//                                 Web Design
//                             </label>

//                             <label className="service-option">
//                                 <input type="checkbox" name="services" value="Digital Marketing" />
//                                 <span className="checkmark"></span>
//                                 Digital Marketing
//                             </label>

//                             <label className="service-option">
//                                 <input type="checkbox" name="services" value="SEO" />
//                                 <span className="checkmark"></span>
//                                 SEO
//                             </label>

//                             <label className="service-option">
//                                 <input type="checkbox" name="services" value="Event Marketing" />
//                                 <span className="checkmark"></span>
//                                 Event Marketing
//                             </label>

//                             <label className="service-option">
//                                 <input type="checkbox" name="services" value="Sitecore" />
//                                 <span className="checkmark"></span>
//                                 Sitecore
//                             </label>

//                         </div>
//                     </div>



//                     {/* <textarea name="message" id="message" rows="1" placeholder="How can we help you?"></textarea> */}

//                     <div className="row row-cols-md-12">
//                         <div className="col">
//                             <h5 className="message-title">How can we help you?</h5>
//                             <input type="text" name="message" id="message" />
//                         </div>
//                     </div>

//                     <div className="form-button-container">
//                         <button type="submit" className="btn btn-accent" style={{ backgroundColor: '#3876fc', color: '#fff' }}>
//                             <span className="btn-title">
//                                 <span>Submit Inquiry</span>
//                             </span>
//                             <span className="icon-circle" style={{ backgroundColor: 'black', color: '#fff' }} >
//                                 <i className="fa-solid fa-arrow-right"></i>
//                             </span>
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ContactFormNew;







import React, { useEffect, useRef, useState } from "react";
import "./form.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactFormNew = (props) => {
    const isModal = props.isModal;
    // ── Field state ──────────────────────────────────────────────────────────
    const [firstName, setFirstName] = useState("");
    const [company, setCompany] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [checkedItems, setCheckedItems] = useState([]);
    const checkedItemsString = checkedItems.join(", ");

    const [text, setText] = useState("");

    // ── UI state ─────────────────────────────────────────────────────────────
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null); // { type: "success" | "error", message: string }

    // ── Hidden GCLID input (Zoho / ZC_GAD) ───────────────────────────────────
    const hiddenInputRef = useRef();
    const [hiddenInputValue, setHiddenInputValue] = useState("");

    useEffect(() => {
        setHiddenInputValue(hiddenInputRef.current?.value || "");
    }, []);

    const handleHiddenInputChange = () => {
        setHiddenInputValue(hiddenInputRef.current?.value || "");
    };

    // ── Toast helper ──────────────────────────────────────────────────────────
    const showToast = (type, message) => {
        setToast({ type, message });
        setTimeout(() => setToast(null), 5000);
    };

    // ── Reset ─────────────────────────────────────────────────────────────────
    const resetForm = () => {
        setFirstName("");
        setCompany("");
        setJobTitle("");
        setEmail("");
        setPhone("");
        setCheckedItems([]);
        setText("");
    };

    // ── GTM helper ────────────────────────────────────────────────────────────
    const pushGTMEvent = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "conversion",
            send_to: "AW-10803441186/fOI8CPypnfkYEKLcvZ8o",
            page: window.location.href,
        });
    };

    // ── Checkbox handler ──────────────────────────────────────────────────────
    const handleCheckboxChange = (value) => {
        setCheckedItems((prev) =>
            prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
        );
    };

    // ── Submit ────────────────────────────────────────────────────────────────
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!phone || !isValidPhoneNumber(phone)) {
            showToast("error", "Please enter a valid phone number.");
            return;
        }

        setLoading(true);

        try {
            // ✅ 1. API route
            const nextRes = await fetch("https://mccollins-media.vercel.app/api/form-submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName,
                    company,
                    jobTitle,
                    email,
                    contact: phone,
                    services: checkedItemsString,
                    text,
                    page: props.page || "Contact Page",
                    date: new Date(),
                    source: window.location.pathname,
                }),
            });

            // if (!nextRes.ok) throw new Error(`API error: ${nextRes.status}`);

            // ✅ 2. Google Sheets
            const formData = new FormData();
            formData.append("Firstname", firstName);
            formData.append("Email", email);
            formData.append("Phone", phone);
            formData.append("Company", company);
            formData.append("Services", checkedItemsString);
            formData.append("jobTitle", jobTitle);
            formData.append("Message", text);
            if (props.page) formData.append("page", props.page);

            const sheetsRes = await fetch(
                "https://script.google.com/macros/s/AKfycbxmDwaT4Le95NuEGMeviV3p_ofzhwfqW6w7TDLttjg0N2n0NdkRNHiPYBVt20eI4VgVKg/exec",
                { method: "POST", body: formData }
            );

            if (!sheetsRes.ok) throw new Error(`Sheets error: ${sheetsRes.status}`);

            // ✅ 3. GTM
            pushGTMEvent();

            // ✅ 4. Zoho
            const zohoRes = await fetch("https://mccollins-media.vercel.app/api/zoho/refresh-token", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    FirstName: firstName,
                    Email: email,
                    Phone: phone,
                    Company: company,
                    Message: text,
                    SelectedServices: checkedItemsString,
                    Page: props.page || "Contact Page",
                    gclid: hiddenInputValue,
                }),
            });

            if (!zohoRes.ok) throw new Error(`Zoho error: ${zohoRes.status}`);

            resetForm();
            showToast("success", "Thank you! We'll be in touch soon.");

        } catch (err) {
            console.error("Form submission error:", err);
            showToast("error", "Oops! Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // ── Render ────────────────────────────────────────────────────────────────
    return (
        <div className="form-layout-wrapper">

            {/* ── Toast notification ── */}
            {toast && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "32px",
                        right: "32px",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "16px 24px",
                        borderRadius: "12px",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                        backgroundColor: toast.type === "success" ? "#22c55e" : "#ef4444",
                        color: "#fff",
                        fontSize: "15px",
                        fontWeight: "500",
                        minWidth: "280px",
                        maxWidth: "400px",
                        animation: "slideInToast 0.3s ease",
                    }}
                >
                    <i
                        className={`fa-solid ${toast.type === "success" ? "fa-circle-check" : "fa-circle-xmark"}`}
                        style={{ fontSize: "20px", flexShrink: 0 }}
                    />
                    <span>{toast.message}</span>
                    <button
                        onClick={() => setToast(null)}
                        style={{
                            marginLeft: "auto",
                            background: "none",
                            border: "none",
                            color: "#fff",
                            cursor: "pointer",
                            padding: "0",
                            fontSize: "16px",
                            opacity: 0.8,
                            flexShrink: 0,
                        }}
                    >
                        <i className="fa-solid fa-xmark" />
                    </button>
                </div>
            )}

            {/* ── Slide-in animation ── */}
            <style>{`
                @keyframes slideInToast {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <div
                className="card form-layout"
                style={{ backgroundImage: "none", backgroundColor: "var(--contact-card-color)" }}
            >
                <h3 className="title-heading" style={isModal ? {
                    textAlign: 'center',
                    WebkitTextFillColor: '#ffffff',
                    color: '#ffffff',
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '25px',
                    width: '100%'
                } : { WebkitTextFillColor: "#3876fc" }}>
                    {isModal ? "Request a quotation" : "Ready to get started?"}
                </h3>
                {!isModal && (
                    <h6 style={{ WebkitTextFillColor: "#8f8f8f" }}>
                        Your email address will not be published. Required fields are marked *
                    </h6>
                )}

                <form onSubmit={handleSubmit} id="contactForm" className="form needs-validation">

                    {/* Full Name */}
                    <div className="row row-cols-md-12">
                        <div className="col">
                            {isModal && <label style={{ display: 'block', color: '#fff', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px', textAlign: 'left' }}>First Name<span style={{ color: '#ef4444' }}>*</span></label>}
                            <input
                                type="text"
                                name="full-name"
                                id="full-name"
                                placeholder={isModal ? "First Name" : "Full Name"}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Company + Job Title */}
                    <div className="row row-cols-md-2 row-cols-1 g-3">
                        <div className="col">
                            {isModal && <label style={{ display: 'block', color: '#fff', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px', textAlign: 'left' }}>Company Name<span style={{ color: '#ef4444' }}>*</span></label>}
                            <input
                                type="text"
                                name="company"
                                id="company"
                                placeholder={isModal ? "Company Name" : "Company"}
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col">
                            {isModal && <label style={{ display: 'block', color: '#fff', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px', textAlign: 'left' }}>Job Title<span style={{ color: '#ef4444' }}>*</span></label>}
                            <input
                                type="text"
                                name="job-title"
                                id="job-title"
                                placeholder="Job Title"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Phone + Email */}
                    <div className="row row-cols-md-2 row-cols-1 g-3">
                        <div className="col">
                            {isModal && <label style={{ display: 'block', color: '#fff', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px', textAlign: 'left' }}>Mobile Number<span style={{ color: '#ef4444' }}>*</span></label>}
                            <PhoneInput
                                defaultCountry="AE"
                                value={phone}
                                onChange={setPhone}
                                placeholder="Phone Number"
                                className="phone-input-wrapper"
                            />
                        </div>
                        <div className="col">
                            {isModal && <label style={{ display: 'block', color: '#fff', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px', textAlign: 'left' }}>Email<span style={{ color: '#ef4444' }}>*</span></label>}
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder={isModal ? "Email" : "Email Address"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Services (Area of Interest dropdown for Modal, checkboxes for Main page) */}
                    {isModal ? (
                        <div className="row row-cols-md-12">
                            <div className="col">
                                <label style={{ display: 'block', color: '#fff', fontSize: '12.5px', fontWeight: 600, marginBottom: '6px', textAlign: 'left' }}>Area of Interest<span style={{ color: '#ef4444' }}>*</span></label>
                                <select
                                    name="services"
                                    value={checkedItems[0] || ""}
                                    onChange={(e) => setCheckedItems([e.target.value])}
                                    required
                                >
                                    <option value="" disabled>Select area of interest</option>
                                    {[
                                        "Advertising",
                                        "Film Production",
                                        "Social Media",
                                        "Branding",
                                        "Media Buying",
                                        "Strategy",
                                        "Design Services",
                                        "Web Design / Development",
                                        "Digital Marketing",
                                        "Search Engine Optimization",
                                        "Event Marketing",
                                        "Sitecore",
                                    ].map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ) : (
                        <div className="services-group">
                            <h5 className="services-title">Select Services</h5>
                            <div className="services-grid">
                                {[
                                    "Advertising",
                                    "Film Production",
                                    "Social Media",
                                    "Branding",
                                    "Media Buying",
                                    "Strategy",
                                    "Design Services",
                                    "Web Design / Development",
                                    "Digital Marketing",
                                    "Search Engine Optimization",
                                    "Event Marketing",
                                    "Sitecore",
                                ].map((service) => (
                                    <label key={service} className="service-option">
                                        <input
                                            type="checkbox"
                                            name="services"
                                            value={service}
                                            checked={checkedItems.includes(service)}
                                            onChange={() => handleCheckboxChange(service)}
                                        />
                                        <span className="checkmark"></span>
                                        {service}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Message - only show if NOT modal */}
                    {!isModal && (
                        <div className="row row-cols-md-12">
                            <div className="col">
                                <h5 className="message-title">How can we help you?</h5>
                                <input
                                    type="text"
                                    name="message"
                                    id="message"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {/* Hidden GCLID field for Zoho */}
                    <input
                        type="hidden"
                        id="zc_gad"
                        name="zc_gad"
                        defaultValue={hiddenInputValue}
                        ref={hiddenInputRef}
                        onChange={handleHiddenInputChange}
                    />

                    {/* Submit */}
                    <div className="form-button-container" style={isModal ? { display: 'flex', justifyContent: 'center', marginTop: '20px' } : {}}>
                        <button
                            type="submit"
                            className={isModal ? "btn btn-accent-modal" : "btn btn-accent"}
                            style={isModal ? {
                                background: loading ? "#1a4cf6" : "linear-gradient(135deg, rgb(56, 118, 252) 0%, rgb(26, 76, 246) 100%)",
                                color: "#fff",
                                cursor: loading ? "not-allowed" : "pointer",
                                borderRadius: '50px',
                                padding: '12px 40px',
                                border: 'none',
                                fontSize: '15px',
                                fontWeight: '600',
                                boxShadow: '0 8px 20px rgba(56, 118, 252, 0.3)',
                                transition: 'all 0.3s ease'
                            } : {
                                backgroundColor: loading ? "#6a9bfc" : "#3876fc",
                                color: "#fff",
                                cursor: loading ? "not-allowed" : "pointer",
                            }}
                            disabled={loading}
                        >
                            {isModal ? (
                                <span>{loading ? "Sending..." : "Send Enquiry"}</span>
                            ) : (
                                <>
                                    <span className="btn-title">
                                        <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
                                    </span>
                                    <span className="icon-circle" style={{ backgroundColor: "black", color: "#fff" }}>
                                        {loading
                                            ? <i className="fa-solid fa-spinner fa-spin"></i>
                                            : <i className="fa-solid fa-arrow-right"></i>
                                        }
                                    </span>
                                </>
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ContactFormNew;