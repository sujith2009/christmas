import React from "react";
import FooterImage from "../assets/footer.png";

const FooterSec = () => {
  return (
    <div>
      <div className="container-fluid">
        <img
          src={FooterImage}
          className="img-fluid"
          alt="footerImage"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default FooterSec;
