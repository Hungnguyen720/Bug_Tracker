import React, { Component } from 'react'

export class BugsDashboardComponent extends Component {
    constructor() {
        super()
        this.state = {
            displayContent: 2
        }
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
        return (<h1>One</h1>)
    }

    contentTwo() {
        return (<h1>Two</h1>)
    }

    contentThree() {
        return (<h1>Three</h1>)
    }

    }