import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const LoginPopUp = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center mt-10 bg-sky-100 rounded-2xl p-4">
        <h1>Congratulations you have signed up!</h1>
        <p>Your crendetials are:</p>
        <ul>
          <li>Name : {location.state.name}</li>
          <li>Email : {location.state.email}</li>
        </ul>
        <p>Would you like to login </p>
        <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-2/4 hover:bg-blue-800">
          <Link to={`/login`}>Log In</Link>
        </button>
      </div>
    </div>
  );
};

export default LoginPopUp;
