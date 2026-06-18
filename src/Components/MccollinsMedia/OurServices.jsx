import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";
import TextReveal from "../Hooks/TextReveal";
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
                    <div className="d-flex flex-column justify-content-center text-center mb-4">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <div className="sub-heading align-self-center" style={{ marginBottom: '20px', justifyContent: 'center' }}>
                                <i className="fa-regular fa-circle-dot" style={{ color: '#3876fc' }}></i>
                                <span style={{ fontFamily: 'Delight', textTransform: 'uppercase' }}>Our Services</span>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-8 text-start">

                            <TextReveal>
                                <h2 className="our-services-title">
                                    <span className="sans-bold">LOCAL RESONANCE GLOBAL&nbsp;<span className="serif-italic">Performance</span></span>
                                </h2>
                            </TextReveal>

                            <div className="mt-5 pt-3">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <h3 className="text-start sans-bold" style={{ color: '#3876fc', WebkitTextFillColor: '#3876fc', background: 'none', WebkitBackgroundClip: 'initial', marginBottom: '40px', fontSize: '1.8rem', letterSpacing: '0.5px' }}>
                                        WHAT WE DO BEST
                                    </h3>
                                </AnimateOnScroll>

                                <div className="point-arrow-list-wrapper d-none d-md-flex" style={{ gap: '60px', justifyContent: 'space-between' }}>
                                    <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                        <div>
                                            <ul className="point-arrow-list">
                                                <li>Brand Development</li>
                                                <li>Web Development</li>
                                            </ul>
                                        </div>
                                    </AnimateOnScroll>

                                    <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={150}>
                                        <div>
                                            <ul className="point-arrow-list">
                                                <li>Performance Marketing</li>
                                                <li>Social Media</li>
                                            </ul>
                                        </div>
                                    </AnimateOnScroll>

                                    <AnimateOnScroll animation="fadeInLeft" speed="normal" delay={300}>
                                        <div>
                                            <ul className="point-arrow-list">
                                                <li>Marketing Automation</li>
                                                <li>Content Production</li>
                                            </ul>
                                        </div>
                                    </AnimateOnScroll>
                                </div>

                                <div className="point-arrow-list-wrapper d-flex d-md-none">
                                    <AnimateOnScroll animation="fadeInRight" speed="normal">
                                        <div>
                                            <ul className="point-arrow-list">
                                                <li>Brand Development</li>
                                                <li>Web Development</li>
                                                <li>Social Media</li>
                                                <li>Performance Marketing</li>
                                                <li>Marketing Automation</li>
                                                <li>Content Production</li>
                                            </ul>
                                        </div>
                                    </AnimateOnScroll>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 text-center mt-4 mt-md-0">
                            <AnimateOnScroll animation="fadeInRight" speed="normal" delay={200}>
                                <img 
                                    className="img-fluid flower-animated" 
                                    src="/flower.png" 
                                    alt="Flower Shape"
                                    style={{ maxHeight: '300px', objectFit: 'contain' }}
                                />
                            </AnimateOnScroll>
                        </div>
                    </div>

                    {/* <div className="row mt-1">

                    </div> */}




                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="partners-card">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <h3 className="text-white mb-2 mt-3">
                                       <span className="sans-bold">Powering Success for</span> <span className="serif-italic"
                                       >Top Brands</span> 
                                    </h3>
                                </div>

                                <div className="col-md-7 text-right">
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
                    </AnimateOnScroll>




                </div >
            </div >

        </>
    );
}

export default OurServices;