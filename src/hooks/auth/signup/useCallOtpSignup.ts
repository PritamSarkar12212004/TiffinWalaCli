import api from '../../../utils/api/Axios';
const useCallOtpSignup = () => {
  const callOtpSignup = async ({
    phoneNumber,
    setLoading,
    navigation,
    setPopUp,
  }: any) => {
    await api
      .post('/api/otp/signup', {
        number: phoneNumber,
      })
      .then(res => {
        if (res.data.data.otp) {
          setLoading(false);
          navigation.navigate('Varifypage', {
            phoneNumber: phoneNumber,
            otp: res.data.data.otp,
          });
        } else {
          setPopUp({
            isVisible: true,
            message: 'Something went wrong',
          });
          setLoading(false);
        }
      })
      .catch(err => {
        setPopUp({
          isVisible: true,
          message: err.response.data.message,
        });
        setLoading(false);
      });
  };
  return {
    callOtpSignup,
  };
};
export default useCallOtpSignup;
