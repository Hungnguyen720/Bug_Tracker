import React, { Component } from 'react';
import { Header, Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import validator from 'email-validator';


export class RegisterComponent extends Component {

    constructor() {
        super()
        this.state = {
            id: 20,
            emailAddress: "",
            firstName: "",
            lastName: "",
            profilePicture: "test",
            type: "",
            password: "",
            confirmPassword: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit() {

        const { id, emailAddress, firstName, lastName, profilePicture, type, password, confirmPassword } = this.state;

        const isValid = validator.validate(emailAddress)

        if (!isValid)
        {
            toast.error("please enter valid email", {
                position: toast.POSITION.TOP_CENTER
            });
        }

        const isMatch = password === confirmPassword;

        isMatch ?
            axios.post('/api/users', {
                id, emailAddress, firstName, lastName, profilePicture, type, password
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                }) :

            toast.error("passwords does not match", {
                position: toast.POSITION.TOP_CENTER
            });
    }

    render() {
        return (
            <div>
                <Header as='h1' textAlign='center'>Create Account</Header>
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' name='firstName' value={this.state.firstName} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' name='lastName' value={this.state.lastName} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input placeholder='Email Address' name='emailAddress' value={this.state.emailAddress} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>User Type</label>
                    <input placeholder='User Type' name='type' value={this.state.type} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input placeholder='Password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
                </Form>
                <ToastContainer />
                </div>
        )
    } 
}
