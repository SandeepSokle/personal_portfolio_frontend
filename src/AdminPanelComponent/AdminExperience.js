import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { AdminResumeEducationData } from "../AdminPanelComponentHelper/AdminResumeEducationData";
import { useDispatch, useSelector } from "react-redux";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import { handleSave, handleUpdate } from "../HandleFunctions/handleFunctions";
import { GeneralInputField } from "../GeneralComponents/GeneralInputField";

export const AdminExperience = (props) => {
  const { selectedTab } = props;
  const selectedVal = "Experince";
  const [selectedItem, setSelectedItem] = React.useState({});
  const [selectedId,setSelectedID] = React.useState("")
  const [isEdit, setIsEdit] = React.useState(false);
  const [data, setData] = React.useState({});
  const dispatch = useDispatch();

  const newData = useSelector((state) => {
    return state?.data?.experience;
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

  // const dataList = [
  //   {
  //     name: "Movie App",
  //     experience: 2,
  //     des: "show movie list we can like dislike",
  //     response: "working as a developer",
  //     // link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
  //   },
  //   {
  //     name: "Movie App",
  //     experience: 2,
  //     des: "show movie list we can like dislike",
  //     response: "working as a developer",
  //     // link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
  //   },
  //   {
  //     name: "Movie App",
  //     experience: 2,
  //     des: "show movie list we can like dislike",
  //     response: "working as a developer",
  //     // link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
  //   },
  //   {
  //     name: "Movie App",
  //     experience: 2,
  //     des: "show movie list we can like dislike",
  //     response: "working as a developer",
  //     // link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
  //   },
  //   {
  //     name: "Movie App",
  //     experience: 2,
  //     des: "show movie list we can like dislike",
  //     response: "working as a developer",
  //     // link: "https://primeprogrammingworld.blogspot.com/2021/06/leetcode-max-area-of-island-solution.html",
  //   },
  // ];

  return (
    <Grid
      sx={{
        display: "flex",
        "& > *": {},
      }}
    >
      <Grid xs={12} sx={{ p: "2px 2rem" }}>
        <Box
          fullWidth
          sx={{
            mb: "2rem",
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
          data={newData?.experince || []}
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
              label="Company Name"
              sx={{
                width: "48%",
                m: 1,
              }}
              value={selectedItem.name ? `${selectedItem.name}` : ""}
            /> */}

            <GeneralInputField
              selectedItem={selectedItem}
              data={data}
              setData={setData}
              // disabled={selectedData?.id ? true : false}
              width="48%"
              place={"Company Name"}
              // value={data?.name}
              dataKey={"name"}
              // value = {data.name}
            />

            {/* <TextField
              label="Experince"
              type="number"
              sx={{
                width: "48%",
                m: 1,
              }}
              value={
                selectedItem.experience ? `${selectedItem.experience}` : ""
              }
            /> */}

            <GeneralInputField
              data={data}
              setData={setData}
              // disabled={selectedData?.id ? true : false}
              onlyNumber
              width="48%"
              place={"Experince"}
              dataKey={"experience"}
              // value = {data.location}
            />

            {/* <TextField
              label="Responsibility"
              multiline
              rows={4}
              sx={{
                width: "48%",
                m: 1,
              }}
              value={selectedItem.response ? `${selectedItem.response}` : ""}
            /> */}

            <GeneralInputField
              data={data}
              setData={setData}
              // disabled={selectedData?.id ? true : false}
              multiline
              width="48%"
              place={"Responsibility"}
              dataKey={"response"}
              // value = {data.location}
            />

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
