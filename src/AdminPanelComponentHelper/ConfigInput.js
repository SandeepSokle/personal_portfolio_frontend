import React from "react";
import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import { Popover, TextField } from "@mui/material";
import {
  handleDelete,
  handleUpdate,
  handleUpdateProjectStatus,
} from "../HandleFunctions/handleFunctions";
import { useDispatch, useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";
import RuleIcon from "@mui/icons-material/Rule";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
const ConfigInput = (props) => {
  const {
    setSelectedItem,
    setSelectedID,
    i,
    id,
    element,
    selectedVal,
    setEditFile,
    setEditLink,
    setIsEdit,
    selectedTab,
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  // console.log(configType);
  // const [data, setData] = useState({});
  const dispatch = useDispatch();
  const feature = {
    fontSize: "30px",
    margin: "0 5px",
  };

  // const deleteConfiguration = async (id, data,element) => {
  //   try {
  //     // console.log("deleteConfiguration", id, data);
  //     let response = await axios.put(
  //       process.env.REACT_APP_BASE_URL +
  //         "/api/v1/configuration/delete" +
  //         `/${id}`,
  //       data
  //     );
  //     // alert(response.statusText + " Delete Configuration Successfully");
  //     dispatch(openSnackbar("Delete Configuration Successfully", "success"));
  //     dispatch(deleteConfiguationActionCreater(id,data,element))
  //     setConflict(true);
  //   } catch (e) {
  //     // console.log(e);
  //     // alert(e);
  //     dispatch(openSnackbar("Delete Configuration failed", "error"));
  //     dispatch(loaderEndActionCreater());

  //   }
  // };

  // useEffect(() => {
  //   setData(element);
  // }, [element, configType]);

  const handleEdit = () => {
    if (setSelectedItem) setSelectedItem(element);
    if (setSelectedID) setSelectedID(id);
    if (setEditFile) setEditFile(false);
    if (setEditLink) setEditLink(false);
    if (setIsEdit) setIsEdit(true);
  };

  const secretData = useSelector((state) => {
    // console.log(state)
    return state?.data?.secret;
  });

  const userSecret = useSelector((state) => {
    // console.log(state);
    return state.data.secret;
  });

  const userData = useSelector((state) => {
    // console.log(state);
    return state.data.user;
  });

  const handleChangeStatus = () => {
    let data = {
      selectedVal,
    };
    // console.log(selectedVal);
    handleUpdateProjectStatus({
      id: id,
      data,
      dispatch,
      userData,
      userSecret,
    });
    dispatch(getDataActionCreater());
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverClose2 = () => {
    setAnchorEl2(null);
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  return (
    <div
      className="d-flex align-items-center"
      style={{
        width: "49%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 10px",
      }}
    >
      <div style={{ width: `${selectedTab ? "60%" : "70%"}` }}>
        <TextField
          fullWidth
          className="form-control"
          disabled
          value={element?.name}
          // onChange={handleChange}
          label={`${selectedVal} ${i + 1}`}
          id="fullWidth"
        />
      </div>

      <div
        className="d-flex align-items-center "
        style={{
          width: `${selectedTab ? "35%" : "30%"}`,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "0px 10px",
        }}
      >
        <div style={{ width: "30%" }} onClick={handleEdit}>
          <IconButton aria-label="delete" size="large">
            <EditTwoToneIcon style={feature} />
          </IconButton>
        </div>
        <div
          style={{ width: "30%" }}
          onClick={() => {
            // console.log(id, element);
            handleDelete({ id, dispatch, userData, secretData });
            dispatch(getDataActionCreater());
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
              {element.des ||
                element.courseName ||
                element.responsibility ||
                "info not available"}
            </div>
          </Popover>
        </div>
        {selectedTab ? (
          <div
            style={{ width: "30%" }}
            onClick={handleChangeStatus}
            onMouseEnter={handlePopoverOpen2}
            onMouseLeave={handlePopoverClose2}
          >
            <IconButton aria-label="delete" size="large">
              {selectedVal === "Complete" ? (
                <RuleIcon style={feature} />
              ) : (
                <DoneIcon style={feature} />
              )}
            </IconButton>
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open2}
              anchorEl={anchorEl2}
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
                {selectedVal === "Complete" ? "Uncompleted" : "Completed"}
              </div>
            </Popover>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ConfigInput;
