import React, { Component } from 'react';
import { Form, TextArea, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export class ProjectCreateComponent extends Component {
    constructor() {
        super()
        this.state = {
            ProjectName: '',
            Owner: '',
            DateStart: '',
            DateEnd: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleDateStartChange = this.handleDateStartChange.bind(this)
        this.handleDateEndChange = this.handleDateEndChange.bind(this)
        this.onEditorStateChange = this.onEditorStateChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

    }

    handleChange(event) {
        const { name, value } = event.target
      
        this.setState({
            [name]: value
        })

    }

    handleDateStartChange(date) {
        this.setState({
            DateStart: date
        })
    }

    handleDateEndChange(date) {
        this.setState({
            DateEnd: date
        })
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    handleFormSubmit() {
        const { ProjectName, Owner, DateStart, DateEnd } = this.state

        axios.post('api/projects', {
            ProjectName
        }).then(function (response) {

            let projectId = response.data.id;

            axios.post('api/projectsettings', {
                "ProjectId": projectId,
                ProjectName,
                Owner,
                DateStart,
                DateEnd
            }).then(function (response) {
                console.log(response)
            }).catch(function (response) {
                console.log(response)
            })       

        }).catch(function (response) {
            console.log(response)
        })
}
 
    render() {
        const { editorState } = this.state;

        return (
            <div>
                <h1>Create Project</h1>
                <Form onSubmit={this.handleFormSubmit}>
                <Form.Field>
                        <label>Project Title</label>
                        <input name='ProjectName' value={this.state.ProjectName} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                        <label>Owner</label>
                        <input name='Owner' value={this.state.Owner} onChange={this.handleChange}/>
                    </Form.Field>

                        <DatePicker
                        selected={this.state.DateStart}
                        onChange={this.handleDateStartChange}
                        name="DateStart"
                        placeholderText="Start Date"
                         />
                            <DatePicker
                            selected={this.state.DateEnd}
                            onChange={this.handleDateEndChange}
                        name="DateEnd"
                        placeholderText="End Date"
                                />
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                    <button type='submit'>Submit</button>
                </Form>
                </div>
        )
    }
}
