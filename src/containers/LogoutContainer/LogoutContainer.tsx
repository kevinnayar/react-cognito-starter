import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FullScreen from '../../screens/FullScreen/FullScreen';
import { Spin } from 'antd';
import { userAuthLogout } from '../../store/user/userActions';

import { TypeApiXferStatus, TypeAppReducer } from '../../types/baseTypes';

type TypeProps = {
  logoutStatus: TypeApiXferStatus;
  logout: () => void;
};

function LogoutContainer(props: TypeProps) {
  useEffect(() => {
    props.logout();
  });

  return props.logoutStatus.succeeded
    ? <Redirect to="/login" />
    : <FullScreen><Spin /></FullScreen>;
}

function mapStateToProps(state: TypeAppReducer) {
  return {
    logoutStatus: state.user.userAuthLogoutXferStatus,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    logout: () => dispatch(userAuthLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);
