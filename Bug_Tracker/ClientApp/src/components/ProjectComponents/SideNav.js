import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

export class SideNav extends Component {


    render() {
        return(
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible
                width='thin'
            >
                <Menu.Item onClick={this.props.onClick} id='1' >
                    <Icon name='home' id='1' />
                    Dashboard
                </Menu.Item>
                <Menu.Item onClick={this.props.onClick} id='2'>
                    <Icon name='gamepad' id='2' />
                    Bugs
                </Menu.Item>
                <Menu.Item onClick={this.props.onClick} id='5'>
                    Tasks
                </Menu.Item>
                <Menu.Item onClick={this.props.onClick} id='6'>
                    Calendar
                </Menu.Item>

            </Sidebar>
        )
    }

}