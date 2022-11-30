import React from "react";
import EmployeeData from "../components/EmployeeData";

const ViewEmployee = () => {
  return (
    <div className="flex justify-center">
      <div>
        <h1>All Employees</h1>
        <EmployeeData />
      </div>
    </div>
  );
};

export default ViewEmployee;
