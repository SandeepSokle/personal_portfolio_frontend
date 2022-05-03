import { Box } from "@mui/material";
export const Education = () => {
  const data = [
    {
      schoolName: "Chaudhary Ranbir Singh University, Jind",
      course: "Master of Computer Applications",
      cgpa: "CGPA: 8.2 till 5th Semester",
      startDate: "07/2018",
      endDate: "07/2021",
    },
    {
      schoolName: "Chaudhary Ranbir Singh University, Jind",
      course: "Master of Computer Applications",
      cgpa: "CGPA: 8.2 till 5th Semester",
      startDate: "07/2018",
      endDate: "07/2021",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        // backgroundColor: "#f7f1e3",
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "70%",
        }}
      >
        {data.map((e) => {
          return (
            <Box
              sx={{
                maxWidth: "100%",
                marginBottom: "1.3rem",
              }}
            >
              <div
                style={{
                  margin: "0px",
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "#2e7d32",
                }}
              >
                {e.schoolName}
              </div>
              <div style={{ fontSize: "1.3rem" }}>{e.course}</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontSize: "1.3rem",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {e.startDate} - {e.endDate}
                </div>
                <div>{e.cgpa}</div>
              </div>
            </Box>
          );
        })}
      </div>
    </div>
  );
};
