# 🔥 React Cognito Starter 🔥

A bootstrapped starter kit for [React](https://reactjs.org/) and [AWS Cognito](https://aws.amazon.com/cognito/) leveraging [Redux](https://redux.js.org/) and [Typescript](https://www.typescriptlang.org/). Comes packaged with pre-made components for the authentication flow including:
* Login
* Forgot Password
* Forgot Password Submit
* Signup
* Signup Confirmation Code

Styled with [Ant Design](https://ant.design/).



## Getting started

Install dependencies
```
npm install
```

Copy `sample.env` to `.env`
```
cp sample.env .env
```


<br />

_You will need to create 2 User Pools and 2 Identify Pools in the AWS console and update `.env` with your credentials. The 2 polls each for for a production and development version of the app._


Enable Auth for the app (you need the AWS CLI for this)
```
amplify add auth
```



