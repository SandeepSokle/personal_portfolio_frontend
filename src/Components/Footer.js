import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import { GeneralInputField } from "../GeneralComponents/GeneralInputField";
import { sendMessage } from "../HandleFunctions/handleFunctions";

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
    console.log("Enter In handle Submit!!");
    if (!data.name || data.name === "") {
      console.log("Please enter your name!!", data.name);
      //Please enter your name
    } else if (!data.email || data.email === "") {
      console.log("Please Enter your email!!");
      // Please Enter your email
    } else if (!data.subject || data.subject === "") {
      console.log(" Enter Title!!");
      // Please Enter Title
    } else if (!data.description || data.description === "") {
      console.log(" Please Describe your Message!!");
      // Please Describe your Message
    } else {
      sendMessage({ data, dispatch });
      setData({});
    }
  };

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
      id="footer"
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
