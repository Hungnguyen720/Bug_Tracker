import React, { Component } from 'react';
import { Segment, Grid, Header, Table, Label, GridRow } from 'semantic-ui-react';
import DoughnutChart from '../../ChartComponents/DougnutChart';
import { Doughnut, Pie } from 'react-chartjs-2';


export default class ProjectDashboardHome extends Component {

    constructor() {
        super()
        this.state = {
            content: '',
            projectId: '',
            taskStatusData: {},
            bugStatusData: {},
            teamStatusData: [],
            overDueWorkItemsData: []
        }

    }

    componentDidMount() {
        this.getTaskStatus()
        this.getBugStatus()
        this.getTeamStatus()
        this.getOverdueWorkItems()
    }

    render() {
        return (
            <div>
                <Grid columns='two'>
                    <GridRow>
                        <Grid.Column>
                            <Segment>
                                <Header as='h1'>Task Status</Header>
                                <Pie data={this.state.taskStatusData} />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                                <Header as='h1'>Bug Status</Header>
                                <Doughnut data={this.state.bugStatusData} />
                            </Segment>
                            </Grid.Column>
                    </GridRow>
                    <GridRow>
                    <Grid.Column>
                        <Segment>
                                <Header as='h1'>Team Status</Header>
                                <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>User</Table.HeaderCell>
                                            <Table.HeaderCell>Type</Table.HeaderCell>
                                            <Table.HeaderCell>Days Overdue</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {this.state.teamStatusData.map((t, i) =>
                                            <Table.Row key={i}>
                                                <Table.Cell>
                                                    {t.user}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {t.openTasks}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {t.overdueTasks}
                                                </Table.Cell>
                                            </Table.Row>
                                        )}
                                    </Table.Body>
                                </Table>
                        </Segment>
                        </Grid.Column>
                        <Grid.Column>
                        <Segment>
                            <Header as='h1'>Overdue Work Items</Header>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>User</Table.HeaderCell>
                                        <Table.HeaderCell>Type</Table.HeaderCell>
                                        <Table.HeaderCell>Days Overdue</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                    <Table.Body>
                                        {this.state.overDueWorkItemsData.map((t, i) =>
                                            <Table.Row key={i}>
                                                <Table.Cell>
                                                    {t.assignedUser}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {t.taskName}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {t.daysOverdue}
                                                </Table.Cell>
                                            </Table.Row>
                                        )}
                                    </Table.Body>
                            </Table>
                        </Segment>
                        </Grid.Column>
                    </GridRow>
                </Grid>
            </div>
        );
    }

    async getTaskStatus() {
        const response = await fetch("api/Tasks/countTask?projectid=1")
        const data = await response.json()
        this.setState({
            taskStatusData: {
                labels: [
                    'Red',
                    'Blue'
                ],
                datasets: [{
                    data: [data.openCount, data.closedCount],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB'
                    ]
                }],
            }
        })
    }


    async getBugStatus() {
        
        const response = await fetch("api/Bugs/TeamStatus?projectid=1")
        const data = await response.json()

        this.setState({
            bugStatusData: {
                labels: [
                    'Open Tasks',
                    'Closed Tasks',
                    'Overdue Count'
                ],
                datasets: [{
                    data: [data.openCount, data.closedCount, data.overdueCount],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
            }
        })
    }
    async getTeamStatus() {
        
        const response = await fetch("api/Tasks/teamTask?projectid=1")
        const data = await response.json()
        this.setState({
            teamStatusData: data
        })
    }
    async getOverdueWorkItems() {
        
        const response = await fetch("api/Tasks/overdueTask?projectid=1")
        const data = await response.json()
        this.setState({
            overDueWorkItemsData: data
        })
    }
}
