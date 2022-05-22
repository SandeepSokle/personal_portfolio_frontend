import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

export const AdminAbout = () => {
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
          borderRight: "1rem solid rgb(0 0 0 / 26%)",
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
          width: "16%",
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
        >
          {buttons}
        </ButtonGroup>
      </Grid>
      <Grid xs={9.5} sx={{ p: "2px 2rem", width: "80%" }}>
        <h1
          style={{
            color: "rgb(25 118 210)",
            display: "block",
          }}
        >
          {selectedVal}
        </h1>

        <br></br>

        {selectedVal === "About Me" ? (
          <div
            style={{
              // border: "1px dashed",
              borderColor: "black",
              marginTop: "1rem",
              padding: "1rem",
            }}
          >
            <TextField label="About Yourself" fullWidth multiline rows={4} />
            <Box
              fullWidth
              sx={{
                mt: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              width
            >
              <Button variant="contained">Save Data</Button>
            </Box>
          </div>
        ) : (
          <div
            style={{
              // border: "1px dashed",
              borderColor: "black",
              marginTop: "1rem",
              padding: "1rem",
            }}
          >
            <Box
              fullWidth
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              <TextField
                label="First Name"
                sx={{
                  width: "48%",
                  m: 1,
                }}
              />{" "}
              <TextField
                label="Last Name"
                sx={{
                  width: "48%",
                  m: 1,
                }}
              />{" "}
              <TextField
                label="Your Street"
                sx={{
                  width: "48%",
                  m: 1,
                }}
              />{" "}
              <TextField
                label="Your City"
                sx={{
                  width: "48%",
                  m: 1,
                }}
              />{" "}
              <TextField
                label="Your State"
                sx={{
                  width: "48%",
                  m: 1,
                }}
              />{" "}
              <TextField
                label="Pin Code"
                sx={{
                  width: "48%",
                  m: 1,
                }}
              />{" "}
              <TextField
                label="Phone Number"
                type="number"
                sx={{
                  width: "48%",
                  m: 1,
                }}
              />{" "}
              <TextField
                label="Your Email"
                type="email"
                sx={{
                  width: "48%",
                  m: 1,
                }}
              />{" "}
            </Box>
            <Box
              fullWidth
              sx={{
                mt: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="contained">Save Data</Button>
            </Box>
          </div>
        )}
      </Grid>
    </Grid>
  );
};
