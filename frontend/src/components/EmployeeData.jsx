import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const EmployeeData = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);

  const deleteEmployee = (id) => {
    axios
      .delete(
        `http://localhost:3001/deleteEmployee/`,
        {
          data: {
            id: id,
          },
        },
        //raise alert
        alert("Employee Fired")
        //refresh page
      )
      .then(() => {
        window.location.reload();
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/viewEmployee").then((response) => {
      setEmployees(response.data);
    });
  }, []);
  const employeeData = employees.map((employee) => {
    return (
      <div className="flex ">
        <div className="bg-sky-300 rounded-lg">
          <h1 className="flex justify-between font-extrabold">
            <div className="ml-16">
              {employee.first_name} {employee.last_name}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 sm:w-1/4 hover:bg-blue-800"
              onClick={() => deleteEmployee(employee.id)}
            >
              Fire
            </button>
          </h1>
          <h1 className="font-bold">DETAILS</h1>
          <p>{employee.designation}</p>

          {showEmployeeDetails ? <p>Employee ID: {employee.id} </p> : null}
          {showEmployeeDetails ? <p>Salary: {employee.salary} </p> : null}
          {showEmployeeDetails ? <p>Hired on: {employee.hired_on} </p> : null}

          <button
            onClick={() => setShowEmployeeDetails(!showEmployeeDetails)}
            className="bg-yellow-300"
          >
            View More Details
          </button>
          <button type="submit"> Submit </button>
          <button className="bg-red-300">Create Review</button>

          {/* active projects to be done */}
          {/*  past projects */}
          {/* supervision */}

          {/* yearly reviews */}
        </div>
      </div>
    );
  });
  return (
    <div className="flex gap-3 flex-wrap justify-center">{employeeData}</div>
  );
};

export default EmployeeData;
