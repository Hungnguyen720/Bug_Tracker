import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ProjectListComponent } from './components/ProjectComponents/ProjectListComponent';
import { ProjectDashboardComponent } from './components/ProjectComponents/Dashboard/ProjectDashboardHandlerComponent';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
        <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/projects' component={ProjectListComponent} />
                <Route exact path='/projects/:id' component={ProjectDashboardComponent} />
        </div>
    );
  }
}
