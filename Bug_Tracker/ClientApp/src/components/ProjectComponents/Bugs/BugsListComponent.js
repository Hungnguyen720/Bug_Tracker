import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Table, Button } from 'semantic-ui-react';
import axios from 'axios';


export class BugsListComponent extends Component {
    constructor() {
        super()
        this.state = { bugsList: [], loading: false }
    }

    componentDidMount() {
        this.populateBugs()
    }

    static renderBugsTable(bugsList, clickFunction) {
        return (
            <div>
                <Button basic color='blue' id='3' onClick={clickFunction}> Submit Bug </Button>
                <Button basic color='blue' id='4' onClick={clickFunction}> Bug Details Test </Button>
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
                            <Table.Row>
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
            : BugsListComponent.renderBugsTable(this.state.bugsList, this.props.onClick);

        return (
            <div>
                {contents}
            </div>
        );
    }


    async populateBugs() {
        const response = await fetch('api/bugs')
        const data = await response.json()
        console.log(data)
        this.setState({ bugsList: data })
    }
}