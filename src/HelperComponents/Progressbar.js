import * as React from "react";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { FormLabel } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function Progressbar(props) {
  const { value, label, rate } = props;
  return (
    <div
      style={{
        padding: "1rem 2rem",
        margin: "1.6rem 1rem",
        boxShadow: "0px 0px 1px",
      }}
    >
      <FormLabel
        component="legend"
        style={{
          marginBottom: "0.4rem",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            marginRight: "2px",
          }}
        >
          {`${label} `}{" "}
        </div>
        {`${rate}%`}
      </FormLabel>
      <div>
        <BorderLinearProgress variant="determinate" value={rate} />
      </div>
    </div>
  );
}
