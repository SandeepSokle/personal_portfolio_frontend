import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import { GeneralInputField } from "../GeneralComponents/GeneralInputField";
import { sendMessage } from "../HandleFunctions/handleFunctions";
import { openSnackbar } from "../Redux/Snackbar/snackbarStore";
import "./css/Footer.css";

export const Footer = () => {
  const [getCompleteData, setGetCompleteData] = useState();
  const [data, setData] = useState({});
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

  const handleSubmit = () => {
    // console.log("Enter In handle Submit!!");
    if (!data.name || data.name === "") {
      // console.log("Please enter your name!!", data.name);
      dispatch(openSnackbar("Please enter your name!!", "error"));
      //Please enter your name
    } else if (!data.email || data.email === "") {
      // console.log("Please Enter your email!!");
      dispatch(openSnackbar("Please Enter your email!!", "error"));
      // Please Enter your email
    } else if (!data.subject || data.subject === "") {
      // console.log(" Enter Title!!");
      dispatch(openSnackbar("Enter Title!!", "error"));
      // Please Enter Title
    } else if (!data.description || data.description === "") {
      // console.log("Please Describe your Message!!");
      dispatch(openSnackbar("Please Describe your Message!!", "error"));
      // Please Describe your Message
    } else {
      sendMessage({ data, dispatch });
      setData({});
    }
  };

  return (
    <div
      className="footer"
      style={{
        backgroundColor: "#636e72",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",

        // paddingBottom: "0px",

        background: "#abbaab" /* fallback for old browsers */,
        background:
          "-webkit-linear-gradient(to right, #ffffff, #abbaab)" /* Chrome 10-25, Safari 5.1-6 */,
        background:
          "linear-gradient(to right, #ffffff, #abbaab)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      }}
      id="footer"
    >
      <Box className="footerOuterBox">
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: "550",
            textAlign: "center",
            margin: "2rem 1rem",
          }}
        >
          Here is where you should write your message to readers to have them
          get in contact with you.
        </div>
        <div
          className="footerContent"
          style={{
            width: "100%",
          }}
        >
          <Box
            className="footerForm"
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "1rem 2rem",
              // backgroundColor:"white",
            }}
          >
            {/* <TextField
              fullWidth
              sx={{
                margin: "0.5rem 0px",
              }}
              border="white"
              overflow="auto"
              required
              id="outlined-required"
              label="Name"
            /> */}
            <GeneralInputField
              // selectedItem={selectedItem}
              data={data}
              setData={setData}
              // width="48%"
              place={"Enter Your Name *"}
              // value={data?.name}
              dataKey={"name"}
              // value = {data.name}
            />
            {/* <TextField
              fullWidth
              sx={{
                margin: "0.5rem 0px",
              }}
              required
              //   error
              id="outlined-error-helper-text"
              label="Email"
              //   helperText="Incorrect entry."
            /> */}
            <GeneralInputField
              // selectedItem={selectedItem}
              data={data}
              setData={setData}
              // width="48%"
              place={"Enter Your Email *"}
              // value={data?.name}
              dataKey={"email"}
              // value = {data.name}
            />
            {/* <TextField
              fullWidth
              sx={{
                margin: "0.5rem 0px",
              }}
              required
              id="outlined-required"
              label="Subject"
            /> */}
            <GeneralInputField
              // selectedItem={selectedItem}
              data={data}
              setData={setData}
              // width="48%"
              place={"Enter Subject/Title *"}
              // value={data?.name}
              dataKey={"subject"}
              // value = {data.name}
            />
            {/* <TextField
              fullWidth
              sx={{
                margin: "0.5rem 0px",
              }}
              required
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
            /> */}
            <GeneralInputField
              // selectedItem={selectedItem}
              data={data}
              setData={setData}
              // width="48%"
              place={"Message Description *"}
              // value={data?.name}
              dataKey={"description"}
              // value = {data.name}
            />
            <Button
              sx={{
                margin: "1rem 0px",
                width: "40%",
              }}
              variant="contained"
              color="success"
              onClick={(e) => {
                // e.preventDefault();
                handleSubmit();
              }}
            >
              Submit
            </Button>
          </Box>
          <Box
            className="footerContacts"
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "1rem 2rem",
            }}
          >
            <div
              style={{
                width: "100%",
              }}
            >
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
                          width: "25%",
                        }}
                      >
                        {" "}
                        {`${e.split(":")[0]} :`}
                      </div>
                      <div
                        style={{
                          // fontWeight: "bold",
                          width: "75%",
                        }}
                      >{` ${e.split(":")[1]}`}</div>
                    </li>
                  );
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
