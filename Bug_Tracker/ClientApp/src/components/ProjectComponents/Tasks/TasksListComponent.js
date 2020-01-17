import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Table, Button } from 'semantic-ui-react';
import axios from 'axios';


export default class TasksListComponent extends Component {
    constructor() {
        super()
        this.state = { taskList: [], loading: false }
    }

    async componentDidMount() {
        await this.populateTasks(this.props.projectid)
    }

    static renderTasksList(taskList, updateContent) {
        return (
            <div>
                <Button id="6" basic color='blue' onClick={updateContent}> Create Task </Button>
                <Table compact>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell> Id </Table.HeaderCell>
                            <Table.HeaderCell> Task </Table.HeaderCell>
                            <Table.HeaderCell> Created By </Table.HeaderCell>
                            <Table.HeaderCell> Start Date </Table.HeaderCell>
                            <Table.HeaderCell> Due Date </Table.HeaderCell>
                            <Table.HeaderCell> Priority </Table.HeaderCell>
                            <Table.HeaderCell> Status </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {taskList.map(task =>
                                <tr key={task.id}>
                                <td>{task.projectId}</td>
                                <td>{task.taskName}</td>
                                <td>{task.owner}</td>
                                <td>{task.dateStart}</td>
                                <td>{task.dateEnd}</td>
                                <td>{task.priority}</td>
                                <td>{task.status}</td>
                                </tr>
                            )}
                    </Table.Body>
                </Table>
            </div>
        );
    }



    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : TasksListComponent.renderTasksList(this.state.taskList, this.props.onClick);
        return (
            <div>
                {contents}
            </div>
        );
    }


    async populateTasks(projectid) {
        const response = await fetch('api/Tasks?projectid=' + projectid)
        const data = await response.json()
        this.setState({ taskList: data })
    }
}