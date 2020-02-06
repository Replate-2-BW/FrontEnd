import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPickups } from "../actions";

// components
import BusinessNavBar from "./BusinessNavBar";
import Header from "./Header";

// This component displays the dashboard for the business users.
// This is the first component the user sees after registering/logging in.
// The business dashboard shows the user the pickup requests created and has a nav bar at the bottom, allowing the user to navigate to:
// Profile, create-a-pickup-request, and the user's created pickup requests

const BusinessDashboard = props => {
  useEffect(() => {
    props.fetchPickups();
  }, []);

  // console.log("This is props in BusinessDash: ", props);

  return (
    <div>
      <Header/>
      <h3>Pick-Ups</h3>
      <div>
        {props.pickupsOnProps.map(pickup => (
          <div key={pickup.id} className="pickup">
          {console.log("This is pickup: ", pickup)}
            <p>
              {pickup.typeOfFood}, Amount: {pickup.qty}
            </p>
            <p>Preferred Pickup Time: {pickup.preferredPickupTime}</p>
            <button
              onClick={() => props.history.push(`/edit-pickup/${pickup.id}`)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      <BusinessNavBar />
    </div>
  );
};

// This code takes the state in store and sets it to props
const mapStateToProps = state => {
  // console.log("This is state in BusinessDash: ", state);
  return {
    loadingOnProps: state.pickupReducer.isLoading,
    pickupsOnProps: state.pickupReducer.pickup,
    errorOnProps: state.pickupReducer.error
  };
};

// This code connects
export default connect(
  mapStateToProps, // function
  { fetchPickups } // object
)(BusinessDashboard);
