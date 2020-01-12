import React, { Component } from 'react';
import { Segment, Grid, Header, Table, Label, GridRow } from 'semantic-ui-react';
import { Doughnut, Pie } from 'react-chartjs-2';

const doughnutData = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
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
};

const pieData = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
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
};

export default class ProjectDashboardHome extends Component {

    render() {
        return (
            <div>
                <Grid columns='two'>
                    <GridRow>
                        <Grid.Column>
                            <Segment>
                                <Header as='h1'>Task Status</Header>
                                <Pie data={pieData}/>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                                <Header as='h1'>Bug Status</Header>
                                <Doughnut data={doughnutData} />
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
                                        <Table.Row>
                                            <Table.Cell>
                                                <Label ribbon>First</Label>
                                            </Table.Cell>
                                            <Table.Cell>Cell</Table.Cell>
                                            <Table.Cell>Cell</Table.Cell>
                                        </Table.Row>
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
                                        <Table.Row>
                                            <Table.Cell>
                                                <Label ribbon>First</Label>
                                            </Table.Cell>
                                            <Table.Cell>Cell</Table.Cell>
                                            <Table.Cell>Cell</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                            </Table>
                        </Segment>
                        </Grid.Column>
                    </GridRow>
                </Grid>
            </div>
        );
    }
}
