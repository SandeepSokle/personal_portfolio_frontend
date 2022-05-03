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

const drawerWidth = 240;

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
  const [selectedTab, setSelectedTab] = React.useState("About");
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const renderSwitch = (val) => {
    switch (val) {
      case "About":
        return <AdminAbout selectedTab = {val} />;
      case "Resume":
        return <AdminResume selectedTab = {val}/>;
      case "Projects":
        return <AdminProjects selectedTab = {val}/>;
      case "Experience":
        return <AdminExperience selectedTab = {val}/>;
      case "Blog":
        return <AdminBlog selectedTab = {val}/>;
      case "Contacts":
        return <AdminContacts selectedTab = {val}/>;
      default:
        return <AdminAbout selectedTab = {val}/>;
    }
  };

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
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {selectedTab}
            </Typography>
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
          <Box  sx={{ mt: 11, mb: 4, p: 0 }}>
            {renderSwitch(selectedTab)}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
