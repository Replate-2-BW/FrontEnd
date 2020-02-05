import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

// This component is to allow business users to create an account with Replate. Business users are required to fill out the following fields:
// username, password, phoneNumber, biZname

// This code is for form validation through Yup.
// const RegistrationSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(2, "Too short!")
//     .max(16, "Too long!")
//     .required("Required")
// });

// This code contains the state, submit handler, and the registration form itself
export default function Registration() {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      phoneNumber: "",
      bizName: "",
      bizAddress: "",
      userType: "business"
    },
    onSubmit: values => {
      console.log("This is values: ", values);
      alert(JSON.stringify(values, null, 2));
      axios
        .post("https://replate-2.herokuapp.com/api/register", values)
        .then(res => {
          history.push("/login")
          console.log("This is axios.post.then res: ", res);
        })
        .catch(err => console.log("This is axios.post.catch err: ", err));
    }
  });

  return (
    <div>
      <h2>Welcome to Replate!</h2>
      <Formik
        // validationSchema={RegistrationSchema}
        onSubmit={values => console.log(values)}
      >
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <Field
              id="username"
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <Field
              id="password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number: </label>
            <Field
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="bizName">Business: </label>
            <Field
              id="bizName"
              type="text"
              name="bizName"
              value={formik.values.bizName}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="bizAddress">Business Address: </label>
            <Field
              id="bizAddress"
              type="text"
              name="bizAddress"
              value={formik.values.bizAddress}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

