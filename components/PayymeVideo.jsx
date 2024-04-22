import React, { useRef, useEffect, useState } from "react";

const VideoComponent = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={videoRef}
      className="md:my-[48px] my-[24px] flex justify-center xl:py-10 md:py-6 py-3 px-3 md:h-[400px] h-auto w-full"
    >
      {isInViewport && (
        <iframe
          width="560"
          height="400"
          src="https://www.youtube.com/embed/7PUBxluYZ-s?autoplay=1&rel=0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "8px" }}
        ></iframe>
      )}
    </div>
  );
};

export default VideoComponent;
