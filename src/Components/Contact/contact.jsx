// import React from "react";
// import ContactForm from "../Form/ContactForm";

// const ContactSection = () => {
//     return (
//         <div className="section">
//             <div className="hero-container">
//                 <div className="row row-cols-lg-2 row-cols-1 g-5">
//                     <div className="col col-lg-5">
//                         <div className="contact-title-wrapper">
//                             <div className="card contact-title">
//                                 <div className="sub-heading">
//                                     <i className="fa-regular fa-circle-dot"></i>
//                                     <span>Reach out to us</span>
//                                 </div>
//                                 <h2 className="title-heading">Get in Touch</h2>
//                                 <p>
//                                     Reach out to us for tailored digital solutions that drive results sollicitudin nec.
//                                 </p>
//                                 <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
//                                     <div>
//                                         <div className="icon-wrapper">
//                                             <div className="icon-box">
//                                                 <i className="fa-solid fa-phone-volume accent-color"></i>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="d-grid">
//                                         <span>Phone Number</span>
//                                         <h5>+1 (62) 987 7543</h5>
//                                     </div>
//                                 </div>
//                                 <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
//                                     <div>
//                                         <div className="icon-wrapper">
//                                             <div className="icon-box">
//                                                 <i className="fa-solid fa-envelope accent-color"></i>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="d-grid">
//                                         <span>Email Address</span>
//                                         <h5>hello@markoagency.com</h5>
//                                     </div>
//                                 </div>
//                                 <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
//                                     <div>
//                                         <div className="icon-wrapper">
//                                             <div className="icon-box">
//                                                 <i className="fa-solid fa-location-dot accent-color"></i>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="d-grid">
//                                         <span>Office Address</span>
//                                         <h5>Marko HQ - 902 Digital Lane, San Francisco, CA 94110, USA</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col col-lg-7">
//                         <div id="success-message" className="alert success hidden">
//                             <span className="check-icon">
//                                 <i className="fa-solid fa-2xl fa-check"></i>
//                             </span>
//                             <p>Thank you! Form submitted successfully.</p>
//                         </div>
//                         <div id="error-message" className="alert error hidden">
//                             <span className="cross-icon">
//                                 <i className="fa-solid fa-2xl fa-xmark"></i>
//                             </span>
//                             <p>Oops! Form submission failed. Please try again.</p>
//                         </div>
//                         <ContactForm />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactSection;





// import React from "react";
// import ContactForm from "../Form/ContactForm";
// import "./contact.css";

// const ContactSection = () => {
//     return (
//         <div className="section">
//             <div className="hero-container" style={{ maxWidth: '1480px' }}>
//                 <div className="row row-cols-lg-2 row-cols-1 g-5">
//                     <div className="col col-lg-12">
//                         <div className="contact-title-wrapper">
//                             <style>
//                                 {`
//                                     .contact-no-bg::before{
//                                         content: none !important;
//                                         background: none !important;
//                                     }
//                                     .contact-title-wrapper::before {
//                                         background: none !important;
//                                         content: none !important;
//                                     }
//                                 `}
//                             </style>
//                             <div className="card contact-title contact-no-bg" style={{ textAlign: 'center', border: 'none', backgroundImage: 'none' }} >
//                                 <div className="sub-heading" style={{ justifyContent: 'center' }}>
//                                     <i className="fa-regular fa-circle-dot"></i>
//                                     <span>Contact Us</span>
//                                 </div>
//                                 <h2 className="title-heading" style={{ WebkitTextFillColor: 'white' }}>Ready To Do Something Big?</h2>
//                                 {/* <p>
//                                     Reach out to us for tailored digital solutions that drive results sollicitudin nec.
//                                 </p> */}


//                                 <div className="row text-center text-md-start">

//                                     <div className="col-12 col-md-4">
//                                         <div className="d-flex flex-column flex-md-row align-items-center gspace-2">

//                                             <div className="d-grid">
//                                                 <span style={{ fontSize: 'var(--font-size-8xl)', color: '#3876fc' }} >Contact</span>
//                                                 <h6 className="mt-3">Mobile: +971 55 956 4135</h6>
//                                                 <h6>Email: info@mccollinsmedia.com</h6>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-12 col-md-4">
//                                         <div className="d-flex flex-column flex-md-row align-items-center gspace-2">

//                                             <div className="d-grid">
//                                                 <span style={{ fontSize: 'var(--font-size-8xl)', color: '#3876fc' }} >Our Address</span>
//                                                 <h6 className="mt-3">G04, Loft Office 2, Entrance C, <br />Dubai Media City, Dubai</h6>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-12 col-md-4">
//                                         <div className="d-flex flex-column flex-md-row align-items-center gspace-2">

