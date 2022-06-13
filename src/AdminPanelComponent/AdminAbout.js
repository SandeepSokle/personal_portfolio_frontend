import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { handleSave, handleUpdate } from "../HandleFunctions/handleFunctions";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import { GeneralInputField } from "../GeneralComponents/GeneralInputField";
import { openSnackbar } from "../Redux/Snackbar/snackbarStore";

export const AdminAbout = (props) => {
  const { selectedTab } = props;
  const [selectedVal, setSelectedVal] = React.useState("About Me");
  const [selectedId, setSelectedID] = React.useState("");
  const [data, setData] = React.useState({});
  const dispatch = useDispatch();

  const newData = useSelector((state) => {
    return state?.data?.about;
  });
  const userData = useSelector((state) => {
    // console.log(state);
    return state.data.user;
  });

  const userSecret = useSelector((state) => {
    // console.log(state);
    return state.data.secret;
  });

  const resetData = () => {
    if (newData) setData(newData[`${selectedVal.toLowerCase()}`][0]?.data);
    return;
  };

  React.useEffect(() => {
    if (newData) {
      // console.log(newData);
      setData(newData[`${selectedVal.toLowerCase()}`][0].data);
      setSelectedID(newData[`${selectedVal.toLowerCase()}`][0].id);
    }
  }, [newData, selectedVal]);
  // console.log("data!!", selectedId);

  const handleSubmit = async (name) => {
    switch (selectedVal) {
      case "About Me":
        if (data?.name && data.name !== "") {
          handleUpdate({
            id: selectedId,
            data,
            dispatch,
            userData,
            userSecret,
          });
        } else {
          // alert("You can not submit empty field::");
          dispatch(openSnackbar("You can not submit empty field::", "error"));
        }
        break;
      case "Contact Details":
        if (
          data?.firstName &&
          data.firstName !== "" &&
          data.lastName !== "" &&
          data.email !== "" &&
          data.city !== "" &&
          data.phone !== "" &&
          data.pinCode !== "" &&
          data.street !== "" &&
          data.state !== ""
        ) {
          handleUpdate({
            id: selectedId,
            data,
            dispatch,
            userData,
            userSecret,
          });
        } else {
          // alert("You can not submit empty field::");
          dispatch(openSnackbar("You can not submit empty field::", "error"));
        }
        break;
      case "Links Details":
        if (
          data?.gitName &&
          data.gitName !== "" &&
          data.leetCodeName !== "" &&
          data.linkName !== ""
        ) {
          handleUpdate({
            id: selectedId,
            data,
            dispatch,
            userData,
            userSecret,
          });
        } else {
          // alert("You can not submit empty field::");
          dispatch(openSnackbar("You can not submit empty field::", "error"));
        }
        break;
    }

    dispatch(getDataActionCreater());
  };

  const buttons = [
    <Button
      key="aboutMe"
      onClick={() => {
        setSelectedVal("About Me");
        resetData();
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      About Me
    </Button>,
    <Button
      key="contact"
      onClick={() => {
        setSelectedVal("Contact Details");
        resetData();
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      Contact Details
    </Button>,
    <Button
      key="links"
      onClick={() => {
        setSelectedVal("Links Details");
        resetData();
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      Links Details
    </Button>,
  ];
  return (
    <Grid
      sx={{
        display: "flex",
        "& > *": {},
      }}
    >
      <Grid
        xs={2.5}
        sx={{
          borderRight: "1rem solid rgb(0 0 0 / 26%)",
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
          width: "16%",
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
        >
          {buttons}
        </ButtonGroup>
      </Grid>
      <Grid xs={9.5} sx={{ p: "2px 2rem", width: "80%" }}>
        <h1
          style={{
            color: "rgb(25 118 210)",
            display: "block",
          }}
        >
          {selectedVal}
        </h1>

        <br></br>

        {selectedVal === "About Me" ? (
          <div
            style={{
              // border: "1px dashed",
              borderColor: "black",
              marginTop: "1rem",
              padding: "1rem",
            }}
          >
            {/* <TextField
              label="About Yourself"
              fullWidth
              multiline
              rows={4}
              value={data[0]?.data?.name}
              onChange={(ele) => {
                setData({ ...data, name: ele.target.value });
              }}
            /> */}
            <GeneralInputField
              selectedItem={data?.data}
              multiline
              data={data}
              setData={setData}
              // disabled={selectedData?.id ? true : false}
              width="98%"
              place={"About Yourself"}
              // value={data?.name}
              dataKey={"name"}
            />
            <Box
              fullWidth
              sx={{
                mt: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              width
            >
              <Button variant="contained" onClick={handleSubmit}>
                Update Data
              </Button>
            </Box>
          </div>
        ) : selectedVal === "Links Details" ? (
          <div
            style={{
              // border: "1px dashed",
              borderColor: "black",
              marginTop: "1rem",
              padding: "1rem",
            }}
          >
            {/* <TextField
              label="About Yourself"
              fullWidth
              multiline
              rows={4}
              value={data[0]?.data?.name}
              onChange={(ele) => {
                setData({ ...data, name: ele.target.value });
              }}
            /> */}
            <GeneralInputField
              selectedItem={data?.data}
              // multiline
              data={data}
              setData={setData}
              // disabled={selectedData?.id ? true : false}
              width="98%"
              place={"Linked In"}
              // value={data?.name}
              dataKey={"linkName"}
            />
            <GeneralInputField
              selectedItem={data?.data}
              // multiline
              data={data}
              setData={setData}
              // disabled={selectedData?.id ? true : false}
              width="98%"
              place={"Github"}
              // value={data?.name}
              dataKey={"gitName"}
            />
            <GeneralInputField
              selectedItem={data?.data}
              // multiline
              data={data}
              setData={setData}
              // disabled={selectedData?.id ? true : false}
              width="98%"
              place={"Leet Code"}
              // value={data?.name}
              dataKey={"leetCodeName"}
            />

            <Box
              fullWidth
              sx={{
                mt: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              width
            >
              <Button variant="contained" onClick={handleSubmit}>
                Update Data
              </Button>
            </Box>
          </div>
        ) : (
          <div
            style={{
              // border: "1px dashed",
              borderColor: "black",
              marginTop: "1rem",
              padding: "1rem",
            }}
          >
            <Box
              fullWidth
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              {/* <TextField
                label="First Name"
                sx={{
                  width: "48%",
                  m: 1,
                }}
                value={data[0]?.data?.firstName}
                onChange={(ele) => {
                  setData({ ...data, firstName: ele.target.value });
                }}
              /> */}
              <GeneralInputField
                selectedItem={data}
                data={data}
                setData={setData}
                // disabled={selectedData?.id ? true : false}
                width="48%"
                place={"First Name"}
                // value={data?.name}
                dataKey={"firstName"}
              />
              {/* <TextField
                label="Last Name"
                sx={{
                  width: "48%",
                  m: 1,
                }}
                // value = {data[0].lastName}
                onChange={(ele) => {
                  setData({ ...data, lastName: ele.target.value });
                }}
              />{" "} */}
              <GeneralInputField
                selectedItem={data}
                data={data}
                setData={setData}
                // disabled={selectedData?.id ? true : false}
                width="48%"
                place={"Last Name"}
                // value={data?.name}
                dataKey={"lastName"}
              />
              {/* <TextField
                label="Your Street"
                sx={{
                  width: "48%",
                  m: 1,
                }}
                // value = {data[0].street}
                onChange={(ele) => {
                  setData({ ...data, street: ele.target.value });
                }}
              />{" "} */}
              <GeneralInputField
                selectedItem={data}
                data={data}
                setData={setData}
                // disabled={selectedData?.id ? true : false}
                width="48%"
                place={"Your Street"}
                // value={data?.name}
                dataKey={"street"}
              />
              {/* <TextField
                label="Your City"
                sx={{
                  width: "48%",
                  m: 1,
                }}
                // value = {data[0].city}
                onChange={(ele) => {
                  setData({ ...data, city: ele.target.value });
                }}
              />{" "} */}
              <GeneralInputField
                selectedItem={data}
                data={data}
                setData={setData}
                // disabled={selectedData?.id ? true : false}
                width="48%"
                place={"Your City"}
                // value={data?.name}
                dataKey={"city"}
              />
              {/* <TextField
                label="Your State"
                sx={{
                  width: "48%",
                  m: 1,
                }}
                // value = {data[0].state}
                onChange={(ele) => {
                  setData({ ...data, state: ele.target.value });
                }}
              />{" "} */}
              <GeneralInputField
                selectedItem={data}
                data={data}
                setData={setData}
                // disabled={selectedData?.id ? true : false}
                width="48%"
                place={"Your State"}
                // value={data?.name}
                dataKey={"state"}
              />
              {/* <TextField
                label="Pin Code"
                sx={{
                  width: "48%",
                  m: 1,
                }}
                // value = {data[0].pinCode}
                onChange={(ele) => {
                  setData({ ...data, pinCode: ele.target.value });
                }}
              />{" "} */}
              <GeneralInputField
                selectedItem={data}
                data={data}
                setData={setData}
                // disabled={selectedData?.id ? true : false}
                onlyNumber
                width="48%"
                place={"Pin Code"}
                // value={data?.name}
                dataKey={"pinCode"}
              />
              {/* <TextField
                label="Phone Number"
                type="number"
                sx={{
                  width: "48%",
                  m: 1,
                }}
                // value = {data[0].phone}
                onChange={(ele) => {
                  setData({ ...data, phone: ele.target.value });
                }}
              />{" "} */}
              <GeneralInputField
                selectedItem={data}
                data={data}
                setData={setData}
                // disabled={selectedData?.id ? true : false}
                onlyNumber
                width="48%"
                place={"Phone Number"}
                // value={data?.name}
                dataKey={"phone"}
              />
              {/* <TextField
                label="Your Email"
                type="email"
                sx={{
                  width: "48%",
                  m: 1,
                }}
                // value = {data[0].email}
                onChange={(ele) => {
                  setData({ ...data, email: ele.target.value });
                }}
              />{" "} */}
              <GeneralInputField
                selectedItem={data}
                data={data}
                setData={setData}
                // disabled={selectedData?.id ? true : false}
                width="48%"
                place={"Your Email"}
                // value={data?.name}
                dataKey={"email"}
              />
            </Box>
            <Box
              fullWidth
              sx={{
                mt: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="contained" onClick={handleSubmit}>
                Update Data
              </Button>
            </Box>
          </div>
        )}
      </Grid>
    </Grid>
  );
};
