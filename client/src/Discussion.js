import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default function Discussion(props) {
    return (<Grid centered columns={2}>
        <Grid.Column style={{ paddingLeft: 0 }}>
            <Header as='h1' textAlign='center'> <br />
                Is a UBI more efficient than traditional welfare programs? <br />
            </Header>
            <br />
            <img style={{ paddingLeft: 40 }} src="discussionRandom.png"
                alt="" />
        </Grid.Column>
    </Grid>);
}