import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, useFormik } from "formik";

// components
import { axiosWithAuth } from "../utils/axiosWithAuth";
import BusinessNavBar from "./BusinessNavBar";

let userID = parseInt(localStorage.getItem("ID"));

const EditPickupForm = props => {

    console.log("This is props in EditPickupForm: ", props)

    let history = useHistory();

    const formik = useFormik({
        initialValues: {
          typeOfFood: "",
          qty: "",
          preferredPickupTime: "",
          bizUserID: userID,
          volUserID: 1
        },
        onSubmit: values => {
          console.log("This is values: ", values);
          alert(JSON.stringify(values, null, 2));
          axiosWithAuth()
            .put("https://replate-2.herokuapp.com/api/auth/pickup/add", values)
            .then(res => {
              console.log("This is axios.post.then res: ", res);
              history.push("/dashboard-b");
            })
            .catch(err => console.log("This is axios.post.catch err: ", err));
        }
      });

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
          <BusinessNavBar />
        </div>
      );
}

export default EditPickupForm;