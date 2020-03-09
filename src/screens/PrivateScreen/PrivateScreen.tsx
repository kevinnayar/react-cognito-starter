import * as React from 'react';
import { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import Logo from '../../components/Logo/Logo';
import PrimaryNav from '../../components/PrimaryNav/PrimaryNav';
import SecondaryNav from '../../components/SecondaryNav/SecondaryNav';

const { Sider, Header, Content, Footer } = Layout;

type TypeProps = {
  children?: any;
};

const PrivateScreen = React.memo((props: TypeProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const year: number = new Date().getFullYear();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Logo collapsed={collapsed} />
        <PrimaryNav />
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', padding: '0 16px' }}>
          <Row type="flex" justify="end">
            <Col span={4}>
              <SecondaryNav />
            </Col>
          </Row>
        </Header>

        <Content
          style={{
            margin: '24px 32px 128px',
            padding: '24px 32px 32px',
            background: 'white',
            borderRadius: 4,
          }}
        >
          {props.children}
        </Content>

        <Footer style={{ textAlign: 'center' }}>BrandName &copy; {year}</Footer>
      </Layout>
    </Layout>
  );
});

export default PrivateScreen;

