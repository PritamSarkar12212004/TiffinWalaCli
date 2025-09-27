import {useNotify} from '../../../layout/wraper/ComProviderWraper';
import api from '../../../utils/api/Axios';

const useUnfollow = () => {
  const {caller} = useNotify();
  const unfollow = ({venderId, userId}: any) => {
    console.log(venderId, 'vender id');
    console.log(userId, 'userId id');
    api
      .post('/api/product/fetch-unfollow', {
        payload: {
          venderId: venderId,
          userId: userId,
        },
      })
      .then(res => {
        caller({
          message: 'Removed',
          description: 'Item has been removed from favorites.',
          type: 'success',
        });
      })
      .catch(err => console.log(err));
  };
  return {
    unfollow,
  };
};

export default useUnfollow;
