import styled from 'styled-components';

const HomeBlock = styled.div`
  margin: auto;
`;

const Home = ({ books = [] }) => {
  return (
    <HomeBlock>
      <ul>
        {books?.map(book => (
          <li>{book}</li>
        ))}
      </ul>
    </HomeBlock>
  );
};

export default Home;
