import { useEffect } from 'react';
import { checkLoggedInOrLogin } from '../containers/auth/LoginContainer';
import Footer from './common/Footer';
import Header from './common/Header';

const Layout = ({ children }) => {
  useEffect(() => {
    const checkLoggedIn = async () => {
      const response = await checkLoggedInOrLogin('', '');

      if (!(response ?? false)) {
        if (
          location.href !== 'http://localhost:3000/' &&
          location.href !== 'http://localhost:3000/Register'
        ) {
          alert('You Should Log In!');
          location.href = 'http://localhost:3000/';
        }
      } else {
        if (location.href === 'http://localhost:3000/') {
          location.href = 'http://localhost:3000/Home';
        }
      }
    };
    checkLoggedIn();
  }, [children]);
  return (
    <div className="flex jc-center ai-center flex-dir-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
