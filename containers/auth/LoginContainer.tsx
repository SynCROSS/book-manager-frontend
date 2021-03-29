import axios from 'axios';
import Login from '../../components/auth/Login';

const LoginContainer = () => {
  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:4000/auth/login', {
        username,
        password,
      });
      // if (response.status < 200 && response.status >= 300) {
      //   // location.href = '/';
      // }
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Login login={login} />
    </>
  );
};

export default LoginContainer;
