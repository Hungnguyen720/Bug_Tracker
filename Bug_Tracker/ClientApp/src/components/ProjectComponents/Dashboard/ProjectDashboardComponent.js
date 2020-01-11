import React, { Component } from 'react';
import ProjectDashboardDescriptionComponent from '../Dashboard/ProjectDashboardDescriptionComponent';
import ProjectDashboardListComponent from '../Dashboard/ProjectDashboardListComponent';
import ProjectDashboardStatusComponent from '../Dashboard/ProjectDashboardStatusComponent';
import { Grid, Header, Container } from 'semantic-ui-react';
import { SideNavComponent } from './SideNav';


export class ProjectDashboardComponent extends Component {

    render() {
        return (
            <div>
                <SideNavComponent />
                    <h1>test</h1>
            </div>
        );
    }
}
