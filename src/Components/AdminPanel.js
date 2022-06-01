import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import Container from "@mui/material/Container";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import WorkIcon from "@mui/icons-material/Work";
import BookIcon from "@mui/icons-material/Book";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { AdminAbout } from "../AdminPanelComponent/AdminAbout";
import { AdminResume } from "../AdminPanelComponent/AdminResume";
import { AdminProjects } from "../AdminPanelComponent/AdminProjects";
import { AdminExperience } from "../AdminPanelComponent/AdminExperience";
import { AdminBlog } from "../AdminPanelComponent/AdminBlog";
import { AdminContacts } from "../AdminPanelComponent/AdminContacts";
import {
  getDataActionCreater,
  logoutUserActionCreater,
} from "../Redux/getDataActionCreater";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { Button, Modal, Popover, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useHistory } from "react-router-dom";
const drawerWidth = 240;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// const itemList = [
//   {
//     icon: <InfoIcon />,
//     label: "About",
//   },
//   {
//     icon: <DocumentScannerIcon />,
//     label: "Resume",
//   },
//   {
//     icon: <ImportContactsIcon />,
//     label: "Projects",
//   },
//   {
//     icon: <WorkIcon />,
//     label: "Experience",
//   },
//   {
//     icon: <BookIcon />,
//     label: "Blog",
//   },
//   {
//     icon: <RecentActorsIcon />,
//     label: "Contacts",
//   },
// ];

const mdTheme = createTheme();

