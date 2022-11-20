import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="font-bold text-lg mt-10">
        Software House Management System
      </h1>
      <div className="grid grid-flow-row-dense grid-cols-11 mt-10 gap-x-4 h-20">
        <div className="col-start-2 col-span-3 auto-cols-auto shadow bg-sky-100 hover:bg-blue-200">
          <p className="mt-1">Client SignUp/LogIn</p>
          <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 mr-1 hover:bg-blue-800">
            <Link to={`signup`}>Sign Up</Link>
          </button>
          <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
            <Link to={`signup`}>Log In</Link>
          </button>
        </div>
        <div className="col-start-5 col-span-3 auto-cols-auto shadow bg-sky-100">
          <p className="mt-1">SE LogIn</p>
        </div>
        <div className="col-start-8 col-span-3 auto-cols-auto shadow bg-sky-100">
          <p className="mt-1">HR LogIn</p>
        </div>
      </div>
    </div>
  );
}

export default App;
