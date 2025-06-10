import {useNavigation} from '@react-navigation/native';
import PageToken from '../../constants/tokens/PageToken';
import CloudanerysingleImgIpload from '../../functions/image/CloudanerysingleImgIpload';
import {
  setAuthToken,
  setLocation,
} from '../../functions/Token/PageTokenManagerFun';
import api from '../../utils/api/Axios';
import {userContext} from '../../utils/context/ContextProvider';
const useUpdateProfile = () => {
  const {pageLoader, setPageLoader} = userContext();
  const navigation = useNavigation();
  const updateProfile = async ({
    userName,
    phoneNumber,
    email,
    bio,
    location,
    image,
    profileInfo,
    setloadingg,
  }: any) => {
    console.log(location);
    setloadingg(true);
    const uploadedImg = image
      ? await CloudanerysingleImgIpload(image, 'image')
      : null;
    await api
      .post('/api/user/profile-update', {
        name: userName,
        phoneNumber,
        email: email,
        latitude: location.latitude,
        longitude: location.longitude,
        bio: bio,
        address: location.address,
        image: uploadedImg,
        id: profileInfo._id,
      })
      .then(async res => {
        await setAuthToken(PageToken.profile.mainDataToken, res.data.data);
        await setLocation(
          PageToken.profile.locationToken,
          res.data.data.User_Address,
        );
        await setPageLoader(!pageLoader);
        await setloadingg(false);
        navigation.navigate('DashboardScreen' as never);
      })
      .catch(err => {
        setloadingg(false);
        console.log(err);
      });
  };
  return {
    updateProfile,
  };
};

export default useUpdateProfile;
