import React, { Component } from 'react';
import { Checkbox, Table } from 'semantic-ui-react';
import axios from 'axios';
import { ProjectCreateComponent } from './ProjectCreateComponent';


export class ProjectListComponent extends Component {

    state = {
        on: false
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        return (
            <div>
                {this.state.on && (
                    <div>
                    <ProjectCreateComponent />
                        <button onClick={this.toggle} >Cancel</button>
                        </div>
                )}

                

                {!this.state.on && (
                    <div>
                    <button onClick={this.toggle} >New Project</button>

                <Table compact celled definition>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell>Project Name</Table.HeaderCell>
                            <Table.HeaderCell>%</Table.HeaderCell>
                            <Table.HeaderCell>Owner</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell collapsing>
                                <Checkbox slider />
                            </Table.Cell>
                            <Table.Cell>John Lilki</Table.Cell>
                            <Table.Cell>September 14, 2013</Table.Cell>
                            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                    </div>

                )}

            </div>
        );
    }
}

function getRequest() {
    axios.get('api/bugs')
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
}