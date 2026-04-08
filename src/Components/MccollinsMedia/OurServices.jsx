import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { partnerships } from "../../Data/PartnershipData";

function OurServices() {

    return (
        <>
            <div className="section pt-5">
                <div className="hero-container">
                    <div className="row text-center">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sub-heading justify-content-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Our Services</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <h2 className="title-heading" style={{ marginBottom: "0px", marginTop: "20px" }}>
                                Local resonance
                                <br className="d-none d-md-block" />
                                {` `}Global Performance.
                            </h2>
                        </AnimateOnScroll>
                    </div>


                    <div className="row mt-5 pt-3" >
                        <div className="col-md-7" >
                            <div className="">
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <h3 className="title-heading text-center text-md-start" style={{ WebkitTextFillColor: '#3876fc', marginBottom: '40px' }}>
                                        What We Do Best
                                    </h3>
                                </AnimateOnScroll>

                                <div className="point-arrow-list-wrapper d-none d-md-flex" style={{ gap: '50px' }}>
                                    <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                        <div>
                                            <ul className="point-arrow-list">
                                                <li><h5>Brand Development</h5></li>
                                                <li><h5>Web</h5></li>
                                                <li><h5>Social Media</h5></li>
                                            </ul>
                                        </div>
                                    </AnimateOnScroll>

                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <div>
                                            <ul className="point-arrow-list">
                                                <li><h5>Performance Marketing</h5></li>
                                                <li><h5>Marketing Automation</h5></li>
                                                <li><h5>Content Production</h5></li>
                                            </ul>
                                        </div>
                                    </AnimateOnScroll>
                                </div>

                                <div className="point-arrow-list-wrapper d-flex d-md-none">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <div>
                                            <ul className="point-arrow-list">
                                                <li><h5>Brand Development</h5></li>
                                                <li><h5>Web</h5></li>
                                                <li><h5>Social Media</h5></li>
                                                <li><h5>Performance Marketing</h5></li>
                                                <li><h5>Marketing Automation</h5></li>
                                                <li><h5>Content Production</h5></li>
                                            </ul>
                                        </div>
                                    </AnimateOnScroll>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-5" >
                            {/* <div className="d-flex flex-column">
                                <div className="card-expertise-wrapper text-center text-md-start">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <h3 className="title-heading">
                                            The Best Solutions For Your Business
                                        </h3>
                                    </AnimateOnScroll>
                                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                                        <p style={{ fontWeight: 100, marginTop: '30px' }}>
                                            Boost your online presence with the leading social media agency. Our expert team offers tailored strategies and effective solutions to drive traffic and maximize conversions.
                                        </p>
                                    </AnimateOnScroll>
                                </div>
                            </div> */}
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <img className="img-fluid" src="/assets/images/rounds-shapes.png" />
                            </AnimateOnScroll>
                        </div>
                    </div>

                    {/* <div className="row mt-1">

                    </div> */}




                    <div class="partners-card">
                        <div class="row align-items-center">
                            <div class="col-md-5">
                                <h3 class="text-white mb-2 mt-3">
                                    Powering Success for <br /> Top Brands
                                </h3>
                            </div>

                            <div class="col-md-7">
                                <p className="text-white pt-3 pt-md-0">Proudly serving clients who choose quality and consistency.</p>
                            </div>
                        </div>


                        <div className="swiperPartner-container mt-3">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={5}
                                spaceBetween={20}
                                loop={true}
                                speed={5000} // 👈 higher = slower smooth movement
                                autoplay={{
                                    delay: 0, // 👈 no pause between slides
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    230: { slidesPerView: 3 },
                                    767: { slidesPerView: 4 },
                                    1024: { slidesPerView: 6 },
                                }}
                                className="swiperPartner"
                            >
                                {partnerships.concat(partnerships).map((partner) => (
                                    <SwiperSlide key={partner.id}>
                                        <div className="col-6 col-md">
                                            <img className="img-fluid partner-logo" src={partner.logo} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>


                        {/* <div className="row text-center align-items-center">

                            <div className="col-6 col-md">
                                <img className="img-fluid partner-logo" src="/assets/images/client-1-1.png" />
                            </div>

                            <div className="col-6 col-md">
                                <img className="img-fluid partner-logo" src="/assets/images/client-1-2.png" />
                            </div>

                            <div className="col-6 col-md">
                                <img className="img-fluid partner-logo" src="/assets/images/client-1-3.png" />
                            </div>

                            <div className="col-6 col-md">
                                <img className="img-fluid partner-logo" src="/assets/images/client-1-4.png" />
                            </div>

                            <div className="col-6 col-md">
                                <img className="img-fluid partner-logo" src="/assets/images/client-1-5.png" />
                            </div>

                        </div> */}
                    </div>




                </div >
            </div >

        </>
    );
}

export default OurServices;