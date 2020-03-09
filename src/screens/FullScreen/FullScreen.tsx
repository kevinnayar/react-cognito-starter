import * as React from 'react';
import { Layout } from 'antd';

type TypeProps = {
  children?: any;
};

const FullScreen = React.memo((props: TypeProps) => {
  return (
    <Layout 
      style={{
        position: 'absolute',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.children}
    </Layout>
  );
});

export default FullScreen;
