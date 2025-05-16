import api from '../../utils/api/Axios';

const useLoginHook = () => {
  const loginApi = async (
    phoneNumber: any,
    setIsLoading: any,
    setPopup: any,
    setOtpContainer: any,
    setOtpSent: any,
  ) => {
    await api
      .post('/api/otp/signin', {
        number: phoneNumber,
      })
      .then(res => {
        if (res.data.data.otp) {
          setOtpContainer(res.data.data.otp);
          setOtpSent(true);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      })
      .catch(err => {
        setIsLoading(false);
        setPopup({
          status: true,
          message: err.response.data.message,
          type: 'error',
          title: 'Error',
          func: () => {},
        });
      });
  };
  return {
    loginApi,
  };
};

export default useLoginHook;
