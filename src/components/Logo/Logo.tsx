import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

const image = require('../../assets/images/favicons/android-chrome-192x192.png');

const { Title } = Typography;

type TypeLinkProps = {
  children: any;
  isLink: boolean;
  linkPath?: string;
}

const ConditionalLink = React.memo((props: TypeLinkProps) => {
  return props.isLink ? <Link to={props.linkPath || '/home'}>{props.children}</Link> : <>{props.children}</>;
});

type TypeProps = {
  collapsed?: boolean;
  style?: React.CSSProperties;
  isLink?: boolean;
  linkPath?: string;
};

const Logo = React.memo((props: TypeProps) => {
  const collapsed: boolean = props.collapsed || false;

  const stylesBg = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    ...props.style,
  };

  const stylesFg = {
    display: 'flex',
    justifyContent: !collapsed ? 'flex-start' : 'center',
    width: !collapsed ? 150 : 60,
    height: 40,
    margin: `12px ${!collapsed ? 25 : 10}px`,
  };

  const blue = '#1890ff';
  const fontFamily = `Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji'`;

  return (
    <div className="logo" style={stylesBg}>
      <ConditionalLink 
        isLink={props.isLink !== undefined ? props.isLink : true}
        linkPath={props.linkPath}
      >
        <div style={stylesFg}>
          <img
            src={image}
            alt="BrandName-logo"
            style={{
              width: 36,
              height: 36,
              marginTop: !collapsed ? 0 : 2,
            }}
          />
          <Title
            level={2}
            style={{
              color: blue,
              marginLeft: 12,
              fontFamily,
              display: !collapsed ? 'flex' : 'none',
            }}
          >
            brand
          </Title>
        </div>
      </ConditionalLink>
    </div>
  );
});

export default Logo;
