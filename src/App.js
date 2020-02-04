import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import VolunteerRegistration from "./components/VolunteerRegistration";
import BusinessDashboard from "./components/BusinessDashboard";
import CreatePickupForm from "./components/CreatePickupForm";
import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registration-vol" component={VolunteerRegistration} />
        <Route path="/dashboard-b" component={BusinessDashboard} />
        <Route path="/create" component={CreatePickupForm} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