export const AdminPanel = () => {
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElBtn, setAnchorElBtn] = React.useState(null);
  const [selectedTab, setSelectedTab] = React.useState("About");
  const [secretKey, setSecretKey] = React.useState("");
  const [openSecretModel, setOpenSecretModel] = React.useState(false);
  const handleOpenSecretModel = () => setOpenSecretModel(true);
  const handleCloseSecretModel = () => setOpenSecretModel(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    console.log("In effect!!");
    dispatch(getDataActionCreater());
  }, [dispatch]);

  const renderSwitch = (val) => {
    switch (val) {
      case "About":
        return <AdminAbout selectedTab={val} />;
      case "Resume":
        return <AdminResume selectedTab={val} />;
      case "Projects":
        return <AdminProjects selectedTab={val} />;
      case "Experience":
        return <AdminExperience selectedTab={val} />;
      case "Blog":
        return <AdminBlog selectedTab={val} />;
      case "Contacts":
        return <AdminContacts selectedTab={val} />;
      default:
        return <AdminAbout selectedTab={val} />;
    }
  };

  const userData = useSelector((state) => {
    // console.log(state.data.user);
    return state.data.user;
  });

  // console.log(userData);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open1 = Boolean(anchorEl);

  const [anchorElModel, setAnchorElModel] = React.useState(null);

  const handleClick = (event) => {
    setAnchorElModel(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElModel(null);
  };

  const openModel = Boolean(anchorElModel);
  const id = openModel ? "simple-popover" : undefined;

  // console.log("secretKey", secretKey);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                {selectedTab}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "1.3rem",
                  }}
                >
                  {userData?.displayName}
                </div>
                <Typography
                  aria-owns={open1 ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                  onClick={handleClick}
                  sx={{
                    m: "0rem 0.8rem",
                  }}
                >
                  {/* Hover with a Popover. */}
                  <Avatar
                    alt={`${userData?.displayName}`}
                    src={`${userData?.photoURL}`}
                  />
                </Typography>
                <Button
                  variant="contained"
                  color="info"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  <HomeIcon />
                </Button>
                <Popover
                  id="mouse-over-popover"
                  sx={{
                    pointerEvents: "none",
                  }}
                  open={open1}
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
                  <Typography sx={{ p: 1, textAlign: "center" }}>
                    <div
                      style={{
                        margin: "0px 10px",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {userData?.displayName}
                    </div>
                    <div
                      style={{
                        margin: "0px 10px",
                        fontSize: "18px",
                        // fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {userData?.email}
                    </div>
                  </Typography>
                </Popover>
                <Popover
                  id={id}
                  open={openModel}
                  anchorEl={anchorElModel}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Typography sx={{ p: 2, textAlign: "center" }}>
                    <div
                      style={{
                        margin: "8px 1px",
                        marginTop: "0px",
                        fontSize: "22px",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {userData?.displayName}
                    </div>
                    <div
                      style={{
                        margin: "8px 1px",
                        fontSize: "20px",
                        // fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {userData?.email}
                    </div>
                    <div
                      style={{
                        margin: "8px 1px",
                        // fontSize: "20px",
                        // fontWeight: "bold",
                      }}
                    >
                      <Button
                        // sx={{
                        //   m: "8px 0px",
                        //   mb: "0px",
                        //   // fontSize: "18px",
                        //   // fontWeight: "bold",
                        // }}
                        variant="text"
                        onClick={() => {
                          setOpenSecretModel(true);
                          handleOpenSecretModel();
                        }}
                      >
                        Add secret Key
                      </Button>
                    </div>
                    <Button
                      sx={{
                        m: "8px 0px",
                        mb: "0px",
                        // fontSize: "18px",
                        // fontWeight: "bold",
                      }}
                      variant="contained"
                      onClick={() => {
                        dispatch(logoutUserActionCreater());
                        history.push("/");
                      }}
                    >
                      Sign Out
                    </Button>
                  </Typography>
                </Popover>
                {openSecretModel ? (
                  <Modal
                    open={openModel}
                    onClose={handleCloseSecretModel}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Enter Your Secret Key
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            onChange={(ele) => {
                              setSecretKey(ele.target.value);
                            }}
                          />
                        </div>
                        <div
                          style={{
                            textAlign: "end",
                          }}
                        >
                          {" "}
                          <Button
                            sx={{
                              m: "8px 8px",
                              mb: "0px",
                              // fontSize: "18px",
                              // fontWeight: "bold",
                            }}
                            variant="text"
                            onClick={(ele) => {
                              handleCloseSecretModel();
                              handleClose();
                            }}
                          >
                            Cancel
                          </Button>
                          <Button
                            sx={{
                              m: "8px 2px",
                              mb: "0px",
                              // fontSize: "18px",
                              // fontWeight: "bold",
                            }}
                            variant="contained"
                            onClick={(ele) => {
                              // console.log(secretKey)
                              handleCloseSecretModel();
                              handleClose();
                              dispatch(addSecretKeyActionCreater(secretKey));
                            }}
                          >
                            Add
                          </Button>
                        </div>
                      </Typography>
                    </Box>
                  </Modal>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />

          {/* List of left nav */}
          <List>
            <div>
              <ListItem
                button
                onClick={(e) => {
                  // console.log(e.currentTarget.innerText);
                  setSelectedTab(e.currentTarget.innerText);
                }}
              >
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem
                button
                onClick={(e) => {
                  // console.log(e.currentTarget.innerText);
                  setSelectedTab(e.currentTarget.innerText);
                }}
              >
                <ListItemIcon>
                  <DocumentScannerIcon />
                </ListItemIcon>
                <ListItemText primary="Resume" />
              </ListItem>
              <ListItem
                button
                onClick={(e) => {
                  // console.log(e.currentTarget.innerText);
                  setSelectedTab(e.currentTarget.innerText);
                }}
              >
                <ListItemIcon>
                  <ImportContactsIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem
                button
                onClick={(e) => {
                  // console.log(e.currentTarget.innerText);
                  setSelectedTab(e.currentTarget.innerText);
                }}
              >
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary="Experience" />
              </ListItem>
              <ListItem
                button
                onClick={(e) => {
                  // console.log(e.currentTarget.innerText);
                  setSelectedTab(e.currentTarget.innerText);
                }}
              >
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary="Blog" />
              </ListItem>
              {/* <ListItem
                button
                onClick={(e) => {
                  console.log(e.currentTarget.innerText);
                  setSelectedTab(e.currentTarget.innerText);
                }}
              >
                <ListItemIcon>
                  <RecentActorsIcon />
                </ListItemIcon>
                <ListItemText primary="Contacts" />
              </ListItem> */}
            </div>
          </List>
          {/* List of left nav */}
        </Drawer>
        {/* ///Container */}
        {/* {userData || secretKey ? "" : setSecretKey(prompt("Enter Your Secret Key!!"))} */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            padding: "0px",
          }}
        >
          <Box sx={{ mt: 11, mb: 4, p: 0 }}>{renderSwitch(selectedTab)}</Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
