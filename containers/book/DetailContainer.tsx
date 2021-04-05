import axios from 'axios';
import Detail from '../../components/book/Detail';

const getBookById = async (id: number) => {
  try {
    if (!isNaN(id)) return await axios.get('http://localhost:4000/books/' + id);
  } catch (e) {
    console.error(e);
  }
};

const checkOutBook = async (id: number, username: string) => {
  try {
    if (!isNaN(id) && typeof id === 'number') {
      return await axios.patch('http://localhost:4000/books/checkOut/' + id, {
        username,
      });
    }
  } catch (e) {
    console.error(e);
  }
};

const checkInBook = async (id: number, username: string) => {
  try {
    if (!isNaN(id) && typeof id === 'number')
      return await axios.patch('http://localhost:4000/books/checkIn/' + id, {
        username,
      });
  } catch (e) {
    console.error(e);
  }
};

const DetailContainer = ({ id }) => {
  const book = getBookById(+id);

  return <Detail book={book} checkOut={checkOutBook} checkIn={checkInBook} />;
};

export default DetailContainer;
5;
