// import React, { useEffect, useRef } from "react";
// import { services } from "../../Data/ServiceData";
// import AnimateOnScroll from "../Hooks/AnimateOnScroll";
// import "./scroll.css";

// const MeetTheTeam = () => {
//     const scrollRef = useRef(null);
//     const progressRef = useRef(null);

//     useEffect(() => {

//         const handleScroll = () => {
//             const el = scrollRef.current;
//             const progress = progressRef.current;

//             const scrollWidth = el.scrollWidth - el.clientWidth;
//             const scrollLeft = el.scrollLeft;

//             const percent = (scrollLeft / scrollWidth) * 100;
//             progress.style.width = percent + "%";
//         };

//         const el = scrollRef.current;
//         el.addEventListener("scroll", handleScroll);

//         return () => el.removeEventListener("scroll", handleScroll);

//     }, []);

//     const cardStyle = {
//         width: "380px",
//         flexShrink: 0,
//     };

//     const imgStyle = {
//         width: "380px",
//         height: "500px",
//         objectFit: "cover",
//         borderRadius: "40px"
//     };

//     return (
//         <>
//             <div className="section pt-5 pb-0" style={{ backgroundColor: '#000' }}>
//                 <div className="hero-container" style={{ maxWidth: 'none' }}>
//                     <div className="d-flex flex-column gspace-3">
//                         <div className="single-service-title-wrapper" style={{ backgroundColor: '#000' }} >
//                             <div className="single-service-title text-center" style={{ backgroundColor: '#000', gap: '5px' }} >
//                                 <AnimateOnScroll animation="fadeInRight" speed="normal">
//                                     <h2 className="title-heading text-center" style={{ WebkitTextFillColor: "#ffffff" }}>
//                                         Meet The Team
//                                     </h2>
//                                 </AnimateOnScroll>
//                                 <AnimateOnScroll animation="fadeInRight" speed="normal">
//                                     <h4 className="title-heading" style={{ WebkitTextFillColor: '#3876fc' }}>
//                                         Meet the Minds Behind Your Digital Success
//                                     </h4>
//                                 </AnimateOnScroll>
//                                 <p style={{ marginTop: '5px', fontWeight: 100 }}>You know our story, but do you know who keeps it alive? Meet our team who take brands to unthinkable heights!</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="pt-5 pb-5">

//                         <div
//                             ref={scrollRef}
//                             className="team-scroll"
//                         >

//                             <div style={{ ...cardStyle, marginLeft: "40px" }} className="d-flex flex-column gspace-1">
//                                 <img src="/assets/images/mk.png" style={imgStyle} />
//                                 <h4 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>
//                                     Meghna Kothari
//                                 </h4>
//                                 <h5 className="title-heading" style={{ WebkitTextFillColor: "#fff" }}>
//                                     Director
//                                 </h5>
//                             </div>

//                             <div style={cardStyle} className="d-flex flex-column gspace-1">
//                                 <img src="/assets/images/manjeet.webp" style={imgStyle} />
//                                 <h4 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>
//                                     Manjeet
//                                 </h4>
//                                 <h5 className="title-heading" style={{ WebkitTextFillColor: "#fff" }}>
//                                     Business Operation Director
//                                 </h5>
//                             </div>

//                             <div style={cardStyle} className="d-flex flex-column gspace-1">
//                                 <img src="/assets/images/as.png" style={imgStyle} />
//                                 <h4 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>
//                                     Ashar
//                                 </h4>
//                                 <h5 className="title-heading" style={{ WebkitTextFillColor: "#fff" }}>
//                                     Studio Lead
//                                 </h5>
//                             </div>

//                             <div style={cardStyle} className="d-flex flex-column gspace-1">
//                                 <img src="/assets/images/manjeet.webp" style={imgStyle} />
//                                 <h4 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>
//                                     George
//                                 </h4>
//                                 <h5 className="title-heading" style={{ WebkitTextFillColor: "#fff" }}>
//                                     Account Manager
//                                 </h5>
//                             </div>

//                             <div style={cardStyle} className="d-flex flex-column gspace-1">
//                                 <img src="/assets/images/manjeet.webp" style={imgStyle} />
//                                 <h4 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>
//                                     Ijas
//                                 </h4>
//                                 <h5 className="title-heading" style={{ WebkitTextFillColor: "#fff" }}>
//                                     Web Lead
//                                 </h5>
//                             </div>

//                         </div>


//                         {/* Custom Scrollbar */}
//                         <div
//                             style={{
//                                 width: "70%",
//                                 height: "2px",
//                                 background: "#cfcfcf",
//                                 marginTop: "35px",
//                                 position: "relative"
//                             }}
//                         >
//                             <div
//                                 ref={progressRef}
//                                 style={{
//                                     height: "2px",
//                                     width: "0%",
//                                     background: "#3876fc",
//                                     transition: "width 0.1s"
//                                 }}
//                             />
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MeetTheTeam;



import React, { useEffect, useRef } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import "./scroll.css";
import { teamData2 } from "../../Data/TeamData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const MeetTheTeam = () => {

    // const scrollRef = useRef(null);
    // const indicatorRef = useRef(null);

    // useEffect(() => {

    //     const handleScroll = () => {
    //         const container = scrollRef.current;
    //         const indicator = indicatorRef.current;

    //         const maxScroll = container.scrollWidth - container.clientWidth;
    //         const scrollLeft = container.scrollLeft;

    //         const trackWidth = indicator.parentElement.offsetWidth;
    //         const indicatorWidth = 50;

    //         const maxMove = trackWidth - indicatorWidth;

    //         const move = (scrollLeft / maxScroll) * maxMove;

    //         indicator.style.transform = `translateX(${move}px)`;
    //     };

    //     const container = scrollRef.current;

    //     container.addEventListener("scroll", handleScroll);

    //     return () => {
    //         container.removeEventListener("scroll", handleScroll);
    //     };

    // }, []);

    // const cardStyle = {
    //     width: "380px",
    //     flexShrink: 0
    // };

    // const imgStyle = {
    //     width: "380px",
    //     height: "500px",
    //     objectFit: "cover",
    //     borderRadius: "40px"
    // };

    // const swiperRef = useRef(null);


    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             const swiper = swiperRef.current?.swiper;

    //             if (!swiper) return;

    //             if (entry.isIntersecting) {
    //                 swiper.autoplay.start(); // ✅ start when visible
    //             } else {
    //                 swiper.autoplay.stop(); // ✅ stop when out of view (optional)
    //             }
    //         },
    //         { threshold: 0.4 } // adjust trigger point
    //     );

    //     if (swiperRef.current) {
    //         observer.observe(swiperRef.current);
    //     }

    //     return () => observer.disconnect();
    // }, []);

    return (
        <>
            <div className="section pt-5 pb-0" style={{ backgroundColor: "var(--background-color)" }}>
                <div className="hero-container">

                    {/* Section Title */}
                    <div className="d-flex flex-column gspace-3">
                        <div className="single-service-title-wrapper">
                            <div className="single-service-title text-center" style={{ gap: "5px" }}>

                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <h2 className="title-heading">
                                        Meet The Team
                                    </h2>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <h4 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>
                                        Meet the Minds Behind Your Digital Success
                                    </h4>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <p style={{ marginTop: "5px", fontWeight: 100 }}>
                                        You know our story, but do you know who keeps it alive?
                                        Meet our team who take brands to unthinkable heights!
                                    </p>
                                </AnimateOnScroll>

                            </div>
                        </div>
                    </div>




                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                        <div className="pt-5 pb-5">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={3}
                                spaceBetween={10}
                                loop={true}
                                speed={7000}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    230: { slidesPerView: 1 },
                                    767: { slidesPerView: 1 },
                                    1024: { slidesPerView: 3 },
                                }}
                                className="swiperPartner"
                            >
                                {teamData2.concat(teamData2).map((member) => (
                                    <SwiperSlide key={member.id}>
                                        <div className="team-card d-flex flex-column gspace-1">
                                            <img src={member.image} alt="" />
                                            <h4 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>
                                                {member.name}
                                            </h4>
                                            <h5 style={{ color: "var(--new-color)", fontWeight: 100 }}>
                                                {member.title}
                                            </h5>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </AnimateOnScroll>



                    {/* Team Section */}
                    {/* <div className="pt-5 pb-5">
                        <div ref={scrollRef} className="team-scroll">
                            <div className="team-card d-flex flex-column gspace-1">
                                <img src="/assets/images/mk.png" alt="" />
                                <h4 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>
                                    Meghna Kothari
                                </h4>
                                <h5 style={{ color: "var(--new-color)", fontWeight: 100 }}>
                                    Director
                                </h5>
                            </div>

                            <div className="team-card d-flex flex-column gspace-1">
                                <img src="/assets/images/manjeet.webp" alt="" />
                                <h4 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>
                                    Manjeet
                                </h4>
                                <h5 style={{ color: "var(--new-color)", fontWeight: 100 }}>
                                    Business Operation Director
                                </h5>
                            </div>

                            <div className="team-card d-flex flex-column gspace-1">
                                <img src="/assets/images/as.png" alt="" />
                                <h4 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>
                                    Ashar
                                </h4>
                                <h5 style={{ color: "var(--new-color)", fontWeight: 100 }}>
                                    Studio Lead
                                </h5>
                            </div>

                            <div className="team-card d-flex flex-column gspace-1">
                                <img src="/assets/images/manjeet.webp" alt="" />
                                <h4 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>
                                    George
                                </h4>
                                <h5 style={{ color: "var(--new-color)", fontWeight: 100 }}>
                                    Account Manager
                                </h5>
                            </div>

                            <div className="team-card d-flex flex-column gspace-1">
                                <img src="/assets/images/manjeet.webp" alt="" />
                                <h4 className="title-heading" style={{ WebkitTextFillColor: "#3876fc" }}>
                                    Ijas
                                </h4>
                                <h5 style={{ color: "var(--new-color)", fontWeight: 100 }}>
                                    Web Lead
                                </h5>
                            </div>
                        </div>


                        <div style={{ width: '80%', margin: '0 auto' }}>
                            <div
                                style={{
                                    width: "100%",
                                    height: "2px",
                                    background: "#cfcfcf",
                                    marginTop: "65px",
                                    position: "relative",
                                    overflow: "hidden"
                                }}
                            >
                                <div
                                    ref={indicatorRef}
                                    style={{
                                        height: "2px",
                                        width: "200px",
                                        background: "#3876fc",
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        transition: "transform 0.1s"
                                    }}
                                />
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    );
};

export default MeetTheTeam;