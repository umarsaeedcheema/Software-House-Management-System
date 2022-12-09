import React from 'react';
import './UpdatePassword.css';
import BACKEND_LINK from '../env.js';

class UpdatePassword extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			oldpassword: '',
			newpassword: '',
			newpasswordconfirmation: '',
			message: ''
		}
	}

	componentDidMount() {
		this.setState({ employee_id: 1})
	}

	onOldPasswordChange = (event) => {
        this.setState({ oldpassword: event.target.value })
        console.log(this.state)
    }

    onNewPasswordChange = (event) => {
        this.setState({ newpassword: event.target.value })
        console.log(this.state)
    }

    onNewPasswordConfirmationChange = (event) => {
        this.setState({ newpasswordconfirmation: event.target.value })
        console.log(this.state)
    }

    onUpdatePassword = (event) => {
    	event.preventDefault();

    	if (this.state.oldpassword == '' || this.state.newpassword == '' || this.state.newpasswordconfirmation == '')
    	{
    		console.log('error')
    	} else {
    		fetch('http://localhost:3001/updatepassword', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(this.state)
			})
			.then(response => response.json())
			.then(response => {
				console.log(response);
				if (response.success) {
					this.setState({ message: "Success!"})
				} else {
					this.setState({ message: response.errormessage })
				}
			})
    	}
    }

    render() {
    	// this.setState({ employee: this.props.employee});

		return (
			<div className="p-10 bg-sky-100 rounded-2xl updatepassword-container">
				<h1>Update Password</h1>
				<div>
                    <div>
                        <form className="updatepassword-form-container" onSubmit={ this.onUpdatePassword }>
                        	<div>
                        		<label htmlFor="name" className="text-gray-900 block pb-2">Old Password:</label>
                            	<input className="ml-2 border border-gray-400 rounded" type="text" onChange={this.onOldPasswordChange} />
                            </div>
                            <div>
                            	<label htmlFor="name" className="text-gray-900 block pb-2">New Password:</label>
                            	<input className="ml-2 border border-gray-400 rounded" type="text" onChange={this.onNewPasswordChange} />
                            </div>
                            <div>
                            	<label htmlFor="name" className="text-gray-900 block pb-2">Confirm Password:</label>
                            	<input className="ml-2 border border-gray-400 rounded" type="text" onChange={this.onNewPasswordConfirmationChange} />
                            </div>
                            <input className="custombutton bg-blue-500 text-white rounded hover:bg-blue-800" type="submit" value="Update Password"/>
                            <div>{this.state.message}</div>
                        </form>
                    </div>
                </div>
			</div>
		)
	}
}


export default UpdatePassword;