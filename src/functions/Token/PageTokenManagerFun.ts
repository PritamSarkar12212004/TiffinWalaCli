import {storage} from '../../utils/storage/storage';

// splash page Data
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

// auth MainData
const setAuthToken = (key: string, value: any) => {
  storage.set(key, JSON.stringify(value));
  return true;
};
const getAuthToken = (key: string) => {
  const data = storage.getString(key);
  return data ? JSON.parse(data) : null;
};

const removeAuthToken = (key: string) => {
  storage.delete(key);
  return true;
};
// auth MainData
const setLocation = (key: string, value: any) => {
  storage.set(key, JSON.stringify(value));
  return true;
};
const getLocation = (key: string) => {
  const data = storage.getString(key);
  return data ? JSON.parse(data) : null;
};

const removeLocation = (key: string) => {
  storage.delete(key);
  return true;
};

export {
  // splash token func
  setSplashToken,
  getSplashToken,
  removeSplashToken,
  // auth token func
  setAuthToken,
  getAuthToken,
  removeAuthToken,
  // location token func
  setLocation,
  getLocation,
  removeLocation,
};
