import React, { useContext, useEffect, useState } from 'react'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd'
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';
import { redirect, useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

export const Desktop = () => {

  const navigate = useNavigate();
  const [ userStorage ] = useState( getUserStorage() );
  const { socket } = useContext( SocketContext );
  const [ticket, setTicket] = useState(null);
  useHideMenu(false);
  
  useEffect(() => {
  if ( !!!userStorage.agent || !!!userStorage.desk) {
    navigate('/');
  }
  })
  

  const close = () => { 
    localStorage.clear();
    return redirect('/');
   }
  
   const nextTicket = () => { 
       socket.emit('next-ticket', userStorage, (dataTicket) => {
            setTicket(dataTicket);
       });
     }

  return (
    <>
            <Row>
                <Col span={ 20 }>
                    <Title level={ 2 }>{ userStorage.agent }</Title>
                    <Text>Usted está trabajando en el escritorio: </Text>
                    <Text type="success"> { userStorage.desk } </Text>
                </Col>

                <Col span={ 4 } align="right">
                    <Button
                        shape="round"
                        type="danger"
                        onClick={ close }
                    >
                        <CloseCircleOutlined />
                        Salir
                    </Button>
                </Col>

            </Row>

            <Divider />

            {ticket && (
                <Row>
                <Col>
                    <Text>Está atendiendo el ticket número: </Text>
                    <Text 
                        style={{ fontSize: 30 }} 
                        type="danger"
                    > 
                    { ticket.numero }
                    </Text>
                </Col>
            </Row>
            )}


            <Row>
                <Col offset={ 18 } span={ 6 } align="right">
                    <Button
                        onClick={ nextTicket }
                        shape="round"
                        type="primary"
                    >
                        <RightOutlined />
                        Siguiente
                    </Button>
                </Col>  


            </Row>

        </>
  )
}
