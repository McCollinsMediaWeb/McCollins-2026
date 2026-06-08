// import React, { useState } from "react";
// import AnimateOnScroll from "../Hooks/AnimateOnScroll";

// function NewsletterSection({ btnColor = "#3876fc" }) {

//     const [email, setEmail] = useState("");
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");

//     const validateEmail = (email) => {
//         const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         return pattern.test(email);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (email.trim() === "") {
//             setErrorMessage("This field is required");
//             setError(true);
//             setSuccess(false);
//             return;
//         }

//         if (!validateEmail(email)) {
//             setErrorMessage("Invalid email format");
//             setError(true);
//             setSuccess(false);
//             return;
//         }

//         setSuccess(true);
//         setError(false);
//         setEmail("");

//         setTimeout(() => setSuccess(false), 3000);
//     };

//     return (
//         <div className="section">
//             <div className="hero-container" style={{ maxWidth: "1380px" }} >
//                 <div className="newsletter-wrapper">
//                     <style>
//                         {`
//                             .newsletter-wrapper::before{
//                                 content:none !important;
//                                 background:none !important;
//                             }
//                         `}
//                     </style>
//                     <div className="newsletter-layout" >
//                         <style>
//                             {`
//                                 .newsletter-layout{
//                                     border:none !important;
//                                     background-image:none !important;
//                                     text-align:left !important;
//                                     align-items: normal !important;
//                                 }
//                                 .newsletter-layout::before {
//                                     background-image:none !important;
//                                 }
//                             `}
//                         </style>
//                         {/* <div className="spacer"></div> */}
//                         <div className="d-flex flex-column gspace-5 position-relative z-2">
//                             <AnimateOnScroll animation="fadeInLeft" speed="normal">
//                                 <div className="d-flex flex-column gspace-2">
//                                     <h2 className="title-heading text-align-left">Stay Ahead in Digital Marketing</h2>
//                                     <p className="text-align-left" style={{ fontWeight: 100 }}>
//                                         Get exclusive insights, trends, and strategies delivered straight to your inbox.
//                                         Subscribe now!
//                                     </p>
//                                 </div>
//                             </AnimateOnScroll>

//                             {success && (
//                                 <div className="alert success">
//                                     <span className="check-icon">
//                                         <i className="fa-solid fa-2xl fa-check"></i>
//                                     </span>
//                                     <p className="text-center">Thank you! Form submitted successfully.</p>
//                                 </div>
//                             )}

//                             {error && (
//                                 <div className="alert error">
//                                     <span className="cross-icon">
//                                         <i className="fa-solid fa-2xl fa-xmark"></i>
//                                     </span>
//                                     <p className="text-center">{errorMessage}</p>
//                                 </div>
//                             )}

//                             <div className="d-none d-md-block" >
//                                 <AnimateOnScroll animation="fadeInRight" speed="normal">
//                                     <form
//                                         id="newsletterForm"
//                                         onSubmit={handleSubmit}
//                                         className="needs-validation"
//                                         noValidate
//                                         style={{ border: '1px solid #666', width: '100%' }}
//                                     >
//                                         <div className="input-container">
//                                             <input
//                                                 style={{ padding: '5px 20px 5px 20px' }}
//                                                 type="email"
//                                                 name="newsletter-email"
//                                                 id="newsletter-email"
//                                                 placeholder="Give your best email"
//                                                 value={email}
//                                                 onChange={(e) => setEmail(e.target.value)}
//                                                 className={error ? "error-border" : ""}
//                                                 required
//                                             />
//                                             {error && (
//                                                 <div className="error-text">{errorMessage}</div>
//                                             )}
//                                         </div>
//                                         <button className="btn btn-primary" type="submit">
//                                             <span className="btn-title">
//                                                 <span>Subscribe</span>
//                                             </span>
//                                             <span className="icon-circle">
//                                                 <i className="fa-solid fa-arrow-right"></i>
//                                             </span>
//                                         </button>
//                                     </form>
//                                 </AnimateOnScroll>
//                             </div>


//                             <div className="d-block d-md-none" >
//                                 <AnimateOnScroll animation="fadeInRight" speed="normal">
//                                     <form
//                                         id="newsletterForm"
//                                         onSubmit={handleSubmit}
//                                         className="needs-validation"
//                                         noValidate
//                                         style={{ border: '1px solid #666', width: '100%' }}
//                                     >
//                                         <div className="input-container">
//                                             <input
//                                                 style={{ padding: '12px 14px', marginBottom: '14px', }}
//                                                 type="email"
//                                                 name="newsletter-email"
//                                                 id="newsletter-email"
//                                                 placeholder="Give your best email"
//                                                 value={email}
//                                                 onChange={(e) => setEmail(e.target.value)}
//                                                 className={error ? "error-border" : ""}
//                                                 required
//                                             />
//                                             {error && (
//                                                 <div className="error-text">{errorMessage}</div>
//                                             )}
//                                         </div>
//                                         <button className="btn btn-primary" type="submit" style={{ padding: '3px' }}>
//                                             <span className="btn-title" style={{ padding: '3px 3px 3px 3px' }}>
//                                                 <span>Subscribe</span>
//                                             </span>
//                                             <span className="icon-circle">
//                                                 <i className="fa-solid fa-arrow-right"></i>
//                                             </span>
//                                         </button>
//                                     </form>
//                                 </AnimateOnScroll>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default NewsletterSection;



