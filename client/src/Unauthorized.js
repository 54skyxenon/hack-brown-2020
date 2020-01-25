import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react'

class Unauthorized extends Component {
  render() {
    return(
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as='h1' textAlign='center'>
            Before we get started, what's your name<br/>and email?
            <Header.Subheader>
              Create an account to track your progress.
            </Header.Subheader>
          </Header>
          {this.props.children}
        </Grid.Column>
      </Grid>
    )
  }
}
export default Unauthorized;
