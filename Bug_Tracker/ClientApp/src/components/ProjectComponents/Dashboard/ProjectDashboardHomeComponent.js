import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';

export default class ProjectDashboardHome extends Component {
    render() {
        return (
            <div>
                <Grid stackable columns={2}>
                    <Grid.Column>
                        <Segment>
                        </Segment>
                        <Segment>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                        </Segment>
                        <Segment>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
