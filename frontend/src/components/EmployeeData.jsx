import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const EmployeeData = () => {
  const [employees, setEmployees] = useState([]);
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
        </div>
      </div>
    );
  });
  return <div className="flex gap-3">{employeeData}</div>;
};

export default EmployeeData;
