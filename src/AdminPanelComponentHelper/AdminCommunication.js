import Box from "@mui/material/Box";
import ConfigInputCommunication from "./ConfigInputCommunication";
export const AdminCommunication = (props) => {
  const {
    setSelectedItem,
    setSelectedID,
    data,
    setData,
    selectedVal,
    setEditFile,
    setEditLink,
    setIsEdit,
  } = props;

  console.log(data);

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
          <ConfigInputCommunication
            setSelectedItem={setSelectedItem}
            setSelectedID={setSelectedID}
            i={i}
            element={item}
            id={item.id}
            selectedVal={selectedVal}
            setEditFile={setEditFile}
            setEditLink={setEditLink}
            setIsEdit={setIsEdit}
            // data={data}
            setData={setData}
          />
        )) || (
          <div
            style={{
              width: "100%",
              textAlign: "center",
              // fontWeight: "400",
              // fontSize: "4rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
                textAlign: "center",
                fontWeight: "400",
                fontSize: "4rem",
              }}
            >
              Unauthorized User
            </div>
            <div>This feature is only available for Admin</div>
          </div>
        )}
      </div>
    </Box>
  );
};
