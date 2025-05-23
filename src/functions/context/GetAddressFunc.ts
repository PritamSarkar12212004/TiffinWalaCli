import Token from '../../constant/tokens/TokenConstant';
import {getFullData} from '../token/DataTokenhandler';

const AddressGeterFunc = ({setUserProfile, setUserTemLocation}: any) => {
  const fullLogin = getFullData(Token.UserInfo);
  if (fullLogin) {
    setUserProfile(fullLogin);
    if (fullLogin.User_Address) {
      setUserTemLocation(fullLogin.User_Address);
    }
  }
};
export default AddressGeterFunc;
