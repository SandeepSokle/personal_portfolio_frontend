import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Grid, TextField } from "@mui/material";
import { AdminResumeEducationData } from "../AdminPanelComponentHelper/AdminResumeEducationData";
import EditIcon from "@mui/icons-material/Edit";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import { useDispatch, useSelector } from "react-redux";
import { handleSave, handleUpdate } from "../HandleFunctions/handleFunctions";
import { GeneralInputField } from "../GeneralComponents/GeneralInputField";
import storage from "../firebase/firebase_config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import uuid from "react-uuid";

export const AdminProjects = (props) => {
  const { selectedTab } = props;
  const [selectedVal, setSelectedVal] = React.useState("Complete");
  const [selectedItem, setSelectedItem] = React.useState({});
  const [selectedId, setSelectedID] = React.useState("");
  const [editFile, setEditFile] = React.useState(false);
  const [editLink, setEditLink] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [data, setData] = React.useState({});
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(getDataActionCreater());
  // }, [dispatch]);

  const newData = useSelector((state) => {
    return state?.data?.projects;
  });

  React.useEffect(() => {
    // console.log("selectedItem", selectedItem);
    setData(selectedItem);
  }, [selectedItem]);

  const handleSubmit = async (name) => {
    // console.log("Selected Data", name);
    if (isEdit) {
      console.info("Update Hit!!", selectedId);
      handleUpdate({ id: selectedId, data, dispatch });
      dispatch(getDataActionCreater());
    } else {
      console.log("Save Hit!!", selectedTab, selectedVal, data);
      handleSave({ selectedTab, selectedVal, data, dispatch });
    }
    setSelectedItem({});
    setData({});
    setIsEdit(false);
  };

  const buttons = [
    <Button
      key="aboutMe"
      onClick={() => {
        setSelectedVal("Complete");
        setEditFile(false);
        setEditLink(false);
        setSelectedItem({});
        setIsEdit(false);
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      Complete
    </Button>,
    <Button
      key="contact"
      onClick={() => {
        setSelectedVal("In Progress");
        setEditFile(false);
        setEditLink(false);
        setSelectedItem({});
        setIsEdit(false);
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      In Progress
    </Button>,
  ];

  // const completeList = [
  //   {
  //     data: {
  //       name: "Movie App",
  //       img: "sandeep.jpg",
  //       link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
  //       des: "show movie list we can like dislike",
  //     },
  //   },]

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
        <Box
          fullWidth
          sx={{
            mb: 3,
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
            }}
          >
            UnSelect Data
          </Button>
        </Box>

        {selectedVal === "Complete" ? (
          <AdminResumeEducationData
            selectedVal={selectedVal}
            setEditFile={setEditFile}
            setEditLink={setEditLink}
            data={newData?.complete || []}
            setSelectedItem={setSelectedItem}
            setSelectedID={setSelectedID}
            setIsEdit={setIsEdit}
          />
        ) : (
          <AdminResumeEducationData
            selectedVal={selectedVal}
            setEditFile={setEditFile}
            setEditLink={setEditLink}
            data={newData["in progress"] || []}
            setSelectedItem={setSelectedItem}
            setSelectedID={setSelectedID}
            setIsEdit={setIsEdit}
          />
        )}

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
              label="Project Name"
              sx={{
                width: "48%",
                m: 1,
              }}
              value={selectedItem.name ? `${selectedItem.name}` : ""}
            /> */}
            <GeneralInputField
              data={data}
              setData={setData}
              // disabled={selectedData?.id ? true : false}
              width="48%"
              place={"Project Name"}
              dataKey={"name"}
              // value = {data.location}
            />

            {selectedItem.name && !editFile ? (
              <div
                style={{ width: "48%", textAlign: "center", fontSize: "20px" }}
              >
                <a
                  style={{ marginRight: "12px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html"
                >
                  Project Image
                </a>
                <EditIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setEditFile(true);
                  }}
                ></EditIcon>
              </div>
            ) : (
              <TextField
                label="Project Image"
                focused
                type="file"
                sx={{
                  width: "48%",
                  m: 1,
                }}
                onChange={async (e) => {
                  console.log("target", e.target.files);
                  console.log("value", e.target.value);
                  const storageRef = ref(
                    storage,
                    "images/" + uuid() + "_" + e.target.files[0].name
                  );
                  // const { url } = storageRef;

                  // console.log("url::",url, storageRef);
                  // const file = await uploadBytes(storageRef, e.target.files[0]);
                  // .then((snapshot) => {
                  // console.log("Uploaded a blob or file!", file);
                  // });

                  // const storage = getStorage();

                  // Create the file metadata
                  /** @type {any} */
                  const metadata = {
                    contentType: "image/jpeg",
                  };

                  // Upload file and metadata to the object 'images/mountains.jpg'
                  const uploadTask = uploadBytesResumable(
                    storageRef,
                    e.target.files[0]
                  );

                  // Listen for state changes, errors, and completion of the upload.
                  uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                      const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                      console.log("Upload is " + progress + "% done");
                      switch (snapshot.state) {
                        case "paused":
                          console.log("Upload is paused");
                          break;
                        case "running":
                          console.log("Upload is running");
                          break;
                      }
                    },
                    (error) => {
                      // A full list of error codes is available at
                      // https://firebase.google.com/docs/storage/web/handle-errors
                      switch (error.code) {
                        case "storage/unauthorized":
                          // User doesn't have permission to access the object
                          break;
                        case "storage/canceled":
                          // User canceled the upload
                          break;

                        // ...

                        case "storage/unknown":
                          // Unknown error occurred, inspect error.serverResponse
                          break;
                      }
                    },
                    () => {
                      // Upload completed successfully, now we can get the download URL
                      getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                          console.log("File available at", downloadURL);
                        }
                      );
                    }
                  );
                }}
                // value={selectedItem.name ? `${selectedItem.img}` : ""}
              />
            )}

            {selectedItem.name && !editLink ? (
              <div
                style={{ width: "48%", textAlign: "center", fontSize: "20px" }}
              >
                <a
                  style={{ marginRight: "12px" }}
                  target="_blank"
                  rel="noreferrer"
                  href={`${selectedItem.link}`}
                >
                  Project Link
                </a>
                <EditIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setEditLink(true);
                  }}
                ></EditIcon>
              </div>
            ) : (
              // <TextField
              //   label="Project Live Link"
              //   link={true}
              //   sx={{
              //     width: "48%",
              //     m: 1,
              //   }}
              //   value={selectedItem.link ? `${selectedItem.link}` : ""}
              // />
              <GeneralInputField
                data={data}
                setData={setData}
                // disabled={selectedData?.id ? true : false}
                width="48%"
                place={"Project Live Link"}
                dataKey={"link"}
                // value = {data.location}
              />
            )}
            {/* <TextField
              label="Project Description"
              multiline
              rows={4}
              sx={{
                width: "48%",
                m: 1,
              }}
              value={selectedItem.des ? `${selectedItem.des}` : ""}
            /> */}
            <GeneralInputField
              data={data}
              setData={setData}
              // disabled={selectedData?.id ? true : false}
              multiline
              width="48%"
              place={"Project Description"}
              dataKey={"des"}
              // value = {data.location}
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
            width
          >
            <Button variant="contained" onClick={handleSubmit}>
              {isEdit ? "Update Data" : "Save Data"}
            </Button>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};
