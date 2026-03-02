import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import ThemeSwitcher from "../Theme/themeswitch";
import { useNav } from "../Context/NavContext";

function Navbar() {
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

    return (
        <>
            <div className="FixedHeader">
                <div className="container">
                    <div className="HeaderBox">
                        <div className="HeaderBoxFlex">
                            <div className="HeaderBoxLeft">
                                <div className="HamberMenuIcon">
                                    <div className="HamberMenuLine"></div>
                                    <div className="HamberMenuLine"></div>
                                    <div className="HamberMenuLine"></div>
                                </div>

                            </div>
                            <div className="HeaderBoxMiddle">
                                <NavLink className="navbar-brand" to="/">
                                    <img
                                        src="/assets/images/mcmain.png"
                                        className="site-logo img-fluid"
                                        alt="Logo"
                                    />
                                </NavLink>
                            </div>
                            <div className="HeaderBoxRight">
                                <a href="#" className="CallLink btn btn-accent">
                                    Let's Talk
                                </a>
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
                                <NavLink className="navbar-brand" to="/">
                                    <img
                                        src="/assets/images/mcmain.png"
                                        className="img-fluid"
                                        alt="Logo"
                                    />
                                </NavLink>
                            </div>
                            <div className="HdMenuMiddle">
                                <div className="HdT1">Explore Menu</div>
                            </div>
                            <div className="HdMenuRight">
                                <div className="CloseBtn">&nbsp;</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="MegaMenuMiddle">
                    <div className="container">
                        <div className="MenuItems">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="">
                                        <NavLink className="MegLnkTp1" to="/">Home</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;