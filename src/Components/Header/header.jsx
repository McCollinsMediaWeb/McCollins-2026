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
            <div  className={`FixedHeader ${isScrolled ? "fixed" : ""}`}>
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
                                <NavLink className="navbar-brand" to="/" >
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
                                <NavLink className="navbar-brand"  onClick={() => setMenuOpen(prev => !prev)}>
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
                                        <NavLink className="MegLnkTp1" to="/" onClick={() => setMenuOpen(prev => !prev)}>Home</NavLink>
                                    </div>
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1" to="/about" onClick={() => setMenuOpen(prev => !prev)}>About Us</NavLink>
                                    </div>
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1" to="/service" onClick={() => setMenuOpen(prev => !prev)}>Services</NavLink>
                                    </div>
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1" to="/industry" onClick={() => setMenuOpen(prev => !prev)}>Industry</NavLink>
                                    </div>  
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1" to="/blog" onClick={() => setMenuOpen(prev => !prev)}>Blogs</NavLink>
                                    </div> 
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1" to="/contact" onClick={() => setMenuOpen(prev => !prev)}>Contact</NavLink>
                                    </div> 
                                </div>
                                <div className="col-md-4">
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1" to="/service" onClick={() => setMenuOpen(prev => !prev)}>Services</NavLink>
                                    </div>
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1 FontSmall" to="/" onClick={() => setMenuOpen(prev => !prev)}>Website Development</NavLink>
                                    </div>
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1 FontSmall" to="/" onClick={() => setMenuOpen(prev => !prev)}>Social Media Marketing</NavLink>
                                    </div>
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1 FontSmall" to="/" onClick={() => setMenuOpen(prev => !prev)}>Google Ads</NavLink>
                                    </div>  
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1 FontSmall" to="/blog" onClick={() => setMenuOpen(prev => !prev)}>Search Engine Optimization</NavLink>
                                    </div> 
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1 FontSmall" to="/contact" onClick={() => setMenuOpen(prev => !prev)}>Film Production</NavLink>
                                    </div> 
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1 FontSmall" to="/service/brand-development" onClick={() => setMenuOpen(prev => !prev)}>Brand Development</NavLink>
                                    </div> 
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1 FontSmall" to="/contact" onClick={() => setMenuOpen(prev => !prev)}>Perfomance Marketing</NavLink>
                                    </div> 
                                </div>
                                <div className="col-md-4">
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1" to="/" onClick={() => setMenuOpen(prev => !prev)}>Industry</NavLink>
                                    </div>
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1 FontSmall" to="/" onClick={() => setMenuOpen(prev => !prev)}>Corporate Marketing</NavLink>
                                    </div>
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1 FontSmall" to="/" onClick={() => setMenuOpen(prev => !prev)}>Food And Beverage</NavLink>
                                    </div>
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1 FontSmall" to="/" onClick={() => setMenuOpen(prev => !prev)}>Healthcare Marketing</NavLink>
                                    </div>  
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1 FontSmall" to="/blog" onClick={() => setMenuOpen(prev => !prev)}>Luxury Marketing</NavLink>
                                    </div> 
                                    <div className="LinkItem">
                                        <NavLink className="MegLnkTp1 FontSmall" to="/contact" onClick={() => setMenuOpen(prev => !prev)}>Technology Marketing</NavLink>
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
                                <NavLink className="btn btn-accent" to="/contact" onClick={() => setMenuOpen(prev => !prev)}>
                                <div class="btn-title"><span>Get Started</span></div><div class="icon-circle"><i class="fa-solid fa-arrow-right"></i></div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;