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

        <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
                <Link to={`raise-privilege`}>Raise Privilege Level of Employee</Link>
        </button>

        <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
                <Link to={`create-employee-review`}>Create Employee's Yearly Review</Link>
        </button>

        <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
                <Link to={`view-employees-review`}>View Employees' Yearly Review</Link>
        </button>
        
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default HRHomepage;
