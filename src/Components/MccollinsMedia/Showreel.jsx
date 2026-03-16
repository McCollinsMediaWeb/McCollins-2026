// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Showreel() {

//     const sectionRef = useRef(null);
//     const videoWrapperRef = useRef(null);
//     const videoElement = useRef(null);

//     useEffect(() => {

//         const videoWrapper = videoWrapperRef.current;

//         gsap.to(videoWrapper, {
//             scale: 1,
//             borderRadius: "0px",
//             ease: "none",
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: "top top",
//                 end: "+=600",
//                 scrub: true,
//                 pin: true,
//                 pinSpacer: false,
//                 anticipatePin: 1,
//                 markers: true
//             }
//         });

//     }, []);

//     return (
//         <section ref={sectionRef} className="showreel-section">

//             <div className="showreel-container">

//                 <div
//                     ref={videoWrapperRef}
//                     className="showreel-video-wrapper"
//                 >

//                     <video
//                         ref={videoElement}
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="showreel-video"
//                     >
//                         <source src="/assets/images/voss.mp4" type="video/mp4" />
//                     </video>

//                     <button
//                         className="showreel-play-btn"
//                         onClick={() => {
//                             if (videoElement.current.paused) {
//                                 videoElement.current.play();
//                             } else {
//                                 videoElement.current.pause();
//                             }
//                         }}
//                     >
//                         ⏸
//                     </button>

//                     <button
//                         className="showreel-mute-btn"
//                         onClick={() => {
//                             videoElement.current.muted = !videoElement.current.muted;
//                         }}
//                     >
//                         🔊
//                     </button>

//                 </div>

//             </div>

//         </section>
//     );
// }




// import React, { useLayoutEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// const Showreel = () => {
//     const containerRef = useRef(null);
//     const videoWrapperRef = useRef(null);
//     const videoRef = useRef(null);

//     const [isPlaying, setIsPlaying] = useState(true);
//     const [isMuted, setIsMuted] = useState(true);

//     useLayoutEffect(() => {
//         const ctx = gsap.context(() => {
//             gsap.fromTo(
//                 videoWrapperRef.current,
//                 {
//                     scale: 0.65,
//                     borderRadius: '20px',
//                 },
//                 {
//                     scale: 1,
//                     borderRadius: '0px',
//                     ease: 'none',
//                     scrollTrigger: {
//                         trigger: containerRef.current,
//                         start: 'top top',
//                         end: 'bottom bottom',
//                         scrub: 0.5,
//                     },
//                 }
//             );
//         }, containerRef);

//         return () => ctx.revert();
//     }, []);

//     const togglePlay = () => {
//         if (videoRef.current) {
//             if (isPlaying) videoRef.current.pause();
//             else videoRef.current.play();
//             setIsPlaying(!isPlaying);
//         }
//     };

//     const toggleMute = () => {
//         if (videoRef.current) {
//             videoRef.current.muted = !isMuted;
//             setIsMuted(!isMuted);
//         }
//     };

//     return (
//         <div
//             ref={containerRef}
//             className="relative w-full bg-background"
//             style={{ height: '300vh', isolation: 'isolate' }}
//         >
//             <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
//                 <div
//                     ref={videoWrapperRef}
//                     className="relative w-full h-full overflow-hidden will-change-transform"
//                     style={{
//                         boxShadow: '0 0 0 1px hsl(var(--video-shadow)), 0 20px 50px hsl(var(--video-shadow))',
//                     }}
//                 >
//                     <video
//                         ref={videoRef}
//                         autoPlay
//                         muted
//                         loop
//                         playsInline
//                         className="w-full h-full object-cover"
//                         src="/assets/images/voss.mp4"
//                     />

//                     <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center z-10">
//                         <button
//                             onClick={togglePlay}
//                             className="group flex items-center gap-3 px-4 py-2 rounded-full bg-control text-control-foreground backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-control-hover active:scale-95"
//                             style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
//                         >
//                             {/* {isPlaying ? <Pause size={16} /> : <Play size={16} />}
//               <span className="text-[10px] font-bold tracking-[0.1em] uppercase">
//                 {isPlaying ? 'Pause' : 'Play'}
//               </span> */}
//                         </button>

//                         <button
//                             onClick={toggleMute}
//                             className="group flex items-center gap-3 px-4 py-2 rounded-full bg-control text-control-foreground backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-control-hover active:scale-95"
//                             style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
//                         >
//                             {/* {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
//               <span className="text-[10px] font-bold tracking-[0.1em] uppercase">
//                 {isMuted ? 'Unmute' : 'Mute'}
//               </span> */}
//                         </button>
//                     </div>

//                     <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Showreel;



import { useEffect, useRef, useState } from "react";

export default function Showreel() {

    const sectionRef = useRef(null);
    const videoWrapperRef = useRef(null);
    const videoElement = useRef(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {

        const handleScroll = () => {

            const section = sectionRef.current;
            const videoWrapper = videoWrapperRef.current;

            if (!section || !videoWrapper) return;

            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const progress = Math.min(
                Math.max((windowHeight - rect.top) / windowHeight, 0),
                1
            );

            const scale = 0.65 + progress * 0.35;
            const radius = 20 - progress * 20;

            videoWrapper.style.transform = `scale(${scale})`;
            videoWrapper.style.borderRadius = `${radius}px`;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const togglePlay = () => {
        const video = videoElement.current;

        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        const video = videoElement.current;

        if (!video) return;

        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    return (
        <section ref={sectionRef} className="showreel-section">

            <div className="showreel-video-wrapper" ref={videoWrapperRef}>

                <video
                    ref={videoElement}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="showreel-video"
                >
                    <source src="/assets/images/voss.mp4" type="video/mp4" />
                </video>

                {/* Play / Pause */}
                <div
                    className="showreel-play-btn"
                    onClick={togglePlay}
                >
                    <i style={{ color: '#fff' }} className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
                </div>

                {/* Mute / Volume */}
                <div
                    className="showreel-mute-btn"
                    onClick={toggleMute}
                >
                    <i style={{ color: '#fff' }} className={`fa-solid ${isMuted ? "fa-volume-xmark" : "fa-volume-high"}`}></i>
                </div>

            </div>

        </section>
    );
}