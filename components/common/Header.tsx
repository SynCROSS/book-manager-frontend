import styled from 'styled-components';
import Link from 'next/link';

const HeaderBlock = styled.header`
  width: 100%;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  left: 0;

  background-color: rgba(255, 255, 255, 0.9);
  /* background: transparent; */
  box-shadow: 0 0 2px 2px #ccc;
`;

const RouterLink = styled.a`
  margin: 0 1rem;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderBlock className="flex jc-center ai-center">
      <Link href="http://localhost:3000/Home">
        <RouterLink>Home</RouterLink>
      </Link>
      <Link href="http://localhost:3000/Search">
        <RouterLink>Search</RouterLink>
      </Link>
    </HeaderBlock>
  );
};

export default Header;
