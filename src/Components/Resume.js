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
  const [getCompleteData, setGetCompleteData] = React.useState();

  const dispatch = useDispatch();
  const resumeData = useSelector((state) => {
    return state.data.resume;
  });

  React.useEffect(() => {
    dispatch(getDataActionCreater());
  }, [dispatch]);

  React.useEffect(() => {
    // console.log(resumeData);
    setGetCompleteData(resumeData);
  }, [resumeData]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        maxHeight: "90vh",
        overflow: "auto",
        marginTop: "2rem",
        padding: "2rem 0rem",
      }}
      id="resume"
    >
      <Box
        sx={{
          width: "16%",
          opacity: "0.7",
          // background: "#ff6e7f",
          // background:
          //   "-webkit-linear-gradient(to right, #bfe9ff, #ff6e7f)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right, #bfe9ff, #ff6e7f)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
      ></Box>
      {/* //Accordion */}
      <Box sx={{ width: "67%", overflow: "auto" }}>
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
            <Typography style = {{
              // float : "left",
              // width : "80vw"
            }}>
              <Education data={getCompleteData?.education} />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Works</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Works data={getCompleteData?.works} />
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
              <Achievements data={getCompleteData?.achievements} />
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
              <Skills data={getCompleteData?.skills} />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>{" "}
      <Box
        sx={{
          width: "17%",
          // background: "#ff6e7f",
          // background:
          //   "-webkit-linear-gradient(to right, #ff6e7f, #bfe9ff)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right, #ff6e7f, #bfe9ff)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

          opacity: "0.7",
        }}
      ></Box>
    </div>
  );
};
