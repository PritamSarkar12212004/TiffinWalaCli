import {Alert} from 'react-native';
import {userContext} from '../../context/ContextApi';
import {useNavigation} from '@react-navigation/native';
import compressImage from '../../functions/image/ImageCompreser';
import uploadToCloudinary from '../../utils/cloudinary/Cloudinary';
import api from '../../utils/api/Axios';
import {
  removeFullData,
  removeLocationData,
  setFullData,
  setLocationData,
} from '../../functions/token/DataTokenhandler';
import Token from '../../constant/tokens/TokenConstant';

const useUpdateProfile = () => {
  const {UserFprofile, setUserProfile} = userContext();
  const navigation = useNavigation();
  const updateProfile = async (
    profile: any,
    setIsLoading: any,
    setUploadingProduct: any,
    setUploadDoneModal: any,
  ) => {
    try {
      const {profileImage} = profile;
      const compressImageFunction = await compressImage(profileImage);
      if (!compressImageFunction) {
        Alert.alert('Error', 'Please upload a valid image');
        setIsLoading(false);
        return;
      } else {
        const cloudinaryResponse = await uploadToCloudinary(
          compressImageFunction,
          'image',
        );
        const response = await api.post('/api/user/profile-update', {
          profileData: profile,
          image: cloudinaryResponse,
          id: UserFprofile?._id,
        });

        if (response.data.success) {
          // First update the storage and context
          await removeFullData(Token.UserInfo);
          await setFullData(Token.UserInfo, response.data.data);
          setUserProfile(response.data.data);
          removeLocationData(Token.Location);
          setLocationData(Token.Location, response.data.data.User_Address);

          setUploadDoneModal(true);
          setUploadingProduct(false);
          setIsLoading(false);
          navigation.goBack();
        } else {
          setUploadingProduct(false);
          Alert.alert('Error', 'Failed to update profile');
          setIsLoading(false);
        }
      }
    } catch (error) {
      setUploadingProduct(false);
      console.log(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };
  return {updateProfile};
};

export default useUpdateProfile;
