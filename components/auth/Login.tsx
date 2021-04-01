import styled from 'styled-components';

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
  return (
    <div className="main-content flex jc-center flex-dir-col">
      <LoginBlock className="flex flex-dir-col">
        Username
        <input type="text" id="username" placeholder="Username" />
        Password
        <input type="password" id="password" placeholder="Password" />
        <Button
          onClick={() =>
            login(
              document.getElementById('username').value,
              document.getElementById('password').value,
            )
          }
        >
          Login
        </Button>
        <Writing>
          If You have No Account.{' '}
          <WritingLink href="/Register">Create One</WritingLink>
        </Writing>
      </LoginBlock>
    </div>
  );
};

export default Login;
