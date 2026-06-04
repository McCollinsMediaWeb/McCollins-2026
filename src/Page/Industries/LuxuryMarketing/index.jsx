import React, { useEffect, useState } from "react";
import HeadTitle from "../../../Components/Head/HeadTitle";
import InnerNew from "../../../Components/Banner/InnerNew";
import HeaderLayoutDynamic from "../../../Components/MccollinsMedia/HeaderLayoutDynamic";
import NewsletterSection from "../../../Components/Form/Newsletter";
import AnimateOnScroll from "../../../Components/Hooks/AnimateOnScroll";

function LuxuryMarketing() {

    return (
        <div style={{ backgroundColor: 'var(--background-color)' }} >
            <HeadTitle title="Luxury Marketing - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/film-production-banner.jpg" mobileImage="/assets/images/film-production-banner-mobile.jpg" title="Luxury Marketing" title2="" title3="" />
            {/* <HeaderLayoutDynamic /> */}




            <div className="section HdLayt1 pb-0">
                <div className="container">
                    <div className="expertise-title">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Expertise</span>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="row">
                                <div className="col-md-4">
                                    <h3 className="title-heading" >
                                        Get A Best Luxury<br /> Marketing Plan
                                    </h3>
                                </div>
                                <div className="col-md-8" style={{ display: "flex", alignItems: 'end' }}>
                                    <p style={{ fontWeight: 100 }}>
                                        There's a reason why luxury brands don't advertise like the other brands in the world. Unlike those brands, they cater to a niche audience that only buys from them.
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>



            <div className="section pt-0 pt-md-5">
                <div className="hero-container">
                    <div className="row gx-5">

                        <div className="col-md-7" >
                            <div className="">
                                <div className="">
                                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                                        <img
                                            src="/assets/images/luxury-marketing-1.png"
                                            alt="Expertise Image"
                                            className="img-fluid rounded"
                                        />
                                    </AnimateOnScroll>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 mt-4 mt-md-5" >
                            <div className="expertise-title" style={{ width: '100%' }}>
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <p style={{ fontWeight: 100 }} >
                                        They are not necessarily looking for more customers to engage with them. Marketing for luxurious brands is that, luxury. They want to inspire passion and proudness in people. Through their interaction with you, they want you to physically manifest the luxury shown by them.
                                    </p>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <p className="mt-0 mt-md-3" style={{ fontWeight: 100 }} >
                                        After having worked with luxury brands like Mercedes Benz, YSL, and Lootah Perfumes, McCollins has had the pleasure of working with some of the finest luxury brands
                                    </p>
                                </AnimateOnScroll>

                                <div>
                                    <a href="/contact" className="btn btn-primary" style={{ maxWidth: 'fit-content' }}>

                                        <div className="btn-title">
                                            <span>Schedule a Meeting Today</span>
                                        </div>

                                        <div className="icon-circle" style={{ backgroundColor: '#000' }}>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>

                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div className="section pt-2 pt-md-5" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
                <div className="container">
                    <div className="GridBoxWrap">
                        <div className="GridBoxes">
                            <div className="GridBox">
                                <div className="row gx-5">
                                    <div className="col-md-6 d-block d-md-none">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/luxury-marketing-2.png" />
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="col-md-6 mt-4 mt-md-0">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Content Marketing & Lead Generation</h5>
                                                <p style={{ fontWeight: 100 }}><span style={{ fontWeight: 900 }}>Influencer marketing:</span> Of course, influencer marketing can be used to its exhaustion when it comes to luxury brands. Since these people have followings in the thousands and millions, their words will be taken seriously.</p>
                                                <p className="mt-4" style={{ fontWeight: 100 }}><span style={{ fontWeight: 900 }}>Video marketing:</span> Around 85% of people in the world view videos on their devices on a monthly basis. And what better way to get through to these people than with videos that are just as luxurious as the brand?</p>
                                                <p className="mt-4" style={{ fontWeight: 100 }}><span style={{ fontWeight: 900 }}>SEO:</span> You need to have a presence on search engine results pages (SERPs) for relevant keywords and topics related to your brand and industry and improve your rankings as much as possible.</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="col-md-6 d-none d-md-block">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/luxury-marketing-2.png" />
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="section pt-2 pt-md-5 pb-0">
                <div className="container">
                    <div className="GridBoxWrap">
                        <div className="GridBoxes">
                            <div className="GridBox mb-0 mb-md-5">
                                <div className="row gx-5">
                                    <div className="col-md-7">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/luxury-marketing-3.png" />
                                            </div>
                                        </AnimateOnScroll>

                                    </div>
                                    <div className="col-md-5 mt-4 mt-md-0">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Website Design and Development</h5>
                                                <p style={{ fontWeight: 100 }}>Just like the brand, the website will also have to be classy, quality-oriented and luxurious. The best way to achieve this is through undertaking design ideas that are minimalist and modern. The website can also have a slideshow of the brand’s products to lure in customers. At the same time, it also has to be kept in mind that the website has to be eye-catching and professional.</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>

                                </div>
                            </div>

                            <div className="GridBox pt-3 pt-md-5 mt-0">
                                <div className="row gx-5">
                                    <div className="col-md-7 d-block d-md-none">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/luxury-marketing-4.png" />
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="col-md-5 mt-4 mt-md-0">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Social Media Marketing</h5>
                                                <p style={{ fontWeight: 100 }}>There’s nothing like a luxury brand’s heritage and the story behind it. Using this story for social media marketing is a tactic that increases customer loyalty. As a luxury brand, your online presence has to be classy and unique. Having a presence that is mind-blowing will make people want to follow you even if they can’t afford your products.</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="col-md-7 d-none d-md-block">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/luxury-marketing-4.png" />
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <NewsletterSection btnColor="#e02f47" />
        </div>
    );
}

export default LuxuryMarketing;