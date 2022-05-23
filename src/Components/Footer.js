import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataActionCreater } from "../Redux/getDataActionCreater";

export const Footer = () => {

  const [getCompleteData, setGetCompleteData] = useState();
  const [contactUs, setContactUs] = useState([]);
  const dispatch = useDispatch();
  const aboutData = useSelector((state) => {
    return state.data.about;
  });

  useEffect(() => {
    // console.log(aboutData);
    setGetCompleteData(aboutData);
  }, [aboutData]);

  useEffect(() => {
    if (getCompleteData) {
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
      setContactUs(contactDetails);

      // console.log({
      //   aboutMe,
      //   contacts,
      //   contactDetails,
      // });
    }
  }, [getCompleteData]);

  useEffect(() => {
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
    <div
      style={{
        width: "100%",
        backgroundColor: "#636e72",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",
        padding: "2rem 4rem",
        paddingBottom: "0px",
      }}
      id = "footer"
    >
      <Box
        sx={{
          width: "60%",
        }}
      >
        <div>
          Here is where you should write your message to readers to have them
          get in contact with you.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              // backgroundColor:"white",
              padding: "1rem 2rem",
            }}
          >
            <TextField
              fullWidth
              sx={{
                margin: "0.5rem 0px",
              }}
              border="white"
              overflow="auto"
              required
              id="outlined-required"
              label="Name"
            />
            <TextField
              fullWidth
              sx={{
                margin: "0.5rem 0px",
              }}
              required
              //   error
              id="outlined-error-helper-text"
              label="Email"
              //   helperText="Incorrect entry."
            />
            <TextField
              fullWidth
              sx={{
                margin: "0.5rem 0px",
              }}
              required
              id="outlined-required"
              label="Subject"
            />
            <TextField
              fullWidth
              sx={{
                margin: "0.5rem 0px",
              }}
              required
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
            />
            <Button
              sx={{
                margin: "1rem 0px",
                width: "40%",
              }}
              variant="contained"
              color="success"
            >
              Submit
            </Button>
          </Box>
          <Box
            sx={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <h1>Contact Details</h1>
              <ul>
                {contactUs?.map((e) => {
                  return <li>{e}</li>;
                })}
              </ul>
            </div>
          </Box>
        </div>
      </Box>
      {/* {console.log("this is footer end")} */}
    </div>
  );
};