//                                             <div className="d-grid">
//                                                 <span style={{ fontSize: 'var(--font-size-8xl)', color: '#3876fc' }} >Office Hours</span>
//                                                 <h6 className="mt-3">Monday - Friday</h6>
//                                                 <h6>9.00 AM to 6.00 PM</h6>
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <div className="col col-lg-7">
//                         <div id="success-message" className="alert success hidden">
//                             <span className="check-icon">
//                                 <i className="fa-solid fa-2xl fa-check"></i>
//                             </span>
//                             <p>Thank you! Form submitted successfully.</p>
//                         </div>
//                         <div id="error-message" className="alert error hidden">
//                             <span className="cross-icon">
//                                 <i className="fa-solid fa-2xl fa-xmark"></i>
//                             </span>
//                             <p>Oops! Form submission failed. Please try again.</p>
//                         </div>
//                         <ContactForm />
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactSection;




import React from "react";
import ContactFormNew from "../Form/ContactFormNew";
import "./contact.css";

const ContactSection = () => {
    return (
        <div className="section">
            <div className="hero-container" style={{ maxWidth: "1380px" }}>
                <div className="row row-cols-lg-2 row-cols-1 g-5">
                    <div className="col col-lg-12">

                        <div className="contact-title-wrapper">

                            {/* Remove theme background shapes */}
                            <style>
                                {`
                                    .contact-title-wrapper::before{
                                        content:none !important;
                                        background:none !important;
                                    }
                                `}
                            </style>

                            <div
                                className="card contact-title"
                                style={{
                                    textAlign: "center",
                                    border: "none",
                                    backgroundImage: "none",
                                }}
                            >
                                {/* Heading */}
                                <div className="sub-heading justify-content-center">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Contact Us</span>
                                </div>

                                <h2
                                    className="title-heading"
                                    style={{ marginBottom: '10px' }}
                                >
                                    Ready To Do Something Big?
                                </h2>

                                {/* CONTACT DETAILS */}
                                {/* <div className="row align-items-stretch text-center text-md-start contact-row">

                                    <div className="col-12 col-md-4 contact-item">
                                        <div className="d-flex flex-column align-items-center align-items-md-start">
                                            <span style={{ fontSize: 'var(--font-size-8xl)', color: '#3876fc' }} >Contact</span>
                                            <h5 className="mt-3">Mobile: +971 55 956 4135</h5>
                                            <h5>Email: info@mccollinsmedia.com</h5>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 contact-item">
                                        <div className="d-flex flex-column align-items-center align-items-md-start">
                                            <span style={{ fontSize: 'var(--font-size-8xl)', color: '#3876fc' }} >Our Address</span>
                                            <h5 className="mt-3">
                                                G04, Loft Office 2, Entrance C,
                                                <br />
                                                Dubai Media City, Dubai
                                            </h5>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 contact-item">
                                        <div className="d-flex flex-column align-items-center align-items-md-start">
                                            <span style={{ fontSize: 'var(--font-size-8xl)', color: '#3876fc' }} >Office Hours</span>
                                            <h5 className="mt-3">Monday - Friday</h5>
                                            <h5>9.00 AM to 6.00 PM</h5>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="custom-contact-row">
                                    <div className="">
                                        <div className="d-flex flex-column align-items-center align-items-md-start">
                                            <span style={{ fontSize: 'var(--font-size-8xl)', color: '#3876fc' }} >Contact</span>
                                            <h5>Mobile: +971 55 956 4135</h5>
                                            <h5>Email: info@mccollinsmedia.com</h5>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="d-flex flex-column align-items-center align-items-md-start">
                                            <span style={{ fontSize: 'var(--font-size-8xl)', color: '#3876fc' }} >Our Address</span>
                                            <h5 className="mt-3">G04, Loft Office 2, Entrance C,</h5>
                                            <h5>Dubai Media City, Dubai</h5>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="d-flex flex-column align-items-center align-items-md-start">
                                            <span style={{ fontSize: 'var(--font-size-8xl)', color: '#3876fc' }} >Office Hours</span>
                                            <h5 className="mt-3">Monday - Friday</h5>
                                            <h5>9.00 AM to 6.00 PM</h5>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>




                {/* FORM */}
                <div className="col col-lg-12">
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
            </div>
        </div>
    );
};

export default ContactSection;