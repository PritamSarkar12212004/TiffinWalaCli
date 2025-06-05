import api from '../../utils/api/Axios';

const useTokenGet = () => {
  const tokenSet = (token: any, userId: any) => {
    api.post('/api/notify/get-tokenId', {
      token: token,
      userId: userId,
    });
  };
  return {
    tokenSet,
  };
};

export default useTokenGet;
