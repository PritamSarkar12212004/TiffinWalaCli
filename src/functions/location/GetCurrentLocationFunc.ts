import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const GetCurrentLocationFunc = async (setLocation: any, setPopup: any) => {
  Geolocation.getCurrentPosition(error => {
    setPopup({
      status: true,
      message: 'Failed to get current location ',
      type: 'error',
      title: 'Error',
      func: () => {
        setPopup({status: false});
      },
    });
  });
};
export default GetCurrentLocationFunc;
