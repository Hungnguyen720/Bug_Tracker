import React, { Component } from 'react';
import ProjectDashboardDescriptionComponent from '../Dashboard/ProjectDashboardDescriptionComponent';
import ProjectDashboardListComponent from '../Dashboard/ProjectDashboardListComponent';
import ProjectDashboardStatusComponent from '../Dashboard/ProjectDashboardStatusComponent';
import { Grid, Header } from 'semantic-ui-react';


export class ProjectDashboardComponent extends Component {

    render() {
        let user = this.props.match.params.username;


        return (
            <div>
                <h1>{user}</h1>
                <Header size='medium'> Project Name</Header>
                <Grid>
                    <Grid.Row>
                        <ProjectDashboardDescriptionComponent />
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <ProjectDashboardListComponent />
                        </Grid.Column>
                        <Grid.Column>
                            <ProjectDashboardStatusComponent />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}