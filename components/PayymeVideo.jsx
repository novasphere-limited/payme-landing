import React from "react";

export default function VideoComponent() {
  return (
    <div className="mt-[48px] flex justify-center xl:py-10 md:py-6 py-3 px-3">
      <iframe
        width="560"
        height="400"
        src="https://www.youtube.com/embed/7PUBxluYZ-s?rel=0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: "8px" }}
      ></iframe>
    </div>
  );
}
