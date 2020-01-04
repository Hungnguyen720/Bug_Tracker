import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Table, Button } from 'semantic-ui-react';
import { BugDetailsComponent } from './BugDetailsComponent';
import authService from '../../api-authorization/AuthorizeService';


export class BugsListComponent extends Component {
    constructor() {
        super()
        this.state = {
            bugsList: [],
            loading: false,
            displayBugDetail: false,
            bugId: ''

        }

        this.displayBugDetail = this.displayBugDetail.bind(this)
        this.displayBugList = this.displayBugList.bind(this)
    }


    displayBugDetail(e) {
        this.setState({
            displayBugDetail: true,
            bugId: e.target.getAttribute('bugid')
        })
    }

    displayBugList() {
        this.setState({
            displayBugDetail: false,
            bugId: ''
        })
    }



    async componentDidMount() {
        let user = await Promise.resolve(this.getLoggedInUser())

        this.populateBugs(this.props.projectid, user)
    }

    static renderBugsTable(bugsList, clickFunction, updateDisplayBugDetail) {
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
                                <Table.Cell><button id={4} bugid={bug.id} onClick={updateDisplayBugDetail}> {bug.title} </button></Table.Cell>
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
        let contents = ''

        if (this.state.displayBugDetail == false) {
            contents = BugsListComponent.renderBugsTable(this.state.bugsList, this.props.onClick, this.displayBugDetail);
        }

        if (this.state.displayBugDetail == true) {
            contents = <BugDetailsComponent onClick={this.displayBugList} bugid={this.state.bugId} />
        }



        return (
            <div>
                {contents}
            </div>
        );
    }


    async populateBugs(projectId, user) {
        const response = await fetch('api/bugs?projectid=' + projectId + '&user=' + user)
        const data = await response.json()
        this.setState({
            bugsList: data,
        })
    }

    async getLoggedInUser() {
        const user = await Promise.resolve(authService.getUser())
        return user.name
    }
}