import { NavList } from "@/contants";
import { ROUTES } from "@/contants/ROUTES";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const router = useRouter();

  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className="navbar bg-[#CDE3CF1A]">
        <Link href={ROUTES.HOME}>
          <Image
            src="/asset/Paymee.png"
            width={160}
            height={63}
            alt="paymee logo"
          />
        </Link>
        <ul>
          {NavList.map((nav) => (
            <Link
              key={nav.id}
              href={nav.route}
              className={` ${
                router.pathname === nav.route ? "active-link" : ""
              }`}
            >
              <li className="label-3_medium">{nav.name}</li>
            </Link>
          ))}
        </ul>
        <div>
          <Link href={ROUTES.LOGIN}>
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
          <Link href={ROUTES.HOME} className="mb-2">
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
            {NavList.map((nav) => (
              <Link key={nav.id} href={nav.route}>
                <li
                  className={`label-3_medium mb-2 ${
                    router.pathname === nav.route ? "active-link-mob" : ""
                  }`}
                >
                  {nav.name}
                </li>
              </Link>
            ))}
            <Link href={ROUTES.LOGIN}>
              <li
                className="label-3_medium mb-2 navbar_outline text-center"
                style={{ color: "#075134" }}
              >
                Get Started
              </li>
            </Link>
          </ul>
        )}
      </div>
    </>
  );
}
