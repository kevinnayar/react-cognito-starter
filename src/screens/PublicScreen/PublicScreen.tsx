import * as React from 'react';
import { Layout, Row, Col } from 'antd';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';

const { Header, Content } = Layout;

type TypeProps = {
  children?: any;
};

const PublicScreen = React.memo((props: TypeProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: '0 16px' }}>
        <Row type="flex">
          <Col span={4}>
            <Logo linkPath="/auth" />
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

      <Footer />
    </Layout>
  );
});

export default PublicScreen;

