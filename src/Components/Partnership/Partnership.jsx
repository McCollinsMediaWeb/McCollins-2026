import React from "react";
import { partnerships } from "../../Data/PartnershipData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PartnershipSection = () => {
    const row1 = partnerships.filter((_, idx) => idx % 2 === 0);
    const row2 = partnerships.filter((_, idx) => idx % 2 !== 0);

    return (
        <div className="section-partner">
            <div className="hero-container">
                <AnimateOnScroll animation="fadeInRight" speed="normal">
                    <div className="card card-partner">
                        <div className="partner-spacer"></div>

                        <div className="row row-cols-lg-2 row-cols-1 align-items-center px-5 position-relative z-2">
                            <div className="col">
                                <div className="d-flex flex-column justify-content-start pe-lg-3 pe-0">
                                    <h3 className="title-heading">Powering Success for Top Brands</h3>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex flex-column ps-lg-3 ps-0">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ligula, varius at rutrum et, finibus sed felis. 
                                        Quisque eget tincidunt lectus. Sed quis diam sed neque mattis feugiat.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="swiperPartner-layout">
                            <div className="swiperPartner-overlay">
                                <div className="spacer"></div>
                            </div>

                            <div className="swiperPartner-container">
                                {/* Row 1 */}
                                <Swiper
                                    modules={[Autoplay]}
                                    slidesPerView={6}
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
                                    <SwiperSlide key={`p1-${partner.id}-${index}`}>
                                        <div className="partner-slide">
                                            <img src={partner.logo} alt="Client" className="partner-logo img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    ))}
                                </Swiper>   

                                {/* Row 2 */}
                                <Swiper
                                    modules={[Autoplay]}
                                    slidesPerView={6}
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
                                    className="swiperPartner mt-3"
                                >
                                    {row2.concat(row2).map((partner, index) => (
                                    <SwiperSlide key={`p2-${partner.id}-${index}`}>
                                        <div className="partner-slide">
                                            <img src={partner.logo} alt="Client" className="partner-logo img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    ))}
                                </Swiper>   
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );
};

export default PartnershipSection;
