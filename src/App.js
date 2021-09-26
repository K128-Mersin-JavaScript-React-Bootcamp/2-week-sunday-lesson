import React, { useState } from 'react'
import "antd/dist/antd.css";
import { Layout } from 'antd';
import MyHeader from './components/MyHeader';
import MyBody from './components/MyBody';
import { MyContext } from '.';

export default function App() {
  const [fruits, setFruits] = useState([])
  return (

    <MyContext.Provider value={{ fruits, setFruits }}>
      <Layout>
        <MyHeader />
        <MyBody />
      </Layout>
    </MyContext.Provider>
  )
}
<ul>
</ul>
