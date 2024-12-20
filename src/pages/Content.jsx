import React from "react";
import AllCss from "../css/All.module.css";
import { GiPineTree } from "react-icons/gi";
const Content = () => {
  return (
    <div style={{ backgroundColor: "#CF4751" }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5
              className={`text text-center text-white pt-5 ${AllCss.contentText}`}
            >
              <GiPineTree />
              Merry Christmas and a Happy new year
              <GiPineTree />
            </h5>
          </div>
          <p
            className={`text text-white text-center pt-4 ${AllCss.paraContent}`}
          >
            Christmas is the spirit of giving without a thought of getting.
            <br />
            It is happiness because we see joy in people. It is forgetting self
            & finding time for others.
            <br /> It is discarding the meaningless.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
