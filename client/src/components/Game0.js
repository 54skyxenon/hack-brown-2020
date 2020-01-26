import React from 'react';
import {
  Grid,
  Button
} from 'semantic-ui-react';

const Game0 = (props) => (
  <>
    <Grid.Row>
      <h1 className="game1-title">YOU'RE THE LEADER OF<br />YOUR TOWN,TOWNSVILLE.</h1>
    </Grid.Row>

    <Grid.Row>
      <Button onClick={() => props.changeScreen(1)}color='orange'>cool!</Button>
    </Grid.Row>
  </>
)

export default Game0;
