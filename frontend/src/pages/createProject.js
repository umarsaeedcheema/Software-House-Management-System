import React from 'react';
import axios from 'axios';
import { Dropdown } from 'bootstrap';

class CreateProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form_name: '',
            // form_description: '',
            assigned_to: '',
            date_start: '',
            date_end: '',
            revenue: '',
            client_id: '',
            status: '',
            options: [
                {value : "in progress", label : "in progress"},
                {value : "completed", label : "completed"},
                {value : "canceled", label : "canceled"}
            ]
        }
    }
    render() {
        return (
            <div className='flex flex-col items-center'>

            <div className = "App mt-12 p-10 bg-sky-100 rounded-2xl">
                <h1 className='text-3xl my-10 items-center'>Create Project</h1>
                <p>Please fill in the form below to create a project</p>
                <form className = 'flex flex-col' onSubmit={(e) => this.validate(e)}>
                    <label className = 'pt-10'> Project Name: </label><br/>
                    <input type="text" id='form_name' className='ml-2 border border-gray-400 rounded'></input><br/>
                    <label> Assigned to: </label><br/>
                    <input type="text" id='assigned_to' className='ml-2 border border-gray-400 rounded'></input><br/>
                    <label> Start Time : </label><br/>
                    <input type = "Date" id = "date_start" className='ml-2 border border-gray-400 rounded' ></input><br/>
                    <label > End Time : </label><br/>
                    <input type = "Date" id = "date_end" className='ml-2 border border-gray-400 rounded' ></input><br/>
                    <label> Revenue : </label> <br/>
                    <input type = "number" id = "revenue" className='ml-2 border border-gray-400 rounded'></input><br/>
                    <label> Client ID : </label><br/>
                    <input type = "number" id = "client_id" className='ml-2 border border-gray-400 rounded'></input><br/>
                    <br/><input type="submit" id='submit_create_form'
                    className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-2/4 hover:bg-blue-800" value = "Create Project" onClick = {(e)=>this.validate(e)}></input>
                </form>
            </div>
            </div>
        );
    }
    
    
    getCurrentDate(separator=''){
        
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }
    
    validate(e) {
        e.preventDefault();
        // alert("here");
        let form_name = document.getElementById('form_name').value;
        // let form_description = document.getElementById('form_description').value;
        let assigned_to = document.getElementById('assigned_to').value;
        let date_start = document.getElementById('date_start').value;
        let date_end = document.getElementById('date_end').value;
        let revenue = document.getElementById('revenue').value;
        let client_id = document.getElementById('client_id').value;
        
        const current_date = this.getCurrentDate('-')
        // console.log(current_date)
        // form_description === '' ||
        if (form_name === '' ||  assigned_to === '' || date_start === '' || date_end === '' || revenue === '' || client_id === '' ) {
            // console.log("Please fill all the fields");
            alert("Please fill all the fields");
        }
        else if(date_end < current_date)
        {
            alert("Please select a valid date")
        }
        else if(date_end < date_start)
        {
            // console.log("here")
            alert("End date must be greater than start date")
        }
        else if(revenue <= 0)
        {
            alert("revenue must be postive")
        }
        else {
            this.createProject2(e);
        }
    }
    
    createProject2(e) {
        e.preventDefault();
        let request = {
            form_name: document.getElementById('form_name').value,
            // form_description: document.getElementById('form_description').value,
            assigned_to: document.getElementById('assigned_to').value,
            date_start: document.getElementById('date_start').value,
            date_end: document.getElementById('date_end').value,
            revenue: document.getElementById('revenue').value,
            client_id: document.getElementById('client_id').value,
            // status: document.getElementById('status').value
        }
        // console.log(request)
        axios.post('http://localhost:3001/createproject', request)
        .then(resp => {
            alert(JSON.stringify(resp.data, null,2));
        })
        .catch( err => {
            console.log(err);
        })
    }
}

export default CreateProject;
