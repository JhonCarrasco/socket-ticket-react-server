import React, { useEffect, useState } from 'react';
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { redirect, useNavigate } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';

const { Title, Text } = Typography;

export const Insert = () => {

  const navigate = useNavigate();
  const [ userStorage ] = useState( getUserStorage() );
  useHideMenu(false);

  const onFinish = ({ agent, desk }) => {
    localStorage.setItem('agent', agent);
    localStorage.setItem('desk', desk);
    navigate('/escritorio');
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  

  useEffect(() => {
  if ( !!userStorage.agent && !!userStorage.desk ) {
    redirect('/escritorio');
  }
  })
  

  return (
    <>
      <Title level={ 2 }>Ingresar</Title>
      <Text>Ingrese su nombre y su numero de escritorio</Text>
      <Divider />

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Agente"
          name="agent"
          rules={[
            {
              required: true,
              message: 'Nombre!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="desk"
          rules={[
            {
              required: true,
              message: 'Numero Escritorio!',
            },
          ]}
        >
          <InputNumber min={1} max={99}/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" shape='round'>
          <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
