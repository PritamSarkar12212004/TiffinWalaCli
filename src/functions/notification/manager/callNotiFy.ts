import api from '../../../utils/api/Axios';

const callNotiFy = async (token: any) => {
  await api.post('/api/notify/market', {
    title: 'test',
    body: 'test',
    token: token,
  });
};
export default callNotiFy;
