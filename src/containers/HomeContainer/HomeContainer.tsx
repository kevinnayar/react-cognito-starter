import * as React from 'react';
import { connect } from 'react-redux';
import PrivateScreen from '../../screens/PrivateScreen/PrivateScreen';
import { Typography } from 'antd';
import { TypeAppReducer } from '../../types/baseTypes';
import { TypeUserState } from '../../types/reducerUserTypes';

const { Title, Text } = Typography;

type TypeProps = {
  userState: TypeUserState,
};

function HomeContainer(props: TypeProps) {
  return (
    <PrivateScreen>
      <Title level={2}>Welcome {props.userState.email}!</Title>
      <Text>User Guid: {props.userState.userGuid}</Text>
    </PrivateScreen>
  );
}

function mapStateToProps(state: TypeAppReducer) {
  return {
    userState: state.user.userState,
  };
}

export default connect(mapStateToProps, null)(HomeContainer);
