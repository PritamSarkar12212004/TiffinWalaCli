import NotiFyToken from '../../constants/tokens/NotiFyToken';
import PageToken from '../../constants/tokens/PageToken';
import CloudanerysingleImgIpload from '../../functions/image/CloudanerysingleImgIpload';
import {setNotifyToken} from '../../functions/Token/NotifyTokenManagerFun';
import {
  setAuthToken,
  setLocation,
} from '../../functions/Token/PageTokenManagerFun';
import {useNotify} from '../../layout/wraper/ComProviderWraper';
import api from '../../utils/api/Axios';

const useCreateProfile = () => {
  const {caller} = useNotify();
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
      caller({
        message: 'fields',
        description: 'Please fill all the fields also check your profile image',
        type: 'danger',
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
            setAuthToken(PageToken.profile.mainDataToken, res.data.data);
            setLocation(
              PageToken.profile.locationToken,
              res.data.data.User_Address,
            );
            setNotifyToken(NotiFyToken.Event, 'true');
            setNotifyToken(NotiFyToken.Fun, 'true');
            setNotifyToken(NotiFyToken.Promotion, 'true');
            setNotifyToken(NotiFyToken.Remainder, 'true');
            setAuthToken(PageToken.profile.profileToken, true);
            setLoading(false);
            navigation.replace('Mainnavigation' as any);
          })
          .catch(() => {
            setPopUp({
              isVisible: true,
              message: 'Failed to create profile. Please try again.',
            });
            caller({
              message: 'Server Error',
              description: 'Failed to create profile. Please try again.',
              type: 'danger',
            });
            setLoading(false);
          });
      } catch (error) {
        caller({
          message: 'Server Error',
          description: 'Failed to create profile. Please try again.',
          type: 'danger',
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
