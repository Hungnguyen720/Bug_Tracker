import React, { Component } from 'react';
import { Checkbox, Table } from 'semantic-ui-react';
import axios from 'axios';


export class ProjectListComponent extends Component {



    

    render() {
        return (
            <div>
            <button>New Project</button>
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