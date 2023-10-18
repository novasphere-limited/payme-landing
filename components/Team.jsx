import Image from "next/image";
import Counter from "./Counter";

export default function Team() {
  return (
    <>
      <div className="main-container text-center">
        <h2 className="header-2_bold mb-2 text-center">Meet the Team</h2>
        <p className="text-2_regular text-center mb-4"></p>
        <div className="grid-3">
          <div>
            <div>
              <Image
                src="/asset/nova-about-hero.png"
                alt="Novasphere hero picture"
                width={364}
                height={364}
                className="rounded-full"
              />
            </div>
            <h5 className="header-4_bold mt-3 mb-2">Jay Aiden</h5>
            <p className="text-2_regular">Account</p>
          </div>
          <div>
            <div>
              <Image
                src="/asset/nova-about-hero.png"
                alt="Novasphere hero picture"
                width={364}
                height={364}
                className="rounded-full"
              />
            </div>
            <h5 className="header-4_bold mt-3 mb-2">Jay Aiden</h5>
            <p className="text-2_regular">Account</p>
          </div>
          <div>
            <div>
              <Image
                src="/asset/nova-about-hero.png"
                alt="Novasphere hero picture"
                width={364}
                height={364}
                className="rounded-full"
              />
            </div>
            <h5 className="header-4_bold mt-3 mb-2">Jay Aiden</h5>
            <p className="text-2_regular">Account</p>
          </div>
          <div>
            <div>
              <Image
                src="/asset/nova-about-hero.png"
                alt="Novasphere hero picture"
                width={364}
                height={364}
                className="rounded-full"
              />
            </div>
            <h5 className="header-4_bold mt-3 mb-2">Jay Aiden</h5>
            <p className="text-2_regular">Account</p>
          </div>
          <div>
            <div>
              <Image
                src="/asset/nova-about-hero.png"
                alt="Novasphere hero picture"
                width={364}
                height={364}
                className="rounded-full"
              />
            </div>
            <h5 className="header-4_bold mt-3 mb-2">Jay Aiden</h5>
            <p className="text-2_regular">Account</p>
          </div>
          <div>
            <div>
              <Image
                src="/asset/nova-about-hero.png"
                alt="Novasphere hero picture"
                width={364}
                height={364}
                className="rounded-full"
              />
            </div>
            <h5 className="header-4_bold mt-3 mb-2">Jay Aiden</h5>
            <p className="text-2_regular">Account</p>
          </div>
        </div>
      </div>
      <Counter endValue1={100} endValue2={150} endValue3={30} />
    </>
  );
}
