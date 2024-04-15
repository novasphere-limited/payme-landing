// import { Box, Button, Popover, Typography } from "@mui/material";
// import { useState } from "react";

// export default function PopComponent({}) {
//   const [anchorE1, setAnchorE1] = useState(null);
//   const handlePopoverOpen = (event) => {
//     setAnchorE1(event.currentTarget);
//   };
//   const handlePopoverClose = (event) => {
//     setAnchorE1(null);
//   };

//   const open = Boolean(anchorE1);
//   return (
//     <div>
//       <Button
//         onMouseEnter={handlePopoverOpen}
//         onMouseLeave={handlePopoverClose}
//       >
//         Hover Me
//       </Button>
//       <Popover
//         open={open}
//         anchorEl={anchorE1}
//         onClose={handlePopoverClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "center",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "center",
//         }}
//       >
//         <Box sx={{ width: 250 }}>
//           <Typography sx={{ mb: 1 }}>Popover title</Typography>
//           <Typography>Popover content</Typography>
//         </Box>
//       </Popover>
//     </div>
//   );
// }

import { Box, Button, Popover, Typography } from "@mui/material";
import { useState } from "react";

export default function PopComponent() {
  const [anchorE1, setAnchorE1] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorE1(null);
  };

  const open = Boolean(anchorE1);

  return (
    <div onMouseLeave={handlePopoverClose}>
      <Button
        onMouseEnter={handlePopoverOpen}
        // onMouseLeave={handlePopoverClose}
      >
        Hover Me
      </Button>
      <Popover
        open={open}
        anchorEl={anchorE1}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onMouseLeave={handlePopoverClose}
      >
        <Box sx={{ width: 250 }}>
          <Typography sx={{ mb: 1 }}>Popover title</Typography>
          <Typography>Popover content</Typography>
        </Box>
      </Popover>
    </div>
  );
}
