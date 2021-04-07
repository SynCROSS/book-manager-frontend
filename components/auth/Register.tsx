import { useState } from 'react';
import styled from 'styled-components';
import { Button, Writing, WritingLink } from './Login';

const RegisterBlock = styled.div`
  text-align: left;
`;

export const ErrorMessage = styled.p`
  color: #ff2450;
  font-size: 14px;
  margin: 0;
`;

const ErrorList = styled.ul`
  color: #ff2450;
  font-size: 14px;
  margin: 0;
`;

const Register = ({ register, isThereSameUser }) => {
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [sameUser, setSameUser] = useState(false);

  const isValidPassword = (password: string, confirm_password: string) => {
    if (password !== confirm_password) return false;
    else if (password === confirm_password) return true;
  };

  return (
    <div className="main-content flex jc-center ai-center flex-dir-col">
      <RegisterBlock className="flex jc-center flex-dir-col">
        Username{' '}
        <input
          type="text"
          id="username"
          placeholder="Username"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('register_btn').click();
            else setUsername(document.getElementById('username').value ?? '');
          }}
        />
        Nickname{' '}
        <input
          type="text"
          id="nickname"
          placeholder="Nickname"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('register_btn').click();
            else setNickname(document.getElementById('nickname').value ?? '');
          }}
        />
        Password{' '}
        <input
          type="password"
          id="password"
          placeholder="Password"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('register_btn').click();
            else setPassword(document.getElementById('password').value ?? '');
          }}
        />
        Confirm Password{' '}
        <input
          type="password"
          id="confirm_password"
          placeholder="Confirm Password"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('register_btn').click();
            else
              setConfirmPassword(
                document.getElementById('confirm_password').value ?? '',
              );
          }}
        />
        <Button
          onClick={() => {
            isThereSameUser('test').then(result =>
              setSameUser(result ?? false),
            );

            if (
              isValidPassword(password, confirm_password) &&
              !!password &&
              !!username &&
              !sameUser &&
              !!nickname
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
        <div style={{ textAlign: 'center' }}>
          <ErrorMessage
            style={!username ? { display: 'block' } : { display: 'none' }}
          >
            Username must be Required!
          </ErrorMessage>
          <ErrorMessage
            style={sameUser ? { display: 'block' } : { display: 'none' }}
          >
            Username is Taken!
          </ErrorMessage>
          <ErrorMessage
            style={!nickname ? { display: 'block' } : { display: 'none' }}
          >
            Nickname must be Required!
          </ErrorMessage>
          <ErrorMessage
            style={!password ? { display: 'block' } : { display: 'none' }}
          >
            Password must be Required!
          </ErrorMessage>
          <ErrorMessage
            style={
              !isValidPassword(password, confirm_password)
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            Password does not match!
          </ErrorMessage>
          <ErrorList
            style={
              !password.match(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{10,}$/,
              )
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            Check the password rules below.
            <li>More Than 10 Chars</li>
            <li>Must Contain at Least 1 Number</li>
            <li>Must Contain at Least 1 Special Char</li>
          </ErrorList>
        </div>
      </RegisterBlock>
    </div>
  );
};

export default Register;
