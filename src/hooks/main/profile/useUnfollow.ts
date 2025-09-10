import api from '../../../utils/api/Axios';

const useUnfollow = () => {
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
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };
  return {
    unfollow,
  };
};

export default useUnfollow;
