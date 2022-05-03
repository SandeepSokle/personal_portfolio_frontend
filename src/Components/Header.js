import * as React from "react";
import Box from "@mui/material/Box";
import image from "../Images/HeaderBack.jpg";
import Navbar from "./Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookIcon from "@mui/icons-material/Book";
import CodeIcon from "@mui/icons-material/Code";
import { GeneralButton } from "../GeneralComponents/GeneralButton";
export default function Header() {
  const title = "Software Engineer";
  // const des = `I am a javaScript Programmer “Adjunct professor of creative writing at Columbia University, published author, former lifestyle editor at Esquire, the New York Times. I can teach you how to find, shape, pitch, and publish stories for web & print. `;

  // console.log(GitHubIcon);

  return (
    <Box
      sx={{ width: "100vw", height: "100vh", position: "relative" }}
      style={{
        overflow: "hidden",
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id = "header"
    >
      <Navbar />

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
          style={{ textShadow: "0px 0px 6px black" }}
          sx={{
            fontSize: "4.5rem",
            fontWeight: "bold",
            width: "100%",
            display: "flex",
            marginBottom: "2rem",
            justifyContent: "center",
            color: "#2e7d32"
          }}
        >
          Sandeep Sokle
        </Box>
        <Box
          style={{ textShadow: "0px 0px 18px black" }}
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
            width: "100%",
            display: "flex",
            marginBottom: "2rem",
            justifyContent: "center",
            textDecoration:"underline"
            ,
            textDecorationColor : "#2e7d32"
          }}
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
          sx={{
            width: "65%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem 2rem",
            marginTop:"5%"
          }}
        >
          <GeneralButton
            title={"Projects"}
            btnIcon={BookIcon}
            btnColor={"secondary"}
          />
          <GeneralButton
            title={"LinkedIn"}
            btnIcon={LinkedInIcon}
            btnColor={"primary"}
          />
          <GeneralButton
            title={"Github"}
            btnIcon={GitHubIcon}
            btnColor={"warning"}
          />
          <GeneralButton
            title={"Leet Code"}
            btnIcon={CodeIcon}
            btnColor={"success"}
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
