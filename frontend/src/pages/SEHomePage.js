import React from "react";
import { Link, Outlet } from "react-router-dom";

const SEHomepage = () => {
  return (
    <div>
      <h1 className="flex justify-center">
        <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl mt-4">
          <Link to={`/seHome`}>Software Engineer Home Page</Link>
        </button>
      </h1>
      <nav>
        <div className="flex justify-center gap-4 mt-5 ">
          <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl">
            <Link to={`updatepassword`}>Update Password</Link>
          </button>
          <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl">
            Log out
          </button>
        </div>
        <div className="flex justify-center  ">
        <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
                <Link to={`viewproject-se`}>View Projects</Link>
        </button>
        </div>
   
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default SEHomepage;
