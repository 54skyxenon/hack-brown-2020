import React from 'react';
import {
  Grid,
  Button,
  Progress,
  Icon,
  Menu
} from 'semantic-ui-react';

const Game2 = (props) => (
  <>
    <Grid.Row>
      <Grid.Column width={3}>
        <Progress percent={30} active indicating size='large' color='yellow' className="rotate">
          <span style={{color: 'white'}}>town health</span>
        </Progress>
      </Grid.Column>
      <Grid.Column width={10}>
        <Grid.Row>
          <h1 className="game2-title">
            SOME COMMUNITY MEMBERS HAVE BEEN REQUESTION A<br />
            UNIVERSAL BASIC INCOME. HOW MUCH DO YOU WANT TO<br />
            ALLOCATE PER CITIZEN PER MONTH?
          </h1>
        </Grid.Row>

        <Grid.Row>
          <Button color='orange'>none</Button>
          <Button color='orange'>$500</Button>
          <Button onClick={() => props.changeScreen(3)} color='orange'>$1000</Button>
        </Grid.Row>
      </Grid.Column>

      <Grid.Column width={3} verticalAlign="middle">
        <Menu secondary compact icon='labeled' vertical>
         <Menu.Item
           name='budget'
         >
           <Icon name='smile' color='green'/>
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

export default Game2;
