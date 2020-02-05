import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import VolunteerRegistration from "./components/VolunteerRegistration";
import BusinessRegistration from "./components/BusinessRegistration";
import BusinessDashboard from "./components/BusinessDashboard";
import CreatePickupForm from "./components/CreatePickupForm";
import EditPickupForm from "./components/EditPickupForm";
import Login from "./components/Login";

// styling
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registration-vol" component={VolunteerRegistration} />
        <Route path="/registration-biz" component={BusinessRegistration} />
        <Route path="/dashboard-b" component={BusinessDashboard} />
        <Route path="/create" component={CreatePickupForm} />
        <Route path="/edit-pickup/:id" component={EditPickupForm} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
