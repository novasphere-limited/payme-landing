import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";

export default function BasicMenu({ popText, popArray }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className="text-base font-medium text-[#0B8657] flex items-center gap-2 custom-button"
        onClick={handleClick}
      >
        {popText}
        <Image
          src="/favicon_io/arrow-down.svg"
          alt="Arrow icon"
          height={18}
          width={18}
          className="inline-block"
        />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="rounded-md p-1 bg-white">
          {popArray.map((pop) => (
            <MenuItem onClick={handleClose}>
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
            </MenuItem>
          ))}
        </div>
      </Menu>
    </div>
  );
}
