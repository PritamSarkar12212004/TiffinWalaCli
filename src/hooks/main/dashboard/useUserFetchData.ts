import {useNavigation} from '@react-navigation/native';
import api from '../../../utils/api/Axios';
const useUserFetchData = () => {
  const navigation = useNavigation();
  const fetchUserData = (
    userId: string,
    setVender: any,
    setFollower: any,
    id: any,
    callForView: any,
  ) => {
    try {
      api
        .post('/api/user/fetch-userData', {
          userId,
          id,
        })
        .then(async res => {
          callForView(res.data.data._id);
          await setVender(res.data.data);
          await setFollower(res.data.follower);
        })
        .catch(err => {
          if (err.response.data.message)
            setVender({
              message: err.response.data.message,
            });
          else
            setVender({
              message: 'Something went wrong',
            });
        });
    } catch (error) {
      navigation.goBack();
      console.log(error);
    }
  };
  return {
    fetchUserData,
  };
};

export default useUserFetchData;
