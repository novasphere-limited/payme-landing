import Image from "next/image";
import Link from "next/link";

export default function HowSection() {
  return (
    <div className="main-container">
        <div className="flex mt-5 gap-5">
            <div className="w-full">
                <h2 className="header-1_black text-grnDrk mb-4">How it works</h2>
                <p className="header-3_regular mb-3">
                    Transforming Ideas into Digital Realities, Where Vision Meets Innovation.
                    Your Partner in Technology Evolution
                </p>
            </div>       
            <div className="w-full">  
                <Image
                    src="/asset/about-hero_img.png"
                    alt="Info picture"
                    width={688}
                    height={688}
                    className="rounded-lg"
                />
            </div>
        </div>
    </div>
  );
}
