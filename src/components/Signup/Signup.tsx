import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Typography, Row, Form, Button, Checkbox } from 'antd';
import { getRegExEmail, getRegExPassword } from '../../utils/stringUtils';
import { TypeApiXferStatus } from '../../types/baseTypes';
import { TypeUserState } from '../../types/reducerUserTypes';
import { TypeUserSignupInfo, TypeUserConfirmSignupInfo } from '../../types/userTypes';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const { Text } = Typography;

type TypeSignupFormProps = {
  signupStatus: TypeApiXferStatus;
  signup: (signupInfo: TypeUserSignupInfo) => void;
};

const SignupForm = React.memo((props: TypeSignupFormProps) => {
  const [showAcceptedTermsError, setShowAcceptedTermsError] = useState(false);
  const handleTermsAcceptanceChange = (e: CheckboxChangeEvent) => {
    setShowAcceptedTermsError(e.target.checked === false);
  };

  const { register, errors, handleSubmit } = useForm<TypeUserSignupInfo>();
  const onSubmit = (signupInfo: TypeUserSignupInfo) => {
    props.signup(signupInfo);
  };

  return (
    <Form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Item className={props.signupStatus.error ? 'has-error' : ''}>
        {props.signupStatus.error && (
          <div className="ant-form-explain" style={{ textAlign: 'center' }}>
            {props.signupStatus.error}
          </div>
        )}
      </Form.Item>

      <Form.Item className={errors.firstName ? 'has-error' : ''}>
        <input
          className="ant-input ant-input-lg"
          type="text"
          name="firstName"
          placeholder="Abraham"
          ref={register({
            required: 'First name is a required.',
          })}
        />
        {errors.firstName && <div className="ant-form-explain">{errors.firstName.message}</div>}
      </Form.Item>

      <Form.Item className={errors.lastName ? 'has-error' : ''}>
        <input
          className="ant-input ant-input-lg"
          type="text"
          name="lastName"
          placeholder="Lincoln"
          ref={register({
            required: 'Last name is a required.',
          })}
        />
        {errors.lastName && <div className="ant-form-explain">{errors.lastName.message}</div>}
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

      <Form.Item className={showAcceptedTermsError ? 'has-error' : ''}>
        <Checkbox onChange={handleTermsAcceptanceChange}>
          I accept the{' '}
          <Link to="/terms-and-conditions" target="_blank">
            terms and conditions
          </Link>
        </Checkbox>

        {showAcceptedTermsError && (
          <div className="ant-form-explain">
            You must accept the terms and conditions in order to create an account.
          </div>
        )}
      </Form.Item>

      <Form.Item>
        <Button size="large" block type="primary" htmlType="submit" className="signup-form-button">
          Signup
        </Button>
      </Form.Item>
    </Form>
  );
});

type TypeConfirmSignupFormProps = {
  confirmSignupStatus: TypeApiXferStatus;
  confirmSignup: (confirmSignupInfo: TypeUserConfirmSignupInfo) => void;
};

const ConfirmSignupForm = React.memo((props: TypeConfirmSignupFormProps) => {
  const { register, errors, handleSubmit } = useForm<TypeUserConfirmSignupInfo>();
  const onSubmit = (confirmSignupInfo: TypeUserConfirmSignupInfo) => {
    props.confirmSignup(confirmSignupInfo);
  };

  return (
    <Form className="confirm-signup-form" onSubmit={handleSubmit(onSubmit)}>
      <Row type="flex" justify="center" style={{ marginBottom: 12 }}>
        <Text>We just sent a confirmation code to your email.</Text>
      </Row>
      <Form.Item className={props.confirmSignupStatus.error ? 'has-error' : ''}>
        {props.confirmSignupStatus.error && (
          <div className="ant-form-explain" style={{ textAlign: 'center' }}>
            {props.confirmSignupStatus.error}
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
          type="text"
          name="code"
          placeholder="123456"
          ref={register({
            required: 'Confirmation code is a required.',
          })}
        />
        {errors.code && <div className="ant-form-explain">{errors.code.message}</div>}
      </Form.Item>
      <Form.Item>
        <Button size="large" block type="primary" htmlType="submit" className="confirm-signup-form-button">
          Confirm
        </Button>
      </Form.Item>
    </Form>
  );
});

type TypeSignupProps = {
  signupStatus: TypeApiXferStatus;
  confirmSignupStatus: TypeApiXferStatus;
  userState: TypeUserState,
  signup: (userSignupInfo: TypeUserSignupInfo) => void;
  confirmSignup: (userConfirmSignupInfo: TypeUserConfirmSignupInfo) => void;
};

type TypeViewStates = 'SIGNUP' | 'CONFIRM';

const Signup = React.memo((props: TypeSignupProps) => {
  const [viewState, setViewState] = useState<TypeViewStates>('SIGNUP');

  useEffect(() => {
    if (props.userState.userGuid && !props.userState.confirmed) {
      setViewState('CONFIRM');
    }
  }, [props.userState]);

  switch (viewState) {
    case 'SIGNUP':
      return <SignupForm signup={props.signup} signupStatus={props.signupStatus} />;
    case 'CONFIRM':
      return <ConfirmSignupForm confirmSignup={props.confirmSignup} confirmSignupStatus={props.confirmSignupStatus} />
    default: return null;
  }
});

export default Signup;

