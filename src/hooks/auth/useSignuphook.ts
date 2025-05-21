import api from '../../utils/api/Axios';

const useSignuphook = () => {
  const signupFuncv = (
    setResponseotp: any,
    setOtpSent: any,
    setShowOtpInput: any,
    setIsLoading: any,
    phoneNumber: any,
    setPopup: any,
  ) => {
    api
      .post('/api/otp/signup', {
        number: phoneNumber,
      })
      .then(res => {
        if (res.data.data.otp) {
          setResponseotp(res.data.data.otp);
          setOtpSent(true);
          setShowOtpInput(true);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setPopup({
            status: true,
            message: res.data.message,
            type: 'error',
            title: 'Error',
            func: () => {
              setPopup({status: false});
            },
          });
        }
      })
      .catch(err => {
        setPopup({
          status: true,
          message: err?.response?.data?.message || 'Failed to send OTP',
          type: 'error',
          title: 'Error',
          func: () => {
            setPopup({status: false});
          },
        });
        setIsLoading(false);
      });
  };
  return {
    signupFuncv,
  };
};

export default useSignuphook;
