import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * PageTransition wrapper component
 * Listens to location changes to:
 * 1. Force a clean remount of the layout using the location pathname as the key,
 *    which triggers the CSS fade-in transition.
 * 2. Scroll the page to the top instantly so the new page renders at the top.
 */
function PageTransition({ children }) {
    const location = useLocation();

    useEffect(() => {
        // Instant scroll to the top of the window on route change
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, [location.pathname]);

    return (
        <div key={location.pathname} className="page-fade-transition">
            {children}
        </div>
    );
}

export default PageTransition;
