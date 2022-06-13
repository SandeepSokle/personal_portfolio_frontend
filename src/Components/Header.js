import * as React from "react";
import Box from "@mui/material/Box";
import image from "../Images/HeaderBack.jpg";
import Navbar from "./Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookIcon from "@mui/icons-material/Book";
import CodeIcon from "@mui/icons-material/Code";
import { GeneralButton } from "../GeneralComponents/GeneralButton";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import { useDispatch, useSelector } from "react-redux";
import "./css/Header.css";
export default function Header() {
  const title = "Software Engineer";
  // const des = `I am a javaScript Programmer “Adjunct professor of creative writing at Columbia University, published author, former lifestyle editor at Esquire, the New York Times. I can teach you how to find, shape, pitch, and publish stories for web & print. `;

  // console.log(GitHubIcon);
  const [getCompleteData, setGetCompleteData] = React.useState();
  const [links, setLinks] = React.useState({});

  const dispatch = useDispatch();
  const aboutData = useSelector((state) => {
    return state.data.about;
  });

  React.useEffect(() => {
    // console.log(aboutData);
    setGetCompleteData(aboutData);
  }, [aboutData]);

  React.useEffect(() => {
    if (getCompleteData) {
      let link = getCompleteData["links details"][0]?.data;
      setLinks(link);
      // console.log({
      //   links,
      // });
    }
  }, [getCompleteData]);

  // console.log(links?.linkName);

  React.useEffect(() => {
    dispatch(getDataActionCreater());
  }, [dispatch]);

  const handleOpenLink = (name) => {
    window.open(links[name], "_blank", "noopener,noreferrer");
    // window.location.href = links[name];
  };

  return (
    <Box
      className="header"
      fullWidth
      sx={{  height: "100vh", position: "relative" }}
      style={{
        overflow: "hidden",
       
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id="header"
    >
      <Navbar className="navbar" />

      <Box
        sx={{
          height: "59%",
          width: "100%",
          position: "absolute",
          top: "50%",
          right: "0%",
          transform: "translate(0,-50%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          zIndex: 2,
          margin: "2rem 0",
        }}
      >
        {/* /////header */}
        <Box
        className = "headerName"
          style={{ textShadow: "0px 0px 6px black" }}
          // sx={{
          //   fontSize: "4.5rem",
          //   fontWeight: "bold",
          //   width: "100%",
          //   display: "flex",
          //   marginBottom: "2rem",
          //   justifyContent: "center",
          //   // color: "#2e7d32",
          // }}
        >
          Sandeep Sokle
        </Box>
        <Box
        className = "headerTitle"

          style={{ textShadow: "0px 0px 18px black" }}
          // sx={{
          //   fontSize: "2.5rem",
          //   fontWeight: "bold",
          //   width: "100%",
          //   display: "flex",
          //   marginBottom: "2rem",
          //   justifyContent: "center",
          //   // textDecoration: "underline",
          //   // textDecorationColor: "#2e7d32",
          // }}
        >
          {title}
        </Box>
        {/* //description */}
        {/* <Box
          style={{ textShadow: "0px 0px 8px black" }}
          sx={{
            fontSize: "1.5rem",
            width: "50%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "2rem",
            height:'20%'
            // borderBottom: "1px solid white",
          }}
        >
          {/* {des} */}
        {/* </Box> */}
        {/* ///inkes Buttons */}
        <Box
        className = "headerButtons"
          // sx={{
          //   width: "65%",
          //   display: "flex",
          //   flexDirection: "row",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   padding: "2rem 2rem",
          //   marginTop: "5%",
          // }}
        >
          <GeneralButton
            title={"Projects"}
            btnIcon={BookIcon}
            btnColor={"secondary"}
            link={"https://primeprogrammingworld.blogspot.com/"}
          />
          <GeneralButton
            title={"LinkedIn"}
            btnIcon={LinkedInIcon}
            btnColor={"primary"}
            link={links?.linkName}
            onClick={(e) => {
              // e.preventDefault();
              handleOpenLink("linkName");
            }}
          />
          <GeneralButton
            title={"Github"}
            btnIcon={GitHubIcon}
            btnColor={"warning"}
            link={links?.gitName}
            onClick={(e) => {
              // e.preventDefault();
              handleOpenLink("gitName");
            }}
          />
          <GeneralButton
            title={"Leet Code"}
            btnIcon={CodeIcon}
            btnColor={"success"}
            link={links?.leetCodeName}
            onClick={(e) => {
              // e.preventDefault();
              handleOpenLink("leetCodeName");
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "30vh",
          }}
        >{` `}</Box>
      </Box>
    </Box>
  );
}
