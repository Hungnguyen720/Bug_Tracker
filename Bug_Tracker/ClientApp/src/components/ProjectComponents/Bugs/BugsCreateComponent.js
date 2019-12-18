
import React, { Component } from 'react';
import { Form, Dropdown, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Editor } from '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg';
import DatePicker from '../../../../node_modules/react-datepicker';
import "../../../../node_modules/react-datepicker/dist/react-datepicker.css";

const flagOptions = [
    {
        key: "Internal",
        text: "Internal",
        value: "Internal",
    },
    {
        key: "External",
        text: "External",
        value: "External",
    }
]

const severityOptions = [
    {
        key: "Critical",
        text: "Critical",
        value: "Critical"
    },
    {
        key: "Major",
        text: "Major",
        value: "Major"
    },
    {
        key: "Minor",
        text: "Minor",
        value: "Minor"
    }
]

const issueTypeOptions = [
    {
        key: "crash",
        text: "crash",
        value: "crash"
    },
    {
        key: "security",
        text: "security",
        value: "security"
    },
    {
        key: "data",
        text: "data",
        value: "data"
    },
    {
        key: "performance",
        text: "performance",
        value: "performance"
    },
    {
        key: "UI",
        text: "UI",
        value: "UI"
    },
    {
        key: "other",
        text: "other",
        value: "other"
    },
    {
        key: "enhancement",
        text: "enhancement",
        value: "enhancement"
    }
]


export class BugsCreateComponent extends Component {
    constructor() {
        super()
        this.state = {
            Title: '',
            DueDate: '',
            AssignedTo: '',
            IssueType: '',
            Followers: [],
            Flag: '',
            Severity: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleDueDateChange = this.handleDueDateChange.bind(this)
        this.onEditorStateChange = this.onEditorStateChange.bind(this)
        this.handleDropdownChange = this.handleDropdownChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

    }

    handleFormSubmit = () => {
        const { Title, DueDate, AssignedTo, IssueType, Followers, Flag, Severity } = this.state

        axios.post('api/bugs', {
            Title,
            AssignedTo,
            DueDate,
            Severity,
            Flag,
            IssueType,
            Followers
        }).then(function (response) {
            console.log(response)
        }).catch(function (response) {
            console.log(response)
        })

    }

    handleChange(event) {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })

    }

    handleDropdownChange(event, result) {
        const { name, value } = result
        this.setState({
            [name]: value
        })
    }

    handleDueDateChange(date) {
        this.setState({
            DueDate: date
        })
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };


    render() {
        const { editorState } = this.state;

        return (
            <div>
                <h1>Create Bug</h1>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Field>
                        <label>Bug Name</label>
                        <input
                            name='Title'
                            value={this.state.Title}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Assigned To</label>
                        <input
                            name='AssignedTo'
                            value={this.state.AssignedTo}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <DatePicker
                        selected={this.state.DueDate}
                        onChange={this.handleDueDateChange}
                        name="dueDate"
                        placeholderText="Due Date"
                    />
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                    <Dropdown
                        placeholder="Flag"
                        name="Flag"
                        value={this.state.Flag}
                        selection
                        options={flagOptions}
                        onChange={this.handleDropdownChange}
                    />
                    <Dropdown
                        placeholder="Issue Type"
                        selection
                        name="IssueType"
                        value={this.state.IssueType}
                        options={issueTypeOptions}
                        onChange={this.handleDropdownChange}

                    />

                    <Dropdown
                        placeholder="Severity"
                        selection
                        name="Severity"
                        value={this.state.Severity}
                        options={severityOptions}
                        onChange={this.handleDropdownChange}

                    />
                    <button type='submit'>Submit</button>
                    <Button basic color='red' as={Link} to="/test/project/bugs"> Cancel </Button>

                </Form>
            </div>
        )
    }
}