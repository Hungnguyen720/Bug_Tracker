import React, { Component } from 'react';
import { Header, Button, Form } from 'semantic-ui-react'


export class LoginComponent extends Component {
    constructor() {
        super()
        this.state = {
            emailAddress: "",
            password: ""
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
        console.log(this)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Field>
                        <label>Email Address</label>
                        <input placeholder='Email Address' name='emailAddress' value={this.state.emailAddress} onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        );
    }
}
