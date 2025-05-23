import Token from '../../constant/tokens/TokenConstant';
import {getFullData} from '../../functions/token/DataTokenhandler';
import api from '../../utils/api/Axios';

const FetchMaindData = () => {
  const fullLogin = getFullData(Token.UserInfo);
  const fetchMainData = async ({setMainData, setLoading}: any) => {
    api
      .post('/api/product/fetch-mainData-product', {
        locationData: fullLogin.User_Address,
      })
      .then(res => {
        if (!res.data.products) {
          setMainData(false);
          setLoading(false);
        }
        setMainData(res.data.products);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };
  return {
    fetchMainData,
  };
};

export default FetchMaindData;
