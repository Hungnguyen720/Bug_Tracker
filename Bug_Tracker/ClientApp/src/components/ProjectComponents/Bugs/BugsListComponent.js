import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Table, Button } from 'semantic-ui-react';
import axios from 'axios';


export default class BugsDashboardComponent extends Component {
    constructor() {
        super()
        this.state = { bugsList: [], loading: false }
    }

    componentDidMount() {
        this.populateBugs()
    }

    static renderBugsTable(bugsList, updateContent) {
        return (
            <div>
                <Button id="5" basic color='blue' onClick={updateContent}> Submit Bug </Button>
                <Table compact definition>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell>Bug</Table.HeaderCell>
                            <Table.HeaderCell>Reporter</Table.HeaderCell>
                            <Table.HeaderCell>Created</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Assigned To</Table.HeaderCell>
                            <Table.HeaderCell>Due Date</Table.HeaderCell>
                            <Table.HeaderCell> Severity </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {bugsList.map(bug =>
                            <Table.Row key={bug.id}>
                                <Table.Cell collapsing>
                                    <Checkbox slider />
                                </Table.Cell>
                                <Table.Cell>{bug.title} {bug.id}</Table.Cell>
                                <Table.Cell>{bug.reporter}</Table.Cell>
                                <Table.Cell>{bug.dateCreated}</Table.Cell>
                                <Table.Cell>{bug.status}</Table.Cell>
                                <Table.Cell>{bug.assignedTo}</Table.Cell>
                                <Table.Cell>{bug.dueDate}</Table.Cell>
                                <Table.Cell>{bug.severity}</Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : BugsDashboardComponent.renderBugsTable(this.state.bugsList, this.props.onClick);
        if (!this.state.bugsList) {
            contents = <h1>bugs list</h1>
        }

        return (
            <div>
                {contents}
            </div>
        );
    }

    async populateBugs() {
        const response = await fetch('api/bugs?projectid=1&user=hung')
        const data = await response.json()
        this.setState({ bugsList: data })
    }
}