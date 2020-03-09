import * as React from 'react';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router';
import { Tabs, Icon } from 'antd';
import AuthScreen from '../../screens/AuthScreen/AuthScreen';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import {
  userAuthLogin,
  userAuthLogout,
  userAuthSignup,
  userAuthConfirmSignup,
  userAuthForgotPassword,
  userAuthForgotPasswordSubmit,
} from '../../store/user/userActions';

import { TypeApiXferStatus, TypeAppReducer } from '../../types/baseTypes';
import { TypeUserState } from '../../types/reducerUserTypes';
import {
  TypeUserCredentials,
  TypeUserSignupInfo,
  TypeUserConfirmSignupInfo,
  TypeUserForgotPasswordSubmit,
} from '../../types/userTypes';

const { TabPane } = Tabs;

type TypeProps = RouteProps & {
  redirectPath: void | string;
  loginStatus: TypeApiXferStatus;
  logoutStatus: TypeApiXferStatus;
  signupStatus: TypeApiXferStatus;
  confirmSignupStatus: TypeApiXferStatus;
  forgotPasswordStatus: TypeApiXferStatus;
  forgotPasswordSubmitStatus: TypeApiXferStatus;
  userState: TypeUserState,
  login: (userCredentials: TypeUserCredentials) => void;
  logout: () => void;
  signup: (userSignupInfo: TypeUserSignupInfo) => void;
  confirmSignup: (userConfirmSignupInfo: TypeUserConfirmSignupInfo) => void;
  forgotPassword: (username: string) => void;
  forgotPasswordSubmit: (userForgotPasswordSubmit: TypeUserForgotPasswordSubmit) => void;
};

function AuthContainer(props: TypeProps) {
  const locationState: { from?: string } = props.location?.state ?? { from: '/app' };
  const redirectPath: string =
    locationState.from === undefined ||
    locationState.from !== undefined && (locationState.from === '/auth' || locationState.from === '/')
      ? '/app'
      : locationState.from;

  return (
    <AuthScreen>
      <Tabs defaultActiveKey="login">
        <TabPane
          tab={
            <span>
              <Icon type="lock" />
              Login
            </span>
          }
          key="login"
        >
          <Login
            redirectPath={redirectPath}
            userState={props.userState}
            loginStatus={props.loginStatus}
            logoutStatus={props.logoutStatus}
            forgotPasswordStatus={props.forgotPasswordStatus}
            forgotPasswordSubmitStatus={props.forgotPasswordSubmitStatus}
            login={props.login}
            logout={props.logout}
            forgotPassword={props.forgotPassword}
            forgotPasswordSubmit={props.forgotPasswordSubmit}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="user-add" />
              Signup
            </span>
          }
          key="signup"
        >
          <Signup
            signupStatus={props.signupStatus}
            confirmSignupStatus={props.confirmSignupStatus}
            userState={props.userState}
            signup={props.signup}
            confirmSignup={props.confirmSignup}
          />
        </TabPane>
      </Tabs>
    </AuthScreen>
  );
}

function mapStateToProps(state: TypeAppReducer) {
  return {
    loginStatus: state.user.userAuthLoginXferStatus,
    logoutStatus: state.user.userAuthLogoutXferStatus,
    signupStatus: state.user.userAuthSignupXferStatus,
    confirmSignupStatus: state.user.userAuthConfirmSignupXferStatus,
    forgotPasswordStatus: state.user.userAuthForgotPasswordStatus,
    forgotPasswordSubmitStatus: state.user.userAuthForgotPasswordSubmitStatus,
    userState: state.user.userState,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    login: (userCredentials: TypeUserCredentials) => {
      dispatch(userAuthLogin(userCredentials));
    },
    logout: () => {
      dispatch(userAuthLogout());
    },
    signup: (userSignupInfo: TypeUserSignupInfo) => {
      dispatch(userAuthSignup(userSignupInfo));
    },
    confirmSignup: (userConfirmSignupInfo: TypeUserConfirmSignupInfo) => {
      dispatch(userAuthConfirmSignup(userConfirmSignupInfo));
    },
    forgotPassword: (username: string) => {
      dispatch(userAuthForgotPassword(username));
    },
    forgotPasswordSubmit: (userForgotPassword: TypeUserForgotPasswordSubmit) => {
      dispatch(userAuthForgotPasswordSubmit(userForgotPassword));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
