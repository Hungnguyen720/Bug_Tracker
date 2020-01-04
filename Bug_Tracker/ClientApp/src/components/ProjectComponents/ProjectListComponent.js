import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { ProjectCreateComponent } from './ProjectCreateComponent';
import authService from '../api-authorization/AuthorizeService';


export class ProjectListComponent extends Component {
    constructor() {
        super()

        this.state = {
            projectList: [],
            User: ''
        }
    }

    async componentDidMount() {
       await this.getLoggedInUser()
       await this.getProjects(this.state.User)
    }

    state = {
        on: false
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    async getLoggedInUser() {
        const user = await Promise.resolve(authService.getUser())
        this.setState({
            User: user.name
        })
    }

    static renderProjectList(projectList, path) {
        return (
            <div>
                <Table definition>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Project</Table.HeaderCell>
                            <Table.HeaderCell>%</Table.HeaderCell>
                            <Table.HeaderCell>Owner</Table.HeaderCell>
                            <Table.HeaderCell>Tasks</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { projectList.map(project =>
                            <Table.Row>
                                <Table.Cell><a href={path + "/" + project.id}> {project.projectName}</a></Table.Cell>
                                <Table.Cell>0%</Table.Cell>
                                <Table.Cell>{ project.owner}</Table.Cell>
                                <Table.Cell>status</Table.Cell>
                                <Table.Cell>tasks</Table.Cell>
                            </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>
            </div>
        )
    }

    render() {

        let contents = ProjectListComponent.renderProjectList(this.state.projectList, this.props.location.pathname)

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

                        {contents}
                
                    </div>

                )}

            </div>
        );
    }
    async getProjects(user) {
        const response = await fetch('api/ProjectSettingsModels?user=' + user)
        const data = await response.json()
        this.setState({ projectList: data })
    }
}
