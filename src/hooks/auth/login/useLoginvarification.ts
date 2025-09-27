import {useNotify} from '../../../layout/wraper/ComProviderWraper';
import api from '../../../utils/api/Axios';

const useLoginvarification = () => {
  const {caller} = useNotify();
  const otpvarify = async ({
    phoneNumber,
    setPopUp,
    setLoading,
    navigation,
  }: any) => {
    await api
      .post('/api/otp/signin', {
        number: phoneNumber,
      })
      .then(res => {
        if (res.data.data.data.otp) {
          navigation.navigate('Varifypage', {
            phoneNumber: phoneNumber,
            otp: res.data.data.data.otp,
            path: res.data.type == 'Login' ? 'Login' : 'Signup',
          });
          caller({
            message: 'OTP Sent',
            description: 'A new OTP has been sent to your number.',
            type: 'success',
          });
          setLoading(false);
        } else {
          caller({
            message: 'Send Failed',
            description: 'Could not send OTP. Try again.',
            type: 'danger',
          });
          setLoading(false);
        }
      })
      .catch(err => {
        caller({
          message: 'Send Failed',
          description: 'Could not send OTP. Try again.',
          type: 'danger',
        });
        setLoading(false);
      });
  };
  return {
    otpvarify,
  };
};
export default useLoginvarification;
