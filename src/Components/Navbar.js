import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";
import { Avatar, Button, Popover, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // React.useEffect(() => {
  //   setScrollPosition((scrollPosition + 100) % 2500);
  // }, []);

  // console.log(scrollPosition);

  // console.log(value);

  const userData = useSelector((state) => {
    console.log(state);
    return state.data.user;
  });


  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: "0px",
        right: "0px",
        zIndex: 3,

        // backgroundColor: "#2e7d32",
        backgroundColor: `${
          scrollPosition <= 100
            ? "#2e7d3200"
            : scrollPosition <= 300
            ? "#3481382e"
            : scrollPosition <= 500
            ? "#3481385c"
            : scrollPosition <= 680
            ? "#34813894"
            : "#348138b3"
        }`,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0px 10px",
      }}
    >
      <div></div>
      <Tabs value={value} onChange={handleChange} centered>
        <Link
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="Home"
            value={0}
            color="white"
            sx={{
              color: "white",
            }}
          />
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="About"
            value={1}
            sx={{
              color: "white",
            }}
            // onClick={() => {
            //   setScrollPosition(500);
            //   window.pageYOffset = 500;
            // }}
          />
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="Resume"
            value={2}
            sx={{
              color: "white",
            }}
          />
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="Works"
            value={3}
            sx={{
              color: "white",
            }}
          />
        </Link>
        <Link
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="Experience"
            value={4}
            sx={{
              color: "white",
            }}
          />
        </Link>
        <Link
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="Blog"
            value={5}
            sx={{
              color: "white",
            }}
          />
        </Link>
        <Link
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true}
          position={"top"}
        >
          <Tab
            label="Contacts"
            value={6}
            sx={{
              color: "white",
            }}
          />
        </Link>
      </Tabs>

      <div
        style={{
          // height: "1rem",
          marginTop: "4px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            history.push("/login");
          }}
        >
          Admin
        </Button>
        {userData ? (
          <>
            <Typography
              aria-owns={ "mouse-over-popover" }
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              {/* {userData?.displayName} */}
              <Avatar
                sx={{
                  m: "0rem 1rem",
                }}
                alt={userData?.displayName || userData?.email}
                src={userData?.photoURL}
              />
            </Typography>
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
              {" "}
              <Typography sx={{ p: 2.5, textAlign: "center" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  {userData?.displayName}
                </div>
                <div>{userData?.email}</div>
              </Typography>
            </Popover>
          </>
        ) : (
          ""
        )}
      </div>

      {/* <Button
      // onChange={() => {
      //   history.push("/admin");
      // }}
      >
        Admin
      </Button> */}
    </Box>
  );
}
