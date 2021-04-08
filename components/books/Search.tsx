import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { BookList, BookItem, BookImage } from './Home';

const SearchBlock = styled.div`
  margin: auto;
  width: 50%;
`;

const InputWrapper = styled.div`
  margin: 1.5rem auto;
`;

const Input = styled.input`
  border: 10px solid darkblue;
  width: 100%;
  font-size: 16px;
`;

const Search = ({ getBooks }) => {
  const [data, setData] = useState(null);

  return (
    <SearchBlock className="main-content flex jc-center flex-dir-col">
      <InputWrapper className="flex jc-center ai-center">
        <Input
          type="text"
          placeholder="🔍 Search"
          id="input_title"
          onKeyUp={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              getBooks(
                document.getElementById('input_title')?.value ?? '',
              ).then(result => setData(result.data));
            }
          }}
        />
      </InputWrapper>
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
    </SearchBlock>
  );
};

export default Search;
