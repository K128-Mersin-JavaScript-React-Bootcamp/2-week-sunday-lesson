import { Button, Empty, Modal, Space, Table } from 'antd';
import React, { useState, useEffect, useContext, useRef } from 'react'
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom'
import { MyContext } from '..';

export default function Product() {
  let history = useHistory();
  const refAddButton = useRef(null);
  const { fruits, setFruits } = useContext(MyContext);
  const [fruit, setFruit] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);


  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    refAddButton.current.focus();
  }, [refAddButton])

  const getProducts = () => {

    fetch("http://localhost:3001/fruits")
      .then(res => res.json())
      .then(json => setFruits(json));
  }

  const deleteProduct = (fruit) => {
    setFruit(fruit)
    showModal()
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    fetch(`http://localhost:3001/fruits/${fruit.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(json => getProducts())
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const createProduct = () => {
    history.push("/product/add");
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, fruit) =>
        <Link key={fruit.id} to={`/product/${fruit.id}`}>{fruit.name}</Link>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, fruit) => (
        <Space size="middle">
          <Link key={fruit.id} to={`/product/${fruit.id}/edit`}>Edit</Link>
          <a key={fruit.id} href="#" onClick={() => deleteProduct(fruit)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1>Products</h1>          
      <Button type="primary" style={{ marginBottom: '24px' }}
      onClick={() => createProduct()}
      ref={refAddButton}>Create New</Button>

      {
        console.log(fruits)
      }
      {fruits.length ?
        <Table columns={columns} dataSource={fruits} />
        : <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 60,
          }}
          description={
            <span>
              There is no product available.
            </span>
          }
        >
          <Button type="primary" onClick={() => createProduct()}>Create Now</Button>
        </Empty>
      }
      <Modal title="Basic Modal"
        okText={"Delete"}
        okType={"danger"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>

        <p>Are you sure to delete this item:</p>
        <p>Name: {fruit && fruit.name}</p>
        <p>Description: {fruit && fruit.description}</p>
      </Modal>
    </>
  )
}