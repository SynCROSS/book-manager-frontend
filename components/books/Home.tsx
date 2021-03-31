import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

const HomeBlock = styled.div`
  margin: auto;
  width: 50%;
`;

const BookList = styled.ul`
  flex-wrap: wrap;
  align-items: baseline;
`;

const BookItem = styled.li`
  margin: 0.5rem 1rem;
  width: 180px;
`;

const BookImage = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 5px;
  background-color: #fefefe;
  box-shadow: 10px 10px 30px #d8d8d8, -10px -10px 30px #ffffff;
`;

const Home = ({ books }) => {
  const [data, setData] = useState(null);

  books.then(result => setData(result.data));

  return (
    <HomeBlock>
      <BookList className="flex jc-center ai-center">
        {data?.map(book => (
          <BookItem key={book.book_id}>
            <Link href={`/${book.book_id}`}>
              <a>
                <BookImage
                  src={book.cover}
                  alt={book.title}
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
