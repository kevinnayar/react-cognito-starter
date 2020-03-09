import * as React from 'react';
import { Layout } from 'antd';

const Footer = React.memo(() => {
  const year: number = new Date().getFullYear();
  return <Layout.Footer style={{ textAlign: 'center' }}>BrandName &copy; {year}</Layout.Footer>;
});

export default Footer;
