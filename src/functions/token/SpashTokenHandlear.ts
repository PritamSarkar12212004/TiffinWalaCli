import Token from '../../constant/tokens/TokenConstant';
import {storage} from '../../utils/storage/storage';

const setSpalshTokenFun = (token: string) => {
  storage.set(Token.Splash, JSON.stringify(token));
  console.log('SplashTToken Set', token);
};
const getSplashTokenFun = () => {
  const token = storage.getString(Token.Splash);
  return token;
};

const removeSplashTokenFun = () => {
  storage.delete(Token.Splash);
  console.log('SplashTToken Remove');
};

export {setSpalshTokenFun, getSplashTokenFun, removeSplashTokenFun};
