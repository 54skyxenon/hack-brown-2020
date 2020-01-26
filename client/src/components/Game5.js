import React from 'react';
import {
  Grid,
  Button,
  Progress,
  Icon,
  Menu,
  Header
} from 'semantic-ui-react';

const Game5 = (props) => (
  <>
    <Grid.Row>
      <Grid.Column width={3}>
        <Progress percent={45} active indicating size='large' color='olive' className="rotate">
          <span style={{color: 'white'}}>town health</span>
        </Progress>
      </Grid.Column>
      <Grid.Column width={10}>
        <Grid.Row>
          <h1 className="game2-title">
            DUE TO REDUCED UBI, SOME CITIZENS HAVE BECOME<br />
            DESPERATE. ROBERRIES HAVE GONE UP, AND SMALL<br />
            BUSINESS ARE COMPLAINING ABOUT VALUE-ADDED TAX.
          </h1>
        </Grid.Row>

        <Grid.Row>
          <Button onClick={() => props.changeScreen(5)} color='orange'>hire more police officers</Button>
          <Button onClick={() => props.changeScreen(5)} color='orange'>adjust UBI</Button>
        </Grid.Row>

        <Grid.Row style={{paddingTop: 40}}>
          <Grid.Column>
            <Button color='green'>$800</Button>
          </Grid.Column>
          <Header as='h5' style={{color: 'white'}}>current UBI allocation per citizen</Header>
        </Grid.Row>
      </Grid.Column>

      <Grid.Column width={3} verticalAlign="middle">
        <Menu secondary compact icon='labeled' vertical>
         <Menu.Item
           name='budget'
         >
          <Icon name='meh' color='yellow'/>
           <span style={{color: 'white'}}>budget</span>
         </Menu.Item>

         <Menu.Item
           name='employment'
         >
           <Icon name='meh' color='yellow' />
           <span style={{color: 'white'}}>employment</span>
         </Menu.Item>

         <Menu.Item
           name='approval rating'
         >
           <Icon name='smile' color='green' />
           <span style={{color: 'white'}}>approval rating</span>
         </Menu.Item>

         <Menu.Item
           name='crime rate'
         >
           <Icon name='smile' color='green'/>
          <span style={{color: 'white'}}>crime rate</span>
         </Menu.Item>

         <Menu.Item
           name='purchasing power'
         >
           <Icon name='meh' color='yellow'/>
           <span style={{color: 'white'}}>purchasing power</span>
         </Menu.Item>
       </Menu>
      </Grid.Column>
    </Grid.Row>
  </>
)

export default Game5;
