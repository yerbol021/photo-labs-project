import React, { useState } from "react";
import "../styles/DarkMode.scss";

const DarkMode = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    let body = document.querySelector("body");
    body.classList.toggle("dark-mode");

    body.classList.toggle("light-mode");
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>Dark mode</button>
      {/* Additional content */}
    </div>
  );
};

export default DarkMode;
