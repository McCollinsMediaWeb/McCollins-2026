import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../Theme/themeswitch";
import { useNav } from "../Context/NavContext";
import { useState, useEffect } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("MenuActive");
        } else {
            document.body.classList.remove("MenuActive");
        }

        // Cleanup (important)
        return () => {
            document.body.classList.remove("MenuActive");
        };
    }, [menuOpen]);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const viewportHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            if (scrollTop + viewportHeight >= fullHeight - 5) {
                document.body.classList.add("ScrollInitiated");
            } else {
                document.body.classList.remove("ScrollInitiated");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 100) {
                setIsScrolled(true);
                document.body.classList.add("ScrollActivated");
            } else {
                setIsScrolled(false);
                document.body.classList.remove("ScrollActivated");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.classList.remove("ScrollActivated");
        };
    }, []);

    return (
        <>
            <div className={`FixedHeader ${isScrolled ? "fixed" : ""}`}>
                <div className="container">
                    <div className="HeaderBox">
                        <div className="HeaderBoxFlex">
                            <div className="HeaderBoxLeft">
                                <div className="HamberMenuIcon" onClick={() => setMenuOpen(prev => !prev)}>
                                    <div className="HamberMenuLine"></div>
                                    <div className="HamberMenuLine"></div>
                                    <div className="HamberMenuLine"></div>
                                </div>

                            </div>
                            <div className="HeaderBoxMiddle">
                                <a className="navbar-brand" href="/" >
                                    <img
                                        src="https://res.cloudinary.com/dje8fshak/image/upload/v1773638564/mcmain_re91gd.png"
                                        className="site-logo img-fluid"
                                        alt="Logo"
                                    />
                                </a>
                            </div>
                            <div style={{ display: 'flex' }} >
                                <div className="navbar-action-button">
                                    <ThemeSwitcher />
                                </div>
                                <div className="HeaderBoxRight">
                                    <a href="#" style={{ backgroundColor: '#000' }} className="CallLink btn btn-accent">
                                        Let's Talk
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="MegaMenu">
                <div className="MegamenuHeader">
                    <div className="container">
                        <div className="HdMenuFlex">
                            <div className="HdMenuLeft">
                                <NavLink className="navbar-brand" onClick={() => setMenuOpen(prev => !prev)}>
                                    <img
                                        src="https://res.cloudinary.com/dje8fshak/image/upload/v1773638564/mcmain_re91gd.png"
                                        className="img-fluid"
                                        alt="Logo"
                                    />
                                </NavLink>
                            </div>
                            <div className="HdMenuMiddle">
                                <div className="HdT1">Explore Menu</div>
                            </div>
                            <div className="HdMenuRight">
                                <div className="CloseBtn" onClick={() => setMenuOpen(prev => !prev)}>&nbsp;</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="MegaMenuMiddle">
                    <div className="container">
                        <div className="MenuItems">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1" href="/" onClick={() => setMenuOpen(prev => !prev)}>Home</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1" href="/about" onClick={() => setMenuOpen(prev => !prev)}>About Us</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1" href="/service" onClick={() => setMenuOpen(prev => !prev)}>Services</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1" href="/industry" onClick={() => setMenuOpen(prev => !prev)}>Industry</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1" href="/blog" onClick={() => setMenuOpen(prev => !prev)}>Blogs</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1" href="/contact" onClick={() => setMenuOpen(prev => !prev)}>Contact</a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1" href="/service" onClick={() => setMenuOpen(prev => !prev)}>Services</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1 FontSmall" href="/service/website-development" onClick={() => setMenuOpen(prev => !prev)}>Website Development</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1 FontSmall" href="/service/social-media-marketing" onClick={() => setMenuOpen(prev => !prev)}>Social Media Marketing</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1 FontSmall" href="/service/marketing-automations" onClick={() => setMenuOpen(prev => !prev)}>Marketing Automations</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1 FontSmall" href="/service" onClick={() => setMenuOpen(prev => !prev)}>Google Ads</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1 FontSmall" href="/service" onClick={() => setMenuOpen(prev => !prev)}>Search Engine Optimization</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1 FontSmall" href="/service/content-production" onClick={() => setMenuOpen(prev => !prev)}>Film Production</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1 FontSmall" href="/service/brand-development" onClick={() => setMenuOpen(prev => !prev)}>Brand Development</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1 FontSmall" href="/service/performance-marketing" onClick={() => setMenuOpen(prev => !prev)}>Perfomance Marketing</a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1" href="/industry" onClick={() => setMenuOpen(prev => !prev)}>Industry</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1 FontSmall" href="/industry" onClick={() => setMenuOpen(prev => !prev)}>Corporate Marketing</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1 FontSmall" href="/industry" onClick={() => setMenuOpen(prev => !prev)}>Food And Beverage</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1 FontSmall" href="/industry" onClick={() => setMenuOpen(prev => !prev)}>Healthcare Marketing</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1 FontSmall" href="/industry" onClick={() => setMenuOpen(prev => !prev)}>Luxury Marketing</a>
                                    </div>
                                    <div className="LinkItem">
                                        <a className="MegLnkTp1 FontSmall" href="/industry" onClick={() => setMenuOpen(prev => !prev)}>Technology Marketing</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MegaMenuFooter">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-9">
                                <div className="HdT2">We do it right , we do it well , we do it on time </div>
                            </div>
                            <div className="col-md-3">
                                <a className="btn btn-accent" href="/contact" onClick={() => setMenuOpen(prev => !prev)}>
                                    <div class="btn-title"><span>Get Started</span></div><div class="icon-circle"><i class="fa-solid fa-arrow-right"></i></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;