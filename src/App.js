import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import VolunteerRegistration from "./components/VolunteerRegistration";
import BusinessDashboard from "./components/BusinessDashboard";
import VolunteerDashboard from "./components/VolunteerDashboard";
import BusinessRegistration from "./components/BusinessRegistration";
import CreatePickupForm from "./components/CreatePickupForm";
import EditPickupForm from "./components/EditPickupForm";
import AvailablePickupForm from "./components/AvailablePickupForm";
import ClaimedPickupForm from "./components/ClaimedPickupForm";
import RequestDetailPickupForm from "./components/RequestDetailPickupForm";
import BusinessProfile from "./components/BusinessProfile";
import VolunteerProfile from "./components/VolunteerProfile";
import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/registration-biz" component={BusinessRegistration} />
        <Route exact path="/registration-vol" component={VolunteerRegistration} />
        <Route exact path="/dashboard-b" component={BusinessDashboard} />
        <Route exact path="/dashboard-vol" component={VolunteerDashboard} />
        <Route exact path="/create" component={CreatePickupForm} />
        <Route exact path="/edit" component={EditPickupForm} />
        <Route exact path="/available" component={AvailablePickupForm} />
        <Route exact path="/claimed" component={ClaimedPickupForm} />
        <Route exact path="/request" component={RequestDetailPickupForm} />
        <Route exact path="/profile-biz" component={BusinessProfile} />
        <Route exact path="/profile-vol" component={VolunteerProfile} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
