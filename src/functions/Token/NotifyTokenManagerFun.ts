import {storage} from '../../utils/storage/storage';

// notify page Data
const setNotifyToken = (key: string, value: any) => {
  storage.set(key, JSON.stringify(value));
  return true;
};
const getNotifyToken = async (key: string) => {
  const status = await storage.getString(key);
  return status;
};
export {setNotifyToken, getNotifyToken};
