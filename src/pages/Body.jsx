import React from "react";
import { FaTree } from "react-icons/fa";
import { GiDeer } from "react-icons/gi";
import AllCss from "../css/All.module.css";
import ChImage from "../assets/ch.png";
import { IoIosFlower } from "react-icons/io";

const Body = () => {
  return (
    <div style={{ backgroundColor: "#CF4751" }}>
      <div className="container">
        <div className="row">
          <h4
            className={`text text-center text-white mt-3 ${AllCss.merryChristmas}`}
          >
            <GiDeer className="fs-1" /> Merry <FaTree /> <FaTree />
          </h4>
          <h4
            className={`text text-center text-white ${AllCss.merryChristmas}`}
          >
            Christmas
          </h4>
          <div className="col">
            <div className="text-center d-flex flex-column align-items-center">
              <img
                src={ChImage}
                className="img-fluid pt-4"
                alt="Description of image"
              />
              <IoIosFlower
                className={` text-white mt-3 ${AllCss.rotateAnimation}`}
              />
              <h5 className="text text-white mt-5">HAPPY NEW YEAR</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
