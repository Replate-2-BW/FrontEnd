import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import VolunteerRegistration from "./components/VolunteerRegistration";
import BusinessDashboard from "./components/BusinessDashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route path="/registration-vol" component={VolunteerRegistration} />
        <Route path="/dashboard-b" component={BusinessDashboard} />
      </div>
    </Router>
  );
}

export default App;
