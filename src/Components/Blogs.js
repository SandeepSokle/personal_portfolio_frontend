// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Blogs() {

const [data,setData] = useState()

useEffect(()=>{
  getBlogList();
},[])

  return (
    <Box sx={{ flexGrow: 1 ,p : 2}}>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4].map((e) => {
          return (
            <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
