import React from "react";
import { Formik, Form, Field, useFormik } from "formik";
import axios from "axios";

// components
import { axiosWithAuth}  from "../utils/axiosWithAuth";

// The purpose of this component is to allow the business user to create a new pickup request.
// When the Create-A-Pickup button is tapped, the user is presented with the following fields:
// Type of food, amount of food by count/weight, and a preferred pick up time

export default function CreatePickupForm() {
  const formik = useFormik({
    initialValues: {
      typeOfFood: "",
      qty: "",
      preferredPickupTime: "",
      bizUserID: 555,
      volUserID: 1
    },
    onSubmit: values => {
      console.log("This is values: ", values);
      alert(JSON.stringify(values, null, 2));
      axiosWithAuth()
        .post("https://replate-2.herokuapp.com/api/auth/pickup/add", values)
        .then(res => console.log("This is axios.post.then res: ", res))
        .catch(err => console.log("This is axios.post.catch err: ", err));
    }
  });

  console.log("This is formik in CreatePickupForm: ", formik)

  return (
      <div>
      <h2>Replate</h2>
    <Formik onSubmit={values => console.log(values)}>
      <Form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="typeOfFood">Type of Food: </label>
          <Field
            id="typeOfFood"
            type="text"
            name="typeOfFood"
            value={formik.typeOfFood}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="qty">Amount: </label>
          <Field
            id="qty"
            type="text"
            name="qty"
            value={formik.qty}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="preferredPickupTime">Preferred Pickup Time: </label>
          <Field
            id="preferredPickupTime"
            type="text"
            name="preferredPickupTime"
            value={formik.preferredPickupTime}
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