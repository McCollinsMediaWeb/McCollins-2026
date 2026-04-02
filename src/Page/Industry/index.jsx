import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import InnerNew from "../../Components/Banner/InnerNew";
import HeaderLayout1 from "../../Components/MccollinsMedia/HeaderLayout-1";
import VideoBanner from "../../Components/MccollinsMedia/VideoBanner";
import AnimateOnScroll from "../../Components/Hooks/AnimateOnScroll";
import CaseStudiesBrandDevelopment from "../../Components/MccollinsMedia/CaseStudiesBrandDevelopment";
import FullImageWithText from "../../Components/MccollinsMedia/FullImageWithText";
import NewsletterSection from "../../Components/Form/Newsletter";

function Industry() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Expertise - McCollins Media" />
            <InnerNew desktopImage="/assets/images/exp.jpg" mobileImage="/assets/images/expmobile.jpg" title="Proven Excellence." title2="Diverse Sectors." title3="" />

            <div className="UnderstandingBox ">
                <div className="container">
                    <div className="d-flex justify-content-center mt-1 pt-5">
                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Expertise</span>
                            </div>
                        </AnimateOnScroll>
                    </div>
                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="UnBoxT1 sectionboxT1" style={{ paddingTop: '10px' }}>
                            <h2 className="title-heading text-center">Proven Success Across <br />These Key Structures</h2>
                            <p className="text-center">Transforming industry-specific challenges into global success stories<span><br /></span> through specialized strategic mastery.</p>
                        </div>
                    </AnimateOnScroll>
                </div>

                <div className="IndustryAreaWrap">
                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="IndustryItem">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <h3 className="InIt1 t1">Real Estate</h3>
                                        <img className="width-full InImage" src="/assets/images/in1.png" />
                                    </div>
                                    <div className="col-md-7 pt-3 pt-md-0">
                                        <div className="StWrp1">
                                            <h4 className="StRp1">Architecting Digital Dominance<br /> for Global Real Estate.</h4>
                                            <p>Architecting a dominant digital presence for the world’s most ambitious property developments and brokerage firms. We bridge the gap between premier real estate assets and global investors through data-backed lead generation and immersive brand storytelling.</p>
                                            <div className="LnkLstBox">
                                                <h5 className="LnkLstBoxItem">Precision Lead Acquisition</h5>
                                                <h5 className="LnkLstBoxItem">Immersive Digital Showcasing</h5>
                                                <h5 className="LnkLstBoxItem">Global Market Penetration</h5>
                                                <h5 className="LnkLstBoxItem">Data-Driven Sales Velocity</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                    <div className="container">
                        <div style={{ height: '1px', backgroundColor: 'grey', marginBottom: '40px', marginTop: '10px' }} />
                    </div>


                    <div className="d-block d-md-none ">
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="IndustryItem">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <h3 className="InIt1 t2">Luxury</h3>
                                            <img className="width-full InImage" src="/assets/images/in2.png" />
                                        </div>
                                        <div className="col-md-7 pt-3 pt-md-0">
                                            <div className="StWrp1">
                                                <h4 className="StRp1">Premium Luxury Marketing Solutions<br /> curated for your brand</h4>
                                                <p>There’s a reason why luxury brands don’t advertise like the other brands in the world. Unlike those brands, they cater to a niche audience that only buys from them. They are not necessarily looking for more customers to engage with them. Marketing for luxurious brands is that, luxury. They want to inspire passion and proudness in people. Through their interaction with you, they want you to physically manifest the luxury shown by them.<br /><br /> After having worked with luxury brands like Mercedes Benz, YSL, and Lootah Perfumes, McCollins has had the pleasure of working with some of the finest luxury brands</p>
                                                <div className="LnkLstBox">
                                                    <h5 className="LnkLstBoxItem">Bespoke Brand Storytelling</h5>
                                                    <h5 className="LnkLstBoxItem">Exclusive Audience Architecture</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>


                    <div className="d-none d-md-block">
                        {/* <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="IndustryItem">
                                <div className="container">
                                    <div className="row">

                                        <div className="col-md-7">
                                            <div className="StWrp1">
                                                <h4 className="StRp1">Premium Luxury Marketing Solutions<br /> curated for your brand</h4>
                                                <p>There’s a reason why luxury brands don’t advertise like the other brands in the world. Unlike those brands, they cater to a niche audience that only buys from them. They are not necessarily looking for more customers to engage with them. Marketing for luxurious brands is that, luxury. They want to inspire passion and proudness in people. Through their interaction with you, they want you to physically manifest the luxury shown by them.<br /><br /> After having worked with luxury brands like Mercedes Benz, YSL, and Lootah Perfumes, McCollins has had the pleasure of working with some of the finest luxury brands</p>
                                                <div className="LnkLstBox">
                                                    <h5 className="LnkLstBoxItem">Bespoke Brand Storytelling</h5>
                                                    <h5 className="LnkLstBoxItem">Exclusive Audience Architecture</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <h3 className="InIt1 right t2">Luxury</h3>
                                            <img className="width-full InImage" src="/assets/images/in2.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll> */}
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="IndustryItem">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <h3 className="InIt1 t2">Luxury</h3>
                                            <img className="width-full InImage" src="/assets/images/in2.png" />
                                        </div>
                                        <div className="col-md-7 pt-3 pt-md-0">
                                            <div className="StWrp1">
                                                <h4 className="StRp1">Premium Luxury Marketing Solutions<br /> curated for your brand</h4>
                                                <p>There’s a reason why luxury brands don’t advertise like the other brands in the world. Unlike those brands, they cater to a niche audience that only buys from them. They are not necessarily looking for more customers to engage with them. Marketing for luxurious brands is that, luxury. They want to inspire passion and proudness in people. Through their interaction with you, they want you to physically manifest the luxury shown by them.<br /><br /> After having worked with luxury brands like Mercedes Benz, YSL, and Lootah Perfumes, McCollins has had the pleasure of working with some of the finest luxury brands</p>
                                                <div className="LnkLstBox">
                                                    <h5 className="LnkLstBoxItem">Bespoke Brand Storytelling</h5>
                                                    <h5 className="LnkLstBoxItem">Exclusive Audience Architecture</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                    {/* <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="IndustryItem FullScreenItem">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-6">

                                        <img className="width-full InImage" src="/assets/images/ink1.jpg" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="StWrp1">
                                            <h3 className="InIt1 t3">Food & Beverage</h3>
                                            <div className="StRp1">Accelerating F&B market share by
                                                bridging the gap between local flavor and global digital scale.</div>
                                            <p>
                                                the food and beverage industry has been booming in recent years. While the target market for this industry changes from brand to brand, the strategies used are more or less the same.
                                            </p>
                                            <div className="LnkLstBox">
                                                <div className="LnkLstBoxItem">High-Impact Sensory Storytelling</div>
                                                <div className="LnkLstBoxItem">Strategic Market Penetration</div>
                                                <div className="LnkLstBoxItem">Omnichannel Consumer Engagement</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll> */}

                    {/* <FullImageWithText desktopImage="/assets/images/foodBg.png" mobileImage="/assets/images/foodBg-mob.png" title="Food & Beverage" subtitle="Accelerating F&B market share by bridging the gap between local flavor and global digital scale." content="the food and beverage industry has been booming in recent years. While the target market for this industry changes from brand to brand, the strategies used are more or less the same." points={['High-Impact Sensory Storytelling', 'Strategic Market Penetration', 'Omnichannel Consumer Engagement']} iconClass="t3" mb='50px' /> */}


                    <div className="container">
                        <div style={{ height: '1px', backgroundColor: 'grey', marginBottom: '40px', marginTop: '10px' }} />
                    </div>

                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="IndustryItem">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <h3 className="InIt1 t3">Food & Beverage</h3>
                                        <img className="width-full InImage" src="/assets/images/ink12.jpg" />
                                    </div>
                                    <div className="col-md-7 pt-3 pt-md-0">
                                        <div className="StWrp1">
                                            <h4 className="StRp1">Accelerating F&B market share by bridging the gap between local flavor and global digital scale.</h4>
                                            <p>the food and beverage industry has been booming in recent years. While the target market for this industry changes from brand to brand, the strategies used are more or less the same.</p>
                                            <div className="LnkLstBox">
                                                <h5 className="LnkLstBoxItem">High-Impact Sensory Storytelling</h5>
                                                <h5 className="LnkLstBoxItem">Strategic Market Penetration</h5>
                                                <h5 className="LnkLstBoxItem">Omnichannel Consumer Engagement</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>

                    <div className="container">
                        <div style={{ height: '1px', backgroundColor: 'grey', marginBottom: '40px', marginTop: '10px' }} />
                    </div>


                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="IndustryItem">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <h3 className="InIt1 t4">Technology </h3>
                                        <img className="width-full InImage" src="/assets/images/in4.jpg" />
                                    </div>
                                    <div className="col-md-7 pt-3 pt-md-0">
                                        <div className="StWrp1">
                                            <h4 className="StRp1">Technology Marketing Solutions catering to the Middle East</h4>
                                            <p>Driving the next wave of digital transformation by bridging the gap between global technical innovation and the Middle East’s unique market dynamics. We empower high-growth tech brands to navigate the region’s ambitious digital landscape with precision-engineered strategies and localized expertise.</p>
                                            <div className="LnkLstBox">
                                                <h5 className="LnkLstBoxItem">Hyper-Localized Tech Narratives</h5>
                                                <h5 className="LnkLstBoxItem">Regional Market Penetration</h5>
                                                <h5 className="LnkLstBoxItem">Precision Performance Engineering</h5>
                                                <h5 className="LnkLstBoxItem">Strategic Ecosystem Integration</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                    <div className="container">
                        <div style={{ height: '1px', backgroundColor: 'grey', marginBottom: '40px', marginTop: '10px' }} />
                    </div>


                    <div className="d-block d-md-none" >
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="IndustryItem">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <h3 className="InIt1 t5">Startups </h3>
                                            <img className="width-full InImage" src="/assets/images/in5.jpg" />
                                        </div>
                                        <div className="col-md-7 pt-3 pt-md-0">
                                            <div className="StWrp1">
                                                <h4 className="StRp1">Accelerating Vision into Global Dominance.</h4>
                                                <p>Empowering disruptive startups to bridge the gap between initial innovation and sustainable global dominance. We provide the strategic foundation and high-velocity execution necessary to navigate the complexities of market entry and venture-backed scaling.</p>
                                                <div className="LnkLstBox">
                                                    <h5 className="LnkLstBoxItem">Agile Market Entry</h5>
                                                    <h5 className="LnkLstBoxItem">Venture-Focused Scalability</h5>
                                                    <h5 className="LnkLstBoxItem">High-Velocity User Acquisition</h5>
                                                    <h5 className="LnkLstBoxItem">Strategic Brand Maturation</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>



                    <div className="d-none d-md-block" >
                        {/* <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="IndustryItem">
                                <div className="container">
                                    <div className="row">

                                        <div className="col-md-7">
                                            <div className="StWrp1">
                                                <h4 className="StRp1">Accelerating Vision into Global Dominance.</h4>
                                                <p>
                                                    Empowering disruptive startups to bridge the gap between initial innovation and sustainable global dominance. We provide the strategic foundation and high-velocity execution necessary to navigate the complexities of market entry and venture-backed scaling.
                                                </p>
                                                <div className="LnkLstBox">
                                                    <h5 className="LnkLstBoxItem">Agile Market Entry</h5>
                                                    <h5 className="LnkLstBoxItem">Venture-Focused Scalability</h5>
                                                    <h5 className="LnkLstBoxItem">High-Velocity User Acquisition</h5>
                                                    <h5 className="LnkLstBoxItem">Strategic Brand Maturation</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <h3 className="InIt1 right t5">Startups</h3>
                                            <img className="width-full InImage" src="/assets/images/in5.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll> */}
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="IndustryItem">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <h3 className="InIt1 t5">Startups</h3>
                                            <img className="width-full InImage" src="/assets/images/in5.jpg" />
                                        </div>
                                        <div className="col-md-7 pt-3 pt-md-0">
                                            <div className="StWrp1">
                                                <h4 className="StRp1">Accelerating Vision into Global Dominance.</h4>
                                                <p>
                                                    Empowering disruptive startups to bridge the gap between initial innovation and sustainable global dominance. We provide the strategic foundation and high-velocity execution necessary to navigate the complexities of market entry and venture-backed scaling.
                                                </p>
                                                <div className="LnkLstBox">
                                                    <h5 className="LnkLstBoxItem">Agile Market Entry</h5>
                                                    <h5 className="LnkLstBoxItem">Venture-Focused Scalability</h5>
                                                    <h5 className="LnkLstBoxItem">High-Velocity User Acquisition</h5>
                                                    <h5 className="LnkLstBoxItem">Strategic Brand Maturation</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* <FullImageWithText desktopImage="/assets/images/b2bBg.png" mobileImage="/assets/images/b2bBg-mob.png" title="B2B" subtitle="B2B marketing designed to accelerate sales, strengthen relationships, and scale your brand." content="Architecting high-impact B2B strategies that transform complex sales cycles into streamlined engines for revenue and market authority. We bridge the gap between technical expertise and human connection, ensuring your brand resonates with decision-makers on a global scale." points={['Account-Based Precision', 'Strategic Lead Nurturing', 'Authority-Driven Thought Leadership', 'Data-Backed Sales Alignment']} iconClass="t6" mb='0px' /> */}

                    {/* <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="IndustryItem FullScreenItem">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-6">

                                        <img className="width-full InImage" src="/assets/images/in6.jpg" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="StWrp1">
                                            <h3 className="InIt1 t6">B2B</h3>
                                            <div className="StRp1">B2B marketing designed to accelerate sales, strengthen relationships, and scale your brand.</div>
                                            <p>
                                                Architecting high-impact B2B strategies that transform complex sales cycles into streamlined engines for revenue and market authority. We bridge the gap between technical expertise and human connection, ensuring your brand resonates with decision-makers on a global scale.
                                            </p>
                                            <div className="LnkLstBox">
                                                <div className="LnkLstBoxItem">Account-Based Precision</div>
                                                <div className="LnkLstBoxItem">Strategic Lead Nurturing</div>
                                                <div className="LnkLstBoxItem">Authority-Driven Thought Leadership</div>
                                                <div className="LnkLstBoxItem">Data-Backed Sales Alignment</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll> */}

                    <div className="container">
                        <div style={{ height: '1px', backgroundColor: 'grey', marginBottom: '40px', marginTop: '10px' }} />
                    </div>

                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="IndustryItem">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <h3 className="InIt1 t6">B2B</h3>
                                        <img className="width-full InImage" src="/assets/images/in62.jpg" />
                                    </div>
                                    <div className="col-md-7 pt-3 pt-md-0">
                                        <div className="StWrp1">
                                            <h4 className="StRp1">B2B marketing designed to accelerate sales, strengthen relationships, and scale your brand.</h4>
                                            <p>Architecting high-impact B2B strategies that transform complex sales cycles into streamlined engines for revenue and market authority. We bridge the gap between technical expertise and human connection, ensuring your brand resonates with decision-makers on a global scale.</p>
                                            <div className="LnkLstBox">
                                                <h5 className="LnkLstBoxItem">Account-Based Precision</h5>
                                                <h5 className="LnkLstBoxItem">Strategic Lead Nurturing</h5>
                                                <h5 className="LnkLstBoxItem">Authority-Driven Thought Leadership</h5>
                                                <h5 className="LnkLstBoxItem">Data-Backed Sales Alignment</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
            <NewsletterSection />

        </div>
    );
}

export default Industry;