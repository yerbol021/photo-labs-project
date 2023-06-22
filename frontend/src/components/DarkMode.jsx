import React, { useState } from "react";
import "../styles/DarkMode.scss";

const DarkMode = () => {

  const toggleDarkMode = () => {
    let body = document.querySelector("body");
    body.classList.toggle("dark-mode");

    body.classList.toggle("light-mode");
  };

  return (
    <div>
      <button className="dark-mode-toggle"
      onClick={toggleDarkMode}>Dark mode</button>
      {/* Additional content */}
    </div>
  );
};

export default DarkMode;
