import React from "react";
import Logo from "../assets/banner.jpg";
import "../App.css";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default Header;
