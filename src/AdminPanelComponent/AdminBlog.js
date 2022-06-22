import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { AdminResumeEducationData } from "../AdminPanelComponentHelper/AdminResumeEducationData";
import { useDispatch, useSelector } from "react-redux";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import { GeneralInputField } from "../GeneralComponents/GeneralInputField";
import { handleSave, handleUpdate } from "../HandleFunctions/handleFunctions";
import { openSnackbar } from "../Redux/Snackbar/snackbarStore";

export const AdminBlog = (props) => {
  const { selectedTab } = props;
  const selectedVal = "Blog";
  const [selectedItem, setSelectedItem] = React.useState({});
  const [selectedId, setSelectedID] = React.useState("");
  const [editLink, setEditLink] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [data, setData] = React.useState({});
  const dispatch = useDispatch();

  const newData = useSelector((state) => {
    // console.log(state)
    return state?.data?.blog;
  });
  const userData = useSelector((state) => {
    // console.log(state)
    return state?.data?.user;
  });
  const userSecret = useSelector((state) => {
    // console.log(state)
    return state?.data?.secret;
  });

  React.useEffect(() => {
    // console.log("selectedItem", selectedItem);
    setData(selectedItem);
  }, [selectedItem]);

  const handleSubmit = async (name) => {
    // console.log("Selected Data", name);
    if (
      data.name === undefined ||
      data.des === undefined ||
      data.link === undefined ||
      data.name === "" ||
      data.des === "" ||
      data.link === ""
    ) {
      dispatch(openSnackbar("You can not submit empty field::", "error"));
      // alert("You can not submit empty field::");
      return;
    }
    if (isEdit) {
      console.info("Update Hit!!", selectedId);
      handleUpdate({ id: selectedId, data, dispatch, userData, userSecret });
      dispatch(getDataActionCreater());
    } else {
      // console.log("Save Hit!!", selectedTab, selectedVal, data);
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
  };

  // const dataList = [
  //   {
  //     name: "leetCode question 12",
  //     link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
  //     des: "show movie list we can like dislike",
  //   },
  //   {
  //     name: "Movie App",
  //     link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
  //     des: "show movie list we can like dislike",
  //   },
  //   {
  //     name: "Movie App",
  //     link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
  //     des: "show movie list we can like dislike",
  //   },
  //   {
  //     name: "Movie App",
  //     link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
  //     des: "show movie list we can like dislike",
  //   },
  //   {
  //     name: "Movie App",
  //     link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
  //     des: "show movie list we can like dislike",
  //   },
  // ];

  return (
    <Grid
      sx={{
        display: "flex",
        "& > *": {},
      }}
    >
      <Grid xs={12} sx={{ p: "2px 2rem", width: "100%" }}>
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

        <AdminResumeEducationData
          selectedVal={selectedVal}
          // setEditFile = {setEditFile}
          setEditLink={setEditLink}
          data={newData?.blog}
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
              label="Project Name"
              sx={{
                width: `${selectedItem.name && !editLink ? "84%" : "98%"}`,
                m: 1,
              }}
              value={selectedItem.name ? `${selectedItem.name}` : ""}
            /> */}

            <GeneralInputField
              selectedItem={selectedItem}
              data={data}
              setData={setData}
              // disabled={selectedData?.id ? true : false}
              width={`${selectedItem.name && !editLink ? "84%" : "98%"}`}
              place={"Project Name"}
              // value={data?.name}
              dataKey={"name"}
              // value = {data.name}
            />

            {selectedItem.name && !editLink ? (
              <div
                style={{ width: "13%", textAlign: "center", fontSize: "20px" }}
              >
                <a
                  style={{ marginRight: "12px" }}
                  target="_blank"
                  rel="noreferrer"
                  href={`${selectedItem.link}`}
                >
                  Blog Link
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
              <>
                {/* // <TextField
              //   label="Blog Link"
              //   focused
              //   type="text"
              //   sx={{
              //     width: "98%",
              //     m: 1,
              //   }}
              //   value={selectedItem.link ? `${selectedItem.link}` : ""}
              // /> */}

                <GeneralInputField
                  selectedItem={selectedItem}
                  data={data}
                  setData={setData}
                  // disabled={selectedData?.id ? true : false}
                  width="98%"
                  place={"Blog Link"}
                  // value={data?.name}
                  dataKey={"link"}
                  // value = {data.name}
                />
              </>
            )}

            {/* <TextField
              label="Project Description"
              multiline
              rows={4}
              sx={{
                width: "98%",
                m: 1,
              }}
              value={selectedItem.des ? `${selectedItem.des}` : ""}
            /> */}

            <GeneralInputField
              selectedItem={selectedItem}
              data={data}
              setData={setData}
              multiline
              // disabled={selectedData?.id ? true : false}
              width="98%"
              place={"Project Description"}
              // value={data?.name}
              dataKey={"des"}
              // value = {data.name}
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
