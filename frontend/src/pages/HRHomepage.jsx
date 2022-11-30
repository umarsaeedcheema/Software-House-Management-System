import React from "react";
import { Link, Outlet } from "react-router-dom";

const HRHomepage = () => {
  return (
    <div>
      <h1 className="flex justify-center">
        <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl mt-4">
          <Link to={`/hrHome`}>HR Home Page</Link>
        </button>
      </h1>
      <nav>
        <div className="flex justify-center gap-4 mt-5 ">
          <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl">
            <Link to={`addEmployee`}>Add Employee</Link>
          </button>
          <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl">
            <Link to={`viewEmployee`}>View Employee</Link>
          </button>
          <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl">
            Fire Employee
          </button>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default HRHomepage;
