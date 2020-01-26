import React from 'react';
import {
  Grid,
  Button,
  Progress,
  Icon,
  Menu,
  Header
} from 'semantic-ui-react';

const Game4 = (props) => (
  <>
    <Grid.Row>
      <Grid.Column width={3}>
        <Progress percent={70} active indicating size='large' color='green' className="rotate">
          <span style={{color: 'white'}}>town health</span>
        </Progress>
      </Grid.Column>
      <Grid.Column width={10}>
        <Grid.Row>
          <h1 className="game1-title">
            REPAIRS COST MORE THAN EXPECTED, SO YOU<br />
            REDUCED THE UBI BY $200.
          </h1>
        </Grid.Row>

        <Grid.Row>
          <Button onClick={() => props.changeScreen(5)} color='orange'>continue</Button>
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
           <Icon name='smile' color='yellow' />
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

export default Game4;
