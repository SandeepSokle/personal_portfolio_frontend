import Box from "@mui/material/Box";
import ConfigInput from "./ConfigInput";
export const AdminResumeEducationData = (props) => {
  const { setSelectedItem,setSelectedID,selectedTab, data, selectedVal,setEditFile,setEditLink,setIsEdit } = props;
  // selectedVal
  return (
    <Box
      sx={{
        width: "100%",
        // height: 300,
        // backgroundColor: "primary.dark",
        // "&:hover": {
        //   backgroundColor: "primary.main",
        //   opacity: [0.9, 0.8, 0.7],
        // },
        paddingBottom: "2rem",
        borderBottom: "1.2rem solid rgb(182 182 182)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        {data?.map((item, i) => (
          <ConfigInput
            setSelectedItem={setSelectedItem}
            setSelectedID = {setSelectedID}
            i={i}
            element={item.data}
            id = {item.id}
            selectedVal={selectedVal}
            setEditFile = {setEditFile}
            setEditLink = {setEditLink}
            setIsEdit = {setIsEdit}
            selectedTab = {selectedTab}
          />
        ))}
      </div>
    </Box>
  );
};
