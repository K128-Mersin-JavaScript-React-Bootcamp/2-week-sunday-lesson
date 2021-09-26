import React from 'react'
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { blue, red, green } from '@ant-design/colors';
import { colors } from './utils/colors';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import {Home, About, Product, ProductDetail, NotFound, Login} from './App2'

const { SubMenu } = Menu;

export default function App() {
  console.log("BLUE"
    , blue)
  const handleClick = e => {
    console.log('click ', e);
  };
  return (
    <Router>
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation">
        <Menu.Item key="1"><NavLink exact to="/">Home</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to="/login">Login</NavLink></Menu.Item>
        <Menu.Item key="3"><NavLink to="/product">Products</NavLink></Menu.Item>
        <Menu.Item key="4"><NavLink to="/about">About</NavLink></Menu.Item>
      </SubMenu>
    </Menu>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route exact path="/product" component={Product}/>
          <Route path="/product/:id" component={ProductDetail}/>
          <Route path="/login" component={Login}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
  )
}


<ul>
</ul>
