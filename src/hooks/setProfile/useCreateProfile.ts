import NotiFyToken from '../../constants/tokens/NotiFyToken';
import PageToken from '../../constants/tokens/PageToken';
import CloudanerysingleImgIpload from '../../functions/image/CloudanerysingleImgIpload';
import {setNotifyToken} from '../../functions/Token/NotifyTokenManagerFun';
import {
  setAuthToken,
  setLocation,
} from '../../functions/Token/PageTokenManagerFun';
import api from '../../utils/api/Axios';

const useCreateProfile = () => {
  const createProfile = async ({
    name,
    email,
    bio,
    location,
    image,
    phone,
    gender,
    setPopUp,
    setLoading,
    navigation,
  }: any) => {
    if (!name || !email || !bio || !location || !image || !phone || !gender) {
      setPopUp({
        isVisible: true,
        message: 'Please fill all the fields also check your profile image',
      });
    } else {
      setLoading(true);
      try {
        const formData = {
          username: name,
          email: email,
          gender: gender,
          bio: bio,
          location: location,
        };
        const uploadedImg = await CloudanerysingleImgIpload(image, 'image');
        await api
          .post('/api/user/profile-create', {
            profileData: formData,
            image: uploadedImg,
            phone: phone,
          })
          .then(async res => {
            await setAuthToken(PageToken.profile.mainDataToken, res.data.data);
            await setLocation(
              PageToken.profile.locationToken,
              res.data.data.User_Address,
            );
            await setNotifyToken(NotiFyToken.Event, 'true');
            await setNotifyToken(NotiFyToken.Fun, 'true');
            await setNotifyToken(NotiFyToken.Promotion, 'true');
            await setNotifyToken(NotiFyToken.Remainder, 'true');
            await setAuthToken(PageToken.profile.profileToken, true);
            setLoading(false);
            navigation.navigate('Mainnavigation' as any);
          })
          .catch(err => {
            console.log(err);
            setPopUp({
              isVisible: true,
              message: 'Failed to create profile. Please try again.',
            });
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
        setPopUp({
          isVisible: true,
          message: 'Failed to create profile. Please try again.',
        });
        setLoading(false);
      }
    }
  };
  return {
    createProfile,
  };
};

export default useCreateProfile;
