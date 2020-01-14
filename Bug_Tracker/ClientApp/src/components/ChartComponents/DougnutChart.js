import React, { Component } from 'react';
import { Segment, Grid, Header, Table, Label, GridRow } from 'semantic-ui-react';
import { Doughnut, Pie } from 'react-chartjs-2';

export default class DoughnutChart extends Component {

    constructor() {
        super()
        this.state = {
            doughnutData: {}
        }
    }

    componentDidMount() {
        this.setState({
            doughnutData: {
                labels: [
                    'openTasks',
                    'closedTasks',
                    'overdueTasks'
                ],
                datasets: [{
                    data: [this.props.openbugtasks, this.props.closedbugtasks, this.props.overduebugtasks],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFFF00'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFFF00'

                    ]
                }]
            }
        })
    }


    render() {
        return (
            <Doughnut data={this.state.doughnutData} />
        )
    }

}