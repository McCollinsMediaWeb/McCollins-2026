import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import ContactSection from "../../Components/Contact/contact";
import MapsSection from "../../Components/Maps/map";
import InnerNew from "../../Components/Banner/InnerNew";

function ContactPage() {
    return (
        <div style={{ backgroundColor: 'var(--background-color)' }} >
            <HeadTitle title="Contact Us - McCollins Media - Digital Marketing Agency" />
            {/* <BannerInnerSection title="Contact Us" currentPage="Contact Us" /> */}
            <InnerNew desktopImage="/assets/images/contact-us/banner-desktop.jpg" mobileImage="/assets/images/contact-us/banner-mobile.jpg" title="Contact Us" />
            <ContactSection />
            {/* <MapsSection /> */}
        </div>
    );
}

export default ContactPage;