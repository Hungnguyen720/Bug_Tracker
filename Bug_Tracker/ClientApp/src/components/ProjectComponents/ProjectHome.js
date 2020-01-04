import React, { Component } from 'react';
import { Card, CardDescription } from 'semantic-ui-react';
import PieChartComponent from '../../components/Charts/PieChartComponent';

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
            chartData: {}
        }

    }

    async componentDidMount() {
        await this.getTasks()
        await this.getTaskChartData()
        await this.getProjectDetails(this.props.projectid)
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
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Team Status
                        </Card.Header>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Bug Status
                        </Card.Header>
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

    async getTasks() {
        const response = await fetch('api/tasks/countTask?projectId=' + 1)
        const data = await response.json()

        this.setState({
            taskOpenCount: data.openCount,
            taskClosedCount: data.closedCount

        })
    }

    async getOverdueTasks() {

    }
}