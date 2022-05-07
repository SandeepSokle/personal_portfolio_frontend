// import React   from 'react';
import { Button } from "@mui/material";
import "./GeneralButton.css"
export const GeneralButton = (props) => {
  const { title, btnColor } = props;
  // console.log(props);
  return (
    <Button
    className="btn"
      sx={{
        fontSize: "1rem",
        padding: "0.5rem 2rem",
        m: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "capitalize",
      }}
   
    //   color={btnColor ? btnColor : ""}
    color={`${btnColor ? btnColor : "primary"}`}
      variant="contained"
    >
      {title}
      <props.btnIcon
        style={{
          marginLeft: "6px",
        }}
      />
    </Button>
  );
};
