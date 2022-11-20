import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    //validation
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
      name: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik.errors);
  return (
    <div className="flex flex-col items-center">
      <div className="mt-12 p-10 bg-sky-100 rounded-2xl">
        <h1 className="text-3xl my-10 items-center">Client SignUp</h1>
        <form
          action=""
          className="flex flex-col "
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="ml-2 border border-gray-400 rounded"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="ml-2 border border-gray-400 rounded"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="ml-2 border border-gray-400 rounded"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded mt-4 mx-auto p-2 sm:w-2/4 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
