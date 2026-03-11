import React from "react";
import { useModalVideo } from "./ModalVideoContext";

function VideoButtonNew({ videoUrl }) {
    const { openModal } = useModalVideo();

    return (
        <button className="request-loader" style={{ fontSize: '20px', height: '50px', backgroundColor: '#424140' }} onClick={() => openModal(videoUrl)}>
            <i style={{ color: '#fff' }} className="fa-solid fa-play"></i>
        </button>
    );
}

export default VideoButtonNew;
