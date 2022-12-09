import React from 'react';
import axios from 'axios';
import { Dropdown } from 'bootstrap';

class CreateClientProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client_name: ''}
    }
    render() {
        return (
            <div className='flex flex-col items-center'>
            
            <div className = "App mt-12 p-10 bg-sky-100 rounded-2xl">
                <h1 className='text-3xl my-10 items-center'>Create Client Profile</h1>
                <p>Please fill in the form below to create a client Profile</p>
                <form className = 'flex flex-col' onSubmit={(e) => this.validate(e)}>
                    <label className = 'pt-10'> Client Name: </label><br/>
                    <input type="text" id='client_name' className='ml-2 border border-gray-400 rounded'></input><br/>
                    <br/><input type="submit" id='submit_create_form' 
                    className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-2/4 hover:bg-blue-800" 
                    value = "Create Client Profile" onClick = {(e)=>this.validate(e)}></input>
                </form>
            </div>
                
            </div>
        );
    }
    
    validate(e) {
        e.preventDefault();
        let client_name = document.getElementById('client_name').value;
        
        if (client_name === '') {
            alert("Please input client name");
        }
        else {
            this.CreateClientProfile2(e);
        }
    }
    
    CreateClientProfile2(e) {
        e.preventDefault();
        let request = {
            client_name : document.getElementById('client_name').value,  
        }
        // console.log(request)
        axios.post('http://localhost:3001/createclientprofile', request)
        .then(resp => {
            alert(JSON.stringify(resp.data, null,2));
        })
        .catch( err => {
            console.log(err);
        })
    }
}
export default CreateClientProfile;
