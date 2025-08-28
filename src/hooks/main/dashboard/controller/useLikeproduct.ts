import api from '../../../../utils/api/Axios';

const useLikeproduct = () => {
  const likeProductFetch = async (
    userId: string,
    productId: string,
    setIsFavorite: any,
  ) => {
    try {
      const res = await api.post('/api/product/like-fetch-product', {
        userId: typeof userId === 'string' ? userId : (userId as any)._id,
        productId,
      });
      if (res.data.isLiked) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return {
    likeProductFetch,
  };
};

export default useLikeproduct;
