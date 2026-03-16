import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import BlogSection from "../../Components/Blog/blog";
import InnerNew from "../../Components/Banner/InnerNew";

function BlogPage() {
    return (
        <>
            <HeadTitle title="Blog - McCollins Media" />
            {/* <BannerInnerSection title="Our Blog" currentPage="Blog" /> */}
            <InnerNew desktopImage="/assets/images/exp.jpg" mobileImage="/assets/images/expmobile.jpg" title="Our Blog" title2="" title3="" />

            <BlogSection />
        </>
    );
}

export default BlogPage;