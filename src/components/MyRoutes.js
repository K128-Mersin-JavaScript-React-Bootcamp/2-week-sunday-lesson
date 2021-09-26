import React from 'react'
import { Menu } from 'antd';
import { blue } from '@ant-design/colors';
import { Layout, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import MyNavbar from './MyNavbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Product';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ProductEdit from '../pages/ProductEdit';
import ProductAdd from '../pages/ProductAdd';

const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;
export default function MyRoutes() {
    return (

        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/product/add" component={ProductAdd} />
        <Route exact path="/product/:id/edit" component={ProductEdit} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    )
}
