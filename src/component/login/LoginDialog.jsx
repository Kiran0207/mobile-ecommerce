

import { Dialog, Box, TextField, Button, Typography, styled } from '@mui/material';
import { useState } from 'react';
// import { authenticateSignup } from '../../service/api';

const Component = styled(Box)`
  background: #f2f2f2;
  height: 50vh;
  width: 30vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px 35px;
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const SignUpButton = styled(Button)`
  text-transform: none;
  font-weight: 600;
  background: #fff;
  color: #28774f0;
  height: 48px;
  border-radius: 2px;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  font-weight: 600;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const accountInitial = {
  login: {
    view: 'login',
  },
  signup: {
    view: 'signup',
  },
};

const signupIniVal = {
  email: '',
  username: '',
  firstname: '',
  lastname: '',
  phone: '',
  password: '',
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitial.login);
  const [signup, setSignup] = useState(signupIniVal);

  const handleClose = () => {
    toggleAccount(accountInitial.login);
    setOpen(false);
  };

  const changetoSignUp = () => {
    toggleAccount(accountInitial.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const cont = async () => {
    // let response = await authenticateSignup(signup);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      {account.view === 'login' ? (
        <Component>
          <TextField variant="standard" label="Enter Email/Mobile number" />
          <TextField variant="standard" label="Enter Password" />
          <Typography>By continuing, you agree to our Terms of Use and Privacy Policy.</Typography>
          <LoginButton>Login</LoginButton>
          <Typography style={{ textAlign: 'center' }}>New here? Create an account</Typography>
          <SignUpButton onClick={changetoSignUp}>Sign Up</SignUpButton>
        </Component>
      ) : (
        <Component>
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter Username" />
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname" />
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname" />
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone" />
          <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
          <LoginButton onClick={cont}>Continue</LoginButton>
        </Component>
      )}
    </Dialog>
  );
};

export default LoginDialog;
