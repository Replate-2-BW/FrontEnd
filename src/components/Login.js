import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password > 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="Login">
        <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
        
        </FormGroup>
        </form>
        </div>
    )
}