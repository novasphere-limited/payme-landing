import { ROUTES } from "@/contants/ROUTES";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <Link href={ROUTES.DASHBOARD}>
        <Image
          src="/asset/Paymee.png"
          width={160}
          height={63}
          alt="paymee logo"
        />
      </Link>
      <ul>
        <li>
          <Link href={ROUTES.DASHBOARD}>
            <div className="side-bar_flex">
              <Image
                src="/favicon_io/dashboard.svg"
                width={24}
                height={24}
                alt="Dashboard icon"
              />
              <h6 className="label-2_regular">Dashboard</h6>
            </div>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.DASHBOARDALLREGISTRATION}>
            <div className="side-bar_flex">
              <Image
                src="/favicon_io/register.svg"
                width={24}
                height={24}
                alt="Dashboard icon"
              />
              <h6 className="label-2_regular">All registration</h6>
            </div>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.DASHBOARD}>
            <div className="side-bar_flex">
              <Image
                src="/favicon_io/user-paymee.svg"
                width={24}
                height={24}
                alt="Dashboard icon"
              />
              <h6 className="label-2_regular">Transaction tracker</h6>
            </div>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.DASHBOARD}>
            <div className="side-bar_flex">
              <Image
                src="/favicon_io/user-paymee.svg"
                width={24}
                height={24}
                alt="Dashboard icon"
              />
              <h6 className="label-2_regular">Top Ups</h6>
            </div>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.DASHBOARD}>
            <div className="side-bar_flex">
              <Image
                src="/favicon_io/user-paymee.svg"
                width={24}
                height={24}
                alt="Dashboard icon"
              />
              <h6 className="label-2_regular">Authorization Management</h6>
            </div>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.DASHBOARD}>
            <div className="side-bar_flex">
              <Image
                src="/favicon_io/user-paymee.svg"
                width={24}
                height={24}
                alt="Dashboard icon"
              />
              <h6 className="label-2_regular">API Management</h6>
            </div>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.DASHBOARD}>
            <div className="side-bar_flex">
              <Image
                src="/favicon_io/notification.svg"
                width={24}
                height={24}
                alt="Dashboard icon"
              />
              <h6 className="label-2_regular">Notification</h6>
            </div>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.DASHBOARD}>
            <div className="side-bar_flex">
              <Image
                src="/favicon_io/message.svg"
                width={24}
                height={24}
                alt="Dashboard icon"
              />
              <h6 className="label-2_regular">Messages</h6>
            </div>
          </Link>
        </li>
        <li>
          <Link href={ROUTES.DASHBOARD}>
            <div className="side-bar_flex">
              <Image
                src="/favicon_io/settings.svg"
                width={24}
                height={24}
                alt="Dashboard icon"
              />
              <h6 className="label-2_regular">Settings</h6>
            </div>
          </Link>
        </li>
        <button className="mt-10">
          <div className="side-bar_flex">
            <Image
              src="/favicon_io/log-out.svg"
              width={24}
              height={24}
              alt="Dashboard icon"
            />
            <h6 className="label-2_regular">Log Out</h6>
          </div>
        </button>
      </ul>
    </div>
  );
}
