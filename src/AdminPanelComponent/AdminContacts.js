import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Grid } from "@mui/material";

export const AdminContacts = () => {
  const [selectedVal, setSelectedVal] = React.useState("About Me");

  const buttons = [
    <Button
      key="aboutMe"
      onClick={() => {
        setSelectedVal("About Me");
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      About Me
    </Button>,
    <Button
      key="contact"
      onClick={() => {
        setSelectedVal("Contact Details");
      }}
      sx={{
        textTransform: "capitalize",
      }}
    >
      Contact Details
    </Button>,
  ];
  return (
    <Grid
      sx={{
        display: "flex",
        "& > *": {},
      }}
    >
      <Grid
        xs={2.5}
        sx={{
          borderRight: "0.2px solid blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
        >
          {buttons}
        </ButtonGroup>
      </Grid>
      <Grid xs={9.5} sx={{ p: "2px 2rem" }}>
        <h1>{selectedVal}</h1>
      </Grid>
    </Grid>
  );
};
