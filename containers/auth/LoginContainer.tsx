import axios from 'axios';
import Login from '../../components/auth/Login';
import { response } from 'express';

export const checkLoggedInOrLogin = async (
  username: string,
  password: string,
) => {
  try {
    const cookie = document.cookie.split('=');
    if (document.cookie && cookie[0] === 'Authentication') {
      const loggedIn = await axios.get('http://localhost:4000/auth/check', {
        headers: {
          Authorization: cookie[1],
        },
      });

      // return loggedIn.data;
      return true;
    } else if (!document.cookie) {
      if (location.href === '/') {
        const response = await axios.post('http://localhost:4000/auth/login', {
          username,
          password,
        });

        // if (response.status < 200 && response.status >= 300) {
        //   return null;
        // }
        return true;
        document.cookie = `Authentication=${response.data}; Max-Age=${
          60 * 60 * 24 * 2
        }`;
      } else if (!document.cookie && location.href !== '/') {
        // location.href = '/';
      }
    }
  } catch (e) {
    console.error(e);
  }
};

const LoginContainer = () => {
  return <Login login={checkLoggedInOrLogin} />;
};

export default LoginContainer;
