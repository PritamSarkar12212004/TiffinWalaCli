import api from '../../../../utils/api/Axios';

const useViewsProductApi = () => {
  const viewsProduct = async ({postId, adminId}: any) => {
    try {
      await api.post('/api/product/views-product', {
        postId,
        adminId,
      });
    } catch (error) {}
  };

  return {viewsProduct};
};

export default useViewsProductApi;
