import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import { ProjectDashboardComponent } from './components/ProjectComponents/Dashboard/ProjectDashboardComponent';
import { BugsDashboardComponent } from './components/ProjectComponents/Bugs/BugsDashboardComponent';
import { ProjectListComponent } from './components/ProjectComponents/ProjectListComponent';
import { ProjectCreateComponent } from './components/ProjectComponents/ProjectCreateComponent';
import { ProjectUsersComponent } from './components/ProjectComponents//ProjectUsersComponent';




import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <AuthorizeRoute path='/fetch-data' component={FetchData} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
            <AuthorizeRoute exact path='/:username/project/dashboard' component={ProjectDashboardComponent} />
            <AuthorizeRoute exact path='/:username/project/bugs' component={BugsDashboardComponent} />
            <AuthorizeRoute exact path='/:username/project/list' component={ProjectListComponent} />
            <AuthorizeRoute exact path='/:username/project/create' component={ProjectCreateComponent} />
            <AuthorizeRoute exact path='/:username/project/users' component={ProjectUsersComponent} />
        </Layout>
    );
  }
}
