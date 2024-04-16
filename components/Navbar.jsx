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
    { id: 1, text: "Send & Receive Cash", href: "/how" },
    { id: 2, text: "Pay Bill", href: "/how" },
    { id: 3, text: "Aitrime & Data", href: "/how" },
  ];
  const companyArray = [
    { id: 1, text: "Leadership Team", href: "/about" },
    { id: 2, text: "Company Core Value", href: "/about" },
    { id: 3, text: "Featured In ", href: "#" },
    { id: 4, text: "FAQ's ", href: "/faq" },
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
          <Link href="/blog">
            <li className="label-3_medium">Blog</li>
          </Link>
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
            <li className="mb-2">
              <Link href="/blog">
                <li className="label-3_medium">Blog</li>
              </Link>
            </li>
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
