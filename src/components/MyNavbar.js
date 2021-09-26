import React from 'react'
import { Menu } from 'antd';
import { blue } from '@ant-design/colors';
import { Layout, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import { Home, About, Product, ProductDetail, NotFound, Login } from '../App2'

const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;

export default function MyNavbar() {
    return (
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1"><NavLink exact to="/">Home</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to="/login">Login</NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to="/product">Products</NavLink></Menu.Item>
              <Menu.Item key="4"><NavLink to="/about">About</NavLink></Menu.Item>
            </SubMenu>
          </Menu>

        </Sider>
    )
}
