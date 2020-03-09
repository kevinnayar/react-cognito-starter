import * as React from 'react';
import { Menu, Icon } from 'antd';

const PrimaryNav = React.memo(() => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
      <Menu.SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="appstore" />
            <span>Navigation One</span>
          </span>
        }
      >
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="mail" />
            <span>Navigation Two</span>
          </span>
        }
      >
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="sub3"
        title={
          <span>
            <Icon type="setting" />
            <span>Navigation Three</span>
          </span>
        }
      >
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
});

export default PrimaryNav;

