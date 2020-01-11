import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Grid, Dropdown } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
var moment = require('moment');


const reproducibleOptions = [
    { key: "None", text: "None", value: "None" },
    { key: "Always", text: "Always", value: "Always" },
    { key: "Sometimes", text: "Sometimes", value: "Sometimes" },
    { key: "Rarely", text: "Rarely", value: "Rarely" },
    { key: "Unable", text: "Unable", value: "Unable" },
    { key: "Never tried", text: "Never tried", value: "Never tried" },
    { key: "Not Applicable", text: "Not Applicable", value: "Not Applicable" },
]

const statusOptions = [
    { key: "Open", text: "Open", value: "Open" },
    { key: "In progress", text: "In progress", value: "In progress" },
    { key: "To be tested", text: "To be tested", value: "To be tested" },
    { key: "Closed", text: "Closed", value: "Closed" },
]

const assignedToOptions = [
    { key: "test1", text: "test1", value: "test1" },
    { key: "test2", text: "test2", value: "test2" },
    { key: "test3", text: "test3", value: "test3" }
]

const severityOptions = [
    { key: "Critical", text: "Critical", value: "Critical" },
    { key: "Major", text: "Major", value: "Majort" },
    { key: "Minor", text: "Minor", value: "Minor" }
]

const flagOptions = [
    { key: "Internal", text: "Internal", value: "Internal" },
    { key: "External", text: "External", value: "External" }
]

const classificationFlag = [
    { key: "None", text: "None", value: "None" },
    { key: "Security", text: "Security", value: "Security" },
    { key: "Crash/Hang", text: "Crash/Hang", value: "Crash/Hang" },
    { key: "Data Loss", text: "Data Loss", value: "Data Loss" },
    { key: "Performance", text: "Performance", value: "Performance" },
    { key: "UI/Usability", text: "UI/Usability", value: "UI/Usability" },
    { key: "Other Bug", text: "Other Bug", value: "Other Bug" },
    { key: "Feature(New)", text: "Feature(New)", value: "Feature(New)" },
    { key: "Enhancement", text: "Enhancement", value: "Enhancement" }
]

export class BugDetailsComponent extends Component {
    constructor() {
        super()
        this.state = {
            assignedTo: '',
            comment: '',
            dateCreated: '',
            description: '',
            dueDate: '',
            flag: '',
            id: '',
            projectID: '',
            reporter: 'hung',
            reproducible: '',
            severity: '',
            status: '',
            title: '',
            loading: true
        }

        this.handleDropdownChange = this.handleDropdownChange.bind(this)
        this.handleDueDateChange = this.handleDueDateChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {

        this.populateBugs()

    }

    handleDropdownChange(event, result) {
        const { name, value } = result
        this.setState({
            [name]: value
        })
    }

    handleDueDateChange(date) {
        this.setState({
            dueDate: date
        })
    }

    onSubmit() {
        const { assignedTo, comment, dateCreated, description, flag, id, projectID, reporter, reproducible, severity, status, title } = this.state
        var { dueDate } = this.state

        dueDate = this.toLocalTime(dueDate)


        axios.put('api/bugs/' + id, {
            id,
            assignedTo,
            comment,
            dateCreated,
            description,
            dueDate,
            flag,
            projectID,
            reporter,
            reproducible,
            severity,
            status,
            title
        }).then(function (response) {
            console.log(response)
        }).catch(function (response) {
            console.log(response)
        })
        
    }
    

    render() {
        return (
            <div>
            <Grid columns={4} >
                <Grid.Row>
                    <Grid.Column>
                        <h5>Assign to</h5>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown
                            name="assignedTo"
                            defaultValue={this.state.assignedTo}
                            onChange={this.handleDropdownChange}
                            options={assignedToOptions}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <h5>Due on</h5>
                    </Grid.Column>
                    <Grid.Column>

                        <DatePicker
                            selected={this.state.dueDate}
                            onChange={this.handleDueDateChange}
                            name="dueDate"
                            placeholderText="Due Date"
                        />

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h5>Status</h5>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown
                            placeholder='Status'
                            name="status"
                            defaultValue={this.state.status}
                            onChange={this.handleDropdownChange}
                            options={statusOptions}
                        />

                    </Grid.Column>
                    <Grid.Column>
                        <h5>Severity</h5>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown
                            placeholder='Severity'
                                name="severity"
                            value={this.state.severity}
                            onChange={this.handleDropdownChange}
                            options={severityOptions}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h5>Is it Reproducible</h5>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown
                            placeholder='Dropdown'
                            name="reproducible"
                            value={this.state.reproducible}
                            onChange={this.handleDropdownChange}
                            options={reproducibleOptions}
                        />

                    </Grid.Column>
                    <Grid.Column>
                        <h5>Classification</h5>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown 
                                placeholder='Classification'
                                name="classification"
                                value={this.state.classification}
                                onChange={this.handleDropdownChange}
                                options={classificationFlag}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column>
                        <h5>Flag</h5>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown
                            placeholder='Flag'
                            options={flagOptions}
                        />
                    </Grid.Column>
                </Grid.Row>
                </Grid>
                <button onClick={this.onSubmit}>Save</button>
                </div>
        );
    }


    async populateBugs() {
        const response = await fetch('api/bugs/1')
        const data = await response.json()

        //convert due date to UTC
        data.dueDate = new Date(moment.utc(data.dueDate));

        this.setState({
            assignedTo: data.assignedTo,
            comment: data.comment,
            dateCreated: data.dateCreated,
            description: data.description,
            dueDate: data.dueDate,
            flag: data.flag,
            projectID: data.projectID,
            id: data.id,
            reporter: data.reporter,
            reproducible: data.reproducible,
            severity: data.severity,
            status: data.status,
            title: data.title,
            loading: false
        })
    }

    toLocalTime(date) {
        return moment(date).local().format('YYYY-MM-DD');
    }
}