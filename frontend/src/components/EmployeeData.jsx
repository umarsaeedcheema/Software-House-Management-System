import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const EmployeeData = () => {
  const [employees, setEmployees] = useState([]);
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:3001/viewEmployee").then((response) => {
      setEmployees(response.data);
    });
  }, []);
  const employeeData = employees.map((employee) => {
    return (
      <div className="flex">
        <div className="bg-sky-300">
          <h1 className="flex justify-center">
            {employee.first_name} {employee.last_name}
          </h1>
          <h1>{employee.designation}</h1>
          
          {showEmployeeDetails? <p>Employee ID: {employee.id} </p> : null}
          {showEmployeeDetails? <p>Salary: {employee.salary} </p> : null}
          {showEmployeeDetails? <p>Hired on: {employee.hired_on} </p> : null}

          <button onClick={() => setShowEmployeeDetails(!showEmployeeDetails)} className="bg-yellow-300">View More Details</button>
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
  return <div className="flex gap-3">{employeeData}</div>;

  
};

export default EmployeeData;
