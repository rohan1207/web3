import React, { useState, useEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import "./LoadingPage.scss";
import { useExperienceStore } from "../../stores/experienceStore";

const LoadingScreen = () => {
  const { progress } = useProgress();
  const topHalfRef = useRef(null);
  const bottomHalfRef = useRef(null);
  const loadingScreenRef = useRef(null);
  const messageRef = useRef(null);
  const loaderRef = useRef(null);
  const { setIsExperienceReady } = useExperienceStore();
  const [onlyOnce, setOnlyOnce] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Create rotation animation for the architectural loader
    if (loaderRef.current) {
      gsap.to(loaderRef.current, {
        rotate: 360,
        duration: 2,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  useEffect(() => {
    if (progress >= 99 && !onlyOnce) {
      setOnlyOnce(true);
      setIsExperienceReady();

      const tl = gsap.timeline();

      tl.to(
        loaderRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
        },
        "fadeOut"
      )
        .to(messageRef.current, {
          opacity: 1,
          duration: 0.5,
          y: "-100%",
          ease: "power2.out",
        })
        .to(messageRef.current, {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          y: "-200%",
          ease: "power2.out",
        })
        .to(
          topHalfRef.current,
          {
            y: "-100%",
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          bottomHalfRef.current,
          {
            y: "100%",
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
              setIsVisible(false);
            },
          },
          "<"
        );
    }
  }, [progress]);

  if (!isVisible) {
    return null;
  }

  return (
    <div ref={loadingScreenRef} className="loading-screen">
      <div ref={topHalfRef} className="background-top-half"></div>
      <div ref={bottomHalfRef} className="background-bottom-half"></div>
      <div className="loading-screen-info-container">
        <div ref={messageRef} className="intro-message-container">
          Welcome To TheSocialKollab
        </div>
        <div className="loader-container">
          <div ref={loaderRef} className="architectural-loader">
            <div className="loader-element"></div>
            <div className="loader-element"></div>
            <div className="loader-element"></div>
          </div>
          {/* <div className="loader-percentage">{Math.round(progress)}%</div> */}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
