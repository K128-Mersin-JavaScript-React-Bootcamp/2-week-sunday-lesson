import React from 'react'
import { Layout, Breadcrumb, Menu } from 'antd';
const { Header, Content, Sider } = Layout;

export default function MyHeader() {
    return (
            
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Fruit Company</Menu.Item>
          </Menu>
        </Header>
    )
}
