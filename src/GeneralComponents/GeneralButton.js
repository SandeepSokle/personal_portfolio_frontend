import { Button } from "@mui/material";
import "./GeneralButton.css";
export const GeneralButton = (props) => {
  const { title, btnColor, disabled, link } = props;
  // console.log(props);
  const handleOpenLink = (name) => {
    window.open(link, "_blank", "noopener,noreferrer");
    // window.location.href = links[name];
  };
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
      disabled={disabled ? true : false}
      //   color={btnColor ? btnColor : ""}
      color={`${btnColor ? btnColor : "primary"}`}
      variant="contained"
      onClick={(e) => {
        e.preventDefault();
        handleOpenLink();
      }}
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
