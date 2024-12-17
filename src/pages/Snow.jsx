import React, { useEffect } from "react";
import "./Snow.css";

const Snow = () => {
  useEffect(() => {
    createSnowflakes();
  }, []);

  const createSnowflakes = () => {
    const snowContainer = document.getElementById("snow-container");
    if (!snowContainer) return;

    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
      snowflake.style.animationDelay = Math.random() * 3 + "s";
      snowContainer.appendChild(snowflake);
    }
  };

  return <div id="snow-container"></div>;
};

export default Snow;
