import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import Image from "next/image";

function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button onClick={handleOpen}>
        <Image
          src="/asset/more.png"
          width={5.5}
          height={1.5}
          alt="Options button"
        />
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <div className="p-5">
          <MenuItem onClick={handleClose}>
            <form>
              <input type="checkbox" />
              <label className="ps-2">Role</label>
            </form>
          </MenuItem>
          <MenuItem>
            <form>
              <input type="checkbox" />
              <label className="ps-2">Team</label>
            </form>
          </MenuItem>
          <MenuItem>
            <form>
              <input type="checkbox" />
              <label className="ps-2">Status</label>
            </form>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
export default Dropdown;
