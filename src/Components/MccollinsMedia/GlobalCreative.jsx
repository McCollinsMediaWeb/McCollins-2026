import React from "react";
import { services } from "../../Data/ServiceData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const GlobalCreative = () => {
    return (
        <>
            <div className="section pt-5 pb-5 mb-5" style={{ backgroundColor: 'var(--background-color)' }}>
                <div className="hero-container">
                    <div className="d-flex flex-column gspace-5">
                        {/* <div className="single-service-spacer"></div> */}
                        <div className="single-service-title-wrapper" >
                            <div className="single-service-title" >
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <h2 className="title-heading text-center">
                                        Where Strategic Precision Meets<br /> Global Creative Excellence.
                                    </h2>
                                </AnimateOnScroll>
                            </div>

                            <div className="row pt-5" >
                                <div className="col-md-8" style={{ paddingRight: '0px', paddingLeft: '0px' }}>
                                    <img
                                        src="/assets/images/abt1.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                        style={{ height: '400px', borderRadius: '0px' }}
                                    />
                                </div>
                                {/* <div className="col-md-4 d-flex flex-column justify-content-center" style={{ paddingRight: '0px', paddingLeft: '40px' }}> */}
                                <div className="col-md-4 d-flex flex-column justify-content-center ps-md-5 pt-3 pt-md-0">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Mastering Ecosystems. Delivering Results.
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ fontWeight: 500, color: 'var(--new-color)', marginTop: '15px' }} >Managing the digital ecosystem for your brand with a result</p>
                                    <p style={{ fontWeight: 100 }}>From Digital Media Buying, Campaign Development, Blogger Outreach Programs to Content Development, we do it all in-house.</p>
                                </div>
                            </div>


                            <div className="row d-none d-md-flex" >
                                <div className="col-md-8 d-flex flex-column justify-content-center" style={{ paddingRight: '40px', paddingLeft: '0px' }}>
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Web. Apps. Commerce.
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ fontWeight: 500, color: 'var(--new-color)', marginTop: '15px' }} >Be it a mobile application, website or an e-commerce platform,</p>
                                    <p style={{ fontWeight: 100 }}>we create a product for your brand from the scratch. Create an exclusive product for your brand which can build a database over time!</p>
                                </div>
                                <div className="col-md-4" style={{ paddingRight: '0px', paddingLeft: '0px' }}>
                                    <img
                                        src="/assets/images/abt2.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                        style={{ height: '400px', borderRadius: '0px' }}
                                    />
                                </div>
                            </div>

                            <div className="row d-flex d-md-none">
                                <div className="col-md-8" style={{ paddingRight: '0px', paddingLeft: '0px' }}>
                                    <img
                                        src="/assets/images/abt2.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                        style={{ height: '400px', borderRadius: '0px' }}
                                    />
                                </div>
                                {/* <div className="col-md-4 d-flex flex-column justify-content-center" style={{ paddingRight: '0px', paddingLeft: '40px' }}> */}
                                <div className="col-md-4 d-flex flex-column justify-content-center ps-md-5 pt-3 pt-md-0">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Web. Apps. Commerce.
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ fontWeight: 500, color: 'var(--new-color)', marginTop: '15px' }} >Be it a mobile application, website or an e-commerce platform,</p>
                                    <p style={{ fontWeight: 100 }}>we create a product for your brand from the scratch. Create an exclusive product for your brand which can build a database over time!</p>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-md-8" style={{ paddingRight: '0px', paddingLeft: '0px' }}>
                                    <img
                                        src="/assets/images/abt3.jpg"
                                        alt="Service Image"
                                        className="single-service-img"
                                        style={{ height: '400px', borderRadius: '0px' }}
                                    />
                                </div>
                                {/* <div className="col-md-4 d-flex flex-column justify-content-center" style={{ paddingRight: '0px', paddingLeft: '40px' }}> */}
                                <div className="col-md-4 d-flex flex-column justify-content-center ps-md-5 pt-3 pt-md-0">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
                                            Precision Lead<br /> Generation.
                                        </h4>
                                    </AnimateOnScroll>
                                    <p style={{ fontWeight: 500, color: 'var(--new-color)', marginTop: '15px' }} >Implement performance based marketing, ensure lead generation</p>
                                    <p style={{ fontWeight: 100 }}>call to action to your website or mobile application. Get the phone ringing or increase the CTR for your campaigns. Get in touch now.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlobalCreative;