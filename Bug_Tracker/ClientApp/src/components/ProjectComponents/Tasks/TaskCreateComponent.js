import React, { Component } from 'react';
import { Form, Dropdown, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const priorityOptions = [
    {
        key: "Low",
        text: "Low",
        value: "Low",
    },
    {
        key: "Medium",
        text: "Medium",
        value: "Medium",
    },
    {
        key: "High",
        text: "High",
        value: "High",
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


export default class TaskCreateComponent extends Component {
    constructor() {
        super()
        this.state = {
            Title: '',
            DueDate: '',
            AssignedTo: '',
            IssueType: '',
            Followers: [],
            Flag: '',
            Severity: '',
            projectId: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleDueDateChange = this.handleDueDateChange.bind(this)
        this.onEditorStateChange = this.onEditorStateChange.bind(this)
        this.handleDropdownChange = this.handleDropdownChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

    }

    handleFormSubmit = () => {
        const { Title, DueDate, AssignedTo, IssueType, Followers, Flag, Severity, projectId } = this.state

        axios.post('api/tasks', {
            projectId,
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

    componentDidMount() {
        this.setState({
            projectId: parseInt(this.props.projectid)
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
                <h1>Create Task</h1>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Field>
                        <label>Task Name</label>
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
                        placeholder="Priority"
                        name="Flag"
                        value={this.state.Flag}
                        selection
                        options={priorityOptions}
                        onChange={this.handleDropdownChange}
                    />
                    <button type='submit'>Submit</button>
                    <Button basic color='red' as={Link} to="/test/project/bugs"> Cancel </Button>

                </Form>
            </div>
        )
    }
}
