import api from '../../../../utils/api/Axios';

const useViewsProductApi = () => {
  const viewsProduct = async (postId: string) => {
    try {
      await api.post('/api/product/views-product', {
        postId,
      });
    } catch (error) {}
  };

  return {viewsProduct};
};

export default useViewsProductApi;
