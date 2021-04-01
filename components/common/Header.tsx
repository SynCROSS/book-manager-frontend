import styled from 'styled-components';
import Link from 'next/link';
import { checkLoggedInOrLogin } from '../../containers/auth/LoginContainer';
import { useEffect, useState } from 'react';

const logout = () => {
  document.cookie = 'Authentication=; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  location.href = '/';
};

const HeaderBlock = styled.header`
  width: 100%;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  left: 0;
  justify-content: space-around;

  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 2px 2px #ccc;
`;

const RouterLink = styled.a`
  margin: 0 1rem;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  color: #fff;
  border-radius: 50px;
  padding: 5px 7px;

  font-weight: 900;
  background: linear-gradient(145deg, #942ef2, #7c27cb);
  box-shadow: 2px 2px 6px #7525c0, -2px -2px 6px #9f31ff;
`;

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    checkLoggedInOrLogin('', '').then(result => {
      setLoggedIn(!!result);
    });
  }, []);

  return (
    <HeaderBlock className="flex ai-center">
      <div className="flex jc-center ai-center">
        <Link href="/Home">
          <RouterLink>Home</RouterLink>
        </Link>
        <Link href="/Search">
          <RouterLink>Search</RouterLink>
        </Link>
      </div>
      {loggedIn ? (
        <LogoutButton onClick={logout}>Log Out</LogoutButton>
      ) : (
        <div>&nbsp;</div>
      )}
    </HeaderBlock>
  );
};

export default Header;
