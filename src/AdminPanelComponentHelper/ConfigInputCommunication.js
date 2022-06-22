import React from "react";
import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import { Box, Modal, Popover, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage, getMessage } from "../HandleFunctions/handleFunctions";
import ModelForMessage from "./ModelForMessage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ConfigInputCommunication = (props) => {
  const {
    setSelectedItem,
    setSelectedID,
    i,
    id,
    setData,
    element,
    selectedVal,
    setEditFile,
    setEditLink,
    setIsEdit,
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  // console.log(configType);
  // const [data, setData] = useState({});

  const [openModel, setOpenModel] = React.useState(false);
  const handleOpen = () => setOpenModel(true);
  // const handleClose = () => setOpenModel(false);

  // console.log(openModel);

  const dispatch = useDispatch();
  const feature = {
    fontSize: "30px",
    margin: "0 5px",
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const userData = useSelector((state) => {
    // console.log(state)
    return state?.data?.user;
  });
  const userSecret = useSelector((state) => {
    // console.log(state)
    return state?.data?.secret;
  });

  const handleDelete = async (data) => {
    deleteMessage(data);
    let resData = await getMessage({ userData, userSecret, dispatch });
    // console.log("resData", resData);
    setData(resData);
  };

  return (
    <div
      className="d-flex align-items-center"
      style={{
        width: "49%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ width: "70%" }}>
        <TextField
          fullWidth
          className="form-control"
          disabled
          value={element?.subject}
          // onChange={handleChange}
          label={`${selectedVal} ${i + 1}`}
          id="fullWidth"
        />
      </div>

      <div
        className="d-flex align-items-center "
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ width: "30%" }}
          onClick={() => {
            // console.log(element?._id);
            handleDelete({ id: element?._id, dispatch });
          }}
        >
          {" "}
          <IconButton aria-label="delete" size="large">
            <DeleteTwoToneIcon style={feature} />
          </IconButton>
        </div>
        <div
          style={{ width: "30%" }}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          onClick={handleOpen}
        >
          {" "}
          <IconButton aria-label="delete" size="large">
            <InfoTwoToneIcon style={{ fontSize: "30px" }} />
          </IconButton>
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <div
              style={{
                padding: ".5rem",
                fontSize: "1.1rem",
                maxWidth: "20rem",
                fontStyle: "none",
              }}
            >
              {element?.description || "info not available"}
            </div>
          </Popover>
        </div>
      </div>
      {openModel ? (
        <ModelForMessage
          element={element}
          openModel={openModel}
          setOpenModel={setOpenModel}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ConfigInputCommunication;