import React, { useState } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const SHEETS_URL =
    "https://script.google.com/macros/s/AKfycbxW9tElDCU3C6Xhaaxz7UJe9k3REXVkkNeOZSqAeG_WwpEF7PPeuud2w2Bixsk20jpM/exec";

// ✅ Moved OUTSIDE NewsletterSection so it's never redefined on re-render
const FormContent = ({ inputStyle, buttonStyle, btnTitleStyle, email, setEmail, loading, handleSubmit }) => (
    <form
        id="newsletterForm"
        onSubmit={handleSubmit}
        className="needs-validation"
        noValidate
        style={{ border: "1px solid #666", width: "100%" }}
    >
        <div className="input-container">
            <input
                style={inputStyle}
                type="email"
                name="newsletter-email"
                id="newsletter-email"
                placeholder="Give your best email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>
        <button
            className="btn btn-primary"
            type="submit"
            style={buttonStyle}
            disabled={loading}
        >
            <span className="btn-title" style={btnTitleStyle}>
                <span>{loading ? "Subscribing..." : "Subscribe"}</span>
            </span>
            <span className="icon-circle">
                {loading
                    ? <i className="fa-solid fa-spinner fa-spin"></i>
                    : <i className="fa-solid fa-arrow-right"></i>
                }
            </span>
        </button>
    </form>
);

function NewsletterSection({ btnColor = "#3876fc" }) {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null);

    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    };

    const showToast = (type, message) => {
        setToast({ type, message });
        setTimeout(() => setToast(null), 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email.trim() === "") {
            showToast("error", "This field is required.");
            return;
        }

        if (!validateEmail(email)) {
            showToast("error", "Invalid email format.");
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("Email", email);
            formData.append("Source", window.location.pathname);
            formData.append("Date", new Date().toISOString());
            formData.append("page", "Newsletter");

            const sheetsRes = await fetch(SHEETS_URL, {
                method: "POST",
                body: formData,
            });

            if (!sheetsRes.ok) throw new Error(`Sheets error: ${sheetsRes.status}`);

            setEmail("");
            showToast("success", "You're subscribed! Welcome aboard.");

        } catch (err) {
            console.error("Newsletter submit error:", err);
            showToast("error", "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="section">

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

            <style>{`
                @keyframes slideInToast {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <div className="hero-container">
                <div className="newsletter-wrapper">
                    <style>{`
                        .newsletter-wrapper::before {
                            content: none !important;
                            background: none !important;
                        }
                    `}</style>
                    <div className="newsletter-layout">
                        <style>{`
                            .newsletter-layout {
                                border: none !important;
                                background-image: none !important;
                                text-align: left !important;
                                align-items: normal !important;
                            }
                            .newsletter-layout::before {
                                background-image: none !important;
                            }
                        `}</style>

                        <div className="d-flex flex-column gspace-5 position-relative z-2">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h2 className="title-heading text-align-left">
                                        Stay Ahead in Digital Marketing
                                    </h2>
                                    <p className="text-align-left" style={{ fontWeight: 100 }}>
                                        Get exclusive insights, trends, and strategies delivered straight to your inbox.
                                        Subscribe now!
                                    </p>
                                </div>
                            </AnimateOnScroll>

                            {/* Desktop */}
                            <div className="d-none d-md-block">
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <FormContent
                                        inputStyle={{ padding: "5px 20px" }}
                                        buttonStyle={{}}
                                        btnTitleStyle={{}}
                                        email={email}
                                        setEmail={setEmail}
                                        loading={loading}
                                        handleSubmit={handleSubmit}
                                    />
                                </AnimateOnScroll>
                            </div>

                            {/* Mobile */}
                            <div className="d-block d-md-none">
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <FormContent
                                        inputStyle={{ padding: "12px 14px", marginBottom: "14px" }}
                                        buttonStyle={{ padding: "3px" }}
                                        btnTitleStyle={{ padding: "3px" }}
                                        email={email}
                                        setEmail={setEmail}
                                        loading={loading}
                                        handleSubmit={handleSubmit}
                                    />
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