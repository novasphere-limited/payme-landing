import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 526,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 2,
  textAlign: "center",
};

export default function ModalComponent({ children, modal, setModal }) {
  //   const [open, setOpen] = React.useState(modal);

  return (
    <div>
      <Modal
        open={modal}
        onClose={() => setModal(!modal)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={() => setModal(!modal)}
            sx={{
              position: "absolute",
              right: 0,
              top: -50,
              zIndex: 1,
              backgroundColor: "#fff",
            }}
          >
            <CloseIcon />
          </IconButton>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
