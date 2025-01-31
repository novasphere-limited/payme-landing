import { useEffect, useState } from "react";
import LinkBtn from "./LinkBtn";

export default function OpenSms({ text, style }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (
      /android/i.test(userAgent) ||
      /iPhone|iPad|iPod/i.test(navigator.userAgent)
    ) {
      setIsMobile(true);
    }
  });
  const handleClick = (e) => {
    if (!isMobile) {
      e.preventDefault();
    }
  };

  return (
    <LinkBtn
      href={`sms:+2349137073409`}
      text={text}
      style={style}
      onClick={(e) => handleClick(e)}
    />
  );
}
