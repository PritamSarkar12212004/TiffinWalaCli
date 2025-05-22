import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const apikey = 'c9fdbfa15e2b4f3595ef8b3a59fffafd';

const GetCurrentLocationFunc = async (
  setLocation: Function,
  setPopup: Function,
  setLocationLoading: Function,
) => {
  setLocationLoading(true);

  // Wrap Geolocation.getCurrentPosition in a promise to handle timeout manually
  const getPosition = () => {
    return new Promise<Geolocation.GeoPosition>((resolve, reject) => {
      let timeoutId = setTimeout(() => {
        reject(new Error('Geolocation request timed out'));
      }, 15000); // 15 seconds timeout

      Geolocation.getCurrentPosition(
        position => {
          clearTimeout(timeoutId);
          resolve(position);
        },
        error => {
          clearTimeout(timeoutId);
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 20000, // Increase native timeout a bit (20s)
          maximumAge: 10000,
        },
      );
    });
  };

  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    try {
      const res = await axios.get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apikey}`
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
    } catch (apiError) {
      console.error('API Error:', apiError);
      setPopup({
        status: true,
        title: 'API Error',
        message: 'Failed to fetch location details.',
        type: 'error',
        func: () => setPopup({ status: false }),
      });
    }
  } catch (geoError) {
    console.error('Geolocation Error:', geoError);
    setPopup({
      status: true,
      title: 'Geolocation Error',
      message: geoError.message || 'Failed to get current location.',
      type: 'error',
      func: () => setPopup({ status: false }),
    });
  } finally {
    setLocationLoading(false);
  }
};

export default GetCurrentLocationFunc;
