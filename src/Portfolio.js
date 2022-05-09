import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import React   from 'react';
import { About } from "./Components/About";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import { Projects } from "./Components/Projects";
import { Resume } from "./Components/Resume";
import { getDataActionCreater } from "./Redux/getDataActionCreater";

export const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataActionCreater());
  }, [dispatch]);

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
