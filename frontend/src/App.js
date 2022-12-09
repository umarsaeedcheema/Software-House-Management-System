import "./App.css";
import { Routes, Route,Link } from "react-router-dom";
import Landing from './components/Landing/Landing.js'

function App() {
  return (
    <div className="App">
      <h1 className="font-bold text-lg mt-10">
        Software House Management System
      </h1>
      <div>
        <Routes>
         <Route exact path='/' element={< Landing />}></Route>
        </Routes>
      </div>
      {/*<div className="grid grid-flow-row-dense grid-cols-11 mt-10 gap-x-4 h-20">
        <div className="col-start-2 col-span-3 auto-cols-auto shadow bg-sky-100 hover:bg-blue-200">
          <p className="mt-1">HR SignUp and LogIn</p>
          <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 mr-1 hover:bg-blue-800">
            <Link to={`signup`}>Sign Up</Link>
          </button>
          <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
            <Link to={`login`}>Log In</Link>
          </button>
        </div>
        <div className="col-start-5 col-span-3 auto-cols-auto shadow bg-sky-100">
          <p className="mt-1">SE LogIn</p>
          <button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 ml-1 hover:bg-blue-800">
            <Link to={`login`}>Log In</Link>
          </button>
        </div>
        <div className="col-start-8 col-span-3 auto-cols-auto shadow bg-sky-100">
          <p className="mt-1">PM LogIn</p>
        </div>
      </div>*/}
    </div>
  );
}

export default App;
