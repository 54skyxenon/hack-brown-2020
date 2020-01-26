import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Authentication from './Authentication';
import Mission from '../components/Mission';
import Community from '../components/Community';
import Discussion from '../Discussion';
import Profile from '../components/Profile';
import LoginForm from '../components/forms/LoginForm';
import Navbar from '../components/Navbar';
import Game from '../components/Game';
import {
  Grid
} from 'semantic-ui-react';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
    }
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    this.setState({ gameStarted: true })
  }

  render() {
    return (
      <>
        <Grid padded
          style={{ height: '100vh' }}
          className={this.state.gameStarted ? 'game-started' : 'game-not-started'}>
          <Grid.Row
            style={{ height: '15%' }}
            centered={true}
          >
            <Grid.Column>
              <Navbar
                gameMode={this.state.gameStarted}
              />
            </Grid.Column>
          </Grid.Row>

          <h1 className="navbar-middle">
            <a href="/" style={{ color: 'black'}}>corvus</a>
          </h1>

          <Grid.Row style={{ height: '85%' }}>
            <Grid.Column>
              <Switch>
                <Route exact path='/'
                  render={(props) => <Authentication {...props}
                    theme={this.state.theme}
                    startGame={this.startGame} />}
                />
                <Route path="/mission" component={Mission} />
                <Route path="/community" component={Community} />
                <Route path="/discussion" component={Discussion} />
                <Route path="/profile" component={Profile} />
                <Route path="/login" component={LoginForm} />
                <Route path="/game" component={Game} />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}
