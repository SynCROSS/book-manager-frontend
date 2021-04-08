import { useState } from 'react';
import styled from 'styled-components';
import { BookImage } from '../books/Home';
import { checkLoggedInOrLogin } from '../../containers/auth/LoginContainer';
import { checkPermission } from '../../containers/book/AddContainer';

const DetailBlock = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
`;

const BookWrapper = styled.div`
  height: calc(100vh - 97px);
  background: rgba(51, 51, 51, 0.5)
    url('https://cdn.pixabay.com/photo/2017/07/02/09/03/books-2463779_960_720.jpg');
  background-blend-mode: multiply;
`;

const BookTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
`;

const UnderTitle = styled.div`
  padding: 1rem;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: 180px;
  justify-content: space-between;
`;

const CheckButton = styled.button`
  padding: 10px 12px;
  color: #fff;
  font-weight: 900;
  background-color: #ff1746;

  &:hover {
    background-color: #f73d62;
  }
`;

const AdminButtonWrapper = styled.div`
  width: 100%;
  justify-content: space-between;

  & > button {
    width: 100%;

    &:hover {
      background-color: #f4f4f4;
    }
  }
`;

const Detail = ({
  book,
  checkOut,
  checkIn,
  editBook,
  deleteBook,
  isBorrowed = false,
}) => {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState('');
  const [borrowed, setBorrowed] = useState(isBorrowed);
  const [permission, setPermission] = useState('normal');

  book.then(result => setData(result?.data));
  checkLoggedInOrLogin('', '').then(result => setUsername(result?.username));
  checkPermission(username).then(result => setPermission(result?.data));

  return (
    <DetailBlock className="main-content flex flex-dir-col">
      <BookWrapper className="flex jc-center ai-center">
        <div style={{ width: '50%' }}>
          <BookTitle>{data?.title}</BookTitle>
          <UnderTitle className="flex ai-center">
            <BookImage
              src={data?.cover}
              alt={data?.title}
              width="150px"
              height="230px"
              placeholder=""
              loading="lazy"
            />
            <div className="flex jc-center ai-center flex-dir-col">
              <div>{data?.author_lf ?? '-'}</div>
              <ButtonWrapper className="flex ai-center">
                {borrowed ? (
                  <CheckButton
                    onClick={() =>
                      checkIn(data?.book_id, username).then(result =>
                        setBorrowed(!!result?.data),
                      )
                    }
                  >
                    Check In!
                  </CheckButton>
                ) : (
                  <CheckButton
                    onClick={() =>
                      checkOut(data?.book_id, username).then(result =>
                        setBorrowed(!!result?.data),
                      )
                    }
                  >
                    Check Out!
                  </CheckButton>
                )}
                &nbsp;
                {`★${data?.rating}`}
              </ButtonWrapper>
              {permission === 'admin' && (
                <AdminButtonWrapper className="flex ai-center">
                  <button onClick={editBook}>Edit</button>
                  <button
                    onClick={() => {
                      if (
                        confirm('Are you sure you want to delete this Book?')
                      ) {
                        deleteBook();
                        location.href = '/Home';
                      }
                    }}
                  >
                    Delete
                  </button>
                </AdminButtonWrapper>
              )}
            </div>
          </UnderTitle>
        </div>
      </BookWrapper>
    </DetailBlock>
  );
};

export default Detail;
