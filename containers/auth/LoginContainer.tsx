import axios from 'axios';
import Login from '../../components/auth/Login';

export const checkLoggedInOrLogin = async (
  username: string,
  password: string,
) => {
  try {
    const cookie = document.cookie
      ?.split(';')
      .find(
        c =>
          c.split('=')[0].substr(0, 'Authentication'.length) ===
          'Authentication',
      );
    if (document.cookie && !!cookie) {
      const loggedIn = await axios.get('http://localhost:4000/auth/check', {
        headers: {
          Authorization: cookie.split('=')[1],
        },
      });

      return loggedIn.data;
    } else if (!document.cookie) {
      if (location.href === 'http://localhost:3000/') {
        const response = await axios.post('http://localhost:4000/auth/login', {
          username,
          password,
        });

        if (response.status < 200 && response.status >= 300) {
          return null;
        }

        document.cookie = `Authentication=${response.data}; Max-Age=${
          60 * 60 * 24 * 2
        }`;

        location.href = 'http://localhost:3000/Home';
      } else if (
        location.href !== 'http://localhost:3000/' &&
        location.href !== 'http://localhost:3000/Register'
      ) {
        location.href = 'http://localhost:3000/';
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
