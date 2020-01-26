import React, { Component } from 'react';
import RegisterForm from '../components/forms/RegisterForm';

import axios from 'axios';
import Dashboard from '../components/Dashboard';

import { Grid, Header } from 'semantic-ui-react'

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false };
    this.setAuthStatus = this.setAuthStatus.bind(this);
  }

  // We want to update the user's authentication status upon loading the page
  componentDidMount() {
    this.setAuthStatus();
  }

  // Calls the backend API to check if we're logged in
  setAuthStatus() {
    axios.get('http://localhost:5000/api/token')
      .then(res => {
        if (res.data === "logged_in") {
          alert("Successfully logged in!");
          this.setState({ authenticated: true });
        } else {
          this.setState({ authenticated: false });
        }
      })
      .catch(err => {
        this.setState({ authenticated: false });
      })
  }

  // If we are authenticated, start playing the game
  // Otherwise, show a registration screen
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          {
            this.state.authenticated ?
              <Dashboard
                startGame={this.props.startGame}
              /> :
              <>
                <Header as='h1' textAlign='center'>
                  Before we get started, what's your name<br />and email?
                <Header.Subheader>
                  Create an account to track your progress.
                </Header.Subheader>
                </Header>
                <RegisterForm />
              </>
          }
        </Grid.Column>
      </Grid>
    );
  }
}
