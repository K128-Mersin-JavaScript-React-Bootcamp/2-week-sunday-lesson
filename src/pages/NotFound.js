import React from 'react'

export default function NotFound(props) {
    console.log(props);
   return (<h1>{props.location.state.from.pathname} not found</h1>
   )
  }