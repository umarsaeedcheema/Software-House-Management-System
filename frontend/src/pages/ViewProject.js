
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// import ProjectData from "../components/ProjectsData";

const ProjectData = () => {
  const [projects, setprojects] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/viewProject").then((response) => {
        console.log(response.data)
      setprojects(response.data);
    }).catch((err) => {console.log(err)});
  }, []);
  const projectData = projects.map((project) => {
    return (
      <div className="flex flex-col items-center">

        <div className="App mt-12 p-10 bg-sky-100 rounded-2xl" key={project.id}>
            <h3>Project ID: {project.id}</h3>
            <h3>Project Name: {project.name}</h3>
            <p>Project Start Time: {project.start_time}</p>
            <p>Project End Time: {project.end_time}</p>
            <p>Project Assigned to : {project.assigned_to_pm}</p>
            <p>Project Status: {project.status}</p>
        </div>
        </div>
      
    );
  });
  // return <div></div>
  return <div>{projectData}</div>;
};


const ViewProject = () => {
    console.log("here")
    // alert("here")
  return (
      <div className="App" >
        <h1>All Projects</h1>
        <ProjectData/>
      </div>
  );
};
export default ViewProject;