import axios from 'axios';
import Register from '../../components/auth/Register';

export const isThereSameUser = async (username: string) => {
  if (username !== '')
    return await axios
      .get('http://localhost:4000/users?username=' + username)
      .then(result => result);
};

const RegisterContainer = () => {
  const register = async (
    username: string,
    nickname: string,
    password: string,
  ) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/users/register',
        {
          username,
          nickname,
          password,
        },
      );
      if (response.status < 200 || response.status >= 300) {
        return null;
      }
      window.history.back();
    } catch (e) {
      console.error(e);
    }
  };

  return <Register register={register} isThereSameUser={isThereSameUser} />;
};

export default RegisterContainer;
