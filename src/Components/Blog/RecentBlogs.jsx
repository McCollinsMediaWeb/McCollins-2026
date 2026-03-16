import React, { useCallback, useEffect, useState } from "react";



const API_URL = "https://mccollins-server-2026.vercel.app";

const RecentBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchRecentBlogs = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/blogs/recent`);
            const data = await res.json();
            setBlogs(data.blogs);
        } catch (err) {
            console.error("Failed to fetch blogs:", err);
        } finally {
            setLoading(false);
        }
    }, [loading]);

    // Initial fetch on mount
    useEffect(() => {
        fetchRecentBlogs();
    }, []);

    return (

        <div className="card recent-post">
            <h4>Recent Blog</h4>
            {blogs.map((blog) => (
                <a
                    className="d-flex flex-row w-100 gspace-1"
                    key={blog.id}
                    href={`/blog/${blog.blogUrl}`}
                >
                    <div className="image-container">
                        <img
                            src={blog.photo ?? "/assets/images/blog1.jpg"}
                            alt={blog.title}
                            className="img-fluid"
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className="d-grid">
                        <div className="d-flex flex-row gspace-1 align-items-center">
                            <i className="fa-solid fa-calendar accent-color"></i>
                            <span className="meta-data-post">
                                {new Date(blog.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}</span>
                        </div>
                        <a href={blog.link} className="blog-link-post" style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}>
                            {blog.title}
                        </a>
                    </div>
                </a>
            ))}
        </div>

    );
};

export default RecentBlogs;