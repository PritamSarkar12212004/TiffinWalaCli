import {Alert} from 'react-native';
import useCreateProfile from '../../hooks/auth/api/useCreateProfile';
const CreateProfile = ({
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
  const {createUserProfile} = useCreateProfile();

  // Validate UserName
  if (!userName.trim()) {
    Alert.alert('Validation Error', 'User Name is required.');
    return;
  }
  if (userName.trim().length < 3) {
    Alert.alert(
      'Validation Error',
      'User Name must be at least 3 characters long.',
    );
    return;
  }

  // Validate Email if provided
  if (email.trim() && email.length < 5) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }
  }

  // Validate Bio length (optional)
  if (bio.length < 0) {
    Alert.alert('Validation Error', 'Bio cannot exceed 150 characters.');
    return;
  }

  // Validate Gender
  if (!selectedGender) {
    Alert.alert('Validation Error', 'Please select your gender.');
    return;
  }

  // Validate Location
  if (!location || !location.FormateAddress) {
    Alert.alert('Validation Error', 'Please get your current location.');
    return;
  }

  // Validate Image URI
  if (!uri) {
    Alert.alert('Validation Error', 'Please select a profile image.');
    return;
  }
  setProfileCreateLodaing(true);
  createUserProfile({
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
    navigation
  });
};
export default CreateProfile;
