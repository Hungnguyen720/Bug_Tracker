import React, { Component } from 'react';
import { Segment, Grid, Header, Table, Label, GridRow } from 'semantic-ui-react';
import { Doughnut, Pie } from 'react-chartjs-2';

export default class PieChart extends Component {

    constructor() {
        super()
        this.state = {
            pieData: {}
        }
    }

    componentDidMount() {
        this.setState({
            pieData: {
                labels: [
                    'Open Tasks',
                    'Closed Tasks'
                ],
                datasets: [{
                    data: [this.props.openteamtasks, this.props.closedteamtasks],
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
            <Pie data={this.state.pieData} />
       )
    }

}