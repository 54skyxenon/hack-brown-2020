import React, { Component } from 'react';
import { Grid, Button, Form } from 'semantic-ui-react';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    this.updateEmail = this.updateEmail.bind(this);
    this.updateFN = this.updateFN.bind(this);
    this.updateLN = this.updateLN.bind(this);
  }

  // Update the first name field when the user types
  updateFN = (e) => this.setState({ firstName: e.target.value })

  // Update the last name field when the user types
  updateLN = (e) => this.setState({ lastName: e.target.value })

  // Update the email field when the user types
  updateEmail = (e) => this.setState({ email: e.target.value })

  // Update the password field when the user types
  updatePassword = (e) => this.setState({ password: e.target.value })

  // Update the confirm password field when the user types
  updateConfirmPassword = (e) => this.setState({ confirmPassword: e.target.value })

  /**
   * Register the user by POSTing to the express backend
   * Relying on form action instead of axios :(
   **/

  render() {
    return (
      <Form method="post" action="/register">
        <Form.Field>
          <input placeholder='First Name'
            name='firstName'
            onChange={this.updateFN}
            value={this.state.firstName} />
        </Form.Field>
        <Form.Field>
          <input placeholder='Last Name'
            name='lastName'
            onChange={this.updateLN}
            value={this.state.lastName} />
        </Form.Field>
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
        <Form.Field>
          <input placeholder='Confirm Password'
            type='password'
            name='confirmPassword'
            onChange={this.updateConfirmPassword}
            value={this.state.confirmPassword} />
        </Form.Field>
        <Grid centered columns={6}>
          <Grid.Column>
            <Button
              secondary
              type='submit'
            >
              Register
            </Button>
          </Grid.Column>
        </Grid>
      </Form>
    );
  }
}
