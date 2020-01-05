import React, { Component } from 'react';
import { Card, CardDescription } from 'semantic-ui-react';
import PieChartComponent from '../../components/Charts/PieChartComponent';
import DoughnutChartComponent  from '../../components/Charts/DonutChartComponent';

export class ProjectHome extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            projectId: '',
            projectName: '',
            owner: '',
            dateStart: '',
            dateEnd: '',
            projectOverview: '',
            taskOpenCount: '',
            taskClosedCount: '',
            bugOpenCount: '',
            bugClosedCount: '',
            chartData: {},
            overdueTasks: [],
            teamStatus: [],
            bugStatusData: {}
        }

    }

    async componentDidMount() {
        const projectid = this.props.projectid
        await this.getTasks(projectid)
        await this.getOverdueTasks(projectid)
        await this.getTaskChartData(projectid)
        await this.getBugStatus(projectid)
        await this.getBugStatusChartData(projectid)
        await this.getProjectDetails(projectid)
        await this.getTeamStatus(projectid)
    }

    getTaskChartData() {
        this.setState({
            chartData: {
                labels: [
                    'Open Tasks',
                    'Closed Tasks'
                ],
                datasets: [{
                    data: [this.state.taskOpenCount, this.state.taskClosedCount],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB'
                    ]
                }]
            }
        })
    }

    getBugStatusChartData() {
        this.setState({
            bugStatusData: {
                labels: [
                    'Open Bugs',
                    'Closed Bugs'
                ],
                datasets: [{
                    data: [this.state.bugOpenCount, this.state.bugClosedCount],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB'
                    ]
                }]
            }
        })
    }

    render() {

        return (
            <div>
                <Card.Group itemsPerRow={1}>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Project Description
                            </Card.Header>
                            <CardDescription>
                                {this.state.projectOverview}
                            </CardDescription>

                        </Card.Content>
                    </Card>
                </Card.Group>
                <Card.Group itemsPerRow={2}>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                               Task Status
                            </Card.Header>
                            <PieChartComponent data={this.state.chartData} />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Overdue Work Items
                        </Card.Header>
                            <table className='table table-striped' aria-labelledby="tabelLabel">
                                <tbody>
                                    {this.state.overdueTasks.map(task =>
                                        <tr>
                                            <td>{task.taskName}</td>
                                            <td></td>
                                            <td>late by {task.daysOverdue} days</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Team Status
                        </Card.Header>
                            <table className='table table-striped' aria-labelledby="tabelLabel">
                                <tbody>
                                    {this.state.teamStatus.map(status =>
                                        <tr>
                                            <td>{status.user}</td>
                                            <td>{status.openTasks}</td>
                                            <td>{status.overdueTasks}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Bug Status
                        </Card.Header>
                            <DoughnutChartComponent data={this.state.bugStatusData} />
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
            
        )
    }

    async getProjectDetails(projectid) {
        const response = await fetch('api/ProjectSettingsModels/' + projectid)
        const data = await response.json()
        
        this.setState({
            projectId: data.projectId,
            projectName: data.projectName,
            owner: data.owner,
            dateStart: data.dateStart,
            dateEnd: data.dateEnd,
            projectOverview: data.projectOverview
        })   
    }

    async getTasks(projectid) {
        const response = await fetch('api/tasks/countTask?projectId=' + projectid)
        const data = await response.json()

        this.setState({
            taskOpenCount: data.openCount,
            taskClosedCount: data.closedCount

        })
    }

    async getOverdueTasks(projectid) {
        const response = await fetch('api/tasks/overdueTask?projectId=' + projectid)
        const data = await response.json()

        this.setState({
            overdueTasks: data
        })
    }

    async getTeamStatus(projectid) {
        const response = await fetch('api/tasks/teamTask?projectId=' + projectid)
        const data = await response.json()

        this.setState({
            teamStatus: data
        })
    }

    async getBugStatus(projectid)
    {
        const response = await fetch('api/bugs/teamStatus?projectId=' + projectid)
        const data = await response.json()

        this.setState({
            bugOpenCount: data.openCount,
            bugClosedCount: data.closedCount
        })

    }
}