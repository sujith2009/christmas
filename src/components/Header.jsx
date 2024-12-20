import React, { useEffect } from "react";
import Logo from "../assets/banner.jpg";
import "../App.css";
import { motion } from "framer-motion";
import Snow from "../pages/Snow";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#CF4751" }}>
      <div className="container-fluid">
        <div className="row position-relative">
          <img src={Logo} alt="" className="img-fluid banner_img" />
          <h2 className="text">Merry Christmas</h2>
          <h4 className="subtext">
            To season of gift giving begins.Get Amazing Christmas <br />
            Presents for you loved ones and become the best Secret Santa this
            year
          </h4>
        </div>
        <Snow />
      </div>
    </div>
  );
};

export default Header;
