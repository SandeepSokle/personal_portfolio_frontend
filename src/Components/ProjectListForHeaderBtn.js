// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataActionCreater } from "../Redux/getDataActionCreater";
import { Button, ImageList, ImageListItem, Typography } from "@mui/material";
import { loaderEndActionCreater } from "../Redux/Loader/LoaderActionCreator";

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

export default function ProjectListForHeaderBtn() {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  const blogData = useSelector((state) => {
    // console.log(state.data.projects);
    return state.data.projects;
  });

  useEffect(() => {
    getDataActionCreater();
    dispatch(loaderEndActionCreater());
    if (blogData)
      setData([...blogData["complete"], ...blogData["in progress"]]);
  }, [blogData]);

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
                color={`${e.type === "complete" ? "success" : "warning"}`}
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

              <ImageListItem
                key={e.name}
                sx={{
                  width: "100%",
                  minHeight: "14rem!important",
                  maxHeight: "16rem!important",
                  p: 4,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                cols={1}
              >
                <img
                  src={`${e.data.file}`}
                  srcSet={`${e.data.file}`}
                  alt={e.data.name}
                  loading="lazy"
                  style={{
                    width: "80%",
                    height: "80%",
                  }}
                />
              </ImageListItem>
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
