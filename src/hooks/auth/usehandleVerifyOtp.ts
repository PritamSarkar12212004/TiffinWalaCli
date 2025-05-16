import {useNavigation} from '@react-navigation/native';
import Token from '../../constant/tokens/TokenConstant';
import {userContext} from '../../context/ContextApi';
import {
  setFullData,
  setLocationData,
} from '../../functions/token/DataTokenhandler';
import api from '../../utils/api/Axios';

const usehandleVerifyOtp = () => {
  const navigation = useNavigation();
  const {setUserProfile} = userContext();
  const varifyOtp = async (
    otp: any,
    otpContainer: any,
    phoneNumber: any,
    setIsLoading: any,
    setPopup: any,
  ) => {
    if (otpContainer == otp) {
      api
        .post('/api/user/profile-login', {
          phone: phoneNumber,
        })
        .then(res => {
          if (res.data.success) {
            setFullData(Token.UserInfo, res.data.data);
            setUserProfile(res.data.data);
            setLocationData(Token.Location, res.data.data.User_Address);
            navigation.replace('Main' as any);
          }
        })
        .catch(err => {
          if (err.status === 400) {
            setPopup({
              status: true,
              message: err.response.data.message,
              type: 'error',
              title: 'Error',
              func: () => {
                setIsLoading(false);
              },
            });
            setIsLoading(false);
          } else if (err.status === 401) {
            setPopup({
              status: true,
              message: 'Invalid OTP',
              type: 'error',
              title: 'Error',
              func: () => {
                setIsLoading(false);
              },
            });
            setIsLoading(false);
          } else if (err.status === 500) {
            setPopup({
              status: true,
              message: 'Server Error',
              type: 'error',
              title: 'Error',
              func: () => {
                setIsLoading(false);
              },
            });
          }
          setIsLoading(false);
        });
    } else {
      setPopup({
        status: true,
        message: 'Please enter a valid OTP',
        type: 'error',
        title: 'Error',
        func: () => {
          setIsLoading(false);
        },
      });
      setIsLoading(false);
    }
  };
  return {
    varifyOtp,
  };
};

export default usehandleVerifyOtp;
