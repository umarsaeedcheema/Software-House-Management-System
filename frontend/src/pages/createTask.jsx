import React from 'react';
import axios from 'axios';
import { Dropdown } from 'bootstrap';
import BACKEND_LINK from "./env.js";

class CreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            // form_description: '',
            due_date: '',
            assigned_to: '',
            project_id: '',
        }
    }

    onTaskChange = (event) => {
        this.setState({ task: event.target.value })
    }

    onDueDateChange = (event) => {
        this.setState({ due_date: event.target.value })
    }

    onAssignedToChange = (event) => {
        this.setState({ assigned_to: event.target.value })
    }

    onProjectIDChange = (event) => {
        this.setState({ project_id: event.target.value })
    }

    onCreateTask = (event) => {
        event.preventDefault();

        fetch(BACKEND_LINK + "/createtask", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state),
      })
        .then((response) => response.json())
        .then((response) => {
          // console.log(response);
          if (response.success) {
            this.setState({ message: "Success!" });
            alert("Task created successfully.")
          } else {
            this.setState({ message: response.errormessage });
          }
        });
    }

    render() {
        return (
            <div className = "p-10 bg-sky-100 rounded-2xl myflex-container">
                <h1>Create Task</h1>
                <p>Please fill in the form below to create a project</p>
                <form onSubmit={(e) => this.validate(e)} className="form-myflex-container">
                    <label> Task Name: </label><br/>
                    <input onChange={this.onTaskChange} className="bordersolid text-gray-900 block pb-2" type="text" id='form_name'></input><br/>
                    <label> Due Date: </label><br/>
                    <input onChange={this.onDueDateChange} className="bordersolid text-gray-900 block pb-2" type = "Date" id = "date_start" ></input><br/>
                    <label> Assigned To Employee ID: </label> <br/>
                    <input onChange={this.onAssignedToChange} className="bordersolid text-gray-900 block pb-2" type = "number" id = "revenue"></input><br/>
                    <label> Project ID: </label><br/>
                    <input onChange={this.onProjectIDChange} className="bordersolid text-gray-900 block pb-2" type = "number" id = "client_id"></input><br/>
                    <br/><input className="custombutton bg-blue-500 text-white rounded hover:bg-blue-800" type="submit" id='submit_create_form' value = "Create Task" onClick = {this.onCreateTask}></input>
                </form>
            </div>
        );
    }
}

export default CreateTask;
