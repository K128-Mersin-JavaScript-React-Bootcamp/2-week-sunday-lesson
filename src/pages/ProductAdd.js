import React, { useContext, useEffect, useRef } from 'react'
import { Redirect, useHistory } from 'react-router';
import { MyContext } from '..';
import { Form, Input, Button, Checkbox } from 'antd';


export default function ProductAdd(props) {
  let history = useHistory();
  const refFirstInput = useRef(null);
  useEffect(() => {
    refFirstInput.current.focus()
  }, [refFirstInput])

  const onFinish = (values) => {
    fetch(`http://localhost:3001/fruits`, {
      method: 'POST',
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
      <h1>Add fruit</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input 
          ref={refFirstInput}/>
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
