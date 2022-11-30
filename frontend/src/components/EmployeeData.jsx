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
    return <h1>{employee.first_name}</h1>;
  });
  return <div>{employeeData}</div>;
};

export default EmployeeData;
