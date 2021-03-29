import styled from 'styled-components';

const LoginBlock = styled.div``;

const Login = ({ login }) => {
  return (
    <LoginBlock>
      Username
      <input type="text" id="username" placeholder="Username" />
      Password
      <input type="password" id="password" placeholder="Password" />
      <button
        onClick={() =>
          login(
            document.getElementById('username').value,
            document.getElementById('password').value,
          )
        }
      >
        Login
      </button>
    </LoginBlock>
  );
};

export default Login;
