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
                <Menu.Item id='1' onClick={this.props.onClick}>
                    <Icon id='1' name='home' />
                    Home
                </Menu.Item>
                <Menu.Item id='2' onClick={this.props.onClick}>
                    <Icon id='2' name='gamepad' />
                    Games
                </Menu.Item>
                <Menu.Item id='3' onClick={this.props.onClick}>
                    <Icon id='3' name='camera' />
                    Channels
                </Menu.Item>
            </Sidebar>
        )
    }
}
