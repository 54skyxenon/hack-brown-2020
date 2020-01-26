// Used to be Home.js

import React, { Component } from 'react';
import RegisterForm from '../components/forms/RegisterForm';
// import LoginForm from '../components/forms/LoginForm';

// Perform a GET request to the backend to test if user is logged in
import axios from 'axios';

import { Grid, Header } from 'semantic-ui-react'

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false };
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  componentDidMount() {
    this.isAuthenticated();
  }

  isAuthenticated() {
    axios.get('http://localhost:5000/api/token')
      .then(res => {
        console.log("Then clause ran: " + res.data)
        this.setState({ authenticated: true });
      })
      .catch(err => {
        return true;
      })
  }

  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>

          {
            this.state.authenticated ?
              <>
                <h1> Welcome back! </h1>
              </> :
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
