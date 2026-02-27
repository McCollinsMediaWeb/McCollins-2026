import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function BlogCard({ blog }) {
    const handleClick = () => {
        window.location.href = blog.link;
    };

    return (
        <div className="col">
            <AnimateOnScroll animation="fadeInUp" speed="normal">
                <div
                    className="card card-blog"
                    onClick={handleClick}
                >
                    <div className="blog-image" style={{ maxHeight: "300px" }}>
                        <img src={blog.photo ?? "/assets/images/blog1.jpg"} alt="Blog" />
                    </div>
                    <div className="card-body">
                        <div className="d-flex flex-row gspace-2">
                            <div className="d-flex flex-row gspace-1 align-items-center">
                                <i className="fa-solid fa-calendar accent-color"></i>
                                <span className="meta-data">
                                    {new Date(blog.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                            <div className="d-flex flex-row gspace-1 align-items-center">
                                <i className="fa-solid fa-folder accent-color"></i>
                                <span className="meta-data"
                                    style={{
                                        display: "-webkit-box",
                                        WebkitLineClamp: 1,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        maxWidth: "250px"
                                    }}>{blog.category}</span>
                            </div>
                        </div>
                        <a href={blog.link} style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }} className="blog-link">
                            {blog.title}
                        </a>
                        <p style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}>
                            {blog.shortContent}
                        </p>
                        <a href={`/blog/${blog.blogUrl}`} className="read-more">
                            Read More
                        </a>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
    );
}

export default BlogCard;
