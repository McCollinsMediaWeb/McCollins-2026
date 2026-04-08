import React from "react";
import HeadTitle from "../../../Components/Head/HeadTitle";
import NewsletterSection from "../../../Components/Form/Newsletter";
import InnerNew from "../../../Components/Banner/InnerNew";
import CaseStudiesSectionNew from "../../../Components/CaseStudies/CaseStudiesNew";
import AnimateOnScroll from "../../../Components/Hooks/AnimateOnScroll";

function CryoCaseStudyPage() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }}>
            <HeadTitle title="Cryo Case Study - McCollins Media - Digital Marketing Agency" />
            <InnerNew desktopImage="/assets/images/case-studies/cryo/banner.jpg" mobileImage="/assets/images/case-studies/cryo/banner.jpg" title="Cryo" title2="Case Study" title3="" />


            <div className="section pt-5 pb-0">
                <div className="hero-container">
                    <div className="row">
                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                            <p style={{ fontWeight: 100, margin: '20px 0px' }}>
                                Cryotherapy is much loved by the wellness community in today's time. We were given a mandate to increase awareness about CRYO and its locations in the UAE. With a 360 Digital Approach, we worked along with our client to create several campaigns ongoing each year. From organic content, content creation to performance marketing and blogger collaborations, have a read on how we worked with CRYO on their digital mandate.
                            </p>
                        </AnimateOnScroll>
                    </div>




                    <div className="row mt-3">
                        <div className="col">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h5>The Objective : To increase brand awareness of Cryotherapy and increase bookings and footfall to all CRYO locations across UAE</h5>
                                </div>
                            </AnimateOnScroll>

                            <div className="pt-5" style={{ width: '100%', height: '100%' }}>
                                <video
                                    title="Film Production Company Dubai"
                                    autoPlay
                                    loop
                                    muted
                                    controls
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '700px',
                                        objectFit: 'cover',
                                        borderRadius: '8px'
                                    }}
                                    src="/assets/images/case-studies/cryo/cryo-video.mp4"
                                >
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Route</h3>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row mt-1 pt-5">
                        <div className="col">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h4 className="title-heading">Social Media</h4>
                                    <p>Social Media Campaign to activate and engage the audience with campaigns like Every Body is a CRYO Body. The campaign is inclusive to all body types and welcomes people of different ages and pace of life to enjoy the benefits of Cryotherapy. Being active on Instagram, Facebook, TikTok we generated awareness about CRYO services, promoted content to the target audience and set a sales funnel to generate leads.<br /><br />With a heavy influencer marketing strategy, we focused on creating user generated content for CRYO - to show everybody is a CRYO body.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row mt-1 pt-3">
                        <div className="col">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h4 className="title-heading">Performance Marketing</h4>
                                    <p>Run Social Media Ad Campaigns via META Ads, TikTok Ads and Snapchat Ads to engage with the target audience. Conversion Ad Campaigns and Brand Awareness Campaigns were key.</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row">
                        <img style={{ width: '70%', margin: '0 auto' }} src="/assets/images/case-studies/cryo/cryo-image.png" />
                    </div>

                    <div className="row mt-1 pt-5">
                        <div className="col text-center">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">The Result</h3>
                                    <p>Increase in bookings of sessions and footfall</p>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="row">
                            <div className="col-md-4" >
                                <video
                                    title="Film Production Company Dubai"
                                    autoPlay
                                    loop
                                    muted
                                    controls
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '600px',
                                        objectFit: 'cover',
                                        borderRadius: '8px'
                                    }}
                                    src="/assets/images/case-studies/cryo/cryo-video-result-1.mp4"
                                >
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>
                            <div className="col-md-4" >
                                <video
                                    title="Film Production Company Dubai"
                                    autoPlay
                                    loop
                                    muted
                                    controls
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '600px',
                                        objectFit: 'cover',
                                        borderRadius: '8px'
                                    }}
                                    src="/assets/images/case-studies/cryo/cryo-video-result-2.mp4"
                                >
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>
                            <div className="col-md-4" >
                                <video
                                    title="Film Production Company Dubai"
                                    autoPlay
                                    loop
                                    muted
                                    controls
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '600px',
                                        objectFit: 'cover',
                                        borderRadius: '8px'
                                    }}
                                    src="/assets/images/case-studies/cryo/cryo-video-result-3.mp4"
                                >
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CaseStudiesSectionNew />
            <NewsletterSection />
        </div>
    );
}

export default CryoCaseStudyPage;