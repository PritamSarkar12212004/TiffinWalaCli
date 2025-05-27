import {storage} from '../../utils/storage/storage';

// Tem Data
const setSplashToken = (key: string, value: any) => {
  storage.set(key, JSON.stringify(value));
  return true;
};
const getSplashToken = (key: string) => {
  const data = storage.getString(key);
  return data ? JSON.parse(data) : null;
};
const removeSplashToken = (key: string) => {
  storage.delete(key);
  return true;
};

export {
  // splash token func
  setSplashToken,
  getSplashToken,
  removeSplashToken,
};
