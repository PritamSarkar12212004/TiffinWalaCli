import PageToken from '../../../constants/tokens/PageToken';
import {getAuthToken, getLocation} from '../../Token/PageTokenManagerFun';

const GetUserInfo = async () => {
  const location = await getLocation(PageToken.profile.locationToken);
  const userinfo = getAuthToken(PageToken.profile.mainDataToken);
  return {
    location: location,
    userinfo: userinfo,
  };
};
export default GetUserInfo;
