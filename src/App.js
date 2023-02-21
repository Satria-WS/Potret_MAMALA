import React from "react";
import "./styles.css";
import cover from "./assets/images/cover-hibiki.png";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonAppBar from "./components/HeaderiHibiki";

const App = () => {
  return (
    <>
      <div className="">
        <img className="cover-hibki" src={cover} alt="cover-img" />
        <div></div>
      </div>
      <div>
        {" "}
        <MenuIcon
          style={{ position: "absolute", right: "190px", top: "40px" }}
        />
      </div>
    </>
  );
};

export default App;
