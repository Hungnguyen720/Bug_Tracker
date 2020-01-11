import React, { Component } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

export class SideNavComponent extends Component { 
    render() { 
        return (
            <Sidebar
                as={Menu}
                animation="push"
                direction="left"
                icon='labeled'
                inverted
                vertical
                visible="visible"
                width='thin'
            >
                <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
    </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='gamepad' />
                    Games
    </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
    </Menu.Item>
            </Sidebar>
        )
    }
}
