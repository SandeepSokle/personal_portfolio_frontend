import * as React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import ProfileImage from "../Images/profileImg.png";
import { GeneralButton } from "../GeneralComponents/GeneralButton";
import DownloadIcon from "@mui/icons-material/Download";
export const About = () => {
  const contacts = [
    "Nordic-Giant Project",
    "(Your Street)",
    "(Your City)",
    "(Your State)",
    "(Your Zip/Postal Code)",
    "555-555-5555",
    "youremailhere@gmail.com",
  ];

  return (
    <Box
      sx={{
        zIndex: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "72vw",
        marginTop: "2rem",
        padding: "2rem 4rem",
        paddingBottom :"0px"
      }}
      id = "about"
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
        <Box>
          <h1
            style={{
              color: "#2e7d32",
              fontWeight: 700,
            }}
          >
            About Me
          </h1>
          <p>
            Use this bio section as your way of describing yourself and saying
            what you do, what technologies you like to use or feel most
            comfortable with, describing your personality, or whatever else you
            feel like throwing in.
          </p>
        </Box>
        <Box>
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1
                style={{
                  color: "#2e7d32",
                  fontWeight: 700,
                }}
              >
                Contact Details
              </h1>
              <ul>
                {contacts.map((e) => {
                  return <li>{e}</li>;
                })}
              </ul>
            </div>
            <GeneralButton
              title={"Download Resume"}
              btnIcon={DownloadIcon}
              btnColor={"success"}
              disabled
            />
          </div>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 501, borderRadius: "40px", padding: "1rem 1rem" }}
        image={ProfileImage}
        alt="Live from space album cover"
      />
    </Box>
  );
};
