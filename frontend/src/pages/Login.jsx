import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>HR Login Page</h1>
      <button>
        <Link to={`/hrHome`}>Log In</Link>
      </button>
    </div>
  );
};

export default Login;
