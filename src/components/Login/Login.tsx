import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import { Row, Form, Button } from 'antd';
import { getRegExEmail, getRegExPassword } from '../../utils/stringUtils';
import { TypeApiXferStatus } from '../../types/baseTypes';
import { TypeUserState } from '../../types/reducerUserTypes';
import { TypeUserCredentials, TypeUserForgotPasswordSubmit } from '../../types/userTypes';

type TypeViewStates = 'LOGIN' | 'FORGOT_PASSWORD' | 'FORGOT_PASSWORD_SUBMIT';

type TypeLoginFormProps = {
  loginStatus: TypeApiXferStatus;
  login: (userCredentials: TypeUserCredentials) => void;
  setViewState: (viewState: TypeViewStates) => void;
};

const LoginForm = React.memo((props: TypeLoginFormProps) => {
  const { register, errors, handleSubmit } = useForm<TypeUserCredentials>();
  const onSubmit = (credentials: TypeUserCredentials) => {
    props.login(credentials);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Item className={props.loginStatus.error ? 'has-error' : ''}>
        {props.loginStatus.error && (
          <div className="ant-form-explain" style={{ textAlign: 'center' }}>
            {props.loginStatus.error}
          </div>
        )}
      </Form.Item>
      <Form.Item className={errors.email ? 'has-error' : ''}>
        <input
          className="ant-input ant-input-lg"
          placeholder="abe.lincoln@us.gov"
          type="text"
          name="email"
          ref={register({
            required: 'Email is a required.',
            pattern: {
              value: getRegExEmail(),
              message: 'Invalid email address.',
            },
          })}
        />
        {errors.email && <div className="ant-form-explain">{errors.email.message}</div>}
      </Form.Item>
      <Form.Item className={errors.password ? 'has-error' : ''}>
        <input
          className="ant-input ant-input-lg"
          type="password"
          name="password"
          placeholder="password"
          ref={register({
            required: 'Password is a required.',
            pattern: {
              value: getRegExPassword(),
              message:
                'Password must be more than 6 characters and contain at least one uppercase letter, one number, and one special character.',
            },
          })}
        />
        {errors.password && <div className="ant-form-explain">{errors.password.message}</div>}
      </Form.Item>
      <Form.Item>
        <Button size="large" block type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      <Row type="flex" justify="center">
        <div onClick={() => props.setViewState('FORGOT_PASSWORD')}>
          <Link to="" onClick={e => e.preventDefault()}>Forgot password?</Link>
        </div>
      </Row>
    </Form>
  );
});

type TypeForgotPasswordProps = {
  forgotPasswordStatus: TypeApiXferStatus;
  forgotPassword: (email: string) => void;
  setViewState: (viewState: TypeViewStates) => void;
}

