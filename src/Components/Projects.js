import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProjectCard from "../HelperComponents/ProjectCard";
import "./css/Projects.css";

export const Projects = () => {
  const [getCompleteData, setGetCompleteData] = useState({});
  const [data, setData] = useState([]);
  const projectData = useSelector((state) => {
    return state.data.projects;
  });

  useEffect(() => {
    // console.log(projectData);
    setGetCompleteData(projectData);
  }, [projectData]);

  useEffect(() => {
    if (getCompleteData) {
      let projectDataLocal = getCompleteData?.complete;
      // console.log(projectDataLocal);
      setData(projectDataLocal);
    }
  }, [getCompleteData]);

  const dummyData = [
    {
      projectName: "COLLABORATIVE TEACHING BOARD (MERN Stack)",
      link: "https://movieappsandeep.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_960_720.jpg",
      describe:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
    },
    {
      projectName: "Movie app",
      link: "https://movieappsandeep.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_960_720.jpg",
      describe:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
    },
    {
      projectName: "solder app",
      link: "https://movieappsandeep.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_960_720.jpg",
      describe:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
    },
    {
      projectName: "chat app",
      link: "https://movieappsandeep.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_960_720.jpg",
      describe:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
    },
    {
      projectName: "sovial media app",
      link: "https://movieappsandeep.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_960_720.jpg",
      describe:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
    },
    {
      projectName: "sovial media app",
      link: "https://movieappsandeep.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_960_720.jpg",
      describe:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
    },
    {
      projectName: "sovial media app",
      link: "https://movieappsandeep.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_960_720.jpg",
      describe:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
    },
    {
      projectName: "sovial media app",
      link: "https://movieappsandeep.netlify.app/",
      image:
        "https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_960_720.jpg",
      describe:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
    },
  ];
  return (
    <div
    className="projects"
      style={{
        // width: "80%",
        display: "flex",
        flexDirection: "column",
        // alignItems: "flex-start",
        justifyContent: "space-evenly",
        marginTop: "2rem",
        
        // paddingBottom: "0px",
        background: "#c2e59c" /* fallback for old browsers */,
        background:
          "-webkit-linear-gradient(to right, #64b3f4, #c2e59c)" /* Chrome 10-25, Safari 5.1-6 */,
        background:
          "linear-gradient(to right, #64b3f4, #c2e59c)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      }}
      id="works"
    >
      <Box
        sx={{
          textTransform: "capitalize",
        }}
        style={{
          fontSize: "1.7rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          color: "#2e7d32",
        }}
      >
        Check Out Some of My Works.
      </Box>
      {/* //////data */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          // alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {data?.map((e) => {
          return (
            <ProjectCard
              image={e?.data?.file}
              des={e?.data?.des}
              name={e?.data?.name}
              link={e?.data?.link}
            />
          );
        })}
      </div>
    </div>
  );
};
