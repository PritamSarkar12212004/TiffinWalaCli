import api from '../../../utils/api/Axios';

const callNotiFy = async (token: any) => {
  await api.post('/api/notify/market', {
    title: 'open',
    body: 'open',
    token: token,
  });
};
export default callNotiFy;
