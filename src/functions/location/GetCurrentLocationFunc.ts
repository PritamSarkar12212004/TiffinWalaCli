import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

// Function to get current location and fetch address using Geoapify
const GetCurrentLocationFunc = async (setLocation: any, setPopup: any) => {
  Geolocation.getCurrentPosition(
    async pos => {
      try {
        // Extract coordinates
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        // Make API call to Geoapify for reverse geocoding
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=ea950b50b6714eb78ca7fba0003f8351`
        );

        // Check if valid location data is returned
        if (response?.data?.features?.length > 0) {
          const locationData = response.data.features[0].properties;
          setLocation(locationData); // Update state with location
          console.log('📍 Location Data:', locationData);
        } else {
          throw new Error('No location data found');
        }
      } catch (error) {
        console.error('Geocoding API error:', error);
        setPopup({
          status: true,
          message: 'Failed to fetch location details.',
          type: 'error',
          title: 'API Error',
          func: () => {
            setPopup({ status: false });
          },
        });
      }
    },
    error => {
      console.error('Geolocation error:', error);
      setPopup({
        status: true,
        message: 'Failed to get current location',
        type: 'error',
        title: 'Geolocation Error',
        func: () => {
          setPopup({ status: false });
        },
      });
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    }
  );
};

export default GetCurrentLocationFunc;
