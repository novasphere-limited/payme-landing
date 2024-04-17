import Image from "next/image";
import Link from "next/link";
import MouseOverPopover from "./PopDropdown";
import { useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const productArray = [
    {
      id: 1,
      text: "Send & Receive Cash",
      href: "/how",
      icon: "/favicon_io/pop-img-1.svg",
    },
    {
      id: 2,
      text: "Pay Bill",
      href: "/how",
      icon: "/favicon_io/pop-img-2.svg",
    },
    {
      id: 3,
      text: "Aitrime & Data",
      href: "/how",
      icon: "/favicon_io/pop-img-3.svg",
    },
  ];
  const companyArray = [
    {
      id: 1,
      text: "Leadership Team",
      href: "/about",
      icon: "/asset/pop-img-4.png",
    },
    {
      id: 2,
      text: "Company Core Value",
      href: "/about",
      icon: "/favicon_io/pop-img-5.svg",
    },
    {
      id: 3,
      text: "Featured In ",
      href: "#",
      icon: "/favicon_io/pop-img-6.svg",
    },
    { id: 4, text: "FAQ's ", href: "/faq", icon: "/asset/pop-img-7.png" },
    { id: 5, text: "Blog", href: "/blog", icon: "/favicon_io/faq-icon-1.svg" },
  ];

  return (
    <>
      <div className="navbar margin-gen py-4">
        <Link href="/">
          <Image
            src="/asset/Paymee.png"
            width={160}
            height={63}
            alt="paymee logo"
            loading="lazy"
          />
        </Link>
        <ul>
          <MouseOverPopover popText="Products" popArray={productArray} />
          <MouseOverPopover popText="Company" popArray={companyArray} />
          <Link href="/faq">
            <li className="text-base font-medium text-[#0B8657]">Support</li>
          </Link>
        </ul>
        <div>
          <Link href="/contact">
            <h1
              className="label-2_medium navbar_outline"
              style={{ color: "#075134" }}
            >
              Get Started
            </h1>
          </Link>
        </div>
      </div>
      <div className="navbar-mobile">
        <div className="flex justify-between items-center">
          <Link href="/" className="mb-2">
            <Image
              src="/asset/Paymee.png"
              width={100}
              height={43}
              alt="paymee logo"
            />
          </Link>
          <button onClick={handleNavbar}>
            <Image
              src="/favicon_io/hamburger.svg"
              width={28}
              height={20}
              alt="Menu logo"
            />
          </button>
        </div>
        {showNavbar && (
          <ul>
            <li className="mb-2"></li>
            <li className="mb-2">
              <MouseOverPopover popText="Products" popArray={productArray} />
            </li>
            <li className="mb-2">
              <MouseOverPopover popText="Company" popArray={companyArray} />
            </li>
            <li className="mb-2">
              <Link href="#">
                <li className="text-base font-medium text-[#0B8657]">
                  Support
                </li>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
