import React from "react";
import lock from "./lock.png";
import "./Landing.css";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="centeralign">
      <img src={lock} alt="lock" className="bg-black mx-auto" />
      <h1 className="welcome">Welcome</h1>
      <a href="/login">
        <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 mr-1 hover:bg-blue-800">
          <Link to={`login`}>Log In</Link>
        </button>
      </a>
    </div>
  );
};

export default Landing;
