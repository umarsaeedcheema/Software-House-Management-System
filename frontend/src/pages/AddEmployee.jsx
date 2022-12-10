import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import BACKEND_LINK from "./env.js";

const AddEmployee = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      designation: "",
      salary: 0,
      hired_date: "",
      email: "",
    },
    //validation
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      last_name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      designation: Yup.string().required("Required"),
      salary: Yup.number().required("Required"),
      hired_date: Yup.date().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios.post(BACKEND_LINK + "/addEmployee", values).then((res) => {
        console.log(res);
        window.location.reload();
      });
    },
  });
  return (
    <div className="flex justify-center mt-5">
      <div className="flex flex-col bg-blue-100 p-5 rounded-2xl">
        <h1 className="flex justify-center">Add Employee </h1>
        <form
          action=""
          className="flex flex-col"
          onSubmit={formik.handleSubmit}
        >
          <label
            htmlFor="first_name"
            className={`text-gray-900 block pb-2 ${
              formik.touched.first_name && formik.errors.first_name
                ? "text-red-400"
                : ""
            }`}
          >
            {formik.touched.first_name && formik.errors.first_name
              ? formik.errors.first_name
              : "First Name:"}
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="ml-2 border border-gray-400 rounded"
            onChange={formik.handleChange}
            value={formik.values.first_name}
          />
          <label
            htmlFor="last_name"
            className={`text-gray-900 block pb-2 ${
              formik.touched.last_name && formik.errors.last_name
                ? "text-red-400"
                : ""
            }`}
          >
            {formik.touched.last_name && formik.errors.last_name
              ? formik.errors.last_name
              : "Last Name:"}
          </label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="ml-2 border border-gray-400 rounded"
            onChange={formik.handleChange}
            value={formik.values.last_name}
          />
          <label
            htmlFor="email"
            className={`text-gray-900 block pb-2 ${
              formik.touched.email && formik.errors.email ? "text-red-400" : ""
            }`}
          >
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : "Email:"}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="ml-2 border border-gray-400 rounded "
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label
            htmlFor="designation"
            className={`text-gray-900 block pb-2 ${
              formik.touched.designation && formik.errors.designation
                ? "text-red-400"
                : ""
            }`}
          >
            {formik.touched.designation && formik.errors.designation
              ? formik.errors.designation
              : "Designation:"}
          </label>
          <select
            name="designation"
            id="designation"
            onChange={formik.handleChange}
            value={formik.values.designation}
            className="ml-2 border border-gray-400 rounded"
          >
            <option value="">Select an option</option>
            <option value="SWE">Software Engineer</option>
            <option value="PM">Project Manager</option>
            <option value="HR">Human Resource</option>
          </select>

          <label
            htmlFor="salary"
            className={`text-gray-900 block pb-2 ${
              formik.touched.salary && formik.errors.salary
                ? "text-red-400"
                : ""
            }`}
          >
            {formik.touched.salary && formik.errors.salary
              ? formik.errors.salary
              : "Salary:"}
          </label>
          <input
            type="salary"
            name="salary"
            id="salary"
            className="ml-2 border border-gray-400 rounded"
            onChange={formik.handleChange}
            value={formik.values.salary}
          />
          <label
            htmlFor="hired_date"
            className={`text-gray-900 block pb-2 ${
              formik.touched.hired_date && formik.errors.hired_date
                ? "text-red-400"
                : ""
            }`}
          >
            {formik.touched.hired_date && formik.errors.hired_date
              ? formik.errors.hired_date
              : "Hired date:"}
            <p className="text-xs"> YYYY-MM-DD</p>
          </label>
          <input
            type="hired_date"
            name="hired_date"
            id="hired_date"
            className="ml-2 border border-gray-400 rounded"
            onChange={formik.handleChange}
            value={formik.values.hired_date}
          />
          <button
            className="bg-blue-500 text-white rounded-2xl mt-4 mx-auto p-2 sm:w-3/4 hover:bg-blue-800"
            type="submit"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
