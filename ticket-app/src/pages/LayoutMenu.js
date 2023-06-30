import React, { useContext } from 'react'
import { Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { UiContext } from '../context/UiContext';
const { Sider, Content } = Layout;

export const LayoutMenu = () => {

  const { actionMenu } = useContext( UiContext )

    const {
        token: { colorBgContainer },
      } = theme.useToken();

  return (
    <Layout>
      <Sider 
        hidden={ actionMenu } 
        style={{ height: '100vh'}}
        collapsedWidth={0}
        breakpoint='md'
        >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
            //   icon: <UserOutlined />,
              label: (<CustomLink to="/">Ingresar</CustomLink>),
            },
            {
              key: '2',
            //   icon: <VideoCameraOutlined />,
              label: (<CustomLink to="/cola">En Cola</CustomLink>),
            },
            {
              key: '3',
            //   icon: <UploadOutlined />,
              label: (<CustomLink to="/crear">Crear</CustomLink>),
            },
            {
                key: '4',
              //   icon: <UploadOutlined />,
                label: (<CustomLink to="/escritorio">Escritorio</CustomLink>),
              },
          ]}
        />
      </Sider>
      <Layout>
        
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

const CustomLink = ({ children, to, ...props }) => {
  
    return (
      <div>
        <Link
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }