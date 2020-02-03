import React from "react";
import { Route, Redirect } from "react-router-dom";

// Requirements for PrivateRoute
// 1. It has the same API as <Route />. How do we interface with a Route? Using props - the same props as Route.
// 2. It renders a <Route /> and passes all the props through to it.
// 3. It checks if the user is authenticated, if they are, it renders the "component" prop. If not, it redirects the user to /login.

// We must import component as Component (component: Component) in order for the render function to recognize it as a component, otherwise it will interpret "<component />" as an html tag, like <div> <img> <h1>

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="./login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
