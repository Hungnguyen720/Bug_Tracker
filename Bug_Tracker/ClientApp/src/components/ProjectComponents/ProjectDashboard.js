import React, { Component } from 'react';
import { Checkbox, Table, Sidebar } from 'semantic-ui-react';
import axios from 'axios';
import { SideNav } from './SideNav';
import { BugsListComponent } from './Bugs/BugsListComponent';
import { BugsCreateComponent } from './Bugs/BugsCreateComponent';
import { BugDetailsComponent } from './Bugs/BugDetailsComponent';
import { ProjectHome } from './ProjectHome';
import { CalendarComponent } from './CalendarComponent';
import { TasksListComponent } from './Tasks/TasksListComponent';
import { TaskCreateComponent } from './Tasks/TaskCreateComponent';

export class ProjectDashboard extends Component {
    constructor() {
        super()
        this.state = {
            displayContent: 0,
            projectID : ''
        }

        this.updateDisplayContentState = this.updateDisplayContentState.bind(this);
    }

    componentDidMount() {
        let projectId = window.location.href
        projectId = projectId[projectId.length - 1]

        this.setState({
            projectID: projectId,
            displayContent: 1
        })
    }

    updateDisplayContentState(e) {
        this.setState({
            displayContent: e.target.id
        })
    }

    render() {

        let contents = this.displayContent(this.state.displayContent)

        return (
            <div>
                < SideNav onClick={this.updateDisplayContentState} />
                {contents}
            </div>

        )
    }


    displayContent(state) {

        if (state == 1) {
            return (< ProjectHome projectid={this.state.projectID} />)
        }

        if (state == 2) {
            return (<BugsListComponent onClick={this.updateDisplayContentState} projectid={this.state.projectID} />)
        }

        if (state == 3) {
            return (< BugsCreateComponent projectid={this.state.projectID} />)
        }


        if (state == 5) {
            return (
                < TasksListComponent projectid={this.state.projectID} onClick={this.updateDisplayContentState} />    
            )
        }

        if (state == 6) {
            return (
                < TaskCreateComponent projectid={this.state.projectID} />
            )
        }
        
        

        if (state == 10) {
            return (
                < CalendarComponent />
            )
        }


    }


}
