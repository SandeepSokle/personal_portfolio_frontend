import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProjectCard(props) {
  const { image, des, name, link } = props;
  return (
    <Card
      sx={{ maxWidth: 280, margin: "10px" }}
      onClick={() => {
        // location.href = link
        var url = document.createElement("a");
        url.href = link;
        url.target = "_blank";
        document.body.appendChild(url);
        url.click();
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ textTransform: "capitalize", color: "#2e7d32" }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
