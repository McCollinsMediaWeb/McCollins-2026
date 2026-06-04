import { useParams } from "react-router-dom";
import { blogs } from "../../Data/BlogPostData";
import RecentBlogs from "../../Components/Blog/RecentBlogs";
import { useEffect, useState } from "react";
import draftToHtml from "draftjs-to-html";
import AnimateOnScroll from "../../Components/Hooks/AnimateOnScroll";
import "./SingleBlog.css";

export default function SingleBlog() {
    const { slug } = useParams();

    const [htmlContent, setHtmlContent] = useState("");
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`https://mccollins-server-2026.vercel.app/api/blogs/${slug}`);

                if (!res.ok) {
                    throw new Error("Blog not found");
                }

                const data = await res.json();
                setBlog(data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    useEffect(() => {
        if (!blog?.content) return;

        try {
            const raw = JSON.parse(blog.content);
            const html = draftToHtml(raw);
            setHtmlContent(html);
        } catch (e) {
            console.error("Content parse failed", e);
        }
    }, [blog]);


    if (loading) return <div className="d-flex justify-content-center align-items-center py-4" style={{ minHeight: '50vh' }}>
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
    </div>;

    if (error || !blog) return <h2 style={{ padding: "80px" }}>Blog Not Found</h2>;

    return (
        <div className="section" style={{ backgroundColor: 'var(--background-color)' }}>
            <div className="hero-container">
                <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                    <div className="col col-lg-4 order-2 order-lg-1">
                        <AnimateOnScroll animation="fadeInLeft">
                            <div className="d-flex flex-column flex-md-row flex-lg-column gspace-5">
                                <RecentBlogs />
                            </div>
                        </AnimateOnScroll>
                    </div>
                    <div className="col col-lg-8 order-1 order-lg-2">
                        <AnimateOnScroll animation="fadeInRight">
                            <div className="d-flex flex-column gspace-2">
                                <div className="post-image">
                                    <img
                                        src={blog.photo ?? "/assets/images/blog1.jpg"}
                                        alt="Recent Post"
                                        className="img-fluid"
                                    />
                                </div>
                                <h3>{blog.title}</h3>
                                <div className="underline-muted-full"></div>
                                <div className="d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row align-items-center gspace-2">
                                        <div className="d-flex flex-row gspace-1 align-items-center">
                                            <i className="fa-solid fa-calendar accent-color"></i>
                                            <span className="meta-data-post">{new Date(blog.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}</span>
                                        </div>
                                        <div className="d-flex flex-row gspace-1 align-items-center">
                                            <i className="fa-solid fa-folder accent-color"></i>
                                            <span className="meta-data-post">{blog.category}</span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row gspace-1 align-items-center">
                                        <i className="fa-solid fa-user accent-color"></i>
                                        <span className="meta-data">{blog.author}</span>
                                    </div>
                                </div>

                                <div>
                                    <div
                                        className="blog-content"
                                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                                    />
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
}