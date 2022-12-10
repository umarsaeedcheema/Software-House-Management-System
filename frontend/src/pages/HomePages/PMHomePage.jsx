import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const PMHomepage = () => {
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
        Project Manager Home Page
      </h1>
      <nav>
        <div className="flex justify-center gap-4 mt-5 ">
          <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl">
            <Link to={{pathname: `updatepassword`, state: state}}>Update Password</Link>
          </button>
          <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl">
            Log out
          </button>
        </div>
        <div className="flex justify-center  ">
          <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
            <Link to={`createProject`}>Create Project</Link>
          </button>
          <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
            <Link to={{pathname: `viewProject`, state: state}}>View All Projects</Link>
          </button>
          <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
            <Link to={`createTask`}>Create Task</Link>
          </button>
          <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
            <Link to={`createClientProfile`}>Create Client Profile</Link>
          </button>
          <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
            <Link to={`view-client-profile`}>View Clients Profiles</Link>
          </button>

          <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
            <Link to={`create-client-review`}>Create Client Review</Link>
          </button>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default PMHomepage;
