import React from "react";
import { Link, Outlet } from "react-router-dom";

const PMHomepage = () => {
  return (
    <div>
      <h1 className="flex justify-center">
        <button className="bg-blue-200 hover:bg-blue-400 p-4 rounded-2xl mt-4">
          <Link to={`/pmHome`}>Project Manager Home Page</Link>
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
            <Link to={`createProject`}>Create Project</Link>
          </button>
        <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
                <Link to={`viewProject`}>View all Project</Link>
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
