import api from '../../../../utils/api/Axios';

const useControllLike = () => {
  const likeController = async (
    userId: string,
    productId: string,
    isFavorite: boolean,
    setIsFavorite: (isFavorite: boolean) => void,
  ) => {
    try {
      api
        .post('/api/product/like-product', {
          userId,
          productId,
        })
        .then(res => {
          if (res.data.message === 'liked') {
            setIsFavorite(true);
          } else {
            setIsFavorite(false);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return {likeController};
};

export default useControllLike;
