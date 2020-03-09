export type TypeUserCredentials = {
  email: string;
  password: string;
};

export type TypeUserSignupInfo = TypeUserCredentials & {
  firstName: string;
  lastName: string;
};

export type TypeUserConfirmSignupInfo = {
  username: string;
  code: string;
};

export type TypeUserForgotPasswordSubmit = {
  username: string;
  code: string;
  password: string;
};