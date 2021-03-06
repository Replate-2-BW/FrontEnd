import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, useFormik, Form, Field } from "formik";
import axios from "axios";

// components
import Header from "./Header";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: values => {
      setIsLoading(true);
      console.log("Values here: ", values);
      //   alert(JSON.stringify(values, null, 2));
      axios
        .post("https://replate-2.herokuapp.com/api/login", values)
        .then(res => {
          localStorage.setItem("token", res.data.yourToken);
          localStorage.setItem("ID", res.data.userID);
          localStorage.setItem("type", res.data.userType);
          history.push("/dashboard-b");
          console.log("This is axios.post.then res: ", res);
        })
        .catch(err => console.log("This is axios.post.catch err: ", err));
    }
  });

  return (
    <div>
      <Header />
      <Formik onSubmit={values => console.log(values)}>
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <label>username</label>
            <Field
              id="username"
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label>password</label>
            <Field
              id="password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            {formik.isLoading && "Logging In..."}
          </div>
        </Form>
      </Formik>
      <button type="button" onClick={() => history.push("/registration-b")}>Register (Business)</button>
    </div>
  );
}
