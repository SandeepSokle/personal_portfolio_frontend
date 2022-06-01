import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Grid, TextField } from "@mui/material";
import { AdminResumeEducationData } from "../AdminPanelComponentHelper/AdminResumeEducationData";
import { useDispatch, useSelector } from "react-redux";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import { GeneralInputField } from "../GeneralComponents/GeneralInputField";
import { handleSave, handleUpdate } from "../HandleFunctions/handleFunctions";
// import { DatePicker } from "@mui/x-date-pickers";
// import { GeneralDatePicker } from "../GeneralComponents/GeneralDatePicker";

export const AdminResume = (props) => {
  const { selectedTab } = props;
  const [selectedVal, setSelectedVal] = React.useState("Education");
  const [selectedItem, setSelectedItem] = React.useState({});
  const [isEdit, setIsEdit] = React.useState(false);
  const [data, setData] = React.useState({});
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [isUpdateHit, setISUpdateHit] = React.useState(false);
  const [selectedId, setSelectedID] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    // console.log(startDate, endDate);
    if (isUpdateHit) {
      setData({
        ...data,
        startDate,
        endDate,
      });
    }
    setISUpdateHit(false);
  }, [startDate, endDate, data, isUpdateHit]);

  const newData = useSelector((state) => {
    return state?.data?.resume;
  });

  const userData = useSelector((state) => {
    // console.log(state);
    return state.data.user;
  });

  const userSecret = useSelector((state) => {
    // console.log(state);
    return state.data.secret;
  });

  // console.log(userSecret)

  // React.useEffect(() => {
  //   dispatch(getDataActionCreater());
  // }, []);

  React.useEffect(() => {
    // console.log("selectedItem", selectedItem);
    setData(selectedItem);
    setStartDate(selectedItem?.startDate || "");
    setEndDate(selectedItem?.endDate || "");
    setISUpdateHit(true);
  }, [selectedItem]);

  // React.useEffect(() => {
  //   // console.log("newData in Admin : ", newData.education);
  //   setAllData(newData);
  // }, [newData]);

  // const dataEducation = [
  //   {
  //     name: "crsu",
  //     location: "Jind",
  //     startDate: Date(),
  //     endDate: Date(),
  //     courseName: "MCA",
  //     CGPA: "8.2",
  //   },
  //   {
  //     name: "crsu",
  //     location: "Jind",
  //     startDate: Date(),
  //     endDate: Date(),
  //     courseName: "MCA",
  //     CGPA: "8.2",
  //   },
  //   {
  //     name: "crsu",
  //     location: "Jind",
  //     startDate: Date(),
  //     endDate: Date(),
  //     courseName: "MCA",
  //     CGPA: "8.2",
  //   },
  //   {
  //     name: "crsu",
  //     location: "Jind",
  //     startDate: Date(),
  //     endDate: Date(),
  //     courseName: "MCA",
  //     CGPA: "8.2",
  //   },
  // ];

  // const dataWork = [
  //   {
  //     name: "nirmitee",
  //     location: "Jind",
  //     startDate: Date(),
  //     endDate: Date(),
  //     jobTitle: "Software Engineer",
  //     responsibility: "developer",
  //   },
  //   {
  //     name: "Elintex tecknologies",
  //     location: "Pune",
  //     startDate: Date(),
  //     endDate: Date(),
  //     jobTitle: "Software Engineer",
  //     responsibility: "developer in web app",
  //   },
  //   {
  //     name: "nirmitee",
  //     location: "Jind",
  //     startDate: Date(),
  //     endDate: Date(),
  //     jobTitle: "Software Engineer",
  //     responsibility: "developer",
  //   },
  //   {
  //     name: "nirmitee",
  //     location: "Jind",
  //     startDate: Date(),
  //     endDate: Date(),
  //     jobTitle: "Software Engineer",
  //     responsibility: "developer",
  //   },
  //   {
  //     name: "nirmitee",
  //     location: "Jind",
  //     startDate: Date(),
  //     endDate: Date(),
  //     jobTitle: "Software Engineer",
  //     responsibility: "developer",
  //   },
  // ];

  // const dataAchive = [
  //   {
  //     name: "Haryan Hacks",
  //     location: "Jind",
  //     date: Date(),
  //     des: "HAryan Hackes is a compitition that is based on developer",
  //   },
  //   {
  //     name: "Haryan Hacks",
  //     location: "Jind",
  //     date: Date(),
  //     des: "HAryan Hackes is a compitition that is based on developer",
  //   },
  //   {
  //     name: "Haryan Hacks",
  //     location: "Jind",
  //     date: Date(),
  //     des: "HAryan Hackes is a compitition that is based on developer",
  //   },
  //   {
  //     name: "Haryan Hacks",
  //     location: "Jind",
  //     date: Date(),
  //     des: "HAryan Hackes is a compitition that is based on developer",
  //   },
  // ];

  // const dataSkill = [
  //   {
  //     name: "DSA",
  //     rate: 90,
  //   },
  //   {
  //     name: "Development",
  //     rate: 80,
  //   },
  //   {
  //     name: "JS",
  //     rate: 78,
  //   },
  //   {
  //     name: "Java",
  //     rate: 89,
  //   },
  // ];

  // function convert(str) {
  //   var date = new Date(str),
  //     mnth = ("0" + (date.getMonth() + 1)).slice(-2),
  //     day = ("0" + date.getDate()).slice(-2);
  //   return [date.getFullYear(), mnth, day].join("-");
  // }

  // console.log(selectedItem, data);

  const buttons = [
    <Button
      key="aboutMe"
      onClick={() => {
        setSelectedItem({});
        setData({});
        setSelectedVal("Education");
        setIsEdit(false);
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      Education
    </Button>,
    <Button
      key="contact"
      onClick={() => {
        setSelectedItem({});
        setData({});
        setIsEdit(false);
        setSelectedVal("Works");
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      Works
    </Button>,
    <Button
      key="contact"
      onClick={() => {
        setSelectedItem({});
        setData({});
        setIsEdit(false);
        setSelectedVal("Achievements");
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      Achievements
    </Button>,
    <Button
      key="contact"
      onClick={() => {
        setSelectedItem({});
        setData({});
        setIsEdit(false);
        setSelectedVal("Skills");
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      Skills
    </Button>,
  ];

  const handleSubmit = async (name) => {
    console.log("Selected Data", selectedVal, data);

    switch (selectedVal) {
      case "Education":
        if (
          data.name === undefined ||
          data.startDate === undefined ||
          data.location === undefined ||
          data.endDate === undefined ||
          data.courseName === undefined ||
          data.CGPA === undefined ||
          data.name === "" ||
          data.startDate === "" ||
          data.location === "" ||
          data.endDate === "" ||
          data.courseName === "" ||
          data.CGPA === ""
        ) {
          alert("You can not submit empty field::");
          return;
        }
        break;
      case "Works":
        if (
          data.name === undefined ||
          data.startDate === undefined ||
          data.location === undefined ||
          data.endDate === undefined ||
          data.responsibility === undefined ||
          data.jobTitle === undefined ||
          data.name === "" ||
          data.startDate === "" ||
          data.location === "" ||
          data.endDate === "" ||
          data.responsibility === "" ||
          data.jobTitle === ""
        ) {
          alert("You can not submit empty field::");
          return;
        }
        break;
      case "Achievements":
        if (
          data.name === undefined ||
          data.startDate === undefined ||
          data.des === undefined ||
          data.name === "" ||
          data.startDate === "" ||
          data.des === ""
        ) {
          alert("You can not submit empty field::");
          return;
        }
        break;
      case "Skills":
        if (
          data.name === undefined ||
          data.rate === undefined ||
          data.name === "" ||
          data.rate === ""
        ) {
          alert("You can not submit empty field::");
          return;
        }
        break;
    }

    if (isEdit) {
      console.info("Update Hit!!", selectedId);
      handleUpdate({ id: selectedId, data, dispatch, userData, userSecret });
      dispatch(getDataActionCreater());
    } else {
      console.log("Save Hit!!", selectedTab, selectedVal, data);
      handleSave({
        selectedTab,
        selectedVal,
        data,
        dispatch,
        userData,
        userSecret,
      });
    }
    setSelectedItem({});
    setData({});
    setIsEdit(false);
    setStartDate("");
    setEndDate("");
    setISUpdateHit(true);
  };

  const handleSwitch = (val) => {
    // setSelectedItem({});
    switch (val) {
      case "Education":
        return (
          <div style={{ width: "100%" }}>
            <AdminResumeEducationData
              selectedVal={selectedVal}
              data={newData?.education || []}
              setSelectedItem={setSelectedItem}
              setSelectedID={setSelectedID}
              setIsEdit={setIsEdit}
            />
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
                <GeneralInputField
                  selectedItem={selectedItem}
                  data={data}
                  setData={setData}
                  // disabled={
                  //   userData?.email === "sandeepsokle12@gmail.com" ||
                  //   userSecret === "Sandeep@Sokle12"
                  //     ? false
                  //     : true
                  // }
                  width="48%"
                  place={"School / Institute Name"}
                  // value={data?.name}
                  dataKey={"name"}
                  // value = {data.name}
                />
                {/* <TextField
                  label="School / Institute Name"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  value={selectedItem.name ? `${selectedItem.name}` : ""}
                /> */}
                <GeneralInputField
                  data={data}
                  setData={setData}
                  // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                  width="48%"
                  place={"School Location"}
                  dataKey={"location"}
                  // value = {data.location}
                />
                {/* <TextField
                  label="School Location"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  value={selectedItem.name ? `${selectedItem.location}` : ""}
                /> */}
                {/* 
                <GeneralDatePicker
                  data={data}
                  setData={setData}
                  // disabled={selectedData?.id ? true : false}
                  width="48%"
                  place={"Date of joining"}
                  dataKey={"startDate"}
                /> */}

                <TextField
                  label="Date of joining"
                  id="date"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  type="text"
                  // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                  // InputLabelProps={{
                  // shrink: true,
                  // required: true,
                  // }}
                  value={startDate}
                  onFocus={(e) => {
                    e.target.type = "date";
                  }}
                  onBlur={(e) => {
                    e.target.type = "text";
                    // setISUpdateHit(true);
                    setStartDate(e.target.value);
                  }}
                  onChange={(e) => {
                    e.target.type = "text";
                    // setISUpdateHit(true);
                    setStartDate(e.target.value);
                  }}
                />

                {/* <GeneralDatePicker
                  data={data}
                  setData={setData}
                  // disabled={selectedData?.id ? true : false}
                  width="48%"
                  place={"Date of Leave"}
                  dataKey={"endDate"}
                /> */}

                <TextField
                  label="Date of Leave"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  // InputLabelProps={{
                  //   // shrink: true,
                  // }}
                  // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                  type="text"
                  //  onChange={(val) => {
                  //   setEndDate(val);
                  // }}
                  value={endDate}
                  onFocus={(e) => {
                    e.target.type = "date";
                  }}
                  onBlur={(e) => {
                    e.target.type = "text";
                    setISUpdateHit(true);
                    setEndDate(e.target.value);
                  }}
                  onChange={(e) => {
                    e.target.type = "text";
                    // setISUpdateHit(true);
                    setEndDate(e.target.value);
                  }}
                />

                <GeneralInputField
                  data={data}
                  setData={setData}
                  // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                  width="48%"
                  place={"Course Name"}
                  dataKey={"courseName"}
                  // value = {data.courseName}
                />
                {/* <TextField
                  label="Course Name"
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  value={
                    selectedItem.courseName ? `${selectedItem.courseName}` : ""
                  }
                /> */}

                <GeneralInputField
                  data={data}
                  setData={setData}
                  // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                  width="48%"
                  place={"CGPA"}
                  dataKey={"CGPA"}
                  // value = {data.CGPA}
                  onlyNumber
                />
                {/* <TextField
                  label="CGPA"
                  number
                  sx={{
                    width: "48%",
                    m: 1,
                  }}
                  value={selectedItem.name ? `${selectedItem.CGPA}` : ""}
                /> */}
              </Box>
            </div>
          </div>
        );
      case "Works":
        return (
          <>
            <div style={{ width: "100%" }}>
              <AdminResumeEducationData
                selectedVal={selectedVal}
                data={newData?.works || []}
                setSelectedItem={setSelectedItem}
                setSelectedID={setSelectedID}
                setIsEdit={setIsEdit}
              />

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
                  <GeneralInputField
                    selectedItem={selectedItem}
                    data={data}
                    setData={setData}
                    // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                    width="48%"
                    place={"Company Name"}
                    // value={data?.name}
                    dataKey={"name"}
                    // value = {data.name}
                  />
                  {/* <TextField
                    label="Company Name"
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    value={selectedItem.name ? `${selectedItem.name}` : ""}
                  /> */}

                  <GeneralInputField
                    data={data}
                    setData={setData}
                    // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                    width="48%"
                    place={"Job Location"}
                    dataKey={"location"}
                    // value = {data.location}
                  />
                  {/* <TextField
                    label="Job Location"
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    value={selectedItem.name ? `${selectedItem.location}` : ""}
                  /> */}
                  {/* <GeneralDatePicker
                    data={data}
                    setData={setData}
                    // disabled={selectedData?.id ? true : false}
                    width="48%"
                    place={"Date of joining"}
                    dataKey={"startDate"}
                  /> */}

                  <TextField
                    fullWidth
                    label="Date of joining"
                    id="date"
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    type="text"
                    // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                    InputLabelProps={{
                      shrink: true,
                      // required: true,
                    }}
                    value={startDate}
                    onFocus={(e) => {
                      e.target.type = "date";
                    }}
                    onBlur={(e) => {
                      e.target.type = "text";
                      // console.log("On blur", e.target.value, e.target.value);
                      setStartDate(e.target.value);
                    }}
                    onChange={(e) => {
                      e.target.type = "text";
                      // setISUpdateHit(true);
                      setStartDate(e.target.value);
                    }}
                  />
                  {/* 
                  <GeneralDatePicker
                    data={data}
                    setData={setData}
                    // disabled={selectedData?.id ? true : false}
                    width="48%"
                    place={"Date of Leave"}
                    dataKey={"endDate"}
                  /> */}

                  <TextField
                    fullWidth
                    label="Date of Leave"
                    id="date"
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    type="text"
                    // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                    InputLabelProps={{
                      shrink: true,
                      // required: true,
                    }}
                    value={endDate}
                    onFocus={(e) => {
                      e.target.type = "date";
                    }}
                    onBlur={(e) => {
                      e.target.type = "text";
                      // console.log("On blur", e.target.value, e.target.value);
                      setISUpdateHit(true);
                      setEndDate(e.target.value);
                    }}
                    onChange={(e) => {
                      e.target.type = "text";
                      // setISUpdateHit(true);
                      setEndDate(e.target.value);
                    }}
                  />

                  <GeneralInputField
                    data={data}
                    setData={setData}
                    // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                    width="48%"
                    place={"Job Title"}
                    dataKey={"jobTitle"}
                    // value = {data.courseName}
                  />
                  <GeneralInputField
                    data={data}
                    setData={setData}
                    multiline
                    // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                    width="48%"
                    place={"Responsibilities"}
                    dataKey={"responsibility"}
                    // value = {data.courseName}
                  />
                  {/* <TextField
                    label="Responsibilities"
                    multiline
                    rows={5}
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    value={
                      selectedItem.responsibility
                        ? `${selectedItem.responsibility}`
                        : ""
                    }
                  /> */}
                </Box>
              </div>
            </div>
          </>
        );
      case "Achievements":
        return (
          <>
            <div style={{ width: "100%" }}>
              <AdminResumeEducationData
                selectedVal={selectedVal}
                data={newData?.achievements || []}
                setSelectedItem={setSelectedItem}
                setSelectedID={setSelectedID}
                setIsEdit={setIsEdit}
              />
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
                  <GeneralInputField
                    data={data}
                    setData={setData}
                    // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                    width="48%"
                    place={"Title"}
                    dataKey={"name"}
                    // value = {data.courseName}
                  />

                  <TextField
                    label="Date"
                    id="date"
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    type="text"
                    // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                    // InputLabelProps={{
                    // shrink: true,
                    // required: true,
                    // }}
                    value={startDate}
                    onFocus={(e) => {
                      e.target.type = "date";
                    }}
                    onBlur={(e) => {
                      e.target.type = "text";
                      setISUpdateHit(true);
                      setStartDate(e.target.value);
                    }}
                    onChange={(e) => {
                      e.target.type = "text";
                      setISUpdateHit(true);
                      setStartDate(e.target.value);
                    }}
                  />

                  {/* <TextField
                    label="Description"
                    multiline
                    fullWidth
                    rows={5}
                    sx={{
                      m: 1,
                    }}
                    value={selectedItem.des ? `${selectedItem.des}` : ""}
                  /> */}
                  <GeneralInputField
                    data={data}
                    setData={setData}
                    multiline
                    // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                    width="98%"
                    place={"Description"}
                    dataKey={"des"}
                    // value = {data.courseName}
                  />
                </Box>
              </div>
            </div>
          </>
        );
      case "Skills":
        return (
          <>
            <div style={{ width: "100%" }}>
              <AdminResumeEducationData
                selectedVal={selectedVal}
                data={newData?.skills || []}
                setSelectedItem={setSelectedItem}
                setSelectedID={setSelectedID}
                setIsEdit={setIsEdit}
              />
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
                    label="Name"
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    value={selectedItem.name ? `${selectedItem.name}` : ""}
                  /> */}
                  <GeneralInputField
                    data={data}
                    setData={setData}
                    // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                    width="48%"
                    place={"Name"}
                    dataKey={"name"}
                    // value = {data.courseName}
                  />

                  {/* <TextField
                    label="Rate yourself from 100"
                    type="number"
                    sx={{
                      width: "48%",
                      m: 1,
                    }}
                    value={selectedItem.rate ? `${selectedItem.rate}` : ""}
                  /> */}
                  <GeneralInputField
                    data={data}
                    setData={setData}
                    width="48%"
                    // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
                    place={"Rate yourself from 100"}
                    dataKey={"rate"}
                    // value = {data.courseName}
                  />
                </Box>
              </div>
            </div>
          </>
        );

      default:
        break;
    }
  };

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
          width: "16%",
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
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
          <Button
            variant="contained"
            onClick={() => {
              setSelectedItem({});
              setData({});
              setIsEdit(false);
              setStartDate("");
              setEndDate("");
              setISUpdateHit(true);
            }}
          >
            UnSelect Data
          </Button>
        </Box>
        <br></br>
        {handleSwitch(selectedVal)}
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
          <Button
            variant="contained"
            // disabled={userData?.email !== "sandeepsokle12@gmail.com"}
            onClick={() => {
              handleSubmit();
            }}
          >
            {isEdit ? "Update Data" : "Save Data"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
