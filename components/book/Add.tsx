import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../auth/Login';

const AddBlock = styled.div``;

const Add = ({ addBook }) => {
  const [book_id, setBookId] = useState(0);
  const [title, setTitle] = useState('');
  const [author_lf, setAuthorLf] = useState('');
  const [author_fl, setAuthorFl] = useState('');
  const [ISBN, setISBN] = useState(0);
  const [rating, setRating] = useState(0.0);
  const [language_main, setLanguageMain] = useState('');
  const [language_secondary, setLanguageSecondary] = useState('');
  const [language_original, setLanguageOriginal] = useState('');
  const [cover, setCover] = useState('http://via.placeholder.com/200x300');
  const [entry_stamp, setEntryStamp] = useState(Date.now());

  return (
    <AddBlock className="main-content flex jc-center ai-center flex-dir-col">
      <div className="flex flex-dir-col" style={{ textAlign: 'left' }}>
        ID
        <input
          type="number"
          id="book_id"
          placeholder="ID"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('addBook_btn').click();
            else setBookId(+e.currentTarget.value);
          }}
        />
        Title
        <input
          type="text"
          id="title"
          placeholder="Title"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('addBook_btn').click();
            else setTitle(e.currentTarget.value);
          }}
        />
        Author_lf
        <input
          type="text"
          id="author_lf"
          placeholder="Author_lf"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('addBook_btn').click();
            else setAuthorLf(e.currentTarget.value);
          }}
        />
        Author_fl
        <input
          type="text"
          id="author_fl"
          placeholder="Author_fl"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('addBook_btn').click();
            else setAuthorFl(e.currentTarget.value);
          }}
        />
        ISBN
        <input
          type="number"
          id="ISBN"
          placeholder="ISBN"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('addBook_btn').click();
            else setISBN(+e.currentTarget.value);
          }}
        />
        Rating
        <input
          type="number"
          id="rating"
          placeholder="Rating"
          min={0}
          max={5}
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('addBook_btn').click();
            else setRating(+e.currentTarget.value);
          }}
        />
        Main Language
        <input
          type="text"
          id="language_main"
          placeholder="Main Language"
          minLength={3}
          maxLength={3}
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('addBook_btn').click();
            else setLanguageMain(e.currentTarget.value);
          }}
        />
        Secondary Language
        <input
          type="text"
          id="language_secondary"
          placeholder="Secondary Language"
          minLength={3}
          maxLength={3}
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('addBook_btn').click();
            else setLanguageSecondary(e.currentTarget.value);
          }}
        />
        Original Language
        <input
          type="text"
          id="language_original"
          placeholder="Original Language"
          minLength={3}
          maxLength={3}
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('addBook_btn').click();
            else setLanguageOriginal(e.currentTarget.value);
          }}
        />
        Cover
        <input
          type="text"
          id="cover"
          placeholder="Cover"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('addBook_btn').click();
            else
              e.currentTarget.value.match(
                /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?\S$/,
              ) && setCover(e.currentTarget.value);
          }}
        />
        Entry Stamp
        <input
          type="date"
          id="entry_stamp"
          placeholder="Entry Stamp"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('addBook_btn').click();
            else setEntryStamp(Date.parse(e.currentTarget.value));
          }}
        />
        <Button
          id="addBook_btn"
          onClick={() =>
            !!book_id &&
            !!title &&
            !!author_lf &&
            !!author_fl &&
            !!cover &&
            !!entry_stamp &&
            addBook(
              book_id,
              title,
              author_lf,
              author_fl,
              ISBN,
              rating,
              language_main,
              language_secondary,
              language_original,
              cover,
              entry_stamp,
            )
          }
        >
          Add Book!
        </Button>
      </div>
    </AddBlock>
  );
};

export default Add;
