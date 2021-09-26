import React from 'react'
import { Menu } from 'antd';
import { blue } from '@ant-design/colors';
import { Layout, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import { Home, About, Product, ProductDetail, NotFound, Login } from '../App2'
import MyNavbar from './MyNavbar';
import MyContent from './MyContent';

const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;
export default function MyBody() {
    return (
        <Layout>
            <MyNavbar />
            <MyContent />
       
      </Layout>
    )
}
