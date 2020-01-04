import React, { Component } from 'react';
import { Checkbox, Table, Button } from 'semantic-ui-react';
import { TaskDetailsComponent } from './TaskDetailsComponent';


export class TasksListComponent extends Component {
    constructor() {
        super()

        this.state = {
            taskList: [],
            displayTaskDetail: false,
            taskId: '',
            projectId: ''
        }

        this.displayTaskDetail = this.displayTaskDetail.bind(this)
        this.displayTaskList = this.displayTaskList.bind(this)
    }

    componentDidMount() {
        this.getTasks(this.props.projectid)
    }

    displayTaskDetail(e) {
        this.setState({
            displayTaskDetail: true,
            taskId: e.target.getAttribute('taskid')
        })
    }

    displayTaskList() {
        this.setState({
            displayTaskDetail: false,
            taskId: ''
        })
    }

    static renderTaskList(taskList, clickFunction, displayTaskDetail) {
        return (
            <div>
                <Button basic color='blue' id='6' onClick={clickFunction}> Create Tasks </Button>
                <Table compact definition>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell>Task</Table.HeaderCell>
                            <Table.HeaderCell>Created By</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Start Date</Table.HeaderCell>
                            <Table.HeaderCell>Due Date</Table.HeaderCell>
                            <Table.HeaderCell> Severity </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {taskList.map(task =>
                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Checkbox slider />
                                </Table.Cell>
                                <Table.Cell><Button id={6} onClick={displayTaskDetail} taskid={task.id}> {task.taskName} </Button></Table.Cell>
                                <Table.Cell>{task.description}</Table.Cell>
                                <Table.Cell>{task.owner}</Table.Cell>
                                <Table.Cell>{task.priority}</Table.Cell>
                                <Table.Cell>{task.dateEnd}</Table.Cell>
                                <Table.Cell>{task.dateStart}</Table.Cell>
                                <Table.Cell>{task.taskList}</Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </div>    
        )
    }

    render() {
        let contents = ''

        if (this.state.displayTaskDetail == false) {
            contents = TasksListComponent.renderTaskList(this.state.taskList, this.props.onClick, this.displayTaskDetail);
        }

        if (this.state.displayTaskDetail == true) {
            contents = <TaskDetailsComponent onClick={this.displayTaskList} taskid={this.state.taskId} />
        }

        return (
            <div>
                {contents}
            </div>
        )
    }

    async getTasks(projectId) {
        const response = await fetch('api/Tasks?projectId=' + projectId)
        const data = await response.json()
        this.setState({ taskList: data })
    }
}