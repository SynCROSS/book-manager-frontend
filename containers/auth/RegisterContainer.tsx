import axios from 'axios';
import Register from '../../components/auth/Register';

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
      if (response.status < 200 && response.status >= 300) {
        return null;
      }
      window.history.back();
    } catch (e) {
      console.error(e);
    }
  };

  return <Register register={register} />;
};

export default RegisterContainer;
