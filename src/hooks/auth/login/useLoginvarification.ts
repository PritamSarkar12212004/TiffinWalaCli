import api from '../../../utils/api/Axios';

const useLoginvarification = () => {
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
        console.log(res.data);
        if (res.data.data.data.otp) {
          navigation.navigate('Varifypage', {
            phoneNumber: phoneNumber,
            otp: res.data.data.data.otp,
            path: res.data.type == 'Login' ? 'Login' : 'Signup',
          });
          setLoading(false);
        } else {
          setPopUp({isVisible: true, message: res.data.message});
          setLoading(false);
        }
      })
      .catch(err => {
        setPopUp({isVisible: true, message: err.response.data.message});
        console.log(err.response);
        setLoading(false);
      });
  };
  return {
    otpvarify,
  };
};
export default useLoginvarification;
