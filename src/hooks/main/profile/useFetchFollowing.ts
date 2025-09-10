import api from '../../../utils/api/Axios';
import {userContext} from '../../../utils/context/ContextProvider';

const useFetchFollowing = () => {
  const {userInfo} = userContext();
  const fetchFollowing = async ({
    setdata,
    setLoading,
  }: {
    setdata: any;
    setLoading: any;
  }) => {
    api
      .post('/api/product/fetch-following-list', {
        payload: {
          id: userInfo.userinfo._id,
        },
      })
      .then(res => {
        setdata(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };
  return {fetchFollowing};
};

export default useFetchFollowing;
