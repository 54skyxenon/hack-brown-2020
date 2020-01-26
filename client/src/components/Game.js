import React, { Component } from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import Game0 from './Game0';
import Game1 from './Game1';
import Game2 from './Game2';
import Game3 from './Game3';
import Game4 from './Game4';
import Game5 from './Game5';
import './game.css';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
    }
    this.changeScreen = this.changeScreen.bind(this);
    this.screens = {
      0: <Game0 changeScreen={this.changeScreen}/>,
      1: <Game1 changeScreen={this.changeScreen}/>,
      2: <Game2 changeScreen={this.changeScreen}/>,
      3: <Game3 changeScreen={this.changeScreen}/>,
      4: <Game4 changeScreen={this.changeScreen}/>,
      5: <Game5 changeScreen={this.changeScreen}/>,

    }
  }

  changeScreen(n) {
    this.setState({ screen: n});
  }

  render() {
    const number = this.state.screen;
    return(
      <Grid textAlign="center">
        {this.screens[number]}
      </Grid>
    )
  }
}
