import React, { Component } from 'react';
import { Grid, Header, Container } from 'semantic-ui-react';
import { SideNavComponent } from './SideNav';
import ProjectDashboardHome from './ProjectDashboardHomeComponent';
import BugsDashboardComponent from '../Bugs/BugsListComponent';
import BugsCreateComponent from '../Bugs/BugsCreateComponent';
import TasksList from '../Tasks/TasksListComponent';
import TaskCreateComponent from '../Tasks/TaskCreateComponent';
import { Layout } from '../../Layout';


export class ProjectDashboardComponent extends Component {

    constructor() {
        super()
        this.state = {
            content: 0,
            projectId: '',
            username: ''
        }
        this.updateContentState = this.updateContentState.bind(this)
        this.displayContent = this.displayContent.bind(this)
        this.setProjectId = this.setProjectId.bind(this)
    }

     async componentDidMount() {
        await this.setState({
            content: '1'
        })
         await this.setProjectId()
         await this.getLoggedInUser()
    }

    updateContentState(e) {
        let id = e.target.id
        this.setState({
            content: id
        })
    }

    setProjectId() {
        let url = window.location.href
        let projectId_ = url[url.length - 1]
        this.setState({
            projectId: projectId_
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
                <BugsDashboardComponent onClick={this.updateContentState} projectid={this.state.projectId} />
            );
        }
        if (contentid == 3) {
            return (
                <TasksList onClick={this.updateContentState} projectid={this.state.projectId} />
            );
        }
        if (contentid == 5) {
            return (
                <BugsCreateComponent projectid={this.state.projectId}/>
            );
        }
        if (contentid == 6) {
            return(
                <TaskCreateComponent projectid={this.state.projectId}/>
            )
        }
    }

    render() {
        
        let contents = this.displayContent(this.state.content);

        return (
            <div>
                <Layout>
                    {contents}
                    <SideNavComponent onClick={this.updateContentState} />
                </Layout>
            </div>
        );
    }

    async getLoggedInUser() {

        const response = await fetch("user")
        console.log(response)
        this.setState({
            username: response
        })
    }
}
