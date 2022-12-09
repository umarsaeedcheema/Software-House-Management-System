import { useLocation } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// import ProjectData from "../components/ProjectsData";

const ProjectData = (state) => {
  const [projects, setprojects] = useState([]);
  const windowState = JSON.parse(window.localStorage.getItem("state"));

  useEffect(() => {
    axios.post("http://localhost:3001/viewProject", windowState).then((response) => {
        console.log(response.data)
      setprojects(response.data);
    }).catch((err) => {console.log(err)});
  }, []);
  const projectData = projects.map((project) => {
    return (
        <li className = "App mt-12 p-10 bg-sky-100 rounded-2xl" key={project.id}>
            <h1>Project ID: {project.id}</h1>
            <h3>Project Name: {project.name}</h3>
            <h3>Project Start Time: {project.start_time}</h3>
            <h3>Project End Time: {project.end_time}</h3>
            <h3>Project Assigned to : {project.assigned_to_pm}</h3>
            <h3>Project Status: {project.status}</h3>
        </li>
    );
  });

  // return <div></div>
  return <ul>{projectData}</ul>;
};


const ViewProject = () => {
    console.log("here")
    const { state } = useLocation();
    console.log("state", state);
    // alert("here")
  return (
      <div className="App" >
        <h1>All Projects</h1>
        <ProjectData
          state={state}
        />
      </div>
  );
};
export default ViewProject;