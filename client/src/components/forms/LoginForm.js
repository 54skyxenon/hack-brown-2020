import React, { Component } from 'react';
import { Grid, Button, Form } from 'semantic-ui-react';

export default class LoginForm extends Component {
  // The constructor
  constructor(props) {
    super(props);
    this.state = { isRegistering: false, email: '', password: '' };
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  // Update the email field when the user types
  updateEmail = (e) => this.setState({ email: e.target.value })

  // Update the password field when the user types
  updatePassword = (e) => this.setState({ password: e.target.value })

  render() {
    return (
      <div>
        <div>
          <h1>Login</h1>
          <Form method="post" action="/login">
            <Form.Field>
              <input placeholder='Email Address'
                name='email'
                onChange={this.updateEmail}
                value={this.state.email} />
            </Form.Field>
            <Form.Field>
              <input placeholder='Password'
                type='password'
                name='password'
                onChange={this.updatePassword}
                value={this.state.password} />
            </Form.Field>
            <Grid centered columns={6}>
              <Grid.Column>
                <Button
                  secondary
                  type='submit'
                >
                  Log In
            </Button>
              </Grid.Column>
            </Grid>
          </Form>
        </div>
      </div>
    )
  }
}
