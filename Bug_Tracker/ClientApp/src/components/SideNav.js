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
                <Menu.Item href='https://localhost:44395/test/project/bugs'>
                    <Icon name='home' />
                    Dashboard
                </Menu.Item>
                <Menu.Item href='https://localhost:44395/test/project/bugs/create'>
                    <Icon name='gamepad' />
                    Bugs
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='camera' />
                    Settings
                </Menu.Item>
            </Sidebar>
        )
    }

}