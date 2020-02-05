import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import VolunteerRegistration from "./components/VolunteerRegistration";
import BusinessRegistration from "./components/BusinessRegistration";
import BusinessDashboard from "./components/BusinessDashboard";
import VolunteerDashboard from "./components/VolunteerDashboard";
import CreatePickupForm from "./components/CreatePickupForm";
import EditPickupForm from "./components/EditPickupForm";
import AvailablePickupForm from "./components/AvailablePickupForm";
import ClaimedPickupForm from "./components/ClaimedPickupForm";
import RequestDetailPickupForm from "./components/RequestDetailPickupForm";
import BusinessProfile from "./components/BusinessProfile";
import VolunteerProfile from "./components/VolunteerProfile";
import Login from "./components/Login";

// styling
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/edit-pickup/:id" component={EditPickupForm} />
        <Route exact path="/registration-b" component={BusinessRegistration} />
        <Route exact path="/registration-v" component={VolunteerRegistration} />
        <Route exact path="/dashboard-b" component={BusinessDashboard} />
        <Route exact path="/dashboard-v" component={VolunteerDashboard} />
        <Route exact path="/create" component={CreatePickupForm} />
        <Route exact path="/available" component={AvailablePickupForm} />
        <Route exact path="/claimed" component={ClaimedPickupForm} />
        <Route exact path="/request" component={RequestDetailPickupForm} />
        <Route exact path="/profile-b" component={BusinessProfile} />
        <Route exact path="/profile-v" component={VolunteerProfile} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