const ForgotPassword = React.memo((props: TypeForgotPasswordProps) => {
  const { register, errors, handleSubmit } = useForm<{email: string}>();
  const onSubmit = (forgotPassword: { email: string }) => {
    props.forgotPassword(forgotPassword.email);
  };
  useEffect(() => {
    if (props.forgotPasswordStatus.succeeded) {
      props.setViewState('FORGOT_PASSWORD_SUBMIT');
    }
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Item className={props.forgotPasswordStatus.error ? 'has-error' : ''}>
        {props.forgotPasswordStatus.error && (
          <div className="ant-form-explain" style={{ textAlign: 'center' }}>
            {props.forgotPasswordStatus.error}
          </div>
        )}
      </Form.Item>
      <Form.Item className={errors.email ? 'has-error' : ''}>
        <input
          className="ant-input ant-input-lg"
          placeholder="abe.lincoln@us.gov"
          type="text"
          name="email"
          ref={register({
            required: 'Email is a required.',
            pattern: {
              value: getRegExEmail(),
              message: 'Invalid email address.',
            },
          })}
        />
        {errors.email && <div className="ant-form-explain">{errors.email.message}</div>}
      </Form.Item>
      <Form.Item>
        <Button size="large" block type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Row type="flex" justify="center">
        <div onClick={() => props.setViewState('LOGIN')}>
          <Link to="" onClick={e => e.preventDefault()}>
            Go back to login
          </Link>
        </div>
      </Row>
    </Form>
  );
});

type TypeForgotPasswordSubmitProps = {
  forgotPasswordSubmitStatus: TypeApiXferStatus;
  forgotPasswordSubmit: (userForgotPasswordSubmit: TypeUserForgotPasswordSubmit) => void;
  setViewState: (viewState: TypeViewStates) => void;
}

const ForgotPasswordSubmit = React.memo((props: TypeForgotPasswordSubmitProps) => {
  const { register, errors, handleSubmit } = useForm<TypeUserForgotPasswordSubmit>();
  const onSubmit = (forgotPasswordSubmit: TypeUserForgotPasswordSubmit) => {
    props.forgotPasswordSubmit(forgotPasswordSubmit);
  };

  useEffect(() => {
    if (props.forgotPasswordSubmitStatus.succeeded) {
      props.setViewState('LOGIN');
    }
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Item className={props.forgotPasswordSubmitStatus.error ? 'has-error' : ''}>
        {props.forgotPasswordSubmitStatus.error && (
          <div className="ant-form-explain" style={{ textAlign: 'center' }}>
            {props.forgotPasswordSubmitStatus.error}
          </div>
        )}
      </Form.Item>
      <Form.Item className={errors.username ? 'has-error' : ''}>
        <input
          className="ant-input ant-input-lg"
          placeholder="abe.lincoln@us.gov"
          type="text"
          name="username"
          ref={register({
            required: 'Email is a required.',
            pattern: {
              value: getRegExEmail(),
              message: 'Invalid email address.',
            },
          })}
        />
        {errors.username && <div className="ant-form-explain">{errors.username.message}</div>}
      </Form.Item>
      <Form.Item className={errors.code ? 'has-error' : ''}>
        <input
          className="ant-input ant-input-lg"
          placeholder="12345"
          type="text"
          name="code"
          ref={register({
            required: 'Code is a required.',
          })}
        />
        {errors.code && <div className="ant-form-explain">{errors.code.message}</div>}
      </Form.Item>
      <Form.Item className={errors.password ? 'has-error' : ''}>
        <input
          className="ant-input ant-input-lg"
          placeholder="password"
          type="password"
          name="password"
          ref={register({
            required: 'Password is a required.',
            pattern: {
              value: getRegExPassword(),
              message:
                'Password must be more than 6 characters and contain at least one uppercase letter, one number, and one special character.',
            },
          })}
        />
        {errors.password && <div className="ant-form-explain">{errors.password.message}</div>}
      </Form.Item>
      <Form.Item>
        <Button size="large" block type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Row type="flex" justify="center">
        <div onClick={() => props.setViewState('LOGIN')}>
          <Link to="" onClick={e => e.preventDefault()}>
            Go back to login
          </Link>
        </div>
      </Row>
    </Form>
  );
});

type TypeLoginProps = {
  userState: TypeUserState;
  redirectPath: string;
  loginStatus: TypeApiXferStatus;
  logoutStatus: TypeApiXferStatus;
  forgotPasswordStatus: TypeApiXferStatus;
  forgotPasswordSubmitStatus: TypeApiXferStatus;
  login: (userCredentials: TypeUserCredentials) => void;
  logout: () => void;
  forgotPassword: (username: string) => void;
  forgotPasswordSubmit: (userForgotPasswordSubmit: TypeUserForgotPasswordSubmit) => void;
};

const Login = React.memo((props: TypeLoginProps) => {
  if (props.userState.authenticated) return <Redirect to={props.redirectPath} />;

  const [viewState, setViewState] = useState<TypeViewStates>('LOGIN');

  switch (viewState) {
    case 'LOGIN': {
      return (
        <LoginForm
          login={props.login}
          loginStatus={props.loginStatus}
          setViewState={setViewState}
        />
      );
    }
    case 'FORGOT_PASSWORD': {
      return (
        <ForgotPassword
          forgotPassword={props.forgotPassword}
          forgotPasswordStatus={props.forgotPasswordStatus}
          setViewState={setViewState}
        />
      );
    }
    case 'FORGOT_PASSWORD_SUBMIT': {
      return (
        <ForgotPasswordSubmit
          forgotPasswordSubmit={props.forgotPasswordSubmit}
          forgotPasswordSubmitStatus={props.forgotPasswordSubmitStatus}
          setViewState={setViewState}
        />
      );
    }
    default:
      return null;
  }
});

export default Login;
