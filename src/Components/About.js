import * as React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import ProfileImage from "../Images/profileImg.png";
import { GeneralButton } from "../GeneralComponents/GeneralButton";
import DownloadIcon from "@mui/icons-material/Download";
import { useDispatch, useSelector } from "react-redux";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import "./css/About.css";
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
      id="about"
      sx={{
        zIndex: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // width: "72vw",
        marginTop: "2rem",
        padding: "2rem 13rem",
        paddingBottom: "0px",
      }}
      style={{
        background: "#FFEEEE" /* fallback for old browsers */,
        background:
          " -webkit-linear-gradient(to right, #DDEFBB, #FFEEEE)" /* Chrome 10-25, Safari 5.1-6 */,
        background:
          "linear-gradient(to right, #DDEFBB, #FFEEEE)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Box
          className="aboutDetails"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
          className="aboutDetailsAbout"

            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                color: "#2e7d32",
                fontWeight: 700,
              }}
            >
              About Me
            </h1>
            <p
              style={{
                fontSize: "20px",
              }}
            >
              {/* Use this bio section as your way of describing yourself and saying
            what you do, what technologies you like to use or feel most
            comfortable with, describing your personality, or whatever else you
          feel like throwing in. */}
              {about}
            </p>
          </div>
          <div
          className="aboutDetailsContact"
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
                  return (
                    <li
                      style={{
                        fontSize: "18px",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        {`${e.split(":")[0]} :`}
                      </div>
                      <div>{` ${e.split(":")[1]}`}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Box>
        <Box>
          {" "}
          <div
            className="aboutImg"
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 250, borderRadius: "40px", padding: "1rem 1rem" }}
              image={ProfileImage}
              alt="Live from space album cover"
            />
            <GeneralButton
              title={"Download Resume"}
              btnIcon={DownloadIcon}
              btnColor={"success"}
              disabled
            />
          </div>
        </Box>
      </Box>
      {/* <CardMedia
        component="img"
        sx={{ width: 501, borderRadius: "40px", padding: "1rem 1rem" }}
        image={ProfileImage}
        alt="Live from space album cover"
      /> */}
    </Box>
  );
};
