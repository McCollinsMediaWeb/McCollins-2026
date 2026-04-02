// import React from "react";
// import BlogCard from "../Card/BlogCard";
// import { blogs } from "../../Data/BlogPostData";
// import AnimateOnScroll from "../Hooks/AnimateOnScroll";

// function BlogSection() {
//     return (
//         <div className="section">
//             <div className="hero-container">
//                 <div className="d-flex flex-column gspace-5">
//                     <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5 m-0">
//                         <div className="col col-lg-8 ps-0 pe-0">
//                             <AnimateOnScroll animation="fadeInLeft" speed="fast">
//                                 <div
//                                     className="d-flex flex-column gspace-2">
//                                     <div className="sub-heading">
//                                         <i className="fa-regular fa-circle-dot"></i>
//                                         <span>Insights & Trends</span>
//                                     </div>
//                                     <h2 className="title-heading">Latest Digital Marketing Strategies & Tips</h2>
//                                 </div>
//                             </AnimateOnScroll>
//                         </div>
//                         <div className="col col-lg-4 ps-0 pe-0">
//                             <AnimateOnScroll animation="fadeInRight" speed="normal">
//                                 <div
//                                     className="d-flex flex-column gspace-2 justify-content-end h-100">
//                                     <p>
//                                         Explore our latest blog articles covering industry trends,
//                                         expert insights, and actionable strategies to elevate your
//                                         digital marketing game.
//                                     </p>
//                                     <div className="link-wrapper">
//                                         <a href="./blog">View All Articles</a>
//                                         <i className="fa-solid fa-circle-arrow-right"></i>
//                                     </div>
//                                 </div>
//                             </AnimateOnScroll>
//                         </div>
//                     </div>

//                     <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
//                         {blogs.map((blog) => (
//                             <BlogCard key={blog.id} blog={blog} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default BlogSection;






import React, { useState, useEffect, useRef, useCallback } from "react";
import BlogCard from "../Card/BlogCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const API_URL = "https://mccollins-server-2026.vercel.app";

function BlogSection() {
    const [blogs, setBlogs] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const sentinelRef = useRef(null);
    const initialFetched = useRef(false);
    const pageRef = useRef(1); // track page without causing effect re-runs

    const fetchBlogs = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);

        try {
            const res = await fetch(`${API_URL}/api/blogs?page=${pageRef.current}`);
            const data = await res.json();

            setBlogs((prev) => [...prev, ...data.blogs]);
            setHasMore(data.hasMore);
            pageRef.current += 1;
        } catch (err) {
            console.error("Failed to fetch blogs:", err);
        } finally {
            setLoading(false);
        }
    }, [loading, hasMore]);

    // Initial fetch on mount
    useEffect(() => {
        if (initialFetched.current) return;
        initialFetched.current = true;
        fetchBlogs();
    }, []);

    // Intersection Observer watches the sentinel div
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    fetchBlogs();
                }
            },
            { threshold: 1.0 }
        );

        if (sentinelRef.current) observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, [hasMore, loading, fetchBlogs]);

    return (
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">

                    {/* Header - unchanged */}
                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5 m-0">
                        <div className="col col-lg-8 ps-0 pe-0">
                            <AnimateOnScroll animation="fadeInLeft" speed="fast">
                                <div className="d-flex flex-column gspace-2">
                                    <div className="sub-heading">
                                        <i className="fa-regular fa-circle-dot"></i>
                                        <span>Insights & Trends</span>
                                    </div>
                                    <h2 className="title-heading">Latest Digital Marketing Strategies & Tips</h2>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col col-lg-4 ps-0 pe-0">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="d-flex flex-column gspace-2 justify-content-end h-100">
                                    <p>
                                        Explore our latest blog articles covering industry trends,
                                        expert insights, and actionable strategies to elevate your
                                        digital marketing game.
                                    </p>
                                    {/* <div className="link-wrapper">
                                        <a href="./blog">View All Articles</a>
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div> */}
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    {/* Blog Cards */}
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
                        {blogs.map((blog) => (
                            <BlogCard key={blog._id} blog={blog} />
                        ))}
                    </div>

                    {/* Loading Spinner */}
                    {loading && (
                        <div className="d-flex justify-content-center align-items-center py-4">
                            <div
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    border: "4px solid #e0e0e0",
                                    borderTop: "4px solid #FFDE11",
                                    borderRadius: "50%",
                                    animation: "spin 0.8s linear infinite",
                                }}
                            />
                        </div>
                    )}

                    {/* End of list message */}
                    {!hasMore && !loading && (
                        <div className="d-flex justify-content-center py-4">
                            <p style={{ color: "#999", fontSize: "0.9rem" }}>
                                You're all caught up!
                            </p>
                        </div>
                    )}

                    {/* Sentinel — triggers next fetch when scrolled into view */}
                    <div ref={sentinelRef} style={{ height: "1px" }} />

                </div>
            </div>

            {/* Spinner keyframe */}
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

export default BlogSection;