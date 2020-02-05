import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchData } from "../actions";

// components
import BusinessNavBar from "./BusinessNavBar";
import EditPickupForm from "./EditPickupForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// This component displays the dashboard for the business users.
// This is the first component the user sees after registering/logging in.
// The business dashboard shows the user the pickup requests created and has a nav bar at the bottom, allowing the user to navigate to:
// Profile, create-a-pickup-request, and the user's created pickup requests

const initialState = [
  {
    typeOfFood: "Lettuce",
    qty: "10",
    preferredPickupTime: "3:00 PM"
  },
  {
    typeOfFood: "Sweet Potatos",
    qty: "25",
    preferredPickupTime: "4:00 PM"
  },
  {
    typeOfFood: "Lemons",
    qty: "5",
    preferredPickupTime: "4:30 PM"
  }
];

const BusinessDashboard = props => {
  const [pickups, setPickups] = useState([]);

  useEffect(() => {
    props.fetchData();
  }, []);

  console.log("This is props in BusinessDash: ", props);

  let history = useHistory();

  return (
    <div>
      <h1>Replate</h1>
      <h3>Pick-Ups</h3>
      <div>
        {props.pickupOnProps.map(pickup => (
          <div className="pickup">
            <p>
              {pickup.typeOfFood}, Amount: {pickup.qty}
            </p>
            <p>Preferred Pickup Time: {pickup.preferredPickupTime}</p>
            <button>Edit</button>
          </div>
        ))}
      </div>
      <BusinessNavBar />
    </div>
  );
};

// export default BusinessDashboard;

// This code takes the state in store and sets it to the prop triviaOnProps
const mapStateToProps = state => {
  console.log("This is state in BusinessDash: ", state)
  return {
    loadingOnProps: state.isLoading,
    pickupOnProps: state.pickupReducer.pickup,
    errorOnProps: state.error
  };
};

// This code connects
export default connect(
  mapStateToProps, // function
  { fetchData } // object
)(BusinessDashboard);
