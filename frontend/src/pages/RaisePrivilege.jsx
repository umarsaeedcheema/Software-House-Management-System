import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import BACKEND_LINK from "./env.js";

const RaisePrivilege = () => {
  const formik = useFormik({
    initialValues: {
      employee_id: 0,
    },
    //validation
    validationSchema: Yup.object({
      employee_id: Yup.number().required("Required!").positive().integer(),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios.post(BACKEND_LINK + "/raise-privilege", values).then((res) => {
        console.log(res);
      });
    },
  });
  console.log(formik.errors);
  return (
    <div className="flex flex-col items-center">
      <div className="mt-12 p-10 bg-sky-100 rounded-2xl">
        <h1 className="text-3xl my-10 items-center">Raise Privilege</h1>
        <form
          action=""
          className="flex flex-col "
          onSubmit={formik.handleSubmit}
        >
          <label
            htmlFor="employee_id"
            className={`text-gray-900 block pb-2 ${
              formik.touched.employee_id && formik.errors.employee_id ? "text-red-400" : ""
            }`}
          >
            {formik.touched.employee_id && formik.errors.employee_id
              ? formik.errors.employee_id
              : "Employee ID:"}
          </label>
          <input
            type="text"
            name="employee_id"
            id="employee_id"
            className="ml-2 border border-gray-400 rounded"
            onChange={formik.handleChange}
            value={formik.values.employee_id}
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

export default RaisePrivilege;
