import React from "react";
import EmployeeData from "../components/EmployeeData";

const ViewEmployee = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1 className="flex justify-center">All Employees</h1>
        <EmployeeData />
      </div>
    </div>
  );
};

export default ViewEmployee;
