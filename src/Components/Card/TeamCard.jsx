import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const   TeamCard = ({ name, title, image, socials }) => {
  return (
    <div className="col">
        <AnimateOnScroll animation="fadeInUp" speed="normal">
            <div className="d-flex flex-column">
                <div className="image-team">
                    <img src={image} alt={name} className="img-fluid" />
                    <div className="social-team-wrapper">
                        <div className="social-team-spacer"></div>
                        <div className="d-flex flex-column align-items-end">
                            <div className="social-team-container">
                                <a href={socials.facebook} className="social-item">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href={socials.instagram} className="social-item">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href={socials.linkedin} className="social-item">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                            <div className="social-team-spacer"></div>
                        </div>
                    </div>
                </div>
                <div className="team-profile">
                    <h4>{name}</h4>
                    <span className="title">{title}</span>
                </div>
            </div>
        </AnimateOnScroll>
    </div>
  );
};

export default TeamCard;