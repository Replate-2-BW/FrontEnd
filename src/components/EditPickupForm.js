import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Formik, Form, Field, useFormik } from "formik";
import { connect } from "react-redux";
import { updatePickup } from "../actions";

// components
import { axiosWithAuth } from "../utils/axiosWithAuth";
import BusinessNavBar from "./BusinessNavBar";

// The purpose of this component is to allow the business user to create a new pickup request.
// When the Create-A-Pickup button is tapped, the user is presented with the following fields:
// Type of food, amount of food by count/weight, and a preferred pick up time

let userID = parseInt(localStorage.getItem("ID"));

const EditPickupForm = props => {
  const [pickup, setPickup] = useState([]);
  // console.log("This is props in EditPickupForm: ", props);

  let history = useHistory();

  useEffect(() => {
    const pickupToUpdate = props.pickupOnProps.pickup.find(
      item => `${item.id}` === id
    );
    if (pickupToUpdate) {
      setPickup(pickupToUpdate);
    }
  }, []);

  const { id } = useParams();
  console.log("This is id in EditPickupForm: ", id);

  console.log(
    "This is props.pickupOnProps.pickup: ",
    props.pickupOnProps.pickup
  );

  console.log("This is pickup: ", pickup);

  const formik = useFormik({
    initialValues: {
      typeOfFood: pickup.typeOfFood,
      qty: pickup.qty,
      preferredPickupTime: pickup.preferredPickupTime,
      bizUserID: userID,
      volUserID: 1
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      props.updatePickup(id, values);
      props.history.push("/dashboard-b");
    }
  });

  console.log("This is formik: ", formik);

  return (
    <div>
      <h2>Replate</h2>
      <h3>Edit Pickup Request</h3>
      <Formik onSubmit={values => console.log(values)}>
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="typeOfFood">Type of Food: </label>
            <Field
              id="typeOfFood"
              type="text"
              name="typeOfFood"
              placeholder={pickup.typeOfFood}
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
              placeholder={pickup.qty}
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
              placeholder={pickup.preferredPickupTime}
              value={formik.preferredPickupTime}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
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
  console.log("This is state in EditPickupForm: ", state);
  return {
    loadingOnProps: state.isLoading,
    pickupOnProps: state.pickupReducer,
    errorOnProps: state.error
  };
};

// This code connects
export default connect(
  mapStateToProps, // function
  { updatePickup } // object
)(EditPickupForm);
