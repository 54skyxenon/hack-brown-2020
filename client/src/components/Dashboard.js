import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Button } from 'semantic-ui-react';

const Dashboard = (props) => (
  <div>
    <Header size='small' textAlign='center'>today's topic: the Freedom Dividend</Header>
    <Header as='h1' textAlign='center'>Will Universal Basic Income<br/>(UBI) work?</Header>
    <Container textAlign='center' id="">
      <Link to={'./game'}>
          <Button onClick={props.startGame} content="next" secondary/>
      </Link>
    </Container>
  </div>
)
export default Dashboard;
