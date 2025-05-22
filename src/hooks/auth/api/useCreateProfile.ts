import Token from '../../../constant/tokens/TokenConstant';
import compressImage from '../../../functions/image/ImageCompreser';
import {
  removeTemData,
  setFullData,
  setLocationData,
} from '../../../functions/token/DataTokenhandler';
import api from '../../../utils/api/Axios';
import uploadToCloudinary from '../../../utils/cloudinary/Cloudinary';

const useCreateProfile = () => {
  const createUserProfile = async ({
    userName,
    email,
    bio,
    selectedGender,
    location,
    uri,
    phoneNumber,
    setProfileCreateLodaing,
    setUserProfile,
    setUserTemLocation,
    navigation,
  }: any) => {
    try {
      console.log('call 2');
      const compressedImage = await compressImage(uri);
      const uploadedImage = await uploadToCloudinary(compressedImage, 'image');

      const fullAddress = {
        latitude: location.lat,
        longitude: location.lng,
        address: location.FormattedAddress, // Correct this key based on your data structure
      };
      console.log('call 3');

      const response = await api.post('/api/user/profile-create', {
        profileData: {
          username: userName,
          email,
          gender: selectedGender,
          bio,
          location: fullAddress,
        },
        image: uploadedImage,
        phone: phoneNumber,
      });

      const userData = response.data.data;

      setFullData(Token.UserInfo, userData);
      setUserProfile(userData);
      setLocationData(Token.Location, userData.User_Address);
      setUserTemLocation(userData.User_Address);
      removeTemData(Token.TemLogin);
      navigation.replace('Main' as any);
      setProfileCreateLodaing(false);
    } catch (error) {
      console.error('Error creating user profile:', error);
      setProfileCreateLodaing(false);
    }
  };

  return {createUserProfile};
};

export default useCreateProfile;
