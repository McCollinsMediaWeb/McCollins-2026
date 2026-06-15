import React, { createContext, useState, useContext } from "react";

const ModalVideoContext = createContext();

export const useModalVideo = () => useContext(ModalVideoContext);

export const ModalVideoProvider = ({ children }) => {
    const [videoUrl, setVideoUrl] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (url) => {
        let embedUrl = url;
        if (url) {
            const youtubeMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/);
            if (youtubeMatch) {
                embedUrl = `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1`;
            }
        }
        setVideoUrl(embedUrl);
        setIsOpen(true);
    };

    const closeModal = () => {
        setVideoUrl("");
        setIsOpen(false);
    };

    return (
        <ModalVideoContext.Provider value={{ videoUrl, isOpen, openModal, closeModal }}>
            {children}
        </ModalVideoContext.Provider>
    );
};
