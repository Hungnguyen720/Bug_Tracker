import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import { ProjectListComponent } from './components/ProjectComponents/ProjectListComponent';
import { ProjectDashboard } from './components/ProjectComponents/ProjectDashboard';
import { BugDetailsComponent } from './components/ProjectComponents/Bugs/BugDetailsComponent';





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
            <AuthorizeRoute exact path='/:username/projects' component={ProjectListComponent} />
            <AuthorizeRoute exact path='/:username/projects/:projectid' component={ProjectDashboard} />
        </Layout>
    );
  }
}
