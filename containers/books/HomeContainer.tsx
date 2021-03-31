import axios from 'axios';
import Home from '../../components/books/Home';

const getAllBooks = async () => {
  try {
    return await axios.get('http://localhost:4000/books');
  } catch (e) {
    console.error(e);
  }
};

const HomeContainer = () => {
  const books = getAllBooks();

  return <Home books={books} />;
};

export default HomeContainer;
