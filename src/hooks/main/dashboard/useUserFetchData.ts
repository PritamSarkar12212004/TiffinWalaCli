import {useNavigation} from '@react-navigation/native';
import api from '../../../utils/api/Axios';
import {userContext} from '../../../utils/context/ContextProvider';

const useUserFetchData = () => {
  const {userInfo} = userContext();
  console.log(userInfo.userinfo._id);
  const navigation = useNavigation();
  const fetchUserData = (userId: string, setVender: any, setFollower: any) => {
    try {
      api
        .post('/api/user/fetch-userData', {
          userId,
        })
        .then(async res => {
          await setVender(res.data.data);
          const followers = res.data.data.User_Followers || [];

          const currentUserId = userInfo.userinfo._id?.toString().trim();

          const isFollowing = followers.some(
            (f: any) => f.FollowersId?.toString().trim() === currentUserId,
          );
          setFollower(isFollowing);
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
