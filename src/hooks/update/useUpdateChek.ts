import DeviceInfo from 'react-native-device-info';
import api from '../../utils/api/Axios';

const useUpdateChek = () => {
  const version = DeviceInfo.getVersion();

  const apiCall = async () => {
    try {
      const res = await api.post('/api/update/app', {
        payload: {
          version: '0', // ya hardcoded '0.2'
        },
      });
      // assume API returns { data: { updateRequired: true/false } }
      return res.data.data;
    } catch (error) {
      console.log('Update Check Error:', error);
      return false; // default safe value
    }
  };

  return {apiCall};
};

export default useUpdateChek;
