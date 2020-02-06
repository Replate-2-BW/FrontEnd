import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, useFormik } from "formik";
import { connect } from "react-redux";

// components
import BusinessNavBar from "./BusinessNavBar";
import { updatePickup, deletePickup } from "../actions";

// The purpose of this component is to allow the business user to edit an existing pickup request.
// When the Edit button is tapped, the user is presented with the following fields:
// Type of food, amount of food by count/weight, and a preferred pick up time


const EditPickupForm = props => {
  const [pickup, setPickup] = useState([]);

  let userID = parseInt(localStorage.getItem("ID"));

  useEffect(() => {
    const pickupToUpdate = props.pickupsOnProps.pickup.find(
      item => `${item.id}` === id
    );
    if (pickupToUpdate) {
      setPickup(pickupToUpdate);
    }
  }, []);

  // This sets the
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      typeOfFood: pickup.typeOfFood,
      qty: pickup.qty,
      preferredPickupTime: pickup.preferredPickupTime,
      bizUserID: userID,
      volUserID: 1
    },
    onSubmit: updatedPickup => {
      // alert(JSON.stringify(pickup, null, 2));
      props.updatePickup(id, updatedPickup);
      props.history.push("/dashboard-b");
    }
  });

  const handleDelete = e => {
    e.preventDefault();
    props.deletePickup(id);
    props.history.push("/dashboard-b");
  };

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
            <button onClick={handleDelete} type="delete">
              Delete
            </button>
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
    loadingOnProps: state.pickupReducer.isLoading,
    pickupsOnProps: state.pickupReducer,
    errorOnProps: state.pickupReducer.error
  };
};

// This code connects
export default connect(
  mapStateToProps, // function
  { updatePickup, deletePickup } // object
)(EditPickupForm);
