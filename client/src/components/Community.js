import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default function Community(props) {
    return (<Grid centered columns={2}>
        <Grid.Column>
            <Header as='h1' textAlign='center'> <br />
                Here's some thoughts from others... <br />
                <Header.Subheader> <br />
                    Click on a thought bubble to discuss further.
                </Header.Subheader>
            </Header>
            <br />
            <a href="/discussion">
                <img style={{ paddingLeft: '12%' }} src="discussionBoard.png" alt="Discussion Board" />
            </a>
        </Grid.Column>
    </Grid>);
}