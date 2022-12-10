import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const HRHomepage = () => {
  const { state } = useLocation();
  const windowState = JSON.parse(window.localStorage.getItem("state"));
  
  if (state) {
    if ( windowState === null || state.id != windowState.id) {
      const windowState = window.localStorage.setItem("state", JSON.stringify(state));
    }
  }
  
  console.log("state", state);
  console.log("windowState", windowState);

  return (
    <div>
      <h1 className="flex justify-center">
        Human Resources Home Page
      </h1>
      <nav>
        <div className="flex justify-center gap-4 mt-5 ">
          <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl">
            <Link to={{pathname: `updatepassword`, state: state}}>Update Password</Link>
          </button>
          <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl">
            <Link to={`/login`}>Log out</Link>
          </button>
        </div>
        <div className="flex justify-center gap-4 mt-5 ">
          <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl">
            <Link to={`addEmployee`}>Add Employee</Link>
          </button>
          <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl">
            <Link to={`viewEmployee`}>View Employee</Link>
          </button>
          {/* <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl">
            Fire Employee
          </button> */}
        </div>

        <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
          <Link to={`raise-privilege`}>Raise Privilege Level of Employee</Link>
        </button>

        <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
          <Link to={`create-employee-review`}>
            Create Employee's Yearly Review
          </Link>
        </button>

        <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
          <Link to={`view-employees-review`}>
            View Employees' Yearly Review
          </Link>
        </button>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default HRHomepage;
