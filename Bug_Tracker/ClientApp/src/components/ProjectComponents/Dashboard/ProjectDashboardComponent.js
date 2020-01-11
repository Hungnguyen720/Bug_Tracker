import React, { Component } from 'react';
import ProjectDashboardDescriptionComponent from '../Dashboard/ProjectDashboardDescriptionComponent';
import ProjectDashboardListComponent from '../Dashboard/ProjectDashboardListComponent';
import ProjectDashboardStatusComponent from '../Dashboard/ProjectDashboardStatusComponent';
import { Grid, Header, Container } from 'semantic-ui-react';
import { SideNavComponent } from './SideNav';


export class ProjectDashboardComponent extends Component {

    constructor() {
        super()
        this.state = {
            content: ''
        }
        this.test = this.test.bind(this)
    }

    componentDidMount() {
        this.setState({
            content: '1'
        })
    }

    test(e) {
        let id = e.target.id
        this.setState({
            content: id
        })
    }

    static getContent(contentid) {
        if (contentid == 1) {
            return (
                <h1>111111111111111111111111111111111111111111</h1>
            );
        }
        if (contentid == 2) {
            return (
                <h1>222222222222222222222222222222222222222222</h1>
            );
        }
        if (contentid == 3) {
            return (
                <h1>333333333333333333333333333333333333333333</h1>
            );
        }
        if (contentid == 4) {
            return (
                <h1>4444444444444444444444444444444444444444444</h1>
            );
        }
        if (contentid == 5) {
            return (
                <h1>555555555555555555555555555555555555555555555</h1>
            );
        }
        
    }

    render() {
        let contents = ProjectDashboardComponent.getContent(this.state.content);
        return (
            <div>
                <SideNavComponent onClick={this.test} />
                {contents}
            </div>
        );
    }



}
