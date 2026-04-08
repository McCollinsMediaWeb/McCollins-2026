import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/Home";
import AboutPage from "./Page/About";
import ServicePage from "./Page/Service";
import CaseStudiesPage from "./Page/CaseStudies";
import TeamPage from "./Page/Team";
import PartnershipPage from "./Page/Partnership";
import PricingPage from "./Page/Pricing";
import TestimonialPage from "./Page/Testimonial";
import NotFoundPage from "./Page/NotFound";
import FaqPage from "./Page/FAQs";
import BlogPage from "./Page/Blog";
import ContactPage from "./Page/Contact";
import SingleServicePage from "./Page/SingleService";
import SinglePostPage from "./Page/SinglePost";
import SingleBlog from "./Page/Blog/SingleBlog";
import PerformanceMarketing from "./Page/PerformanceMarketing";
import BrandDevelopment from "./Page/BrandDevelopment";
import Industry from "./Page/Industry";
import MarketingAutomations from "./Page/MarketingAutomations";
import ContentProduction from "./Page/ContentProduction";
import WebsiteDevelopment from "./Page/WebsiteDevelopment";
import SocialMediaMarketing from "./Page/SocialMediaMarketing";

import OakberryCaseStudyPage from "./Page/CaseStudies/Oakberry";
import CleaningSuperstoreCaseStudyPage from "./Page/CaseStudies/CleaningSuperstore";
import PioneerCaseStudyPage from "./Page/CaseStudies/Pioneer";
import ToshibaCaseStudyPage from "./Page/CaseStudies/Toshiba";
import DxbCaseStudyPage from "./Page/CaseStudies/Dxb";
import SnaideroCaseStudyPage from "./Page/CaseStudies/Snaidero";
import CryoCaseStudyPage from "./Page/CaseStudies/Cryo";
import VossDubaiCaseStudyPage from "./Page/CaseStudies/VossDubai";
import TakmeelCaseStudyPage from "./Page/CaseStudies/Takmeel";
import CostaCaseStudyPage from "./Page/CaseStudies/Costa";
import FujifilmCaseStudyPage from "./Page/CaseStudies/Fujifilm";
import DoorsDubaiCaseStudyPage from "./Page/CaseStudies/DoorsDubai";
import MarsaAjmanMallCaseStudyPage from "./Page/CaseStudies/MarsaAjmanMall";
import FelisKitchenCaseStudyPage from "./Page/CaseStudies/FelisKitchen";
import CreamioCafeCaseStudyPage from "./Page/CaseStudies/CreamioCafe";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="industry" element={<Industry />} />
            <Route path="single_services" element={<SingleServicePage />} />
            <Route path="/service/marketing-automations" element={<MarketingAutomations />} />
            <Route path="/service/brand-development" element={<BrandDevelopment />} />
            <Route path="/service/content-production" element={<ContentProduction />} />
            <Route path="/service/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/service/website-development" element={<WebsiteDevelopment />} />
            <Route path="/service/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="case_studies" element={<CaseStudiesPage />} />
            <Route path="case_studies/oakberry" element={<OakberryCaseStudyPage />} />
            <Route path="case_studies/cleaning-superstore" element={<CleaningSuperstoreCaseStudyPage />} />
            <Route path="case_studies/pioneer" element={<PioneerCaseStudyPage />} />
            <Route path="case_studies/toshiba" element={<ToshibaCaseStudyPage />} />
            <Route path="case_studies/dubai-airport-freezone" element={<DxbCaseStudyPage />} />
            <Route path="case_studies/snaidero" element={<SnaideroCaseStudyPage />} />
            <Route path="case_studies/cryo" element={<CryoCaseStudyPage />} />
            <Route path="case_studies/voss-dubai" element={<VossDubaiCaseStudyPage />} />
            <Route path="case_studies/takmeel" element={<TakmeelCaseStudyPage />} />
            <Route path="case_studies/costa" element={<CostaCaseStudyPage />} />
            <Route path="case_studies/fujifilm" element={<FujifilmCaseStudyPage />} />
            <Route path="case_studies/doors-dubai" element={<DoorsDubaiCaseStudyPage />} />
            <Route path="case_studies/marsa-ajman-mall" element={<MarsaAjmanMallCaseStudyPage />} />
            <Route path="case_studies/felis-kitchen" element={<FelisKitchenCaseStudyPage />} />
            <Route path="case_studies/creamio-cafe" element={<CreamioCafeCaseStudyPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="partnership" element={<PartnershipPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="Testimonial" element={<TestimonialPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<SingleBlog />} />
            <Route path="single_post" element={<SinglePostPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="404_page" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRouter;