import React, { Component } from 'react'
import { Grid, Button, Form } from 'semantic-ui-react'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', confirmPassword: '' };
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <input placeholder='Email Address' />
        </Form.Field>
        <Grid centered columns={6}>
          <Grid.Column>
            <Button secondary type='submit'>next</Button>
          </Grid.Column>
        </Grid>
      </Form>
    );
  }
}
