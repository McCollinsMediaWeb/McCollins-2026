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
import SearchEngineOptimization from "./Page/Seo";
import GoogleAds from "./Page/GoogleAds";

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
import BetterLifeCaseStudyPage from "./Page/CaseStudies/BetterLife";
import MapeiCaseStudyPage from "./Page/CaseStudies/Mapei";
import DoorsCaseStudyPage from "./Page/CaseStudies/Doors";
import ZilliDubaiCaseStudyPage from "./Page/CaseStudies/ZilliDubai";
import ArmouredSolutionsCaseStudyPage from "./Page/CaseStudies/ArmouredSolutions";

import CorporateMarketing from "./Page/Industries/CorporateMarketing";
import FoodAndBeverage from "./Page/Industries/FoodAndBeverage";
import LuxuryMarketing from "./Page/Industries/LuxuryMarketing";
import TechnologyMarketing from "./Page/Industries/TechnologyMarketing";
import HealthcareMarketing from "./Page/Industries/HealthcareMarketing";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="industry" element={<Industry />} />
            <Route path="/industry/corporate-marketing" element={<CorporateMarketing />} />
            <Route path="/industry/food-and-beverage" element={<FoodAndBeverage />} />
            <Route path="/industry/luxury-marketing" element={<LuxuryMarketing />} />
            <Route path="/industry/technology-marketing" element={<TechnologyMarketing />} />
            <Route path="/industry/healthcare-marketing" element={<HealthcareMarketing />} />
            <Route path="single_services" element={<SingleServicePage />} />
            <Route path="/service/marketing-automations" element={<MarketingAutomations />} />
            <Route path="/service/brand-development" element={<BrandDevelopment />} />
            <Route path="/service/content-production" element={<ContentProduction />} />
            <Route path="/service/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/service/website-development" element={<WebsiteDevelopment />} />
            <Route path="/service/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/service/search-engine-optimization" element={<SearchEngineOptimization />} />
            <Route path="/service/google-ads" element={<GoogleAds />} />
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
            <Route path="case_studies/better-life" element={<BetterLifeCaseStudyPage />} />
            <Route path="case_studies/mapei" element={<MapeiCaseStudyPage />} />
            <Route path="case_studies/doors" element={<DoorsCaseStudyPage />} />
            <Route path="case_studies/zilli-dubai" element={<ZilliDubaiCaseStudyPage />} />
            <Route path="case_studies/armoured-solutions" element={<ArmouredSolutionsCaseStudyPage />} />
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