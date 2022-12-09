import React from 'react';
import './Landing.css';
import lock from "./lock.png";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<div>
			<h1 className="welcome">Welcome</h1>
				<button className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-1/4 mr-1 hover:bg-blue-800" href="/login">
				<Link to={`login`}>Login</Link>
				</button>
		</div>
	)
}

export default Landing;