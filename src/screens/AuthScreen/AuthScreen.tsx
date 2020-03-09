import * as React from 'react';
import { Layout, Row, Col } from 'antd';
import Logo from '../../components/Logo/Logo';

type TypeProps = {
  children: any,
};

const AuthScreen = React.memo((props: TypeProps) => {
  return (
    <Layout style={{ height: '100vh', justifyContent: 'center', background: '#333' }}>
      <Row type="flex" justify="center" align="middle">
        <Col style={{ width: 344 }}>
          <Logo isLink={false} style={{ marginBottom: 32 }} />
          <Row style={{ background: '#f0f2f5', padding: '12px 32px 22px', borderRadius: '4px' }}>
            {props.children}
          </Row>
        </Col>
      </Row>
    </Layout>
  );
});

export default AuthScreen;

