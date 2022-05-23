import * as React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import ProfileImage from "../Images/profileImg.png";
import { GeneralButton } from "../GeneralComponents/GeneralButton";
import DownloadIcon from "@mui/icons-material/Download";
import { useDispatch, useSelector } from "react-redux";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
export const About = () => {
  const [getCompleteData, setGetCompleteData] = React.useState();
  const [about, setAbout] = React.useState("");
  const [contactUs, setContactUs] = React.useState([]);
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
      let aboutMe = getCompleteData["about me"][0]?.data?.name;
      let contacts = getCompleteData["contact details"][0]?.data;
      let contactDetails = [
        `Name : ${contacts.firstName} ${contacts.lastName}`,
        `Street: ${contacts.street}`,
        `City: ${contacts.city}`,
        `State: ${contacts.state}`,
        `PinCode: ${contacts.pinCode}`,
        `Phone: ${contacts.phone}`,
        `Email: ${contacts.email}`,
      ];
      setAbout(aboutMe);
      setContactUs(contactDetails);

      // console.log({
      //   aboutMe,
      //   contacts,
      //   contactDetails,
      // });
    }
  }, [getCompleteData]);

  React.useEffect(() => {
    dispatch(getDataActionCreater());
  }, [dispatch]);

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
        paddingBottom: "0px",
      }}
      id="about"
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
            {/* Use this bio section as your way of describing yourself and saying
            what you do, what technologies you like to use or feel most
            comfortable with, describing your personality, or whatever else you
            feel like throwing in. */}
            {about}
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
                {contactUs.map((e) => {
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
