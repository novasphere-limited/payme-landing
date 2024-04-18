import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function SocialMedia({ color }) {
  return (
    <div className="flex gap-2">
      <Link
        href="https://www.linkedin.com/company/98830656/admin/feed/posts/"
        legacyBehavior
      >
        <a target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: color, borderColor: color }}
            className="social-icon"
          />
        </a>
      </Link>
      <Link href="https://web.facebook.com/PayyMehq" legacyBehavior>
        <a target="_blank">
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ color: color, borderColor: color }}
            className="social-icon"
          />
        </a>
      </Link>
      <Link href="https://www.instagram.com/payyme_hq/" legacyBehavior>
        <a target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: color, borderColor: color }}
            className="social-icon"
          />
        </a>
      </Link>
      <Link href="https://twitter.com/Payyme_hq" legacyBehavior>
        <a target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: color, borderColor: color }}
            className="social-icon"
          />
        </a>
      </Link>
    </div>
  );
}
