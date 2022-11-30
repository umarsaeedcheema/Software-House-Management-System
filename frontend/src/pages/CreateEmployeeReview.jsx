import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';


const CreateEmployeeReview = () => {
  const formik = useFormik({
    initialValues: {
      employee_id: 23100018,
      content: "",
      created_at: "",
      reviewed_by: 0,
    },
    //validation
    validationSchema: Yup.object({
      content: Yup.string().required("Required!"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios.post("http://localhost:3001/create-employee-review", values).then((res) => {
        console.log(res);
        
        
        
      });
    },
  });
  console.log(formik.errors);
  return (
    <div className="flex flex-col items-center">
      <div className="mt-12 p-10 bg-sky-100 rounded-2xl">
        <h1 className="text-3xl my-10 items-center">Create Employee Yearly Review</h1>
        <form
          action=""
          className="flex flex-col "
          onSubmit={formik.handleSubmit}
        >
          <label
            htmlFor="review"
            className={`text-gray-900 block pb-2 ${
              formik.touched.content && formik.errors.content ? "text-red-400" : ""
            }`}
          >
            {formik.touched.content && formik.errors.content
              ? formik.errors.content
              : "Content:"}
          </label>
          <input
            type="text"
            name="content"
            id="content"
            className="ml-2 border border-gray-400 rounded"
            onChange={formik.handleChange}
            value={formik.values.content}
          />

          

          <button
            type="submit"
            className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-2/4 hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeeReview;
