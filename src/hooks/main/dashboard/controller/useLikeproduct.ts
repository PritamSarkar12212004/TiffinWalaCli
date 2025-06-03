import api from '../../../../utils/api/Axios';

const useLikeproduct = () => {
  const likeProductFetch = async (
    userId: string,
    productId: string,
    setIsFavorite: any,
  ) => {
    try {
      const res = await api.post('/api/product/like-fetch-product', {
        userId: userId._id,
        productId,
      });
      if (res.data.isLiked) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
      return res.data;
    } catch (error) {}
  };
  return {
    likeProductFetch,
  };
};

export default useLikeproduct;
