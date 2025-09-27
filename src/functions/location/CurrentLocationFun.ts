import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import {useNotify} from '../../layout/wraper/ComProviderWraper';

const CurrentLocationFun = ({setPopUp, setLoading, setLocation}: any) => {
  const {caller} = useNotify();
  const getCurrentLocation = async () => {
    setLoading(true);
    try {
      const position = await new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        });
      });

      const {latitude, longitude} = (position as any).coords;

      const address = await reverseGeocode(
        latitude,
        longitude,
        setPopUp,
        setLoading,
      );
      const locationData = {
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        address: address || 'Address not found',
      };
      setLocation(locationData);
      setLoading(false);
      return locationData;
    } catch (error) {
      caller({
        message: 'Location Error',
        description: 'Failed to fetch your location. Please try again.',
        type: 'danger',
      });
      setLoading(false);
      throw error;
    }
  };

  return {
    getCurrentLocation,
  };
};

export default CurrentLocationFun;

const reverseGeocode = async (
  latitude: number,
  longitude: number,
  setPopUp: any,
  setLoading: any,
) => {
  try {
    const response = await axios.get(
      'https://nominatim.openstreetmap.org/reverse',
      {
        params: {
          lat: latitude,
          lon: longitude,
          format: 'json',
        },
        headers: {
          'User-Agent': 'MyAwesomeApp/1.0 (contact@myemail.com)',
        },
      },
    );

    if (response.data && response.data.display_name) {
      return response.data.display_name;
    } else {
      setPopUp({
        isVisible: true,
        message: 'Failed to get address. Please try again.',
      });
      setLoading(false);
    }
  } catch (error) {
    setPopUp({
      isVisible: true,
      message: 'Failed to get address. Please try again.',
    });
    setLoading(false);
  }
};
