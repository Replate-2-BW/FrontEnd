import React, { Component } from "react";
import { connect } from "react-redux";

// components
import Header from "./Header";
import BusinessNavBar from "./BusinessNavBar";
import { fetchProfile } from "../actions/index";

// The purpose of this component is to allow the business user to view/edit their profile information.

class BusinessProfile extends Component {
  componentDidMount() {
    let userID = parseInt(localStorage.getItem("ID"));
    this.props.fetchProfile(userID);
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <p>Username: {this.props.profileOnProps.username}</p>
          <p>Phone Number: {this.props.profileOnProps.phoneNumber}</p>
          <p>Business: {this.props.profileOnProps.bizName}</p>
          <p>Business Address: {this.props.profileOnProps.bizAddress}</p>
        </div>
        <div>
          <button type="submit">Edit</button>
        </div>
        <BusinessNavBar />
      </div>
    );
  }
}

// This code takes the state in store and sets it to the prop pickupOnProps
const mapStateToProps = state => {
  console.log("This is state in BusinessProfile: ", state);
  return {
    loadingOnProps: state.fetchProfileReducer.isLoading,
    profileOnProps: state.fetchProfileReducer.profile,
    errorOnProps: state.fetchProfileReducer.error
  };
};

// This code connects
export default connect(
  mapStateToProps, // function
  { fetchProfile } // object
)(BusinessProfile);
