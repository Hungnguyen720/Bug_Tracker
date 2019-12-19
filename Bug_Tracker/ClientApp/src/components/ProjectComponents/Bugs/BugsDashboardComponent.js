import React, { Component } from 'react'
import { SideNav } from '../SideNav'
import { BugsCreateComponent } from '../Bugs/BugsCreateComponent'
import { BugsListComponent } from '../Bugs/BugsListComponent'
import { BugsHomeComponent } from '../Bugs/BugsHomeComponent'



export class BugsDashboardComponent extends Component {
    constructor() {
        super()
        this.state = {
            displayContent: ''
        }

        this.updateDisplayContentState = this.updateDisplayContentState.bind(this);
    }


    updateDisplayContentState(e) {
        this.setState({
            displayContent:e.target.id
        })
    }

    render() {

        let contents = this.displayContent(this.state.displayContent)

            return (
                <div>
                    { contents }
                </div>
                
            )
        }

        displayContent(state) {

            if (state == 1) {
                return (this.contentOne())
            }

            if (state == 2) {
                return (this.contentTwo())
            }

            if (state == 3) {
                return (this.contentThree())
            }

        }
    
    contentOne() {
        return (<BugsHomeComponent />)
    }

    contentTwo() {
        return (<BugsListComponent onClick={this.updateDisplayContentState} />)
    }

    contentThree() {
        return (<BugsCreateComponent />)
    }

    }