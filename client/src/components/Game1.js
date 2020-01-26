import React from 'react';
import {
  Grid,
  Button
} from 'semantic-ui-react';

const Game1 = (props) => (
  <>
    <Grid.Row>
      <h1 className="game1-title">
        TOWSNVILLE HAS RECENTLY<br/>
        BEEN STRUGGLING THROUGH A<br/>
        RECESSION. CAN YOU HELP?
      </h1>
    </Grid.Row>

    <Grid.Row>
      <Button onClick={() => props.changeScreen(2)}color='orange'>What are my options?</Button>
      <Button color='orange'>I quit.</Button>
    </Grid.Row>
  </>
)

export default Game1;
