import { useEffect, useState } from "react";

// import React   from 'react';
export const Achievements = (props) => {
  const { data } = props;
  const [finalData, setFinalData] = useState([]);
  console.log(data);

  useEffect(() => {
    if (data) {
      let newData = data?.map((ele) => {
        return ele.data;
      });
      setFinalData(newData);
    }
  }, [data]);


  const dummyData = [
    {
      name: "HARYANA HACKS",
      des: [
        `Ranked 3rd in Hackathon organized by Pepcoding India Private
        Limited.Build an automated script that helps users to generate
        automated articles by just allowing them to enter the title of Article`,
        `System download 3 article automatic and save this file in my cloud
        storage with same name of tile that enter at starting`,
      ],
    },
    {
      name: "HARYANA HACKS",
      des: [
        `Ranked 3rd in Hackathon organized by Pepcoding India Private
        Limited.Build an automated script that helps users to generate
        automated articles by just allowing them to enter the title of Article`,
        `System download 3 article automatic and save this file in my cloud
        storage with same name of tile that enter at starting`,
      ],
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        // backgroundColor: "#f7f1e3",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* //////data */}
      <div
        style={{
          maxWidth: "100%",
        }}
      >
        {finalData?.map((e) => {
          return (
            <div
              style={{
                maxWidth: "100%",
                // padding:"1rem"
              }}
            >
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "#2e7d32",
                  textAlign: "center",
                }}
              >
                {e.name}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontSize: "1.3rem",
                  justifyContent: "space-between",
                }}
              >
                {e.des}
                {/* <ul>
                  {e.des.map((e) => {
                    return (
                      <li
                        style={{
                          textDecoration: "none",
                          listStyleType: "square",
                        }}
                      >
                        {e}
                      </li>
                    );
                  })}
                </ul> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
