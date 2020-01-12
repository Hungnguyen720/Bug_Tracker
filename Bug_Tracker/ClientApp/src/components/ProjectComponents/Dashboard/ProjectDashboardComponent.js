import React, { Component } from 'react';
import { Grid, Header, Container } from 'semantic-ui-react';
import { SideNavComponent } from './SideNav';
import ProjectDashboardHome from './ProjectDashboardHomeComponent';
import BugsDashboardComponent from '../Bugs/BugsListComponent';
import BugsCreateComponent from '../Bugs/BugsCreateComponent';
import TasksList from '../Tasks/TasksListComponent';
import TasksListComponent from '../Tasks/TasksListComponent';

export class ProjectDashboardComponent extends Component {

    constructor() {
        super()
        this.state = {
            content: ''
        }
        this.updateContentState = this.updateContentState.bind(this)
        this.displayContent = this.displayContent.bind(this)
    }

    componentDidMount() {
        this.setState({
            content: '1'
        })
    }

    updateContentState(e) {
        let id = e.target.id
        this.setState({
            content: id
        })
    }

    displayContent(contentid) {
        if (contentid == 1) {
            return (
                <ProjectDashboardHome />
            );
        }
        if (contentid == 2) {
            return (
                <BugsDashboardComponent onClick={this.updateContentState} />
            );
        }
        if (contentid == 3) {
            return (
                <TasksList />
            );
        }
        if (contentid == 5) {
            return (
                <BugsCreateComponent />
            );
        }
        if (contentid == 6) {

        }
        
    }
    render() {
        
        let contents = this.displayContent(this.state.content);
        return (
            <div>
                <SideNavComponent onClick={this.updateContentState} />
                {contents}
            </div>
        );
    }



}
