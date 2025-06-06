import NotiFyToken from '../../../constants/tokens/NotiFyToken';
import PageToken from '../../../constants/tokens/PageToken';
import {setNotifyToken} from '../../../functions/Token/NotifyTokenManagerFun';
import {
  setAuthToken,
  setLocation,
} from '../../../functions/Token/PageTokenManagerFun';
import api from '../../../utils/api/Axios';

const useLoginVarify = () => {
  const varifyotpLogin = ({
    enterOtp,
    otp,
    phoneNumber,
    navigation,
    setPopUp,
    setLoading,
  }: any) => {
    setLoading(true);
    if (enterOtp == otp) {
      api
        .post('/api/user/profile-login', {
          phone: phoneNumber,
        })
        .then(async res => {
          await setAuthToken(PageToken.profile.mainDataToken, res.data.data);
          await setAuthToken(PageToken.profile.profileToken, true);
          await setNotifyToken(NotiFyToken.Event, 'true');
          await setNotifyToken(NotiFyToken.Fun, 'true');
          await setNotifyToken(NotiFyToken.Promotion, 'true');
          await setNotifyToken(NotiFyToken.Remainder, 'true');
          await setLocation(
            PageToken.profile.locationToken,
            res.data.data.User_Address,
          );
          navigation.replace('Mainnavigation' as any);
        })
        .catch(err => {
          setPopUp({isVisible: true, message: err.response.data.message});
          setLoading(false);
        });
    } else {
      setPopUp({
        isVisible: true,
        message: 'Invalid OTP Please try again',
      });
      setLoading(false);
    }
  };
  return {
    varifyotpLogin,
  };
};
export default useLoginVarify;
