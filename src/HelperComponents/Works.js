import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { style } from "@mui/system";
export const Works = () => {
  const [data, setData] = useState([]);

  const getData = useSelector((state) => {
    // console.log("In education : ", state);
    return state?.data?.resume?.works;
  });

  useEffect(() => {
    console.log("In education : ", getData);
    setData(getData);
  }, [getData]);

  // const data = [
  //   {
  //     projectName: "COLLABORATIVE TEACHING BOARD (MERN Stack)",
  //     startDate: "07/2018",
  //     endDate: "07/2021",
  //     link: "https://movieappsandeep.netlify.app/",
  //     des: [
  //       " A collaborative teaching board with a real-time sharing feature",
  //       "We Store all Login detail in MongoDB Database.",
  //       "Required Login for using my project: this will decide you are a client or a Host (The host has a special key).",
  //       "If you enter the wrong host key, the System does not reject you but you entered it in the Client Interface.",
  //       "The host has some controls of meeting i.e allow or rejection of client annotation.",
  //       "The client can use Tools only when permitted by the Host otherwise client can not annotate / only watching",
  //       "Tech Used : SOCKETIO, nodejs, ExpressJs, MongoDB, CANVAS, HTML, CSS, JAVASCRIPT",
  //     ],
  //   },
  //   {
  //     projectName: "COLLABORATIVE TEACHING BOARD (MERN Stack)",
  //     startDate: "07/2018",
  //     endDate: "07/2021",
  //     link: "https://movieappsandeep.netlify.app/",
  //     des: [
  //       " A collaborative teaching board with a real-time sharing feature",
  //       "We Store all Login detail in MongoDB Database.",
  //       "Required Login for using my project: this will decide you are a client or a Host (The host has a special key).",
  //       "If you enter the wrong host key, the System does not reject you but you entered it in the Client Interface.",
  //       "The host has some controls of meeting i.e allow or rejection of client annotation.",
  //       "The client can use Tools only when permitted by the Host otherwise client can not annotate / only watching",
  //       "Tech Used : SOCKETIO, nodejs, ExpressJs, MongoDB, CANVAS, HTML, CSS, JAVASCRIPT",
  //     ],
  //   },{
  //     projectName: "COLLABORATIVE TEACHING BOARD (MERN Stack)",
  //     startDate: "07/2018",
  //     endDate: "07/2021",
  //     link: "https://movieappsandeep.netlify.app/",
  //     des: [
  //       " A collaborative teaching board with a real-time sharing feature",
  //       "We Store all Login detail in MongoDB Database.",
  //       "Required Login for using my project: this will decide you are a client or a Host (The host has a special key).",
  //       "If you enter the wrong host key, the System does not reject you but you entered it in the Client Interface.",
  //       "The host has some controls of meeting i.e allow or rejection of client annotation.",
  //       "The client can use Tools only when permitted by the Host otherwise client can not annotate / only watching",
  //       "Tech Used : SOCKETIO, nodejs, ExpressJs, MongoDB, CANVAS, HTML, CSS, JAVASCRIPT",
  //     ],
  //   },{
  //     projectName: "COLLABORATIVE TEACHING BOARD (MERN Stack)",
  //     startDate: "07/2018",
  //     endDate: "07/2021",
  //     link: "https://movieappsandeep.netlify.app/",
  //     des: [
  //       " A collaborative teaching board with a real-time sharing feature",
  //       "We Store all Login detail in MongoDB Database.",
  //       "Required Login for using my project: this will decide you are a client or a Host (The host has a special key).",
  //       "If you enter the wrong host key, the System does not reject you but you entered it in the Client Interface.",
  //       "The host has some controls of meeting i.e allow or rejection of client annotation.",
  //       "The client can use Tools only when permitted by the Host otherwise client can not annotate / only watching",
  //       "Tech Used : SOCKETIO, nodejs, ExpressJs, MongoDB, CANVAS, HTML, CSS, JAVASCRIPT",
  //     ],
  //   },{
  //     projectName: "COLLABORATIVE TEACHING BOARD (MERN Stack)",
  //     startDate: "07/2018",
  //     endDate: "07/2021",
  //     link: "https://movieappsandeep.netlify.app/",
  //     des: [
  //       " A collaborative teaching board with a real-time sharing feature",
  //       "We Store all Login detail in MongoDB Database.",
  //       "Required Login for using my project: this will decide you are a client or a Host (The host has a special key).",
  //       "If you enter the wrong host key, the System does not reject you but you entered it in the Client Interface.",
  //       "The host has some controls of meeting i.e allow or rejection of client annotation.",
  //       "The client can use Tools only when permitted by the Host otherwise client can not annotate / only watching",
  //       "Tech Used : SOCKETIO, nodejs, ExpressJs, MongoDB, CANVAS, HTML, CSS, JAVASCRIPT",
  //     ],
  //   },
  // ];

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
      {/* //////data */}
      <div
        style={{
          maxWidth: "100%",
        }}
      >
        {data?.map((e) => {
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
                {e.data.name}
              </div>
              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "normal",
                  color: "#2e7d32",
                }}
              >
                {e.data.jobTitle}
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
                  {e.data.startDate} - {e.data.endDate}
                </div>
                {/* <a href={e.data.link}>Live Demo</a> */}
              </div>
                <div>{e?.data?.responsibility}</div>

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
