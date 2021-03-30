import styled from 'styled-components';

const LoginBlock = styled.div`
  text-align: left;
`;

const LoginButton = styled.button`
  width: 100%;
  margin: 0.5rem auto;
  padding: 0.2rem 0;
  cursor: pointer;

  font-size: 16px;
  background-color: cornflowerblue;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
`;

const RegisterWriting = styled.p`
  font-size: 14px;
  margin: auto;
`;
const RegisterLink = styled.a`
  color: cornflowerblue;
`;

const Login = ({ login }) => {
  return (
    <div style={{ margin: 'auto' }}>
      <LoginBlock className="flex flex-dir-col">
        Username
        <input type="text" id="username" placeholder="Username" />
        Password
        <input type="password" id="password" placeholder="Password" />
        <LoginButton
          onClick={() =>
            login(
              document.getElementById('username').value,
              document.getElementById('password').value,
            )
          }
        >
          Login
        </LoginButton>
      </LoginBlock>
      <RegisterWriting>
        If You Have No Account.{' '}
        <RegisterLink href="/Register">Create One</RegisterLink>
      </RegisterWriting>
    </div>
  );
};

export default Login;
