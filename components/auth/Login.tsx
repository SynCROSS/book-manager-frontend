import { useState } from 'react';
import styled from 'styled-components';
import { ErrorMessage } from './Register';

const LoginBlock = styled.div`
  text-align: left;
`;

export const Button = styled.button`
  width: 100%;
  margin: 0.5rem auto;
  padding: 0.2rem 0;
  cursor: pointer;

  font-size: 16px;
  background-color: #1877f2;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #2080ff;
  }
`;

export const Writing = styled.p`
  font-size: 14px;
  margin: auto;
`;

export const WritingLink = styled.a`
  color: cornflowerblue;
`;

const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="main-content flex jc-center flex-dir-col">
      <LoginBlock className="flex flex-dir-col">
        Username
        <input
          type="text"
          id="username"
          placeholder="Username"
          onKeyUp={e => {
            if (e.key === 'Enter' && !!username && !!password)
              document.getElementById('login_btn').click();
            else setUsername(document.getElementById('username').value);
          }}
        />
        Password
        <input
          type="password"
          id="password"
          placeholder="Password"
          onKeyUp={e => {
            if (e.key === 'Enter' && !!username && !!password)
              document.getElementById('login_btn').click();
            else setPassword(document.getElementById('password').value);
          }}
        />
        <Button id="login_btn" onClick={() => login(username, password)}>
          Login
        </Button>
        <Writing>
          If You have No Account.{' '}
          <WritingLink href="/Register">Create One</WritingLink>
        </Writing>
        <div style={{ textAlign: 'center' }}>
          <ErrorMessage
            style={!username ? { display: 'block' } : { display: 'none' }}
          >
            Username is Required!
          </ErrorMessage>
          <ErrorMessage
            style={!password ? { display: 'block' } : { display: 'none' }}
          >
            Password is Required!
          </ErrorMessage>
        </div>
      </LoginBlock>
    </div>
  );
};

export default Login;
