
import React, { Component } from 'react';
import { Form, Dropdown, Button, TextArea } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from '../../../../node_modules/react-datepicker';
import moment from 'moment';
import { ProjectDashboard } from '../ProjectDashboard';

export class TaskCreateComponent extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>task Create</h1>  
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Field>
                        <label>Bug Name</label>
                        <input
                            
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Assigned To</label>
                        <input
                            
                        />
                    </Form.Field>
                    <DatePicker
                        
                    />
                    <TextArea
                        
                    />

                    <Dropdown
                        
                    />
                    <Dropdown
                        

                    />

                    <Dropdown
                        

                    />
                    <button type='submit'>Submit</button>
                    <Button basic color='red' as={Link} to="/test/project/bugs"> Cancel </Button>

                </Form>
            </div>
       )
    }
}