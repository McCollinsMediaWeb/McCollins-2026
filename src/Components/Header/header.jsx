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

    const { isDropdownActive } = useNav();

    return (
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
    );
}

export default Navbar;