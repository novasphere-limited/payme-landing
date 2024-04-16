import React from "react";
import ReactPlayer from "react-player";

export default function VideoComponent() {
  return (
    <div className="mt-[48px] flex justify-center backdrop-blur-sm bg-[#000000BF] xl:py-10 md:py-6 py-3 rounded-lg px-3">
      <ReactPlayer
        url="https://youtu.be/7PUBxluYZ-s?si=bAfu2uvM-UJzaSB_"
        height="400px"
        controls
      />
    </div>
  );
}
