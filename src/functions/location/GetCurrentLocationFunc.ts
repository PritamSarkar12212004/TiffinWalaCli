import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const apikey = 'c9fdbfa15e2b4f3595ef8b3a59fffafd';

const GetCurrentLocationFunc = async (
  setLocation: Function,
  setPopup: Function,
  setLocationLoading: Function,
) => {
  setLocationLoading(true);

  try {
    Geolocation.getCurrentPosition(
      async pos => {
        const {latitude: lat, longitude: lng} = pos.coords;

        try {
          const res = await axios.get(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apikey}`,
          );

          const locationData = res?.data?.features?.[0]?.properties;

          if (locationData?.formatted) {
            setLocation({
              FormateAddress: locationData.formatted,
              lat,
              lng,
            });
          } else {
            throw new Error('Invalid response structure');
          }
        } catch (err) {
          console.error('API Error:', err);
          setPopup({
            status: true,
            title: 'API Error',
            message: 'Failed to fetch location details.',
            type: 'error',
            func: () => setPopup({status: false}),
          });
        } finally {
          setLocationLoading(false);
        }
      },
      geoError => {
        console.error('Geolocation Error:', geoError);
        setLocationLoading(false);
        setPopup({
          status: true,
          title: 'Geolocation Error',
          message: 'Failed to get current location.',
          type: 'error',
          func: () => setPopup({status: false}),
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  } catch (outerError) {
    console.error('Unexpected Error:', outerError);
    setLocationLoading(false);
    setPopup({
      status: true,
      title: 'Unexpected Error',
      message: 'An unexpected error occurred while fetching location.',
      type: 'error',
      func: () => setPopup({status: false}),
    });
  }
};

export default GetCurrentLocationFunc;
