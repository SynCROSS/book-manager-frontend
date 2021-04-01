import axios from 'axios';
import Search from '../../components/books/Search';

const getBooksByTitle = async (title: string = '') => {
  try {
    return await axios.get('http://localhost:4000/books/search?title=' + title);
  } catch (e) {
    console.error(e);
  }
};

const SearchContainer = () => {
  return <Search getBooks={getBooksByTitle} />;
};

export default SearchContainer;
