import api from '../../../utils/api/Axios';

const useLikeProductApi = () => {
  const likeController = async (userId: string, setList: any) => {
    try {
      api
        .post('/api/product/fetch-all-like-product', {
          userId,
        })
        .then(res => {
          setList(res.data.data);
        })
        .catch(err => {
          console.log(err);
          setList({
            error: err?.response?.data?.message,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return {likeController};
};

export default useLikeProductApi;
