import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../auth/Login';
import { useEffect } from 'react';

const UpdateBlock = styled.div``;

const Update = ({ prevData, updateBook }) => {
  const [data, setData] = useState(null);
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

  prevData.then(result => setData(!!result?.data && result?.data));

  const formatDate = date => {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  };

  useEffect(() => {
    (() => data?.book_id && setBookId(+data?.book_id ?? 0))();
    (() => data?.title && setTitle(data?.title ?? ''))();
    (() => data?.author_lf && setAuthorLf(data?.author_lf ?? ''))();
    (() => data?.author_fl && setAuthorFl(data?.author_fl ?? ''))();
    (() => data?.ISBN && setISBN(+data?.ISBN ?? 0))();
    (() => data?.rating && setRating(+data?.rating ?? 0.0))();
    (() =>
      (data?.language_main ?? '-') && setLanguageMain(data?.language_main))();
    (() =>
      (data?.language_secondary ?? '-') &&
      setLanguageSecondary(data?.language_secondary))();
    (() =>
      (data?.language_original ?? '-') &&
      setLanguageOriginal(data?.language_original))();
    (() =>
      (data?.cover ?? 'http://via.placeholder.com/200x300') &&
      data?.cover.match(
        /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?\S$/,
      ) &&
      setCover(data?.cover))();
    (() =>
      data?.entry_stamp &&
      setEntryStamp(data?.entry_stamp ?? formatDate(Date.now())))();
  }, [data]);

  return (
    <UpdateBlock className="main-content flex jc-center ai-center flex-dir-col">
      <div className="flex flex-dir-col" style={{ textAlign: 'left' }}>
        ID
        <input
          type="number"
          id="book_id"
          placeholder="ID"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('editBook_btn').click();
          }}
          value={book_id ?? ''}
          onChange={e => {
            setBookId(+e.currentTarget.value);
            e.currentTarget.value = !data?.book_id ? book_id : data?.book_id;
          }}
        />
        Title
        <input
          type="text"
          id="title"
          placeholder="Title"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('editBook_btn').click();
          }}
          value={title ?? ''}
          onChange={e => {
            setTitle(e.currentTarget.value);
            e.currentTarget.value = title;
          }}
        />
        Author_lf
        <input
          type="text"
          id="author_lf"
          placeholder="Author_lf"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('editBook_btn').click();
          }}
          value={author_lf ?? ''}
          onChange={e => {
            setAuthorLf(e.currentTarget.value);
            e.currentTarget.value = author_lf;
          }}
        />
        Author_fl
        <input
          type="text"
          id="author_fl"
          placeholder="Author_fl"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('editBook_btn').click();
          }}
          value={author_fl ?? ''}
          onChange={e => {
            setAuthorFl(e.currentTarget.value);
            e.currentTarget.value = author_fl;
          }}
        />
        ISBN
        <input
          type="number"
          id="ISBN"
          placeholder="ISBN"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('editBook_btn').click();
          }}
          value={ISBN ?? 0}
          onChange={e => {
            setISBN(+e.currentTarget.value);
            e.currentTarget.value = +ISBN;
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
              document.getElementById('editBook_btn').click();
          }}
          value={rating ?? 0}
          onChange={e => {
            setRating(+e.currentTarget.value);
            e.currentTarget.value = +rating;
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
              document.getElementById('editBook_btn').click();
          }}
          value={language_main ?? ''}
          onChange={e => {
            setLanguageMain(e.currentTarget.value);
            e.currentTarget.value = language_main;
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
              document.getElementById('editBook_btn').click();
          }}
          value={language_secondary ?? ''}
          onChange={e => {
            setLanguageSecondary(e.currentTarget.value);
            e.currentTarget.value = language_secondary;
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
              document.getElementById('editBook_btn').click();
          }}
          value={language_original ?? ''}
          onChange={e => {
            setLanguageOriginal(e.currentTarget.value);
            e.currentTarget.value = language_original;
          }}
        />
        Cover
        <input
          type="text"
          id="cover"
          placeholder="Cover"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('editBook_btn').click();
          }}
          value={cover ?? ''}
          onChange={e => {
            e.currentTarget.value.match(
              /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?\S$/,
            ) && setCover(e.currentTarget.value);
            e.currentTarget.value = cover;
          }}
        />
        Entry Stamp
        <input
          type="date"
          id="entry_stamp"
          placeholder="Entry Stamp"
          onKeyUp={e => {
            if (e.key === 'Enter')
              document.getElementById('editBook_btn').click();
          }}
          value={formatDate(+entry_stamp) ?? formatDate(Date.now())}
          onChange={e => {
            setEntryStamp(Date.parse(e.currentTarget.value));
            e.currentTarget.value = +entry_stamp;
          }}
        />
        <Button
          id="editBook_btn"
          onClick={() =>
            !!book_id &&
            !!title &&
            !!author_lf &&
            !!author_fl &&
            !!cover &&
            !!entry_stamp &&
            updateBook(
              book_id,
              title,
              author_lf ?? '',
              author_fl ?? '',
              ISBN ?? 0,
              rating ?? 0,
              language_main ?? '',
              language_secondary ?? '',
              language_original ?? '',
              cover ?? '',
              +entry_stamp ?? Date.now(),
            )
          }
        >
          Edit Book!
        </Button>
      </div>
    </UpdateBlock>
  );
};

export default Update;
