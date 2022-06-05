// import React   from 'react';
import { useEffect, useState } from "react";
import Progressbar from "./Progressbar";

export const Skills = (props) => {
  const { data } = props;
  const [finalData, setFinalData] = useState([]);
  // console.log(data);

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
      label: "java",
      value: 20,
    },
    {
      label: "python",
      value: 50,
    },
  ];
  return (
    <div
      style={{
        width: "80%",
        // backgroundColor: "#f7f1e3",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* //////data */}
      <div style={{ flexGrow: 1, width: "60%" }}>
        {finalData.map((e,i) => {
          return <Progressbar label={e?.name} value = {i} rate={e?.rate} />;
        })}
      </div>
    </div>
  );
};
