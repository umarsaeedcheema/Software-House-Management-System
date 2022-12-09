
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
        <div className="App" key={project.id}>
            <h3>Project ID: {project.id}</h3>
            <h3>Project Name: {project.name}</h3>
            <h3>Project Start Time: {project.start_time}</h3>
            <h3>Project End Time: {project.end_time}</h3>
            <h3>Project Assigned to : {project.assigned_to_pm}</h3>
            <h3>Project Status: {project.status}</h3>
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