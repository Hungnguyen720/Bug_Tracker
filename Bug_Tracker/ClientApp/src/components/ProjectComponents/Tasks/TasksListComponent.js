import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Table, Button } from 'semantic-ui-react';
import axios from 'axios';


export default class TasksListComponent extends Component {
    constructor() {
        super()
        this.state = { taskList: [], loading: false }
    }

    componentDidMount() {
        this.populateBugs()
    }

    static renderTasksList(bugsList, updateContent) {
        return (
            <div>
                <Button id="5" basic color='blue' onClick={updateContent}> Create Task </Button>
                <Table compact definition>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell>Task</Table.HeaderCell>
                            <Table.HeaderCell>Reporter</Table.HeaderCell>
                            <Table.HeaderCell>Created</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Assigned To</Table.HeaderCell>
                            <Table.HeaderCell>Due Date</Table.HeaderCell>
                            <Table.HeaderCell> Severity </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    </Table.Body>
                </Table>
            </div>
        );
    }



    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : TasksListComponent.renderTasksList(this.state.taskList, this.props.onClick);
        if (!this.state.taskList) {
            contents = <h1>bugs list</h1>
        }

        return (
            <div>
                {contents}
            </div>
        );
    }


    async populateBugs() {
        const response = await fetch('api/tasks')
        const data = await response.json()
        console.log(data)
        this.setState({ bugsList: data })
    }
}