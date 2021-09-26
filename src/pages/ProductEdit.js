import React, { useContext } from 'react'
import { Redirect, useHistory } from 'react-router';
import { MyContext } from '..';
import { Form, Input, Button, Checkbox } from 'antd';


export default function ProductEdit(props) {
  let history = useHistory();
  const { fruits } = useContext(MyContext);
  const id = props.match.params.id;
  console.log("id", id);
  const filteredFruits = fruits.filter((v) => v.id == id);
  console.log("FRUITS", fruits);

  if (!filteredFruits.length) {
    return <Redirect
      to={{
        pathname: "/404",
        state: { from: props.location }
      }}
    />
  }
  const fruit = filteredFruits[0];

  const onFinish = (values) => {
    fetch(`http://localhost:3001/fruits/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values) 
    }).then(res => res.json())
    .then(json => history.push("/product"))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <h1>Edit {fruit.name}</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ name: fruit.name, description: fruit.description }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input your description!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
