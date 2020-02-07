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
import PrivateRoute from "./components/PrivateRoute";

// styling
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/edit-pickup/:id" component={EditPickupForm} />
        <Route exact path="/registration-b" component={BusinessRegistration} />
        <Route exact path="/registration-v" component={VolunteerRegistration} />
        <PrivateRoute exact path="/dashboard-b" component={BusinessDashboard} />
        <PrivateRoute
          exact
          path="/dashboard-v"
          component={VolunteerDashboard}
        />
        <PrivateRoute exact path="/create" component={CreatePickupForm} />
        <PrivateRoute exact path="/available" component={AvailablePickupForm} />
        <PrivateRoute exact path="/claimed" component={ClaimedPickupForm} />
        <PrivateRoute
          exact
          path="/request"
          component={RequestDetailPickupForm}
        />
        <PrivateRoute exact path="/profile-b" component={BusinessProfile} />
        <PrivateRoute exact path="/profile-v" component={VolunteerProfile} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
