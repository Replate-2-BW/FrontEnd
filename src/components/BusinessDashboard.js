import React, { useState, useEffect } from "react";

// components
import CreatePickupForm from "./CreatePickupForm";
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
  const [pickups, setPickups] = useState(initialState);
  console.log("This is pickups: ", pickups);

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("/auth/pickup/:id/biz")
  //     .then(res => {
  //       console.log(
  //         "This is axiosWithAuth.get.then res in BusinessDashboard: ",
  //         res
  //       );
  //     })
  //     .catch(err => {
  //       console.log(
  //         "This is axiosWithAuth.get.catch err in BusinessDashboard: ",
  //         err
  //       );
  //     });
  // }, []);

  return (
    <div>
      <h1>Replate</h1>
      <h3>Pick-Ups</h3>
      <div>
        {pickups.map(pickup => (
          <div className="pickup">
            <p>
              {pickup.typeOfFood}, Amount: {pickup.qty}
            </p>
            <p>Preferred Pickup Time: {pickup.preferredPickupTime}</p>
            <button>Edit</button>
          </div>
        ))}
      </div>
      <CreatePickupForm />
    </div>
  );
};

export default BusinessDashboard;
