// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import { Button, Typography } from "@mui/material";
// import { callBlogsUpdates } from "../HandleFunctions/handleFunctions";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const style = {
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // width: 400,
  width: "30%",
  minWidth: "16rem",
  height: "max-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  lineBreak: "anywhere",
  margin: "1rem 5px",
};

export default function Blogs() {
  const [data, setData] = useState();

  const blogData = useSelector((state) => {
    // console.log(state.data.blog.blog);
    return state.data.blog.blog;
  });

  useEffect(() => {
    getDataActionCreater();
    if (blogData) setData(blogData);
  }, [blogData]);

  // useEffect(() => {
  //   callBlogsUpdates();
  // }, []);

  // console.log(data);

  return (
    <Box
      sx={{
        p: 4,
        overflow: "auto",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        overflow: "auto",
      }}
    >
      {data?.map((e) => {
        return (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  var url = document.createElement("a");
                  url.href = e.data.link;
                  url.target = "_blank";
                  document.body.appendChild(url);
                  url.click();
                }}
              >
                {e.data.name}
              </Button>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div
                style={{
                  padding: "2=0px",
                  fontSize: "1.3rem",
                  fontWeight: "525",
                }}
              >
                {e.data.des}
              </div>
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
