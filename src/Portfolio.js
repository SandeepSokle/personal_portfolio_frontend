// import { useEffect, useRef, useState } from "react";
// import React   from 'react';
import { About } from "./Components/About";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import { Projects } from "./Components/Projects";
import { Resume } from "./Components/Resume";

export const Portfolio = () => {
  
  return (
    <div
      className="portfolio"
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(255 255 255)",
      }}
    >
      <Header />
      <About />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
};
