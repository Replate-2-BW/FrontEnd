import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, useFormik } from "formik";
import { connect } from "react-redux";

// components
import BusinessNavBar from "./BusinessNavBar";
import { createPickup } from "../actions";

// The purpose of this component is to allow the business user to create a new pickup request.
// When the Create-A-Pickup button is tapped, the user is presented with the following fields:
// Type of food, amount of food by count/weight, and a preferred pick up time

const CreatePickupForm = props => {
  let userID = parseInt(localStorage.getItem("ID"));

  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      typeOfFood: "",
      qty: "",
      preferredPickupTime: "",
      bizUserID: userID,
      volUserID: 1
    },
    onSubmit: pickup => {
      console.log("This is pickup in CreatePickup: ", pickup);
      // alert(JSON.stringify(values, null, 2));
      props.createPickup(pickup);
      history.push("/dashboard-b");
    }
  });

  console.log("This is formik in CreatePickupForm: ", formik);

  return (
    <div>
      <h2>Replate</h2>
      <h3>Create Pickup Request</h3>
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
};

// This code takes the state in store and sets it to the prop pickupOnProps
const mapStateToProps = state => {
  console.log("This is state in EditPickupForm: ", state);
  return {
    loadingOnProps: state.createReducer.isLoading,
    pickupOnProps: state.createReducer,
    errorOnProps: state.createReducer.error
  };
};

// This code connects
export default connect(
  mapStateToProps, // function
  { createPickup } // object
)(CreatePickupForm);
