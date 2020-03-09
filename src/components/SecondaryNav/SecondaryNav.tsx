import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const SecondaryNav = React.memo(() => {
  return (
    <Menu
      mode="horizontal"
      style={{
        border: 'none',
        marginTop: 8,
      }}
    >
      <Menu.Item key="logout">
        <Link to="/logout">
          <Icon type="lock" />
          <span>Logout</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="profile">
        <Link to="/profile">
          <Icon type="user" />
          <span>Profile</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
});

export default SecondaryNav;
