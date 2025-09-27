import NotiFyToken from '../../../constants/tokens/NotiFyToken';
import PageToken from '../../../constants/tokens/PageToken';
import {setNotifyToken} from '../../../functions/Token/NotifyTokenManagerFun';
import {
  setAuthToken,
  setLocation,
} from '../../../functions/Token/PageTokenManagerFun';
import {useNotify} from '../../../layout/wraper/ComProviderWraper';
import api from '../../../utils/api/Axios';

const useLoginVarify = () => {
  const {caller} = useNotify();
  const varifyotpLogin = ({
    enterOtp,
    otp,
    phoneNumber,
    navigation,
    setLoading,
  }: any) => {
    setLoading(true);
    if (enterOtp == otp) {
      api
        .post('/api/user/profile-login', {
          phone: phoneNumber,
        })
        .then(async res => {
          setAuthToken(PageToken.profile.mainDataToken, res.data.data);
          setAuthToken(PageToken.profile.profileToken, true);
          setNotifyToken(NotiFyToken.Event, 'true');
          setNotifyToken(NotiFyToken.Fun, 'true');
          setNotifyToken(NotiFyToken.Promotion, 'true');
          setNotifyToken(NotiFyToken.Remainder, 'true');
          setLocation(
            PageToken.profile.locationToken,
            res.data.data.User_Address,
          );
          caller({
            message: 'OTP Verified',
            description: 'Your number has been successfully verified.',
            type: 'success',
          });

          navigation.replace('Mainnavigation' as any);
        })
        .catch(err => {
          caller({
            message: 'Invalid OTP',
            description: 'Please enter a valid OTP.',
            type: 'danger',
          });
          setLoading(false);
        });
    } else {
      caller({
        message: 'Invalid OTP',
        description: 'Please enter a valid OTP.',
        type: 'danger',
      });

      setLoading(false);
    }
  };
  return {
    varifyotpLogin,
  };
};
export default useLoginVarify;
