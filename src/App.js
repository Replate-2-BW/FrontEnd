import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import VolunteerRegistration from "./components/VolunteerRegistration";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/vol-registration" component={VolunteerRegistration} />
      </div>
    </Router>
  );
}

export default App;
