import { useState } from 'react';
import styled from 'styled-components';
import { Button, Writing, WritingLink } from './Login';

const RegisterBlock = styled.div`
  text-align: left;
`;

const ErrorMessage = styled.p`
  color: #ff2450;
  font-size: 14px;
`;

const Register = ({ register }) => {
  const [err, setErr] = useState(false);

  const isValidPassword = (password: string, confirm_password: string) => {
    if (password !== confirm_password) {
      setErr(true);
    } else if (password === confirm_password) {
      setErr(false);
    }
    return !err;
  };

  return (
    <div style={{ margin: 'auto' }}>
      <RegisterBlock className="flex flex-dir-col">
        Username <input type="text" id="username" placeholder="Username" />
        Nickname <input type="text" id="nickname" placeholder="Nickname" />
        Password <input type="password" id="password" placeholder="Password" />
        Confirm Password{' '}
        <input
          type="password"
          id="confirm_password"
          placeholder="Confirm Password"
        />
        <Button
          onClick={() => {
            const username = document.getElementById('username').value;
            const nickname = document.getElementById('nickname').value;
            const password = document.getElementById('password').value ?? '';
            const confirm_password =
              document.getElementById('confirm_password').value ?? '';

            if (
              isValidPassword(password, confirm_password) &&
              (username ?? false) &&
              (nickname ?? false)
            ) {
              register(username, nickname, password);
            }
          }}
        >
          Sign Up!
        </Button>
      </RegisterBlock>
      <Writing>
        If You already had an Account?{' '}
        <WritingLink href="http://localhost:3000/">Log In</WritingLink>
      </Writing>
      <ErrorMessage
        style={err ? { visibility: 'visible' } : { visibility: 'hidden' }}
      >
        Password does not match!
      </ErrorMessage>
    </div>
  );
};

export default Register;
