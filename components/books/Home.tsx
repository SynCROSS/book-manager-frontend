import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const HomeBlock = styled.div`
  margin: auto;
  width: 50%;
`;

export const BookList = styled.ul`
  flex-wrap: wrap;
  align-items: baseline;
`;

export const BookItem = styled.li`
  margin: 0.5rem 1rem;
  width: 180px;
`;

export const BookImage = styled.img`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '150px'};
  border-radius: 5px;
  background-color: #fcfcfc;
  box-shadow: 5px 5px 15px #d6d6d6, -5px -5px 15px #ffffff;
`;

const Home = ({ books }) => {
  const [data, setData] = useState(null);

  books.then(result => setData(result.data));

  return (
    <HomeBlock className="main-content">
      <BookList className="flex jc-center ai-center">
        {data?.map(book => (
          <BookItem key={book?.book_id}>
            <Link href={`/${book?.book_id}`}>
              <a>
                <BookImage
                  src={book?.cover}
                  alt={book?.title}
                  placeholder=""
                  loading="lazy"
                />
                <br />
                {book.title.length > 30
                  ? book.title.slice(0, 30) + ' . . . '
                  : book.title}
              </a>
            </Link>
          </BookItem>
        ))}
      </BookList>
    </HomeBlock>
  );
};

export default Home;
