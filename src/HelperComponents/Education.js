// import React   from 'react';
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
export const Education = (props) => {
  const { data } = props;
  const [finalData, setFinalData] = useState([]);
  console.log(data);

  useEffect(() => {
    if (data) {
      let newData = data.map((ele) => {
        return ele.data;
      });
      setFinalData(newData);
    }
  }, [data]);

  const dummyData = [
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
        {finalData?.map((e) => {
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
                  // color: "#2e7d32",
                  color : "black"
                }}
              >
                {e?.name}
              </div>
              <div style={{ fontSize: "1.3rem" }}>{e.courseName}</div>
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
                <div
                  style={{
                    marginLeft: "6rem",
                  }}
                >
                  {e.CGPA}
                </div>
              </div>
            </Box>
          );
        })}
      </div>
    </div>
  );
};
