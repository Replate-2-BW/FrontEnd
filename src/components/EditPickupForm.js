
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, useFormik } from "formik";
import { connect } from "react-redux";
import { fetchPickups } from "../actions";

// components
import { axiosWithAuth } from "../utils/axiosWithAuth";
import BusinessNavBar from "./BusinessNavBar";

// The purpose of this component is to allow the business user to create a new pickup request.
// When the Create-A-Pickup button is tapped, the user is presented with the following fields:
// Type of food, amount of food by count/weight, and a preferred pick up time

let userID = parseInt(localStorage.getItem("ID"));

const EditPickupForm = props => {
  console.log("This is props in EditPickupForm: ", props);

  let history = useHistory();

  useEffect(() => {
    props.fetchPickups();
  }, []);

  const formik = useFormik({
    initialValues: {
      typeOfFood: props.pickupOnProps.typeOfFood,
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
          <div>
            <button type="delete">Delete</button>
          </div>
        </Form>
      </Formik>
      <BusinessNavBar />
    </div>
  );
};

// export default EditPickupForm;

// This code takes the state in store and sets it to the prop triviaOnProps
const mapStateToProps = state => {
  console.log("This is state in BusinessDash: ", state);
  return {
    loadingOnProps: state.isLoading,
    pickupOnProps: state.pickupReducer.pickup,
    errorOnProps: state.error
  };
};

// This code connects
export default connect(
  mapStateToProps, // function
  { fetchPickups } // object
)(EditPickupForm);
