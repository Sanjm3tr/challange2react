import React from "react";
import { Link } from "react-router-dom";
import img from "./img.png";
const LogIn = ({ el }) => {
  return (
    <div className="cardon">
      <div class="dh">
        <h1 class="dd">Your Hub For Teamwork</h1>
        <p class="ud">
          Give everyone you work with—inside and outside your company—a more
          productive way to stay in sync. Respond faster with emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place.
        </p>
        <button>Learn More </button>
      </div>
      <div class="nc  ">
        <img src={img} />
      </div>
    </div>
  );
};

export default LogIn;
