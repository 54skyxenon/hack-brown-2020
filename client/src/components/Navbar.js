import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from  'semantic-ui-react';

const Home = () => (
  <Menu secondary>
    <Menu.Item
      name='features'
    >
      <Link to={'./mission'}>
        mission
      </Link>
    </Menu.Item>

    <Menu.Item
      name='testimonials'
    >
      <Link to={'./community'}>
        community
      </Link>
    </Menu.Item>

    <Menu.Item
      name='sign-in'
    >
      <Link to={'./profile'}>
        profile
      </Link>
    </Menu.Item>

    <Menu.Item
      name='sign-in'
    >
      <Link to={'./login'}>
        login
      </Link>
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <img src='corvus.png' alt="corvus" />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Home;
