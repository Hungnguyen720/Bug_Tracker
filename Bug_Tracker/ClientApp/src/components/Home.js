import React, { Component } from 'react';
import logo from '../landing_page_6.jpg';
import {Button} from 'semantic-ui-react';


export class Home extends Component {
  static displayName = Home.name;

    render() {
        return (
            <div style={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${logo})`,
                overflow: 'hidden',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'

    }}>
                <div style={{
                    width: '100%'
                }}>
                    <div style={{
                        marginLeft: 'auto',
                        width: '600px',
                        height: '100%',
                        textAlign: 'left',
                    }}>
                        <div style={{
                            padding: '10% 1%',
                            position: 'absolute',
                            color: 'white'
                            
                        }}>
                            <h1>Hello!
                        <br />Thank you for visiting my App Demo
                        <br />To go through the demo please follow these steps:</h1>
                    <ol>
                        <li>Press the login button below</li>
                        <li>Sign in using: Hnguyen720test@gmail.com</li>
                        <li>Use the password: CodeisCool123</li>
                            </ol>
                            <div style={{
                                width: '100%',
                                textAlign: 'center'
                            }}>
                                <a href="home" ><button class="ui primary button">Login</button></a>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
    );
  }
}
