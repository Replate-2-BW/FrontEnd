import React, { useState } from "react";
import { Formik, useFormik, Button, FormGroup, FormControl, ControlLabel } from 'formik';
import axios from "axios";


export default function Login() {
  const formik = useFormik({
    initialValues: {
        username: "",
        password: "",
},
onSubmit: values => {
    console.log("Values here: ", values);
    alert(JSON.stringify(values, null, 2));
    axios
        .post("https://replate-2.herokuapp.com/api/register", values)
        .then(res => console.log("This is axios.post.then res: ", res))
        .catch(err => console.log("This is axios.post.catch err: ", err))

 }
});

return (
    <div>
        <h2> Welcome to replate</h2>
        <formik onSubmit={values => console.log(values)}>
            <Form onSubmit={formik.handleSubmit}>
                <div>

                </div>
            </Form>


        </formik>
    </div>
);