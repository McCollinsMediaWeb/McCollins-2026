import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../Theme/themeswitch";
import { useNav } from "../Context/NavContext";

function Navbar() {
    const { isDropdownActive } = useNav();

    return (
        <div className="navbar-wrapper FixedHeader">
            <div className="container">
                <div className="HeaderBox">
                    <div className="HeaderBoxFlex">
                        <div className="HeaderBoxLeft">
                            <NavLink className="navbar-brand" to="/">
                                <img
                                    src="/assets/images/marko-logo.png"
                                    className="site-logo img-fluid"
                                    alt="Logo"
                                />
                            </NavLink>
                        </div>
                        <div className="HeaderBoxMiddle">
                            Ijas
                        </div>
                        <div className="HeaderBoxRight">
                            Ijas
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;