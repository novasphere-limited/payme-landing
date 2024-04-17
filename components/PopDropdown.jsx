import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";

export default function HoverMenu({ popText, popArray }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  const handleMenuMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMenuMouseLeave = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <button
        aria-controls="hover-menu"
        aria-haspopup="true"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-base font-medium text-[#0B8657]"
      >
        {popText}
      </button>
      <Menu
        id="hover-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMouseLeave}
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMenuMouseLeave}
      >
        {popArray.map((pop) => (
          <MenuItem
            onClick={handleMouseLeave}
            key={pop.id}
            className="flex items-center gap-3"
          >
            <div className="h-[32px] w-[32px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <Image height={18} width={18} alt="Faq icon" src={pop.icon} />
            </div>
            <Link href={pop.href}>{pop.text}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
