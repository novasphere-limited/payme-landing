import Image from "next/image";
import Link from "next/link";

export default function Ceo() {
  return (
    <div className="main-container">   
        <div className="md:flex mt-5 gap-4">
            <div className="w-full">  
                <Image
                    src="/asset/CEO-img.png"
                    alt="Info picture"
                    width={703}
                    height={470}
                    className="rounded-lg"
                    />
            </div>
            <div className="w-full">
                <h2 className="label-1_black mb-4">Our Company</h2>
                <h2 className="label-2_regular mb-4">CEO</h2>
                <p className="label-4_regular mb-1">
                Williams Andrew is a Where Vision Meets Innovation. Your Partner in Technology Evolution 
                Transforming Ideas into Digital Realities, Where Vision Meets Innovation. Your Partner in
                 Technology Evolution Transforming Ideas into Digital Realities,
                </p>
            </div>                  
        </div>
    </div>
  );
}
