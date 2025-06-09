import axios from 'axios';

const GetCurrentLocationByMark = async (
  setLoading: any,
  latitude: any,
  longitude: any,
  setPopUp: any,
  setGetNewLocation: any,
) => {
  setLoading(true);
  setGetNewLocation({
    latitude: latitude,
    longitude: longitude,
    address: null,
  });

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
      setGetNewLocation({
        latitude: latitude,
        longitude: longitude,
        address: response.data.display_name,
      });
      setLoading(false);
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
  }
};

export default GetCurrentLocationByMark;
