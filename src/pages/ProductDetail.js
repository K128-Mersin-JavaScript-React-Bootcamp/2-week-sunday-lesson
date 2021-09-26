import { ColumnGroup } from 'rc-table'
import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { MyContext } from '..'

export default function ProductDetail(props) {
  const { fruits } = useContext(MyContext);
  const id = props.match.params.id;
  const filteredFruits = fruits.filter((v) => v.id === id);

  if (!filteredFruits.length) {
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