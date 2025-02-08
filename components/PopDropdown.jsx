import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function HoverMenu({ popText, popArray }) {
  return (
    <LightTooltip title={<MenuItems popArray={popArray} />} placement="bottom">
      <button className="transition-all duration-300 ease-in-out hover:font-bold text-base font-medium text-[#0B8657] flex items-center gap-2 custom-button">
        {popText}
        <Image
          src="/favicon_io/arrow-down.svg"
          alt="Arrow icon"
          height={18}
          width={18}
          className="inline-block"
        />
      </button>
    </LightTooltip>
  );
}

function MenuItems({ popArray }) {
  return (
    <div className="rounded-md p-4 bg-white">
      {popArray.map((pop) => (
        <MenuItem key={pop.id} pop={pop} />
      ))}
    </div>
  );
}

function MenuItem({ pop }) {
  return (
    <Link
      href={pop.href}
      className="flex items-center gap-3 text-base font-normal text-[#484848] md:mb-[39px] mb-6"
    >
      <div className="h-[32px] w-[32px] rounded-full flex items-center justify-center">
        <Image
          height={18}
          width={18}
          alt="Faq icon"
          src={pop.icon}
          loading="lazy"
        />
      </div>
      <p>{pop.text}</p>
    </Link>
  );
}
