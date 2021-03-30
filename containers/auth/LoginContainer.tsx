import axios from 'axios';
import Login from '../../components/auth/Login';

const LoginContainer = () => {
  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:4000/auth/login', {
        username,
        password,
      });
      if (response.status < 200 && response.status >= 300) {
        return null;
      }
      document.cookie = `Authentication=${response.data}; Max-Age=${
        60 * 60 * 1000 * 24 * 2
      }`;
      console.log(JSON.parse(response.config.data).username);
    } catch (e) {
      console.error(e);
    }
  };

  return <Login login={login} />;
};

export default LoginContainer;
