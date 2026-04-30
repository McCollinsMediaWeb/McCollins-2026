import React, { useEffect, useState } from "react";
import HeadTitle from "../../../Components/Head/HeadTitle";
import InnerNew from "../../../Components/Banner/InnerNew";
import HeaderLayoutDynamic from "../../../Components/MccollinsMedia/HeaderLayoutDynamic";
import NewsletterSection from "../../../Components/Form/Newsletter";
import AnimateOnScroll from "../../../Components/Hooks/AnimateOnScroll";

function FoodAndBeverage() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <div style={{ backgroundColor: 'var(--background-color)' }} >
            <HeadTitle title="Food & Beverage - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/film-production-banner.jpg" mobileImage="/assets/images/film-production-banner-mobile.jpg" title="Food and Beverage" title2="" title3="" />
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
                                <div className="col-md-7">
                                    <h3 className="title-heading" >
                                        Deliciously Bold Marketing<br /> for Food & Beverage Visionaries.
                                    </h3>
                                </div>
                                <div className="col-md-5 mt-3 mt-md-0" style={{ display: "flex", alignItems: 'end' }}>
                                    <p style={{ fontWeight: 100 }}>
                                        The food and beverage industry has been booming in recent years. While the target market for this industry changes from brand to brand, the strategies used are more or less the same.
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>


            <div className="section">
                <div className="hero-container">
                    <div className="row gx-5">

                        <div className="col-md-6" >
                            <div className="">
                                <div className="">
                                    <div className="d-flex flex-column">
                                        <img
                                            src="/assets/images/food-and-beverage-1.png"
                                            alt="Expertise Image"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-3 mt-md-0" >
                            <div className="expertise-title" style={{ width: '100%' }}>
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <h3 className="title-heading" style={{ marginBottom: '10px' }}>
                                        One Of The Most Famous And In-Demand Industries In The World,
                                    </h3>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <p style={{ fontWeight: 100 }} >
                                        The food and beverage industry has been booming in recent years. While the target market for this industry changes from brand to brand, the strategies used are more or less the same. These strategies are made while keeping in mind that they have to interact, attract, and assure customers about the goodness of the brands.
                                    </p>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <p className="mt-0 mt-md-3" style={{ fontWeight: 100 }} >
                                        As marketing partners for brands like Wagamama, Mister Baker, Marrybrown, Trader Vics, Shakeys Pizza, Paavos Pizza and more, we are capable of identifying the problem you are facing in your strategies, overcoming them and devising new techniques and tactics to induce more customers.
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


            <div className="section" style={{ backgroundColor: 'var(--precision-automation-bg)' }}>
                <div className="container">
                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="UnBoxT1 sectionboxT1 pt-0">
                            <h2 className="title-heading text-center">Digital Marketing Services</h2>
                            <p className="text-center">Although there are many methods that can be used to market a food and beverage brand successfully, here are some services that we swear by:</p>
                        </div>
                    </AnimateOnScroll>
                    <div className="GridBoxWrap mt-0">
                        <div className="GridBoxes">
                            <div className="GridBox mb-1 mb-md-5">
                                <div className="row gx-5">
                                    <div className="col-md-6 d-block d-md-none">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/food-and-beverage-2.png" />
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="col-md-6 mt-4 mt-md-0">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Content Marketing & Engagement</h5>
                                                <p style={{ fontWeight: 100 }}>Are you introducing a new juice or a new food item into the market? There's no better way to create a buzz around it than with content. Content that's effective will make a potential customer want to look at it. And with such wonderful! brands in our kitty, we know what content will work the best.</p>
                                            </div>
                                        </AnimateOnScroll>
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Website Design and Development</h5>
                                                <p style={{ fontWeight: 100 }}>Are you introducing a new juice or a new food item into the market? There's no better way to create a buzz around it than with content. Content that's effective will make a potential customer want to look at it. And with such wonderful! brands in our kitty, we know what content will work the best.</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="col-md-6 d-none d-md-block">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/food-and-beverage-2.png" />
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                </div>
                            </div>
                            <div className="GridBox mb-0 mb-md-5">
                                <div className="row gx-5">
                                    <div className="col-md-6">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/food-and-beverage-3.png" />
                                            </div>
                                        </AnimateOnScroll>

                                    </div>
                                    <div className="col-md-6 mt-4 mt-md-0">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Branding</h5>
                                                <p style={{ fontWeight: 100 }}>Are you introducing a new juice or a new food item into the market? There's no better way to create a buzz around it than with content. Content that's effective will make a potential customer want to look at it. And with such wonderful! brands in our kitty, we know what content will work the best.</p>
                                            </div>
                                        </AnimateOnScroll>
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Social Media Marketing</h5>
                                                <p style={{ fontWeight: 100 }}>In today's world, there's no brand without social media. As an industry that has to cater to billions of people, your social media presence has to be known. For that, the information that you put up on your pages have to be well-thought out and then published. As an agency that specializes in social media marketing, we understand the know-hows of this strategy. Social Media helps build the NEED for a customer to order in that burger or dine at a restaurant for the story that you sell.</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>

                                </div>
                            </div>

                            <div className="GridBox">
                                <div className="row gx-5">
                                    <div className="col-md-6 d-block d-md-none">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/food-and-beverage-4.png" />
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="col-md-6 mt-4 mt-md-0">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Performance Marketing</h5>
                                                <p style={{ fontWeight: 100 }}>Gone are the days where organic numbers would bring someone through the door of your restaurant. Today we need Social Media Ads like Snapchat, TikTok, Facebook, Instagram to drive people to explore the menu of a restaurant or visit one of your concepts. Google Ads help you compete with your competition and take the market share. Search Engine Optimization helps you list yourself as the "Best steakhouse in Dubai" or "Best Burger in Riyadh" for example.</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="col-md-6 d-none d-md-block">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/food-and-beverage-4.png" />
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="ServiceItemBox">
                <div className="BannerImageBox">
                    <AnimateOnScroll animation="fadeInUp">
                        {isMobile ? (
                            <img src="/assets/images/global-mob.jpg" alt="mobile view" />
                        ) : (
                            <img src="/assets/images/global.jpg" alt="desktop view" />
                        )}
                    </AnimateOnScroll>
                </div>

                <div className="BannerBoxContent">
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="col-md-7" >
                                        <h2 className="title-heading mb-3" style={{ WebkitTextFillColor: '#fff' }}>Blogger Collaboration<br /> & Influence Marketing</h2>
                                        <p style={{ fontWeight: 100, maxWidth: '90%', color: '#adadad' }}>Our social media experts craft the strategic storytelling your brand needs to turn billions of scrollers into hungry customers.</p>
                                        <div className="guide-video-container d-flex d-md-none mt-4">
                                            <div>
                                                <a href="/contact" className="btn btn-primary" style={{ maxWidth: 'fit-content' }}>

                                                    <div className="btn-title">
                                                        <span>Let's Work Together</span>
                                                    </div>

                                                    <div className="icon-circle" style={{ backgroundColor: '#000' }}>
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </div>

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                                <div className="col-md-5 d-flex align-items-end d-none d-md-flex justify-content-end" >
                                    <div className="guide-video-container">
                                        <div>
                                            <a href="/contact" className="btn btn-primary" style={{ maxWidth: 'fit-content' }}>

                                                <div className="btn-title">
                                                    <span>Let's Work Together</span>
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
                </div>
            </div>
            <NewsletterSection btnColor="#e02f47" />
        </div>
    );
}

export default FoodAndBeverage;