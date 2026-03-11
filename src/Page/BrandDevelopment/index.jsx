import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import InnerNew from "../../Components/Banner/InnerNew";
import HeaderLayout1 from "../../Components/MccollinsMedia/HeaderLayout-1";
import VideoBanner from "../../Components/MccollinsMedia/VideoBanner";
import AnimateOnScroll from "../../Components/Hooks/AnimateOnScroll";
import CaseStudiesBrandDevelopment from "../../Components/MccollinsMedia/CaseStudiesBrandDevelopment";
import CustomGuide2 from "../../Components/Banner/CustomGuide2";
import ModalVideoSection from "../../Components/Video/video";
import NewsletterSection from "../../Components/Form/Newsletter";

function BrandDevelopment() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }} >
            <HeadTitle title="Services - McCollins Media" />
            <InnerNew desktopImage="/assets/images/s1.jpg" mobileImage="/assets/images/s1mob.jpg" title="Brand" title2="Development" title3="" />
            <HeaderLayout1 />
            {/* <VideoBanner /> */}
            <CustomGuide2 />
            <ModalVideoSection />
            <div className="UnderstandingBox section">
                <div className="container">
                    <div className="UnBoxT1">
                        <h2 className="title-heading text-center">Understanding the Arab Markets</h2>
                        <p className="text-center">Mastering the intricate balance between tradition and transformation to engineer brand strategies that resonate deeply within the Arab world’s unique cultural and commercial landscape.</p>
                    </div>
                    <div className="GridBoxWrap">
                        <div className="GridBoxes">
                            <div className="GridBox">
                                <div className="row">
                                    <div className="col-md-5">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Cultural Intelligence</h5>
                                                <p>We understand the subtle cues - colors, symbols, language, and typography - that carry deep meaning within Arab societies. Our designs avoid generic global templates and instead draw from cultural codes that inspire trust and familiarity.</p>
                                            </div>
                                        </AnimateOnScroll>
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">

                                            <div>
                                                <h5 className="GridBoxT1">Generational Dynamics</h5>
                                                <p>The Arab consumer is both rooted in tradition and ambitious for the future. From heritage-conscious Baby Boomers to Gen Z digital natives, our strategies are calibrated to speak fluently across generations.</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                    <div className="col-md-7">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/grid1.jpg" />
                                            </div>
                                        </AnimateOnScroll>

                                    </div>
                                </div>
                            </div>
                            <div className="GridBox">
                                <div className="row">
                                    <div className="col-md-5">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <img className="widthFull borderRadius5" src="/assets/images/grid2.jpg" />
                                            </div>
                                        </AnimateOnScroll>

                                    </div>
                                    <div className="col-md-7">
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                                            <div>
                                                <h5 className="GridBoxT1">Market Aspirations</h5>
                                                <p>Across the CC and wider Middle East, luxury, innovation, and lifestyle drive consumer decisions. We position brands to align with these aspirations - ensuring they are not just seen, but desired.</p>
                                            </div>
                                        </AnimateOnScroll>
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">

                                            <div>
                                                <h5 className="GridBoxT1">Language & Communication</h5>
                                                <p>Arabic is not just a language, but an identity marker. We craft bilingual and culturally adaptive messaging systems that preserve brand prestige while ensuring clarity and resonance.</p>
                                            </div>
                                        </AnimateOnScroll>
                                        <AnimateOnScroll animation="fadeInUp" speed="normal">

                                            <div>
                                                <h5 className="GridBoxT1">The McCollins Edge</h5>
                                                <p>With over 15 years of regional expertise, we have helped global and local brands thrive by translating business objectives into culturally powerful brand narratives. We don’t just enter the Arab market -we make brands belong to it.</p>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <CaseStudiesBrandDevelopment />

            <NewsletterSection />

        </div>
    );
}

export default BrandDevelopment;