import { useRouter } from 'next/router';
import DetailContainer from '../containers/book/DetailContainer';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!isNaN(+id) && typeof +id === 'number')
    return <DetailContainer id={+id} />;
};

export default Detail;
