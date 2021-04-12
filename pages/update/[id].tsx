import { useRouter } from 'next/router';
import UpdateContainer from '../../containers/book/UpdateContainer';

const Update = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!isNaN(+id) && typeof +id === 'number')
    return <UpdateContainer id={+id} />;
  return <div className="main-content"></div>;
};

export default Update;
