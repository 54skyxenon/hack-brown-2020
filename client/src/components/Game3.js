import React from 'react';
import {
  Grid,
  Button,
  Progress,
  Icon,
  Menu,
  Header,
  Popup
} from 'semantic-ui-react';

const Game3 = (props) => (
  <>
    <Grid.Row>
      <Grid.Column width={3}>
        <Progress percent={70} active indicating size='large' color='green' className="rotate">
          <span style={{color: 'white'}}>town health</span>
        </Progress>
      </Grid.Column>
      <Grid.Column width={10}>
        <Grid.Row>
          <h1 className="game2-title">
            THE PEOPLE ARE OVERJOYED! BUT TRAGEDY STRIKES<br />
            WHEN A MILD EARTHQUAKE COLLAPSES A NEARBY<br />
            BRIDGE. DO YOU WANT TO PAY FOR REPAIRS?
          </h1>
        </Grid.Row>

        <Grid.Row>
          <Button onClick={() => props.changeScreen(4)} color='orange'>yes</Button>
          <Button color='orange'>no</Button>
        </Grid.Row>

        <Grid.Row style={{paddingTop: 40}}>
          <Grid.Column>
            <Button color='green'>$1000</Button>
          </Grid.Column>
          <Header as='h5' style={{color: 'white'}}>current UBI allocation per citizen</Header>
        </Grid.Row>
      </Grid.Column>

      <Grid.Column width={3} verticalAlign="middle">
        <Menu secondary compact icon='labeled' vertical>
         <Menu.Item
           name='budget'
         >
          <Popup
            position="left center"
            content="The budget doesn't decrease by much because the UBI comes from the money already in the economy."
            trigger={<Icon name='smile' color='green'/>}
          />
           <span style={{color: 'white'}}>budget</span>
         </Menu.Item>

         <Menu.Item
           name='employment'
         >
           <Icon name='frown' color='red' />
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
           <Icon name='meh' color='yellow'/>
          <span style={{color: 'white'}}>crime rate</span>
         </Menu.Item>

         <Menu.Item
           name='purchasing powe'
         >
           <Icon name='meh' color='yellow'/>
           <span style={{color: 'white'}}>purchasing power</span>
         </Menu.Item>
       </Menu>
      </Grid.Column>
    </Grid.Row>
  </>
)

export default Game3;
