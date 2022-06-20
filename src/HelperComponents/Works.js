// import React   from 'react';
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useEffect, useState } from "react";

// import { style } from "@mui/system";
export const Works = (props) => {
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
      projectName: "COLLABORATIVE TEACHING BOARD (MERN Stack)",
      startDate: "07/2018",
      endDate: "07/2021",
      link: "https://movieappsandeep.netlify.app/",
      des: [
        " A collaborative teaching board with a real-time sharing feature",
        "We Store all Login detail in MongoDB Database.",
        "Required Login for using my project: this will decide you are a client or a Host (The host has a special key).",
        "If you enter the wrong host key, the System does not reject you but you entered it in the Client Interface.",
        "The host has some controls of meeting i.e allow or rejection of client annotation.",
        "The client can use Tools only when permitted by the Host otherwise client can not annotate / only watching",
        "Tech Used : SOCKETIO, nodejs, ExpressJs, MongoDB, CANVAS, HTML, CSS, JAVASCRIPT",
      ],
    },
    {
      projectName: "COLLABORATIVE TEACHING BOARD (MERN Stack)",
      startDate: "07/2018",
      endDate: "07/2021",
      link: "https://movieappsandeep.netlify.app/",
      des: [
        " A collaborative teaching board with a real-time sharing feature",
        "We Store all Login detail in MongoDB Database.",
        "Required Login for using my project: this will decide you are a client or a Host (The host has a special key).",
        "If you enter the wrong host key, the System does not reject you but you entered it in the Client Interface.",
        "The host has some controls of meeting i.e allow or rejection of client annotation.",
        "The client can use Tools only when permitted by the Host otherwise client can not annotate / only watching",
        "Tech Used : SOCKETIO, nodejs, ExpressJs, MongoDB, CANVAS, HTML, CSS, JAVASCRIPT",
      ],
    },
    {
      projectName: "COLLABORATIVE TEACHING BOARD (MERN Stack)",
      startDate: "07/2018",
      endDate: "07/2021",
      link: "https://movieappsandeep.netlify.app/",
      des: [
        " A collaborative teaching board with a real-time sharing feature",
        "We Store all Login detail in MongoDB Database.",
        "Required Login for using my project: this will decide you are a client or a Host (The host has a special key).",
        "If you enter the wrong host key, the System does not reject you but you entered it in the Client Interface.",
        "The host has some controls of meeting i.e allow or rejection of client annotation.",
        "The client can use Tools only when permitted by the Host otherwise client can not annotate / only watching",
        "Tech Used : SOCKETIO, nodejs, ExpressJs, MongoDB, CANVAS, HTML, CSS, JAVASCRIPT",
      ],
    },
    {
      projectName: "COLLABORATIVE TEACHING BOARD (MERN Stack)",
      startDate: "07/2018",
      endDate: "07/2021",
      link: "https://movieappsandeep.netlify.app/",
      des: [
        " A collaborative teaching board with a real-time sharing feature",
        "We Store all Login detail in MongoDB Database.",
        "Required Login for using my project: this will decide you are a client or a Host (The host has a special key).",
        "If you enter the wrong host key, the System does not reject you but you entered it in the Client Interface.",
        "The host has some controls of meeting i.e allow or rejection of client annotation.",
        "The client can use Tools only when permitted by the Host otherwise client can not annotate / only watching",
        "Tech Used : SOCKETIO, nodejs, ExpressJs, MongoDB, CANVAS, HTML, CSS, JAVASCRIPT",
      ],
    },
    {
      projectName: "COLLABORATIVE TEACHING BOARD (MERN Stack)",
      startDate: "07/2018",
      endDate: "07/2021",
      link: "https://movieappsandeep.netlify.app/",
      des: [
        " A collaborative teaching board with a real-time sharing feature",
        "We Store all Login detail in MongoDB Database.",
        "Required Login for using my project: this will decide you are a client or a Host (The host has a special key).",
        "If you enter the wrong host key, the System does not reject you but you entered it in the Client Interface.",
        "The host has some controls of meeting i.e allow or rejection of client annotation.",
        "The client can use Tools only when permitted by the Host otherwise client can not annotate / only watching",
        "Tech Used : SOCKETIO, nodejs, ExpressJs, MongoDB, CANVAS, HTML, CSS, JAVASCRIPT",
      ],
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
        justifyContent: "flex-start",
      }}
    >
      {/* //////data */}
      <div
        style={{
          maxWidth: "100%",
        }}
      >
        {finalData?.map((e, i) => {
          return (
            <div
              style={{
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "#2e7d32",
                }}
              >
                {`${i + 1}. ${e?.name}`}
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
                <div>
                  {e?.startDate} - {e?.endDate || "Present"}
                </div>
                {/* <a href={e.link}>Live Demo</a> */}
              </div>
              <div style={{ fontSize: "1.3rem", margin: "2px 0px" }}>
                {e?.responsibility}
              </div>
              {/* <ul>
                {e.des.map((e) => {
                  return <li style={{ textDecoration: "none",listStyleType: "square" }}>{e}</li>;
                })}
              </ul> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
