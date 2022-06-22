import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import WorkIcon from "@mui/icons-material/Work";
import BookIcon from "@mui/icons-material/Book";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
export const mainListItems = (
  <div>
    <ListItem
      button
      onClick={(e) => {
        // console.log(e.currentTarget.innerText);
      }}
    >
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button  onClick={(e) => {
        // console.log(e.currentTarget.innerText);
      }}>
      <ListItemIcon>
        <DocumentScannerIcon />
      </ListItemIcon>
      <ListItemText primary="Resume" />
    </ListItem>
    <ListItem button  onClick={(e) => {
        // console.log(e.currentTarget.innerText);
      }}>
      <ListItemIcon>
        <ImportContactsIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button  onClick={(e) => {
        // console.log(e.currentTarget.innerText);
      }}>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Experience" />
    </ListItem>
    <ListItem button  onClick={(e) => {
        // console.log(e.currentTarget.innerText);
      }}>
      <ListItemIcon>
        <BookIcon />
      </ListItemIcon>
      <ListItemText primary="Blog" />
    </ListItem>
    <ListItem button  onClick={(e) => {
        // console.log(e.currentTarget.innerText);
      }}>
      <ListItemIcon>
        <RecentActorsIcon />
      </ListItemIcon>
      <ListItemText primary="Contacts" />
    </ListItem>
  </div>
);
