import Image from "next/image";
import Link from "next/link";

export default function AboutHerosection() {
  return (
    <div className="main-container">
        <h2 className="header-2_black text-center mb-5">
            Your All-in-one  Payments for Seamless 
            <span className="text-grnSec">Transactions</span>
        </h2>
        <div className="md:flex mt-5 gap-5">
            <div className="w-full">
                <h2 className="header-3_black text-grnSec md:mb-4 md:mb-2">Our Company</h2>
                <p className="label-4_regular mb-1">
                    Transforming Ideas into Digital Realities, Where Vision Meets Innovation.
                    Your Partner in Technology Evolution Transforming Ideas into Digital Realities,
                    Where Vision Meets Innovation. Your Partner in Technology Evolution Transforming
                    Ideas into Digital Realities, Where Vision Meets Innovation. Your Partner in Technology
                    Evolution Transforming Ideas into Digital Realities
                </p>      
                <Link href="/">
                    <button className="label-2_medium btn-primary_bg my-3">
                        Get Started
                    </button>
                </Link>
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
