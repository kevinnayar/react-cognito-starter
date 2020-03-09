import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { userAuthCheck } from '../../store/user/userActions';

import { TypeAppReducer, TypeApiXferStatus } from '../../types/baseTypes';
import { TypeUserState } from '../../types/reducerUserTypes';

type TypePrivateRoutesProps = {
  authCheckStatus: TypeApiXferStatus,
  userState: TypeUserState;
  allowedPaths: string[];
  redirectPath: string;
  children: any;
  verifyAuth: () => void;
};

function PrivateRoutes(props: TypePrivateRoutesProps) {
  useEffect(() => {
    if (!props.userState.authenticated && !props.authCheckStatus.failed) {
      props.verifyAuth();
    }
  }, [props.userState]);

  return props.userState.authenticated || props.allowedPaths.includes(props.redirectPath) ? (
    props.children
  ) : (
    <Redirect to={{ pathname: '/auth', state: { from: props.redirectPath } }} />
  );
}

function mapStateToProps(state: TypeAppReducer) {
  return {
    authCheckStatus: state.user.userAuthCheckXferStatus,
    userState: state.user.userState,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    verifyAuth: () => dispatch(userAuthCheck()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);