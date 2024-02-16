import { Height } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function HowSection() {
  return (
    <div className="main-container">
      <h2 className="header-2_bold text-grnDrk mb-4 text-center my-10">
        How it works
      </h2>
      <div className="flex justify-center">
        <Image
          src="/asset/how_video.png"
          alt="Info picture"
          width={1166}
          height={812}
          sizes="(max-width: 1166px) (max-height: 812px)"
          fill={false}
        />
      </div>
    </div>
  );
}
