import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="font-bold text-lg">Software House Management System</h1>
      <p>Click here to go to signup page</p>
      <button className="border-solid border-2 border-black p-1 mt-5">
        <Link to={`signup`}>Sign Up</Link>
      </button>
    </div>
  );
}

export default App;
