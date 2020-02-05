import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class BusinessNavBar extends Component {
  render() {
    const { history } = this.props;
    return (
      <span>
        <button onClick={() => history.push("/dashboard-b")}>Home</button>
        <button onClick={() => history.push("/create")}>Create</button>
        <button>Profile</button>
        <button onClick={() => history.push("/login")}>Log Out</button>
      </span>
    );
  }
}

export default withRouter(BusinessNavBar);
