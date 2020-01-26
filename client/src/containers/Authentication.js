import React, { Component } from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import LoginForm from '../components/forms/LoginForm';

import { Grid, Header } from 'semantic-ui-react'

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state= {
      authenticated: false,
    }
  }
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>

          {
            this.state.authenticated ?
            <LoginForm /> :
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
