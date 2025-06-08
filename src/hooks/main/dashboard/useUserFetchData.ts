import {useNavigation} from '@react-navigation/native';
import api from '../../../utils/api/Axios';

const useUserFetchData = () => {
  const navigation = useNavigation();
  const fetchUserData = (userId: string, setVender: any) => {
    try {
      api
        .post('/api/user/fetch-userData', {
          userId,
        })
        .then(res => {
          setVender(res.data.data);
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
