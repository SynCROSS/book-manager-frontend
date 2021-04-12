import Update from '../../components/book/Update';
import { getBookById } from './DetailContainer';
import axios from 'axios';

const UpdateContainer = ({ id }) => {
  const updateBook = async (
    book_id: number,
    title: string = '',
    author_lf: string = '',
    author_fl: string = '',
    ISBN: number = 0,
    rating: number = 0.0,
    language_main: string = '',
    language_secondary: string = '',
    language_original: string = '',
    cover: string = '',
    entry_stamp: number = Date.now(),
  ) => {
    if (!isNaN(+id) && typeof +id === 'number')
      return axios.patch('http://localhost:4000/books/update/' + id, {
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
      });
  };

  return <Update prevData={getBookById(+id)} updateBook={updateBook} />;
};

export default UpdateContainer;
