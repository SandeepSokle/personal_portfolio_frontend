import { Achievements } from "../HelperComponents/Achievements";
import { Education } from "../HelperComponents/Education";
import { Skills } from "../HelperComponents/Skills";
import { Works } from "../HelperComponents/Works";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import {
  loaderEndActionCreater,
  loaderStartActionCreater,
} from "../Redux/Loader/LoaderActionCreator";
import "./css/Resume.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const Resume = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const [imageStatus, setImageStatus] = React.useState("education");
  const [getCompleteData, setGetCompleteData] = React.useState();
  const [imgUrl, setImgUrl] = React.useState(
    "url(https://source.unsplash.com/random/?)"
  );

  const dispatch = useDispatch();
  const resumeData = useSelector((state) => {
    return state.data.resume;
  });

  React.useEffect(() => {
    dispatch(getDataActionCreater());
  }, [dispatch]);

  React.useEffect(() => {
    console.log(resumeData);
    setGetCompleteData(resumeData);
  }, [resumeData]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    dispatch(loaderStartActionCreater());
    if (panel === "panel1") {
      setImageStatus("education");
    } else if (panel === "panel2") {
      setImageStatus("works");
    } else if (panel === "panel3") {
      setImageStatus("achievements");
    } else if (panel === "panel4") {
      setImageStatus("skills");
    } else {
      dispatch(loaderEndActionCreater());
    }
    dispatch(loaderEndActionCreater());
  };

  React.useEffect(() => {
    dispatch(loaderStartActionCreater());
    setImgUrl(imgUrl.substring(0, imgUrl.length - 1) + `,${imageStatus})`);
    dispatch(loaderEndActionCreater());
    // setImgUrl("url(https://source.unsplash.com/random)");
  }, [imageStatus]);

  return (
    <div
    className="resume"
      style={{
        
        display: "flex",
        flexDirection: "row",
        maxHeight: "90vh",
        overflow: "auto",
        marginTop: "2rem",
        // padding: "2rem 0rem",
        background: "#73C8A9" /* fallback for old browsers */,
        background:
          "-webkit-linear-gradient(to right, #373B44, #73C8A9)" /* Chrome 10-25, Safari 5.1-6 */,
        background:
          "linear-gradient(to right, #373B44, #73C8A9)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      }}
      id="resume"

      // onClick={ ()={
      //   setImgUrl(!imgUrl)
      // }}
    >
      {/* //Accordion */}
      <Box 
       className = "resumeContent"
      sx={{  overflow: "auto" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              sx={{
                width: "60%",
              }}
            >
              Education
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={
                {
                  // float : "left",
                  // width : "80vw"
                }
              }
            >
              <Education
                data={
                  getCompleteData?.education?.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                  }) || []
                }
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Works
                data={
                  getCompleteData?.works?.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                  }) || []
                }
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Achievements</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Achievements
                data={
                  getCompleteData?.achievements?.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                  }) || []
                }
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Skills</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Skills
                data={
                  getCompleteData?.skills?.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                  }) || []
                }
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>{" "}
      <Box
      className = "resumeImg"
        sx={{
         
          backgroundImage: `${imgUrl}`,
        }}
      ></Box>
    </div>
  );
};
