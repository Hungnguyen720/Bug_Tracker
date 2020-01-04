
import React, { Component } from 'react';
import { Grid, Dropdown, Button, TextArea } from 'semantic-ui-react';

import DatePicker from '../../../../node_modules/react-datepicker';
import "../../../../node_modules/react-datepicker/dist/react-datepicker.css";

import axios from 'axios';
var moment = require('moment');

const statusOptions = [
    { key: "Open", text: "Open", value: "Open" },
    { key: "In progress", text: "In progress", value: "In progress" },
    { key: "To be tested", text: "To be tested", value: "To be tested" },
    { key: "Closed", text: "Closed", value: "Closed" },
]

const priorityOptions = [
    { key: "None", text: "None", value: "None" },
    { key: "Low", text: "Low", value: "Low" },
    { key: "Medium", text: "Medium", value: "Medium" },
    { key: "High", text: "High", value: "High" },
]


export class TaskDetailsComponent extends Component {
    constructor() {
        super()
        this.state = {
            id: "",
            projectId: "",
            taskName: "",
            owner: "",
            description: "",
            dateStart: "",
            dateEnd: "",
            priority: "test",
            status: ""
        }

        this.handleDropdownChange = this.handleDropdownChange.bind(this)
        this.handleStartDateChange = this.handleStartDateChange.bind(this)
        this.handleEndDateChange = this.handleEndDateChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    componentDidMount() {
        console.log(this.props.taskid)
        this.populateTask(this.props.taskid)
    }

    handleDropdownChange(event, result) {
        const { name, value } = result
        this.setState({
            [name]: value
        })
    }

    handleStartDateChange(date) {
        this.setState({
            dateStart: date
        })
    }

    handleEndDateChange(date) {
        this.setState({
            dateEnd: date
        })
    }

    onSubmit() {
        
        const { id, projectId, taskName, owner, description, priority, status } = this.state
        var { dateStart, dateEnd } = this.state

        dateStart = this.toLocalTime(dateStart)
        dateEnd = this.toLocalTime(dateEnd)

        axios.put('api/tasks/' + projectId, {
            id,
            projectId,
            taskName,
            owner,
            description,
            dateStart,
            dateEnd,
            priority,
            status
        }).then(function (response) {
            console.log(response)
        }).catch(function (response) {
            console.log(response)
        })

        

    }

    render() {
        return (
            <div>
                <h1>{this.state.taskName}</h1>
                <h1>{this.state.owner}</h1>
                    <TextArea />
                <Grid columns={4} >
                    <Grid.Row>
                        <Grid.Column>
                            <h5>Status</h5>
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown
                                placeholder={this.state.status}
                                name="status"
                                defaultValue={this.state.status}
                                onChange={this.handleDropdownChange}
                                options={statusOptions}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <h5>Date Start</h5>
                        </Grid.Column>
                        <Grid.Column>
                            <DatePicker
                                selected={this.state.dateStart}
                                onChange={this.handleStartDateChange}
                                name="dateStart"
                                placeholderText="Start Date"
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <h5>Date End</h5>
                        </Grid.Column>
                        <Grid.Column>
                            <DatePicker
                                selected={this.state.dateEnd}
                                onChange={this.handleEndDateChange}
                                name="dateEnd"
                                placeholderText="End Date"
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <h5>Priority</h5>
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown
                                placeholder={this.state.priority}
                                name="priority"
                                defaultValue={this.state.priority}
                                onChange={this.handleDropdownChange}
                                options={priorityOptions}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Button onClick={this.onSubmit}>Save</Button>
                <Button onClick={this.props.onClick}>Cancel</Button>

            </div>
        )
    }

    //fetch to api/tasks/id
    async populateTask(id) {
        const response = await fetch('api/tasks/' + id)
        const data = await response.json()

        let test = moment.utc(data.dateStart)
        console.log(test)

        data.dateStart = new Date(moment.utc(data.dateStart));
        data.dateEnd = new Date(moment.utc(data.dateEnd));


        this.setState({
            id: data.id,
            projectId: data.projectId,
            taskName: data.taskName,
            owner: data.owner,
            description: data.description,
            dateStart: data.dateStart,
            dateEnd: data.dateEnd,
            priority: data.priority,
            status: data.status
        })
        
    }

    toLocalTime(date) {
        return moment(date).local().format('YYYY-MM-DD');
    }
}

//make function for default value dropdown
// bind the response to state
// display data on form