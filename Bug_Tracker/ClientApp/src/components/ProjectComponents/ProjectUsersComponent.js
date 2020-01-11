import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

export class ProjectUsersComponent extends Component {
    render() {
        return (
            <div>
                <Grid columns={4}>
                    <Grid.Row>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

