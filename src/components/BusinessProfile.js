import React, { Component } from "react";
import Header from "./Header";
import BusinessNavBar from "./BusinessNavBar";

class BusinessProfile extends Component {


  render() {
    return (
      <div>
        <Header />
        <div>
          <p>Username: </p>
          <p>Password: </p>
          <p>Phone Number: </p>
          <p>Business: </p>
          <p>Business Address: </p>
        </div>
        <BusinessNavBar />
      </div>
    );
  }
}

export default BusinessProfile;
