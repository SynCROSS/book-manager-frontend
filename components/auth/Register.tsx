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
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const isValidPassword = (password: string, confirm_password: string) => {
    if (password !== confirm_password) {
      () => setErr(true);
    } else if (password === confirm_password) {
      () => setErr(false);
    }
    return !err;
  };

  return (
    <div className="main-content flex jc-center ai-center flex-dir-col">
      <RegisterBlock className="flex jc-center flex-dir-col">
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
            setUsername(document.getElementById('username').value ?? '');
            setNickname(document.getElementById('nickname').value ?? '');
            setPassword(document.getElementById('password').value ?? '');
            setConfirmPassword(
              document.getElementById('confirm_password').value ?? '',
            );

            if (
              isValidPassword(password, confirm_password) &&
              username &&
              nickname
            ) {
              register(username, nickname, password);
            }
          }}
        >
          Sign Up!
        </Button>
        <Writing>
          If You already had an Account?{' '}
          <WritingLink href="/">Log In</WritingLink>
        </Writing>
        <ErrorMessage
          style={err ? { visibility: 'visible' } : { visibility: 'hidden' }}
        >
          {isValidPassword(password, confirm_password)
            ? 'Password does not match!'
            : ''}
          <br />
          {!username ? 'Username must be Required!' : ''}
          <br />
          {!nickname ? 'Nickname must be Required!' : ''}
        </ErrorMessage>
      </RegisterBlock>
    </div>
  );
};

export default Register;
