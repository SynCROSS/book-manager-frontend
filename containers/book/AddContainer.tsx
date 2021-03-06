import axios from 'axios';
import Add from '../../components/book/Add';

export const checkPermission = async (username: string) => {
  if (!!username)
    return await axios.get(
      'http://localhost:4000/users/permission?username=' + username,
    );
};

const AddContainer = () => {
  const addBook = async (
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
  ) =>
    await axios.post('http://localhost:4000/books/add', {
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

  return <Add addBook={addBook} />;
};

export default AddContainer;
