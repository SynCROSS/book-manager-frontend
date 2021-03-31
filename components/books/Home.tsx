import { useState } from 'react';
import styled from 'styled-components';

const HomeBlock = styled.div`
  margin: auto;
`;

const Home = ({ books }) => {
  const [data, setData] = useState(null);

  books.then(result => setData(result.data));

  console.log(data);

  return (
    <HomeBlock>
      <ul>
        {data?.map(book => (
          <li key={book.book_id}>
            <img width="100" src={book.cover} alt={book.title} />
            <br />
            {book.title}
          </li>
        ))}
      </ul>
    </HomeBlock>
  );
};

export default Home;
