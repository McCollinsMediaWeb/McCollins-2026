import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { partnerships } from "../../Data/PartnershipData";

function OurServices() {

    const row1 = partnerships.filter((_, idx) => idx % 2 === 0);
    const row2 = partnerships.filter((_, idx) => idx % 2 !== 0);

    return (
        <>
            <div className="section pt-5">
                <div className="hero-container">
                    <div className="row align-items-center">
                        <div className="col-md-8 text-start">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="sub-heading" style={{ marginBottom: '20px', justifyContent: 'center' }}>
                                    <i className="fa-regular fa-circle-dot" style={{ color: '#3876fc' }}></i>
                                    <span style={{ fontFamily: 'Delight', textTransform: 'uppercase' }}>Our Services</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <h2 className="our-services-title">
                                    <span className="sans-bold">LOCAL RESONANCE GLOBAL</span>
                                    <br />
                                    <span className="serif-italic">Performance</span>
                                </h2>
                            </AnimateOnScroll>

                            <div className="mt-5 pt-3">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <h3 className="title-heading text-start sans-bold" style={{ WebkitTextFillColor: '#3876fc', marginBottom: '40px', fontSize: '1.8rem', letterSpacing: '0.5px' }}>
                                        WHAT WE DO BEST
                                    </h3>
                                </AnimateOnScroll>

                                <div className="point-arrow-list-wrapper d-none d-md-flex" style={{ gap: '60px', justifyContent: 'space-between' }}>
                                    <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                        <div>
                                            <ul className="point-arrow-list">
                                                <li><h5>Brand Development</h5></li>
                                                <li><h5>Web</h5></li>
                                            </ul>
                                        </div>
                                    </AnimateOnScroll>

                                    <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={150}>
                                        <div>
                                            <ul className="point-arrow-list">
                                                <li><h5>Performance Marketing</h5></li>
                                                <li><h5>Social Media</h5></li>
                                            </ul>
                                        </div>
                                    </AnimateOnScroll>

                                    <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={300}>
                                        <div>
                                            <ul className="point-arrow-list">
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

                        <div className="col-md-4 text-center mt-4 mt-md-0">
                            <img 
                                className="img-fluid flower-animated" 
                                src="/flower.png" 
                                alt="Flower Shape"
                                style={{ maxHeight: '300px', objectFit: 'contain' }}
                            />
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


                        {/* Row 1 Slider */}
                        <div className="swiperPartner-container mt-3">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={5}
                                spaceBetween={20}
                                loop={true}
                                speed={6000}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    230: { slidesPerView: 3, spaceBetween: 8 },
                                    767: { slidesPerView: 4, spaceBetween: 12 },
                                    1024: { slidesPerView: 6, spaceBetween: 20 },
                                }}
                                className="swiperPartner"
                            >
                                {row1.concat(row1).map((partner, index) => (
                                    <SwiperSlide key={`row1-${partner.id}-${index}`}>
                                        <div className="col-6 col-md">
                                            <img className="img-fluid partner-logo" src={partner.logo} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Row 2 Slider */}
                        <div className="swiperPartner-container mt-3">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={5}
                                spaceBetween={20}
                                loop={true}
                                speed={6500}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                    reverseDirection: true,
                                }}
                                breakpoints={{
                                    230: { slidesPerView: 3, spaceBetween: 8 },
                                    767: { slidesPerView: 4, spaceBetween: 12 },
                                    1024: { slidesPerView: 6, spaceBetween: 20 },
                                }}
                                className="swiperPartner"
                            >
                                {row2.concat(row2).map((partner, index) => (
                                    <SwiperSlide key={`row2-${partner.id}-${index}`}>
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