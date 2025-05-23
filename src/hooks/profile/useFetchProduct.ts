import Token from '../../constant/tokens/TokenConstant';
import {getFullData} from '../../functions/token/DataTokenhandler';
import api from '../../utils/api/Axios';

const useFetchProduct = () => {
  const fetchProduct = async ({
    setProduct,
    setTotalLikes,
    setTotalViews,
    setLoading,
  }: any) => {
    const fullLoginId = await getFullData(Token.UserInfo);
    await api
      .post('/api/product/fetch-product', {
        id: fullLoginId._id,
      })
      .then(res => {
        setProduct(res.data.data);
        setTotalLikes(res.data?.totalLikesCount || 0);
        setTotalViews(res.data?.totalViewsCount || 0);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };
  return {fetchProduct};
};

export default useFetchProduct;
