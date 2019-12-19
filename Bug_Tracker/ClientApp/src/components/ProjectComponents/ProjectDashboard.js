import React, { Component } from 'react';
import { Checkbox, Table, Sidebar } from 'semantic-ui-react';
import axios from 'axios';
import { SideNav } from './SideNav';
import { BugsListComponent } from './Bugs/BugsListComponent';
import { BugsCreateComponent } from './Bugs/BugsCreateComponent';
import { BugDetailsComponent } from './Bugs/BugDetailsComponent';
import { ProjectHome } from './ProjectHome';
import { CalendarComponent } from './CalendarComponent';
import { ProjectTasksComponent } from './ProjectTasksComponent';

export class ProjectDashboard extends Component {
    constructor() {
        super()
        this.state = {
            displayContent: ''
        }

        this.updateDisplayContentState = this.updateDisplayContentState.bind(this);
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
            return (< ProjectHome />)
        }

        if (state == 2) {
            return (<BugsListComponent onClick={this.updateDisplayContentState} />)
        }

        if (state == 3) {
            return (< BugsCreateComponent />)
        }

        if (state == 4) {
            return (< BugDetailsComponent />)
        } 

        if (state == 5) {
            return (
                < ProjectTasksComponent />    
            )
        }

        if (state == 6) {
            return (
                < CalendarComponent />
            )
        }



    }


}
