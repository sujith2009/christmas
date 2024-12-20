import React from "react";
import AllCss from "../css/All.module.css";
import { TbChessKing } from "react-icons/tb";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#CF4751" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className={`text text-center mt-5 ${AllCss.kingText}`}>
              ----------
              <TbChessKing className={`text text-center ${AllCss.kingLogo}`} />
              ----------
            </h5>
            <h5 className={`text text-center pt-3 ${AllCss.jerin}`}>
              Much love from Clasic_Jerin
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
