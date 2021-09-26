import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch, Link, Redirect } from 'react-router-dom';
import React from 'react'

const fruits = [
  {
    id: "1",
    name: "Apple",
    description: "Apple details"
  },
  {
    id: "2",
    name: "Strawberry",
    description: "Strawberry details"
  },
  {
    id: "3",
    name: "Pear",
    description: "Pear details"
  }
]

export function Home() {
  return (
    <h1>Home</h1>
  )
}
export function About() {
 return (
   <h1>About</h1>
 )
}
export function Login() {
 return (
   <h1>Login</h1>
 )
}
export function Product() {
 return (
   <>
    <h1>Product</h1>
    {
      fruits.map((fruit)=> <>
      <Link to={`/product/${fruit.id}`}>{fruit.name}</Link><br/>
      </> )
    }
   </>
 )
}
export function ProductDetail(props) {
  const id = props.match.params.id;
  const filteredFruits = fruits.filter((v) => v.id === id);
  if(!filteredFruits.length)
  {
    return <Redirect
          to={{
            pathname: "/404",
            state: { from: props.location }
          }}
        />
  }
const fruit = filteredFruits[0];
 return (
   <>
    <h1>ProductDetail</h1>
    <h2>{fruit.name}</h2>
    <p>{fruit.description}</p>
   </>
 )
}
export function NotFound(props) {
  console.log(props);
 return (<h1>{props.location.state.from.pathname} not found</h1>
 )
}


function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/product">Products</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route exact path="/product" component={Product}/>
          <Route path="/product/:id" component={ProductDetail}/>
          <Route path="/login" component={Login}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
