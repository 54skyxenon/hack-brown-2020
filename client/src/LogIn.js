import React from 'react'
import {Grid, Button, Form } from 'semantic-ui-react'

function LogIn() {
  return(
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
  )
}
export default LogIn;
