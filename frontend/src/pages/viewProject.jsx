import { useLocation } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_LINK from "./env.js";
import "./viewProject.css";

// import ProjectData from "../components/ProjectsData";

const onButtonClick = (event) => {
  console.log(event.target.value);
  fetch(BACKEND_LINK + "/viewProject/markprojectcomplete", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ project_id: event.target.value }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response) {
        alert("Project marked as complete.");
        window.location.reload(false);
        // setprojects(response.projects);
      }
    });
};

const ProjectData = (state) => {
  const [projects, setprojects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const windowState = JSON.parse(window.localStorage.getItem("state"));

  useEffect(() => {
    axios
      .post("http://localhost:3001/viewProject", windowState)
      .then((response) => {
        console.log(response.data);
        setprojects(response.data.projects);
        setTasks(response.data.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const projectData = projects.map((project) => {
    return (
      <li className="App mt-12 p-10 bg-sky-100 rounded-2xl" key={project.id}>
        <h1>Project ID: {project.id}</h1>
        <h3>Project Name: {project.name}</h3>
        <h3>
          Project Start Time:{" "}
          {Date(project.start_time).toLocaleString().split("GMT")[0]}
        </h3>
        <h3>
          Project End Time:{" "}
          {Date(project.end_time).toLocaleString().split("GMT")[0]}
        </h3>
        <h3>Project Assigned to : {project.assigned_to_pm}</h3>
        <h3>Project Status: {project.status}</h3>
        <div>
          <h2>Tasks:</h2>
          <ul className="tasksflex">
            {tasks.map((task, index) => {
              if (task.project_id == project.id) {
                return (
                  <li>
                    <p>
                      {String(index + 1) + "."} Task: {task.task}
                    </p>
                    <p>
                      Due date:{" "}
                      {Date(task.due_date).toLocaleString().split("GMT")[0]}
                    </p>
                    <p>Status: {task.status}</p>
                    <p>Assigned to employee ID: {task.assigned_to}</p>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <button
          onClick={onButtonClick}
          className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-2/4 hover:bg-blue-800"
          value={project.id}
        >
          Mark Project as Complete
        </button>
      </li>
    );
  });

  // return <div></div>
  return <ul>{projectData}</ul>;
};

const ViewProject = () => {
  console.log("here");
  const { state } = useLocation();
  console.log("state", state);
  // alert("here")
  return (
    <div className="App">
      <h1>All Projects</h1>
      <ProjectData state={state} />
    </div>
  );
};
export default ViewProject;
