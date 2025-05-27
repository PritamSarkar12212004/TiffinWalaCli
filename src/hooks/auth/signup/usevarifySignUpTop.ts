const usevarifySignUpTop = () => {
  const varifyotp = ({
    enterOtp,
    otp,
    phoneNumber,
    navigation,
    setTempPhomne,
    setPopUp,
  }: any) => {
    if (enterOtp == otp) {
      setTempPhomne(phoneNumber);
      navigation.replace('ProfileSetupnav', {
        Screen: 'ProfileLocation',
      } as never);
    } else {
      console.log('error');
      setPopUp({
        isVisible: true,
        message: 'Please enter valid otp',
      });
    }
  };
  return {
    varifyotp,
  };
};

export default usevarifySignUpTop;
