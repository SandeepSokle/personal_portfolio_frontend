import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModelForMessage(props) {
  const { element, openModel, setOpenModel } = props;

  //   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpenModel(true);
  const handleClose = () => setOpenModel(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={openModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Message Details</div>
            <div
              style={{
                cursor: "pointer",
                opacity: 10,
              }}
              onClick={() => {
                handleClose();
              }}
            >
              X
            </div>
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                // fontWeight: "bold",
                fontSize: "1.2rem",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  width: "8rem",
                }}
              >
                Name :
              </div>

              <div
                style={{
                  textTransform: "capitalize",
                  minWidth: "20rem",
                  maxWidth: "6rem",
                }}
              >
                {element?.name}
              </div>
            </div>
            <div
              style={{
                // fontWeight: "bold",
                fontSize: "1.2rem",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  width: "8rem",
                }}
              >
                Email :
              </div>

              <div
                style={{
                  textTransform: "capitalize",
                  minWidth: "20rem",
                  maxWidth: "20rem",
                }}
              >
                {element?.email}
              </div>
            </div>
            <div
              style={{
                // fontWeight: "bold",
                fontSize: "1.2rem",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  width: "8rem",
                }}
              >
                Subject :
              </div>

              <div
                style={{
                  textTransform: "capitalize",
                  minWidth: "20rem",
                  maxWidth: "20rem",
                }}
              >
                {element?.subject}
              </div>
            </div>
            <div
              style={{
                // fontWeight: "bold",
                fontSize: "1.2rem",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  width: "8rem",
                }}
              >
                Description :
              </div>

              <div
                style={{
                  textTransform: "capitalize",
                  minWidth: "20rem",
                  maxWidth: "40rem",
                }}
              >
                {element?.description}
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
